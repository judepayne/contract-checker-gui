["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/pool.js"],"~:js","goog.provide(\"goog.structs.Pool\");\ngoog.require(\"goog.Disposable\");\ngoog.require(\"goog.structs.Queue\");\ngoog.require(\"goog.structs.Set\");\n/**\n * @constructor\n * @extends {goog.Disposable}\n * @param {number=} opt_minCount\n * @param {number=} opt_maxCount\n * @template T\n */\ngoog.structs.Pool = function(opt_minCount, opt_maxCount) {\n  goog.Disposable.call(this);\n  /** @private @type {number} */ this.minCount_ = opt_minCount || 0;\n  /** @private @type {number} */ this.maxCount_ = opt_maxCount || 10;\n  if (this.minCount_ > this.maxCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  /** @private @type {goog.structs.Queue<T>} */ this.freeQueue_ = new goog.structs.Queue;\n  /** @private @type {goog.structs.Set<T>} */ this.inUseSet_ = new goog.structs.Set;\n  /** @protected @type {number} */ this.delay = 0;\n  /** @protected @type {?number} */ this.lastAccess = null;\n  this.adjustForMinMax();\n};\ngoog.inherits(goog.structs.Pool, goog.Disposable);\n/** @private @type {string} */ goog.structs.Pool.ERROR_MIN_MAX_ = \"[goog.structs.Pool] Min can not be greater than max\";\n/** @private @type {string} */ goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_ = \"[goog.structs.Pool] Objects not released\";\n/**\n * @param {number} min\n */\ngoog.structs.Pool.prototype.setMinimumCount = function(min) {\n  if (min > this.maxCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.minCount_ = min;\n  this.adjustForMinMax();\n};\n/**\n * @param {number} max\n */\ngoog.structs.Pool.prototype.setMaximumCount = function(max) {\n  if (max < this.minCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.maxCount_ = max;\n  this.adjustForMinMax();\n};\n/**\n * @param {number} delay\n */\ngoog.structs.Pool.prototype.setDelay = function(delay) {\n  this.delay = delay;\n};\n/**\n * @return {(T|undefined)}\n */\ngoog.structs.Pool.prototype.getObject = function() {\n  var time = goog.now();\n  if (this.lastAccess != null && time - this.lastAccess < this.delay) {\n    return undefined;\n  }\n  var obj = this.removeFreeObject_();\n  if (obj) {\n    this.lastAccess = time;\n    this.inUseSet_.add(obj);\n  }\n  return obj;\n};\n/**\n * @param {T} obj\n * @return {boolean}\n */\ngoog.structs.Pool.prototype.releaseObject = function(obj) {\n  if (this.inUseSet_.remove(obj)) {\n    this.addFreeObject(obj);\n    return true;\n  }\n  return false;\n};\n/**\n * @private\n * @return {(T|undefined)}\n */\ngoog.structs.Pool.prototype.removeFreeObject_ = function() {\n  var obj;\n  while (this.getFreeCount() > 0) {\n    obj = this.freeQueue_.dequeue();\n    if (!this.objectCanBeReused(obj)) {\n      this.adjustForMinMax();\n    } else {\n      break;\n    }\n  }\n  if (!obj && this.getCount() < this.maxCount_) {\n    obj = this.createObject();\n  }\n  return obj;\n};\n/**\n * @param {T} obj\n */\ngoog.structs.Pool.prototype.addFreeObject = function(obj) {\n  this.inUseSet_.remove(obj);\n  if (this.objectCanBeReused(obj) && this.getCount() < this.maxCount_) {\n    this.freeQueue_.enqueue(obj);\n  } else {\n    this.disposeObject(obj);\n  }\n};\ngoog.structs.Pool.prototype.adjustForMinMax = function() {\n  var freeQueue = this.freeQueue_;\n  while (this.getCount() < this.minCount_) {\n    freeQueue.enqueue(this.createObject());\n  }\n  while (this.getCount() > this.maxCount_ && this.getFreeCount() > 0) {\n    this.disposeObject(freeQueue.dequeue());\n  }\n};\n/**\n * @return {T}\n */\ngoog.structs.Pool.prototype.createObject = function() {\n  return {};\n};\n/**\n * @param {T} obj\n */\ngoog.structs.Pool.prototype.disposeObject = function(obj) {\n  if (typeof obj.dispose == \"function\") {\n    obj.dispose();\n  } else {\n    for (var i in obj) {\n      obj[i] = null;\n    }\n  }\n};\n/**\n * @param {T} obj\n * @return {boolean}\n */\ngoog.structs.Pool.prototype.objectCanBeReused = function(obj) {\n  if (typeof obj.canBeReused == \"function\") {\n    return obj.canBeReused();\n  }\n  return true;\n};\n/**\n * @param {T} obj\n * @return {boolean}\n */\ngoog.structs.Pool.prototype.contains = function(obj) {\n  return this.freeQueue_.contains(obj) || this.inUseSet_.contains(obj);\n};\n/**\n * @return {number}\n */\ngoog.structs.Pool.prototype.getCount = function() {\n  return this.freeQueue_.getCount() + this.inUseSet_.getCount();\n};\n/**\n * @return {number}\n */\ngoog.structs.Pool.prototype.getInUseCount = function() {\n  return this.inUseSet_.getCount();\n};\n/**\n * @return {number}\n */\ngoog.structs.Pool.prototype.getFreeCount = function() {\n  return this.freeQueue_.getCount();\n};\n/**\n * @return {boolean}\n */\ngoog.structs.Pool.prototype.isEmpty = function() {\n  return this.freeQueue_.isEmpty() && this.inUseSet_.isEmpty();\n};\n/** @protected @override */ goog.structs.Pool.prototype.disposeInternal = function() {\n  goog.structs.Pool.superClass_.disposeInternal.call(this);\n  if (this.getInUseCount() > 0) {\n    throw new Error(goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_);\n  }\n  delete this.inUseSet_;\n  var freeQueue = this.freeQueue_;\n  while (!freeQueue.isEmpty()) {\n    this.disposeObject(freeQueue.dequeue());\n  }\n  delete this.freeQueue_;\n};\n","~:source","// Copyright 2006 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview Datastructure: Pool.\n *\n *\n * A generic class for handling pools of objects.\n * When an object is released, it is attempted to be reused.\n */\n\n\ngoog.provide('goog.structs.Pool');\n\ngoog.require('goog.Disposable');\ngoog.require('goog.structs.Queue');\ngoog.require('goog.structs.Set');\n\n\n\n/**\n * A generic pool class. If min is greater than max, an error is thrown.\n * @param {number=} opt_minCount Min. number of objects (Default: 0).\n * @param {number=} opt_maxCount Max. number of objects (Default: 10).\n * @constructor\n * @extends {goog.Disposable}\n * @template T\n */\ngoog.structs.Pool = function(opt_minCount, opt_maxCount) {\n  goog.Disposable.call(this);\n\n  /**\n   * Minimum number of objects allowed\n   * @private {number}\n   */\n  this.minCount_ = opt_minCount || 0;\n\n  /**\n   * Maximum number of objects allowed\n   * @private {number}\n   */\n  this.maxCount_ = opt_maxCount || 10;\n\n  // Make sure that the max and min constraints are valid.\n  if (this.minCount_ > this.maxCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n\n  /**\n   * Set used to store objects that are currently in the pool and available\n   * to be used.\n   * @private {goog.structs.Queue<T>}\n   */\n  this.freeQueue_ = new goog.structs.Queue();\n\n  /**\n   * Set used to store objects that are currently in the pool and in use.\n   * @private {goog.structs.Set<T>}\n   */\n  this.inUseSet_ = new goog.structs.Set();\n\n  /**\n   * The minimum delay between objects being made available, in milliseconds. If\n   * this is 0, no minimum delay is enforced.\n   * @protected {number}\n   */\n  this.delay = 0;\n\n  /**\n   * The time of the last object being made available, in milliseconds since the\n   * epoch (i.e., the result of Date#toTime). If this is null, no access has\n   * occurred yet.\n   * @protected {number?}\n   */\n  this.lastAccess = null;\n\n  // Make sure that the minCount constraint is satisfied.\n  this.adjustForMinMax();\n};\ngoog.inherits(goog.structs.Pool, goog.Disposable);\n\n\n/**\n * Error to throw when the max/min constraint is attempted to be invalidated.\n * I.e., when it is attempted for maxCount to be less than minCount.\n * @type {string}\n * @private\n */\ngoog.structs.Pool.ERROR_MIN_MAX_ =\n    '[goog.structs.Pool] Min can not be greater than max';\n\n\n/**\n * Error to throw when the Pool is attempted to be disposed and it is asked to\n * make sure that there are no objects that are in use (i.e., haven't been\n * released).\n * @type {string}\n * @private\n */\ngoog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_ =\n    '[goog.structs.Pool] Objects not released';\n\n\n/**\n * Sets the minimum count of the pool.\n * If min is greater than the max count of the pool, an error is thrown.\n * @param {number} min The minimum count of the pool.\n */\ngoog.structs.Pool.prototype.setMinimumCount = function(min) {\n  // Check count constraints.\n  if (min > this.maxCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.minCount_ = min;\n\n  // Adjust the objects in the pool as needed.\n  this.adjustForMinMax();\n};\n\n\n/**\n * Sets the maximum count of the pool.\n * If max is less than the min count of the pool, an error is thrown.\n * @param {number} max The maximum count of the pool.\n */\ngoog.structs.Pool.prototype.setMaximumCount = function(max) {\n  // Check count constraints.\n  if (max < this.minCount_) {\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\n  }\n  this.maxCount_ = max;\n\n  // Adjust the objects in the pool as needed.\n  this.adjustForMinMax();\n};\n\n\n/**\n * Sets the minimum delay between objects being returned by getObject, in\n * milliseconds. This defaults to zero, meaning that no minimum delay is\n * enforced and objects may be used as soon as they're available.\n * @param {number} delay The minimum delay, in milliseconds.\n */\ngoog.structs.Pool.prototype.setDelay = function(delay) {\n  this.delay = delay;\n};\n\n\n/**\n * @return {T|undefined} A new object from the pool if there is one available,\n *     otherwise undefined.\n */\ngoog.structs.Pool.prototype.getObject = function() {\n  var time = goog.now();\n  if (this.lastAccess != null && time - this.lastAccess < this.delay) {\n    return undefined;\n  }\n\n  var obj = this.removeFreeObject_();\n  if (obj) {\n    this.lastAccess = time;\n    this.inUseSet_.add(obj);\n  }\n\n  return obj;\n};\n\n\n/**\n * Returns an object to the pool of available objects so that it can be reused.\n * @param {T} obj The object to return to the pool of free objects.\n * @return {boolean} Whether the object was found in the Pool's set of in-use\n *     objects (in other words, whether any action was taken).\n */\ngoog.structs.Pool.prototype.releaseObject = function(obj) {\n  if (this.inUseSet_.remove(obj)) {\n    this.addFreeObject(obj);\n    return true;\n  }\n  return false;\n};\n\n\n/**\n * Removes a free object from the collection of objects that are free so that it\n * can be used.\n *\n * NOTE: This method does not mark the returned object as in use.\n *\n * @return {T|undefined} The object removed from the free collection, if there\n *     is one available. Otherwise, undefined.\n * @private\n */\ngoog.structs.Pool.prototype.removeFreeObject_ = function() {\n  var obj;\n  while (this.getFreeCount() > 0) {\n    obj = this.freeQueue_.dequeue();\n\n    if (!this.objectCanBeReused(obj)) {\n      this.adjustForMinMax();\n    } else {\n      break;\n    }\n  }\n\n  if (!obj && this.getCount() < this.maxCount_) {\n    obj = this.createObject();\n  }\n\n  return obj;\n};\n\n\n/**\n * Adds an object to the collection of objects that are free. If the object can\n * not be added, then it is disposed.\n *\n * @param {T} obj The object to add to collection of free objects.\n */\ngoog.structs.Pool.prototype.addFreeObject = function(obj) {\n  this.inUseSet_.remove(obj);\n  if (this.objectCanBeReused(obj) && this.getCount() < this.maxCount_) {\n    this.freeQueue_.enqueue(obj);\n  } else {\n    this.disposeObject(obj);\n  }\n};\n\n\n/**\n * Adjusts the objects held in the pool to be within the min/max constraints.\n *\n * NOTE: It is possible that the number of objects in the pool will still be\n * greater than the maximum count of objects allowed. This will be the case\n * if no more free objects can be disposed of to get below the minimum count\n * (i.e., all objects are in use).\n */\ngoog.structs.Pool.prototype.adjustForMinMax = function() {\n  var freeQueue = this.freeQueue_;\n\n  // Make sure the at least the minimum number of objects are created.\n  while (this.getCount() < this.minCount_) {\n    freeQueue.enqueue(this.createObject());\n  }\n\n  // Make sure no more than the maximum number of objects are created.\n  while (this.getCount() > this.maxCount_ && this.getFreeCount() > 0) {\n    this.disposeObject(freeQueue.dequeue());\n  }\n};\n\n\n/**\n * Should be overridden by sub-classes to return an instance of the object type\n * that is expected in the pool.\n * @return {T} The created object.\n */\ngoog.structs.Pool.prototype.createObject = function() {\n  return {};\n};\n\n\n/**\n * Should be overridden to dispose of an object. Default implementation is to\n * remove all its members, which should render it useless. Calls the object's\n * `dispose()` method, if available.\n * @param {T} obj The object to dispose.\n */\ngoog.structs.Pool.prototype.disposeObject = function(obj) {\n  if (typeof obj.dispose == 'function') {\n    obj.dispose();\n  } else {\n    for (var i in obj) {\n      obj[i] = null;\n    }\n  }\n};\n\n\n/**\n * Should be overridden to determine whether an object has become unusable and\n * should not be returned by getObject(). Calls the object's\n * `canBeReused()`  method, if available.\n * @param {T} obj The object to test.\n * @return {boolean} Whether the object can be reused.\n */\ngoog.structs.Pool.prototype.objectCanBeReused = function(obj) {\n  if (typeof obj.canBeReused == 'function') {\n    return obj.canBeReused();\n  }\n  return true;\n};\n\n\n/**\n * Returns true if the given object is in the pool.\n * @param {T} obj The object to check the pool for.\n * @return {boolean} Whether the pool contains the object.\n */\ngoog.structs.Pool.prototype.contains = function(obj) {\n  return this.freeQueue_.contains(obj) || this.inUseSet_.contains(obj);\n};\n\n\n/**\n * Returns the number of objects currently in the pool.\n * @return {number} Number of objects currently in the pool.\n */\ngoog.structs.Pool.prototype.getCount = function() {\n  return this.freeQueue_.getCount() + this.inUseSet_.getCount();\n};\n\n\n/**\n * Returns the number of objects currently in use in the pool.\n * @return {number} Number of objects currently in use in the pool.\n */\ngoog.structs.Pool.prototype.getInUseCount = function() {\n  return this.inUseSet_.getCount();\n};\n\n\n/**\n * Returns the number of objects currently free in the pool.\n * @return {number} Number of objects currently free in the pool.\n */\ngoog.structs.Pool.prototype.getFreeCount = function() {\n  return this.freeQueue_.getCount();\n};\n\n\n/**\n * Determines if the pool contains no objects.\n * @return {boolean} Whether the pool contains no objects.\n */\ngoog.structs.Pool.prototype.isEmpty = function() {\n  return this.freeQueue_.isEmpty() && this.inUseSet_.isEmpty();\n};\n\n\n/**\n * Disposes of the pool and all objects currently held in the pool.\n * @override\n * @protected\n */\ngoog.structs.Pool.prototype.disposeInternal = function() {\n  goog.structs.Pool.superClass_.disposeInternal.call(this);\n  if (this.getInUseCount() > 0) {\n    throw new Error(goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_);\n  }\n  delete this.inUseSet_;\n\n  // Call disposeObject on each object held by the pool.\n  var freeQueue = this.freeQueue_;\n  while (!freeQueue.isEmpty()) {\n    this.disposeObject(freeQueue.dequeue());\n  }\n  delete this.freeQueue_;\n};\n","~:compiled-at",1579687522668,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.pool.js\",\n\"lineCount\":190,\n\"mappings\":\"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\",\n\"sources\":[\"goog/structs/pool.js\"],\n\"sourcesContent\":[\"// Copyright 2006 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview Datastructure: Pool.\\n *\\n *\\n * A generic class for handling pools of objects.\\n * When an object is released, it is attempted to be reused.\\n */\\n\\n\\ngoog.provide('goog.structs.Pool');\\n\\ngoog.require('goog.Disposable');\\ngoog.require('goog.structs.Queue');\\ngoog.require('goog.structs.Set');\\n\\n\\n\\n/**\\n * A generic pool class. If min is greater than max, an error is thrown.\\n * @param {number=} opt_minCount Min. number of objects (Default: 0).\\n * @param {number=} opt_maxCount Max. number of objects (Default: 10).\\n * @constructor\\n * @extends {goog.Disposable}\\n * @template T\\n */\\ngoog.structs.Pool = function(opt_minCount, opt_maxCount) {\\n  goog.Disposable.call(this);\\n\\n  /**\\n   * Minimum number of objects allowed\\n   * @private {number}\\n   */\\n  this.minCount_ = opt_minCount || 0;\\n\\n  /**\\n   * Maximum number of objects allowed\\n   * @private {number}\\n   */\\n  this.maxCount_ = opt_maxCount || 10;\\n\\n  // Make sure that the max and min constraints are valid.\\n  if (this.minCount_ > this.maxCount_) {\\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\\n  }\\n\\n  /**\\n   * Set used to store objects that are currently in the pool and available\\n   * to be used.\\n   * @private {goog.structs.Queue<T>}\\n   */\\n  this.freeQueue_ = new goog.structs.Queue();\\n\\n  /**\\n   * Set used to store objects that are currently in the pool and in use.\\n   * @private {goog.structs.Set<T>}\\n   */\\n  this.inUseSet_ = new goog.structs.Set();\\n\\n  /**\\n   * The minimum delay between objects being made available, in milliseconds. If\\n   * this is 0, no minimum delay is enforced.\\n   * @protected {number}\\n   */\\n  this.delay = 0;\\n\\n  /**\\n   * The time of the last object being made available, in milliseconds since the\\n   * epoch (i.e., the result of Date#toTime). If this is null, no access has\\n   * occurred yet.\\n   * @protected {number?}\\n   */\\n  this.lastAccess = null;\\n\\n  // Make sure that the minCount constraint is satisfied.\\n  this.adjustForMinMax();\\n};\\ngoog.inherits(goog.structs.Pool, goog.Disposable);\\n\\n\\n/**\\n * Error to throw when the max/min constraint is attempted to be invalidated.\\n * I.e., when it is attempted for maxCount to be less than minCount.\\n * @type {string}\\n * @private\\n */\\ngoog.structs.Pool.ERROR_MIN_MAX_ =\\n    '[goog.structs.Pool] Min can not be greater than max';\\n\\n\\n/**\\n * Error to throw when the Pool is attempted to be disposed and it is asked to\\n * make sure that there are no objects that are in use (i.e., haven't been\\n * released).\\n * @type {string}\\n * @private\\n */\\ngoog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_ =\\n    '[goog.structs.Pool] Objects not released';\\n\\n\\n/**\\n * Sets the minimum count of the pool.\\n * If min is greater than the max count of the pool, an error is thrown.\\n * @param {number} min The minimum count of the pool.\\n */\\ngoog.structs.Pool.prototype.setMinimumCount = function(min) {\\n  // Check count constraints.\\n  if (min > this.maxCount_) {\\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\\n  }\\n  this.minCount_ = min;\\n\\n  // Adjust the objects in the pool as needed.\\n  this.adjustForMinMax();\\n};\\n\\n\\n/**\\n * Sets the maximum count of the pool.\\n * If max is less than the min count of the pool, an error is thrown.\\n * @param {number} max The maximum count of the pool.\\n */\\ngoog.structs.Pool.prototype.setMaximumCount = function(max) {\\n  // Check count constraints.\\n  if (max < this.minCount_) {\\n    throw new Error(goog.structs.Pool.ERROR_MIN_MAX_);\\n  }\\n  this.maxCount_ = max;\\n\\n  // Adjust the objects in the pool as needed.\\n  this.adjustForMinMax();\\n};\\n\\n\\n/**\\n * Sets the minimum delay between objects being returned by getObject, in\\n * milliseconds. This defaults to zero, meaning that no minimum delay is\\n * enforced and objects may be used as soon as they're available.\\n * @param {number} delay The minimum delay, in milliseconds.\\n */\\ngoog.structs.Pool.prototype.setDelay = function(delay) {\\n  this.delay = delay;\\n};\\n\\n\\n/**\\n * @return {T|undefined} A new object from the pool if there is one available,\\n *     otherwise undefined.\\n */\\ngoog.structs.Pool.prototype.getObject = function() {\\n  var time = goog.now();\\n  if (this.lastAccess != null && time - this.lastAccess < this.delay) {\\n    return undefined;\\n  }\\n\\n  var obj = this.removeFreeObject_();\\n  if (obj) {\\n    this.lastAccess = time;\\n    this.inUseSet_.add(obj);\\n  }\\n\\n  return obj;\\n};\\n\\n\\n/**\\n * Returns an object to the pool of available objects so that it can be reused.\\n * @param {T} obj The object to return to the pool of free objects.\\n * @return {boolean} Whether the object was found in the Pool's set of in-use\\n *     objects (in other words, whether any action was taken).\\n */\\ngoog.structs.Pool.prototype.releaseObject = function(obj) {\\n  if (this.inUseSet_.remove(obj)) {\\n    this.addFreeObject(obj);\\n    return true;\\n  }\\n  return false;\\n};\\n\\n\\n/**\\n * Removes a free object from the collection of objects that are free so that it\\n * can be used.\\n *\\n * NOTE: This method does not mark the returned object as in use.\\n *\\n * @return {T|undefined} The object removed from the free collection, if there\\n *     is one available. Otherwise, undefined.\\n * @private\\n */\\ngoog.structs.Pool.prototype.removeFreeObject_ = function() {\\n  var obj;\\n  while (this.getFreeCount() > 0) {\\n    obj = this.freeQueue_.dequeue();\\n\\n    if (!this.objectCanBeReused(obj)) {\\n      this.adjustForMinMax();\\n    } else {\\n      break;\\n    }\\n  }\\n\\n  if (!obj && this.getCount() < this.maxCount_) {\\n    obj = this.createObject();\\n  }\\n\\n  return obj;\\n};\\n\\n\\n/**\\n * Adds an object to the collection of objects that are free. If the object can\\n * not be added, then it is disposed.\\n *\\n * @param {T} obj The object to add to collection of free objects.\\n */\\ngoog.structs.Pool.prototype.addFreeObject = function(obj) {\\n  this.inUseSet_.remove(obj);\\n  if (this.objectCanBeReused(obj) && this.getCount() < this.maxCount_) {\\n    this.freeQueue_.enqueue(obj);\\n  } else {\\n    this.disposeObject(obj);\\n  }\\n};\\n\\n\\n/**\\n * Adjusts the objects held in the pool to be within the min/max constraints.\\n *\\n * NOTE: It is possible that the number of objects in the pool will still be\\n * greater than the maximum count of objects allowed. This will be the case\\n * if no more free objects can be disposed of to get below the minimum count\\n * (i.e., all objects are in use).\\n */\\ngoog.structs.Pool.prototype.adjustForMinMax = function() {\\n  var freeQueue = this.freeQueue_;\\n\\n  // Make sure the at least the minimum number of objects are created.\\n  while (this.getCount() < this.minCount_) {\\n    freeQueue.enqueue(this.createObject());\\n  }\\n\\n  // Make sure no more than the maximum number of objects are created.\\n  while (this.getCount() > this.maxCount_ && this.getFreeCount() > 0) {\\n    this.disposeObject(freeQueue.dequeue());\\n  }\\n};\\n\\n\\n/**\\n * Should be overridden by sub-classes to return an instance of the object type\\n * that is expected in the pool.\\n * @return {T} The created object.\\n */\\ngoog.structs.Pool.prototype.createObject = function() {\\n  return {};\\n};\\n\\n\\n/**\\n * Should be overridden to dispose of an object. Default implementation is to\\n * remove all its members, which should render it useless. Calls the object's\\n * `dispose()` method, if available.\\n * @param {T} obj The object to dispose.\\n */\\ngoog.structs.Pool.prototype.disposeObject = function(obj) {\\n  if (typeof obj.dispose == 'function') {\\n    obj.dispose();\\n  } else {\\n    for (var i in obj) {\\n      obj[i] = null;\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Should be overridden to determine whether an object has become unusable and\\n * should not be returned by getObject(). Calls the object's\\n * `canBeReused()`  method, if available.\\n * @param {T} obj The object to test.\\n * @return {boolean} Whether the object can be reused.\\n */\\ngoog.structs.Pool.prototype.objectCanBeReused = function(obj) {\\n  if (typeof obj.canBeReused == 'function') {\\n    return obj.canBeReused();\\n  }\\n  return true;\\n};\\n\\n\\n/**\\n * Returns true if the given object is in the pool.\\n * @param {T} obj The object to check the pool for.\\n * @return {boolean} Whether the pool contains the object.\\n */\\ngoog.structs.Pool.prototype.contains = function(obj) {\\n  return this.freeQueue_.contains(obj) || this.inUseSet_.contains(obj);\\n};\\n\\n\\n/**\\n * Returns the number of objects currently in the pool.\\n * @return {number} Number of objects currently in the pool.\\n */\\ngoog.structs.Pool.prototype.getCount = function() {\\n  return this.freeQueue_.getCount() + this.inUseSet_.getCount();\\n};\\n\\n\\n/**\\n * Returns the number of objects currently in use in the pool.\\n * @return {number} Number of objects currently in use in the pool.\\n */\\ngoog.structs.Pool.prototype.getInUseCount = function() {\\n  return this.inUseSet_.getCount();\\n};\\n\\n\\n/**\\n * Returns the number of objects currently free in the pool.\\n * @return {number} Number of objects currently free in the pool.\\n */\\ngoog.structs.Pool.prototype.getFreeCount = function() {\\n  return this.freeQueue_.getCount();\\n};\\n\\n\\n/**\\n * Determines if the pool contains no objects.\\n * @return {boolean} Whether the pool contains no objects.\\n */\\ngoog.structs.Pool.prototype.isEmpty = function() {\\n  return this.freeQueue_.isEmpty() && this.inUseSet_.isEmpty();\\n};\\n\\n\\n/**\\n * Disposes of the pool and all objects currently held in the pool.\\n * @override\\n * @protected\\n */\\ngoog.structs.Pool.prototype.disposeInternal = function() {\\n  goog.structs.Pool.superClass_.disposeInternal.call(this);\\n  if (this.getInUseCount() > 0) {\\n    throw new Error(goog.structs.Pool.ERROR_DISPOSE_UNRELEASED_OBJS_);\\n  }\\n  delete this.inUseSet_;\\n\\n  // Call disposeObject on each object held by the pool.\\n  var freeQueue = this.freeQueue_;\\n  while (!freeQueue.isEmpty()) {\\n    this.disposeObject(freeQueue.dequeue());\\n  }\\n  delete this.freeQueue_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"Pool\",\"goog.structs.Pool\",\"opt_minCount\",\"opt_maxCount\",\"Disposable\",\"call\",\"minCount_\",\"maxCount_\",\"Error\",\"ERROR_MIN_MAX_\",\"freeQueue_\",\"Queue\",\"inUseSet_\",\"Set\",\"delay\",\"lastAccess\",\"adjustForMinMax\",\"inherits\",\"ERROR_DISPOSE_UNRELEASED_OBJS_\",\"prototype\",\"setMinimumCount\",\"goog.structs.Pool.prototype.setMinimumCount\",\"min\",\"setMaximumCount\",\"goog.structs.Pool.prototype.setMaximumCount\",\"max\",\"setDelay\",\"goog.structs.Pool.prototype.setDelay\",\"getObject\",\"goog.structs.Pool.prototype.getObject\",\"time\",\"now\",\"undefined\",\"obj\",\"removeFreeObject_\",\"add\",\"releaseObject\",\"goog.structs.Pool.prototype.releaseObject\",\"remove\",\"addFreeObject\",\"goog.structs.Pool.prototype.removeFreeObject_\",\"getFreeCount\",\"dequeue\",\"objectCanBeReused\",\"getCount\",\"createObject\",\"goog.structs.Pool.prototype.addFreeObject\",\"enqueue\",\"disposeObject\",\"goog.structs.Pool.prototype.adjustForMinMax\",\"freeQueue\",\"goog.structs.Pool.prototype.createObject\",\"goog.structs.Pool.prototype.disposeObject\",\"dispose\",\"i\",\"goog.structs.Pool.prototype.objectCanBeReused\",\"canBeReused\",\"contains\",\"goog.structs.Pool.prototype.contains\",\"goog.structs.Pool.prototype.getCount\",\"getInUseCount\",\"goog.structs.Pool.prototype.getInUseCount\",\"goog.structs.Pool.prototype.getFreeCount\",\"isEmpty\",\"goog.structs.Pool.prototype.isEmpty\",\"disposeInternal\",\"goog.structs.Pool.prototype.disposeInternal\",\"superClass_\"]\n}\n"]
shadow-cljs release app

aws s3 sync public s3://draw-graph --acl "public-read"

aws s3 sync public s3://draw-graph-us --acl "public-read"

aws s3 sync public s3://draw-graph.com --acl "public-read"

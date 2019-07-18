1. test commands to check whether app is working fine with mongo on remote server : 

 docker run --rm -t --name node-app -e DB_URI="mongodb://{ip address}:27017/db-prod" -v $(pwd)/app -p 80:3007 {image name}

2. command to start mongo to bind to specific ip address : 
mongod --bind_ip (ip address) 


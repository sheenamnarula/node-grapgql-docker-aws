1. test commands to check whether app is working fine with mongo on remote server : 

 docker run --rm -t --name banking-api -e DB_URI="mongodb://192.168.9.43:27017/db-prod" -v $(pwd)/app -p 80:3007 {image name}

2. command to start mongo to bind to specific ip address : 
mongod --bind_ip 192.168.9.43 


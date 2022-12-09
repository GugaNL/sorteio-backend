## Instructions

* ```docker-compose build``` for build dockerfile
* ```docker-compose up -d``` for run docker services
* ```cat mysql-dump/sorteiosdump.sql | docker exec -i <docker_ID> /usr/bin/mysql -u <database_user> --password=<database_password> megasorteios``` for import mysql dump database

## Utils commands

### Access mysql prompt ```docker exec -it <container_ID> mysql -p```
### Remove all containers ```docker rm  -f $(docker ps -a -q)```
### Remove all images ```docker image prune -a```
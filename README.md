## Instructions

* ```docker-compose build``` for build dockerfile
* ```docker-compose up -d``` for run docker services
* ```docker cp  ./mysql-dump/sorteiosdump.sql <container_ID>:/``` copy the SQL dump file into the container
* ```docker exec -it <container_ID> mysql -p``` access mysql prompt
* ```use megasorteios```
* ```source sorteiosdump.sql``` import the sql file to mysql

## Utils commands
* Remove all containers ```docker rm  -f $(docker ps -a -q)```
* Remove all images ```docker image prune -a```
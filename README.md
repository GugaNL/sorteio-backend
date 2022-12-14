## Instructions

* ```docker-compose build``` for build dockerfile
* ```docker-compose up -d``` for run docker services
* ```docker cp  ./mysql-dump/sorteiosdump.sql <container_ID>:/``` copy the SQL dump file into the container
* ```docker exec -it <container_ID> mysql -p``` access mysql prompt
* ```use megasorteios```
* ```source sorteiosdump.sql``` import the sql file to mysql

## Utils commands
* Stop and remove all containers ```docker-compose down```
* Remove all containers by force ```docker rm  -f $(docker ps -a -q)```
* Remove all images ```docker image prune -a```
* build and up container ```docker-compose up --build```
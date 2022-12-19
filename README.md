## Instructions

* ```docker-compose build``` for build dockerfile
* ```docker-compose up -d``` for run docker services
* ```docker cp  ./mysql-dump/sorteiosdump.sql <container_ID>:/``` copy the SQL dump file into the container
* ```docker exec -it b28aba58fb73 mysql -p``` access mysql prompt
* ```use megasorteios```
* ```source sorteiosdump.sql``` import the sql file to mysql

## Utils commands
* Stop and remove all containers ```docker-compose down```
* Remove all containers by force ```docker rm  -f $(docker ps -a -q)```
* Remove all images ```docker image prune -a```
* build and up container ```docker-compose up --build```

## Configure to AWS (Linux Ubutun)
* Create ec2
* ````sudo apt-get update```
* ```sudo apt-get install -y docker.io``` install docker
* ```sudo usermod -aG docker ${USER}```
* ```sudo curl -SL https://github.com/docker/compose/releases/download/v2.14.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose``` install docker compose
* ```sudo chmod +x /usr/local/bin/docker-compose```
* ```vim docker-compose.yml``` to create a docker compose file, then paste the contain of docker-compose-aws.yml in this project folder > type ESC, :wq
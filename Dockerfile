#Use node light version for linux
FROM node:14-alpine

#Create the folder where will be use for all processes bellow
WORKDIR /usr/src/app

#install mysql
#RUN apk add --no-cache mysql-client

#Copy package.json and package-lock.json if exist to the workdir created previously
COPY package*.json ./
RUN npm i

#Copy the rest of project folder to the workdir created previously
COPY . .

## If use docker compose then the bellow commands are not will run automatically

#Use port 3000
#EXPOSE 3000

#Execute commands for initialize the project
#CMD ["node", "index.js"]
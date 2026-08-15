# node-todo-cicd

## Install Node.js and npm

sudo apt update
sudo apt install nodejs npm

## Install Dependencies

npm install

## Run Application

node app.js

## Open Browser:
http://localhost:3000

## Docker
#!/bin/bash

cd /var/lib/jenkins/workspace/todo-app

echo "Building Docker image..."

docker build -t todo-app:$BUILD_NUMBER .

echo "Starting new container..."

docker run -d \
  --name todo-app-$BUILD_NUMBER \
  -p 3001:3000 \
  todo-app:$BUILD_NUMBER

echo "Build completed!"

docker ps

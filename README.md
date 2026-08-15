# node-todo-cicd for manually run

## Install Node.js and npm

sudo apt update
sudo apt install nodejs npm

## Install Dependencies

npm install

## Run Application

node app.js

## Open Browser:
http://localhost:3000

# Docker command for jenkins ci/cd 

#!/bin/bash

cd /var/lib/jenkins/workspace/todo-app

echo "Building Docker image..."
docker build -t todo-app:$BUILD_NUMBER .

echo "Stopping old container..."
docker stop todo-app 2>/dev/null || true
docker rm todo-app 2>/dev/null || true

echo "Starting new container..."
docker run -d \
  --name todo-app \
  -p 3000:3000 \
  todo-app:$BUILD_NUMBER

echo "Build completed!"

docker ps

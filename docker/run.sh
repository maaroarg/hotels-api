#!/usr/bin/env bash

apt-get install mongodb-clients -y

mongoimport -h db -d hotels -c hotels --drop --file hotels-dump.json

rm -rf node_modules/

npm install

npm run start

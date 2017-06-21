#!/usr/bin/env bash

apt-get install mongodb-clients -y

mongoimport -h db -d hotels -c hotels hotels-dump.json

rm -rf node_modules/

npm install

npm run start

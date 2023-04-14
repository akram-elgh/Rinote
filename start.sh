#!/bin/bash
mongod &
sleep 5
nodemon server/server.js &
sleep 5
serve -s client/build

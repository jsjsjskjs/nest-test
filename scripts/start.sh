#!/bin/bash
cd /home/ubuntu/shinstarr-app-server-deploy
authbind --deep pm2 start dist/src/main.js
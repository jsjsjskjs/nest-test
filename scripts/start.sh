#!/bin/bash
cd /home/ubuntu/shinstarr-app-server
authbind --deep pm2 start dist/src/main.js
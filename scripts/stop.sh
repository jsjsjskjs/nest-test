#!/bin/bash
cd /home/ubuntu/shinstarr-app-server
pm2 stop dist/src/main.js 2> /dev/null || true
pm2 delete dist/src/main.js 2> /dev/null || true
#!/bin/bash
cd /home/ubuntu/shinstarr-app-server

export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export NODE_ENV=$(aws ssm get-parameters --region ap-northeast-2 --names NODE_ENV --query Parameters[0].Value | sed 's/"//g')
export MSG=$(aws ssm get-parameters --region ap-northeast-2 --names MSG --query Parameters[0].Value | sed 's/"//g')
export PORT=$(aws ssm get-parameters --region ap-northeast-2 --names PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export DATABASE_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export SWAGGER_USER=$(aws ssm get-parameters --region ap-northeast-2 --names SWAGGER_USER --query Parameters[0].Value | sed 's/"//g')
export SWAGGER_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names SWAGGER_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DEPLOY_ACCESS_KEY_ID=$(aws ssm get-parameters --region ap-northeast-2 --names DEPLOY_ACCESS_KEY_ID --query Parameters[0].Value | sed 's/"//g')
export DEPLOY_SERECT_ACCESS_KEY=$(aws ssm get-parameters --region ap-northeast-2 --names DEPLOY_SERECT_ACCESS_KEY --query Parameters[0].Value | sed 's/"//g')
export DEPLOY_REGION=$(aws ssm get-parameters --region ap-northeast-2 --names DEPLOY_REGION --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start dist/src/main.js
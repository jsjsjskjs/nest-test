"use strict";
const aws_sdk_1 = require("aws-sdk");
const EmailConfig = process.env.NODE_ENV === 'production'
    ? {
        transport: {
            SES: new aws_sdk_1.SES({
                apiVersion: '2012-10-17',
                accessKeyId: process.env.DEPLOY_ACCESS_KEY_ID,
                secretAccessKey: process.env.DEPLOY_SERECT_ACCESS_KEY,
                region: process.env.DEPLOY_REGION
            })
        }
    }
    : {
        transport: {
            service: 'Naver',
            host: 'smtp.naver.com',
            port: 587,
            auth: {
                user: process.env.NAVER_ID,
                pass: process.env.NAVER_PASSWORD
            }
        }
    };
module.exports = EmailConfig;
//# sourceMappingURL=emailconfig.js.map
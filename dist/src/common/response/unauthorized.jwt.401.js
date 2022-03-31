"use strict";
const UnauthorizedJwtRes = {
    message: 'error',
    errCode: 401,
    data: {
        errMsg: '인증정보가 만료됐습니다'
    }
};
module.exports = UnauthorizedJwtRes;
//# sourceMappingURL=unauthorized.jwt.401.js.map
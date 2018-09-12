const jsonwebtoken = require('jsonwebtoken');

const jwt = jsonwebtoken.sign({
    scope: 'app'
}, "QUCpkIAou9pak-lxFtFfSxr2wxIFFs4Ac84nlqgk5bLH5pmQWlgmwMm43jLqxewtyX_028cGSY8RpcCAIzhV7A", {
    headers: {
        kid: "app_5b8d2280b320360022f27e13"
    }
});

module.exports = jwt;

// If run directly, print JWT to cmd line 
if (process.argv[1] === __filename) {
    console.log(jwt);
}
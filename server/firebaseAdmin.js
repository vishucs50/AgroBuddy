const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(require("./agrobuddy-4d0f8-firebase-adminsdk-fbsvc-86b3bcaf05.json")), 
});

module.exports = admin;

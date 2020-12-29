
var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ecommerce-11093.firebaseio.com"
});

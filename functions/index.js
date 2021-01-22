const functions = require("firebase-functions");

// const admin = require("firebase-admin");

exports.chechHttp = functions.https.onRequest((req, res) => {
  res.send("<h1>It works. First firebase function</h1>");
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

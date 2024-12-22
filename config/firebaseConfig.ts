import admin from "firebase-admin";

const serviceAccount = require("@config/firebase/ebuddy-test-b9d18-firebase-adminsdk-wyt49-a555f65bbd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { db };

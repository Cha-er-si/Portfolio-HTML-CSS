const admin = require("firebase-admin");
const fs = require("fs");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const data = JSON.parse(
  fs.readFileSync("src/assets/json/projects.json", "utf8"),
);

async function upload() {
  const batch = db.batch();

  data.personal.forEach((item) => {
    const ref = db.collection("personal").doc();
    batch.set(ref, item);
  });

  data.tutorial.forEach((item) => {
    const ref = db.collection("tutorial").doc();
    batch.set(ref, item);
  });

  data.frontEndMentor.forEach((item) => {
    const ref = db.collection("frontEndMentor").doc();
    batch.set(ref, item);
  });

  data.designs.forEach((item) => {
    const ref = db.collection("designs").doc();
    batch.set(ref, item);
  });

  await batch.commit();
  console.log("Upload complete!");
}

upload();

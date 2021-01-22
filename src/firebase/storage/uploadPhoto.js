import firebase from "firebase/app";

export default function (directory, file, progressCallBack = () => {}) {
  const storageRef = firebase.storage().ref();

  const metaData = {};

  const uploadFile = storageRef.child(`public/${directory}/${file.name}`);
  const control = uploadFile.put(file, metaData);
  //   .then((snapshot) => {
  //     console.log("uploaded Fiel");
  //     console.log(snapshot);
  //     //snapshot.ref().getDownloadUrl().then(url=>{})
  //   })
  //   .catch((error) => {
  //     console.log("%c error in catch", "font-size: 1.5rem; color: red");
  //     console.log(error.message);

  //   });
  return new Promise((resolve, reject) => {
    control.on(
      "state_changed",
      function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }

        // call progress CallBack from caller
        progressCallBack(progress);
      },

      function (error) {
        // Handle unsuccessful uploads
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permiss
            consoleLog("authorize first");
            break;

          case "storage/canceled":
            // User canceled the upload
            consoleLog("user cancelled");
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            consoleLog("no such storage");
            break;
        }

        reject(error);
      },

      function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        console.log(control.snapshot);
        control.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          consoleLog("succesful", false);
          //notice this, im calling resolve after upload, upload response, get url from response and then resolve();
          resolve(downloadURL);
        });
      }
    );
  }); /* Promise end */
}

const consoleLog = (message, warning = true) => {
  console.log(
    `%c${message}`,
    `color: ${warning ? "red" : "green"}; font-size: 1.2rem;`
  );
};

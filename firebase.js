import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD1IMdoC-14MXC2CZ26Vid_WfBgqdiBI-E",
    authDomain: "facebook-ec154.firebaseapp.com",
    projectId: "facebook-ec154",
    storageBucket: "facebook-ec154.appspot.com",
    messagingSenderId: "1058824661205",
    appId: "1:1058824661205:web:72faca62b015462bc09a5c",
    measurementId: "G-QLGRRMP246"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
// const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app;

// const db = firebase.initializeApp(firebaseConfig).firestore();
// const storage = firebase.storage();

// export { db, storage };
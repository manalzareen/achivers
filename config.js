import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBUZ5zi1lbYI6OYl-l2ZLrUHInaeys45Dk",
  authDomain: "updated-achivers.firebaseapp.com",
  projectId: "updated-achivers",
  storageBucket: "updated-achivers.appspot.com",
  messagingSenderId: "595288063708",
  appId: "1:595288063708:web:c3ccb8560dc99ff9a9be19"
};

const app= firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();
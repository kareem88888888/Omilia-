import { getApp,getApps,initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
import{getFirestore} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyDKMLomKC9Oqyp341wgJUXP3U6K5gimp1E",
    authDomain: "omilia-project.firebaseapp.com",
    projectId: "omilia-project",
    storageBucket: "omilia-project.appspot.com",
    messagingSenderId: "565848758869",
    appId: "1:565848758869:web:bc9ba5e80900563765d2dc",
    measurementId: "G-PP8FLKPT30"
  };
  
  const app =getApp.length > 0 ? getApp() :initializeApp(firebaseConfig)
  const firebaseAuth = getAuth(app)
  const firestoreDB=getFirestore(app)

  export{app,firebaseAuth,firestoreDB}
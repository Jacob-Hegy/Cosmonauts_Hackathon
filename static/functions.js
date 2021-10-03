import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { firestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";  
import { storage } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyDbusyMan78yGyLNtyM8paGKgG9LtASqW4",
    authDomain: "horizontal-data-327923.firebaseapp.com",
    projectId: "horizontal-data-327923",
    storageBucket: "horizontal-data-327923.appspot.com",
    messagingSenderId: "16493237544",
    appId: "1:16493237544:web:00162e15c6048cdc0cec1d",
    measurementId: "G-FNCQDSR1YJ"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// POST -> names, timestamps. blahhh
// GET

// make different documents for schedule activities vs. user data, collection is named after you

// here... it begins
const userName = document.querySelector("#userNameBox");

var db = firebase.firestore();

let postCalendarData = (timeStartParam, timeEndParam, activityType) => {

    //if (SET UP CONDITIONALS) 
        //let atHomeBool = true or false depending on conditions specified in Google Doc

    db.collection(userName).doc(userName+"auth-token").set({
        timestampStart : firebase.Timestamp(timeStartParam, 0),
        timestampEnd : firebase.Timestamp(timeEndParam, 0),
        ActivityType : activityType,
        atHome : false
    }).then(function() {console.log("Document successfully written!");
    }).catch(function(error) {
        console.log("Error writing document: ", error);
    });
}

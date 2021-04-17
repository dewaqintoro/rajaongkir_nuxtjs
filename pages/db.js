import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyBldUZzSW36DP54DChs1lh-8eFO0uHoXS8",
	authDomain: "ngodingbentarchatv1.firebaseapp.com",
	projectId: "ngodingbentarchatv1",
	storageBucket: "ngodingbentarchatv1.appspot.com",
	messagingSenderId: "935022018615",
	appId: "1:935022018615:web:4141349200f61522fc7fb2"
}

const db = firebase.initializeApp(config);
export default db;
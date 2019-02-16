import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCMdHbc_ya-k7ZuvvTRT7QIJOs5cyUcyl0",
        authDomain: "catch-of-the-day-edmund-park.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-edmund-park.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

//this is a named export
export {firebaseApp};

export default (base);
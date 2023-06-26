// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {toast} from "react-toastify"
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyPxIwtJ1tTPLYBFH9d05S2G_Uce_DyyM",
  apiKey: "AIzaSyAra3LiEUhFqs_v2iWOz5jFaGmT9qESX-U",
  authDomain: "tbtoken-20023.firebaseapp.com",
  databaseURL: "https://tbtoken-20023-default-rtdb.firebaseio.com",
  projectId: "tbtoken-20023",
  storageBucket: "tbtoken-20023.appspot.com",
  messagingSenderId: "226306476570",
  appId: "1:226306476570:web:b1960c006b63f362159fa3",
  measurementId: "G-ZT8J3KS6VB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

// Add a new document with a generated id.
// export const saveEmail = async  (email) => {
//     const docRef = await addDoc(collection(db, "Emails"), { email });
//     console.log(docRef)
//         return;
// }

export const saveEmail = async (data) => {
    try {
        const docRef = await addDoc(collection(db, "TBT-DB"), data);
        console.log("Successful")
        // toast.success("Submitted Successfully");
        // setTimeout(() => {
        //     if (typeof window) {

        //         window.location.reload();
        //     }
        // }, 2000);
        return true

    } catch (error) {
        toast.error("oops! an Error has occured")
        return false;
    }
}

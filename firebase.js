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
  authDomain: "scientific-crow-365013.firebaseapp.com",
  projectId: "scientific-crow-365013",
  storageBucket: "scientific-crow-365013.appspot.com",
  messagingSenderId: "551300805004",
  appId: "1:551300805004:web:18a13d68d9b9b4672a66a9",
  measurementId: "G-2BFT6GC8P8",
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
        const docRef = await addDoc(collection(db, "Wiatlist"), data);
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

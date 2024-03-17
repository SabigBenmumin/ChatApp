import  { initializeApp }  from  "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig =  {
    apiKey: "AIzaSyCvNPFd8aE_P0R-V59m7xyvv4WiAF2qYy4",
    authDomain: "learnchat-59e06.firebaseapp.com",
    projectId: "learnchat-59e06",
    storageBucket: "learnchat-59e06.appspot.com",
    messagingSenderId: "388975970748",
    appId: "1:388975970748:web:9c35957ad7c89f95b6c3b9"
};

    
// Initialize Firebaseconst 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4fv7ske5odXwlqGBfkU51dcprfeJsoG8",
  authDomain: "agronomics-web-otp.firebaseapp.com",
  projectId: "agronomics-web-otp",
  storageBucket: "agronomics-web-otp.appspot.com",
  messagingSenderId: "345950889947",
  appId: "1:345950889947:web:b1ecd12c372410aa65e9fe"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
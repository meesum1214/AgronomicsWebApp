import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  // apiKey: "AIzaSyC4fv7ske5odXwlqGBfkU51dcprfeJsoG8",
  // authDomain: "agronomics-web-otp.firebaseapp.com",
  // projectId: "agronomics-web-otp",
  // storageBucket: "agronomics-web-otp.appspot.com",
  // messagingSenderId: "345950889947",
  // appId: "1:345950889947:web:b1ecd12c372410aa65e9fe"

  apiKey: "AIzaSyBWYkWXwwU3TsBvT-_iXYFtW-Pm-43Klt8",
  authDomain: "agronomics-8aeee.firebaseapp.com",
  projectId: "agronomics-8aeee",
  storageBucket: "agronomics-8aeee.appspot.com",
  messagingSenderId: "288270224905",
  appId: "1:288270224905:web:60e0c0b2fc9f8e152032d8",
  measurementId: "G-7JPYB4KRMT"
};

// apiKey: "AIzaSyBWYkWXwwU3TsBvT-_iXYFtW-Pm-43Klt8",
//   authDomain: "agronomics-8aeee.firebaseapp.com",
//   projectId: "agronomics-8aeee",
//   storageBucket: "agronomics-8aeee.appspot.com",
//   messagingSenderId: "288270224905",
//   appId: "1:288270224905:web:60e0c0b2fc9f8e152032d8",
//   measurementId: "G-7JPYB4KRMT"

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAekircK0q4SaT_4Mj1L865uU8d9vVeZ78",
  authDomain: "react-native-my-project-7002f.firebaseapp.com",
  databaseURL:
    "https://react-native-my-project-7002f-default-rtdb.firebaseio.com",
  projectId: "react-native-my-project-7002f",
  storageBucket: "react-native-my-project-7002f.appspot.com",
  messagingSenderId: "696497786079",
  appId: "1:696497786079:web:eca543787e0bb7bc826d6a",
  measurementId: "G-T82M34XCZ3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;

import {initializeApp} from 'firebase/app';
 import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDpXC_D3D9Fbb23VUTjkGRXPcpeMbt9hDA",
    authDomain: "netflix-clone-8eb4d.firebaseapp.com",
    projectId: "netflix-clone-8eb4d",
    storageBucket: "netflix-clone-8eb4d.appspot.com",
    messagingSenderId: "1076988788519",
    appId: "1:1076988788519:web:2036cc388f29484a45f302",
    measurementId: "G-8XT53T6GNR"
  };
  const app = initializeApp(firebaseConfig);
 export  const authentication= getAuth(app);


//  export default firebase;
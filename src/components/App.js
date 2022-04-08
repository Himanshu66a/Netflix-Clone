import React, { useState,Suspense,lazy } from 'react';

import './App.css';
 import Homepage from './Homepage';
import { Routes, Route, Link } from "react-router-dom";
import SignIn from '../SignIn';
import {authentication} from '../firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";






export const UserContext = React.createContext();

const App = () => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [user, setuser] = useState({});

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUserSignedIn(true)
      console.log(user.displayName)
      console.log(user.email)

      setuser(user);
    } else {
      setIsUserSignedIn(false)
    }
  });

  const userInfo = {
     name:user.displayName,
    email:user.email,
    photo:user.photoURL
  }

// export default user

//   authentication().onAuthStateChanged((user) => {
//     if (user) {
//       return setIsUserSignedIn(true);
//     }
//     setIsUserSignedIn(false)
// })



  return (
    <UserContext.Provider value={{setIsUserSignedIn,userInfo}}>
    <Routes>
{ isUserSignedIn?

      <Route path="/" element={<Homepage value={setIsUserSignedIn} />} />
    
      :

      <Route path="/" element={<SignIn />} />
}

    </Routes>
    </UserContext.Provider>

    // <div className="app">
    //   {/**NAV */}
    //   <Nav/>
    //   {/*BANNER*/}
    //   <Banner />

    //   <Row
    //     title="NETFLIX ORIGINALS"
    //     id="NO"
    //     fetchUrl={requests.fetchNetflixOriginals}
    //     isLargeRow
    //   />

    //   <Row
    //     title="Trending Now"
    //     id="TN"
    //     fetchUrl={requests.fetchTrending}
    //   />
    //   <Row
    //     title="Top Rated"
    //     id="TR"
    //     fetchUrl={requests.fetchTopRated}
    //   />
    //   <Row
    //     title="Action Movies"
    //     id="AM"
    //     fetchUrl={requests.fetchActionMovies}
    //   />
    //   <Row
    //     title="Comedy Movies"
    //     id="CM"
    //     fetchUrl={requests.fetchComedyMovies}
    //   />
    //   <Row
    //     title="Horror Movies"
    //     id="HM"
    //     fetchUrl={requests.fetchHorrorMovies}
    //   />
    //   <Row
    //     title="Romance  Movies"
    //     id="RM"
    //     fetchUrl={requests.fetchRomanceMovies}
    //   />
    //   <Row
    //     title="Documentaries"
    //     id="DM"
    //     fetchUrl={requests.fetchDocumentaries}
    //   />
    // </div>
  );
}

export default App;

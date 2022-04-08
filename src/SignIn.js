import React from 'react'
import firebase from './firebase'; 
import { authentication } from "./firebase" ;
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth" ;
import { useNavigate } from 'react-router-dom';
import "./signin.css"



function SignIn() {
  

    const SignInGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((re) =>
                console.log(re))
            .catch((err) => {
                console.log(err)
            })
    }

    return (
<>
    
     {/* <div>
         <button onClick={SignInGoogle} > Sign In</button>
          <button class="signin-button" onClick={SignInGoogle}>Sign In With Google</button>
          </div> */}

              
        <div class="upper">
        <div class="logo">
            <a href="#">
                <img src="https://icon-library.com/images/netflix-png-icon/netflix-png-icon-4.jpg" class="img-logo"/>
            </a>
        </div>
        
        {/* <div class="login-div">
            <form class="login">
                
               
                <h1>Welcome to Netflix</h1>

                    <div>
                    <button class="signin-button" onClick={SignInGoogle}>Sign In With Google</button>
                </div>
            </form>
        </div> */}


        <div className='xyz'>
            <img src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1" alt="" />
        <h1>Welcome to Netflix</h1>
        <button class="signin-button" onClick={SignInGoogle}>Sign In With Google</button>
        </div>

    </div>
    

    

     <div class="bottom">
        <div class="bottom-width">
            Questions? Call <a href="tel:1-844-542-4813" class="tel-link">1-844-542-4813</a>
            <div>
                <ul class="bottom-flex">
                    <li class="list-bottom">
                        <a href="#" class="link-bottom">
                            FAQ
                        </a>
                    </li>
                    <li class="list-bottom">
                        <a href="#" class="link-bottom">
                            Help Center
                        </a>
                    </li>
                    <li class="list-bottom">
                        <a href="#" class="link-bottom">
                            Terms of Use
                        </a>
                    </li>
                    <li class="list-bottom">
                        <a href="#" class="link-bottom">
                            Privacy
                        </a>
                    </li>
                    <li class="list-bottom">
                        <a href="#" class="link-bottom">
                            Cookie Preferences
                        </a>
                    </li>
                    <li class="list-bottom">
                        <a href="#" class="link-bottom">
                            Corporate information
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <select class="fa select-language">
                    <option> &#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
                    <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Fran&ccedil;ais</option>
                </select>
            </div>
        </div>
    </div> 
    </>
    )
}

export default SignIn
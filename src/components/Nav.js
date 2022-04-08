import React,{useState,useEffect,useContext} from 'react';
import "./Nav.css";
import {UserContext} from './App'



const Nav= ()=> {

    const {setIsUserSignedIn,userInfo} = useContext(UserContext);
    


    {console.log(userInfo)}
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 50){
                handleShow(true);
            }else{
                handleShow(false);
            }
            
            
        });
        return () => {
            window.removeEventListener("scroll",()=>{})
        }
    }, [])
    
    return (
        <nav className={`nav ${show && "nav__black"}`}>
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                className="nav__logo"
            />
            <div className="nav__name">{userInfo.name}</div>
            <img
                alt="User logged"
                src={userInfo.photo}
                className="nav__avatar"
            />
            
            
        </nav>
    )
}

export default Nav

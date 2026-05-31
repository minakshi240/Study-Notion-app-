import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template 
    title="Join the millions learing to code with us"
    desc1="Build your skills to advance your career path"
    desc2="Education to future proof your career"
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />

  )
}

export default Signup

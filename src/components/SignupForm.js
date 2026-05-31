 import React from 'react'
 import { useState } from 'react'
 import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
 import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

 
 const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate()

    const [formData, setformData] = useState({
        firstName: "",
        lastName:"",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [accountType, setAccountType] = useState("student")

    function changeHandler(e) {
        setformData((prevData) => (
            {
                ...prevData, [e.target.name]: e.target.value 
            }
        ))
    }

    function submitHandler(e) {
        e.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("password do not match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created")
        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData, accountType
        }
        console.log("Printing final account data")
        console.log(finalData)

        navigate("/dashboard")
    } 

   return (
     <div>
       {/*Student-Instructor Signup Form*/}

       <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'> 
        <button className= {`${accountType === 'student'?
         "bg-richblack-900 text-white" : 
         "bg-richblack-800 text-richblack-300"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("student")}>
            Student
        </button>
        <button className= {`${accountType === 'instructor'?
         "bg-richblack-900 text-white" : 
         "bg-richblack-800 text-richblack-300"} py-2 px-5 rounded-full transition-all duration-200 `}
        onClick={()=> setAccountType("instructor")}>
            Instructor
        </button>
       </div>

       <form onSubmit={submitHandler}>

        <div className='flex justify-between gap-x-4 mt-[20px]'>
            <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sub>*</sub></p>
            <input
            required
            type='text'
            name='firstName'
            onChange={changeHandler}
            placeholder='Enter First Name'
            value={formData.firstName}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
        </label>

        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sub className='text-pink-200'>*</sub></p>
            <input
            required
            type='text'
            name='lastName'
            onChange={changeHandler}
            placeholder='Enter Last Name'
            value={formData.lastName}
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            />
        </label>
        </div>

       <div className='mt-[20px]'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<sub className='text-pink-200'>*</sub></p>
            <input
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='Enter Email Address'
            value={formData.email}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        </div>

         
        <div className='w-full flex justify-between gap-x-4 mt-[20px]'>
            <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sub className='text-pink-200'>*</sub></p>
            <input
            required
            type={showPassword ? "text" : "password"}
            name='password'
            onChange={changeHandler}
            placeholder='Enter Password'
            value={formData.password}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span className='absolute right-3 top-[38px] cursor-pointer'
             onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
             </span>
            
        </label>

        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sub className='text-pink-200'>*</sub></p>
            <input
            required
            type={showConfirmPassword ? "text" : "password"}
            name='confirmPassword'
            onChange={changeHandler}
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span className='absolute right-3 top-[38px] cursor-pointer'
             onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
             </span>
        </label>
       

       </div>
       <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
        Create Account
        </button>
       </form>
     </div>
   )
 }
 
 export default SignupForm
 
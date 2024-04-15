// import React, { useState } from 'react';
// import './AuthentiCss.css';
// import '../index';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const Authenti = () => {

//         const nav=useNavigate();


//     const loginbtnswapup=()=>{
    
//         document.querySelector(".container").classList.add("active");
//     };
//     const signupbtnswapdown=()=>{
//         document.querySelector(".container").classList.remove("active");
//     };
    

//     const [loginDetails,setLoginDetails]=useState({
//         uname:'',
//         password:''
//     });

    

//      // call when onchnange run...
//      const handlerLogin=(event,fild)=>{

//         let actualValu=event.target.value
//         setLoginDetails({
//             ...loginDetails,[fild]:actualValu
//         })
//     }



//     // ------------------signUp process------------------------------//

//     const signupprocess=(event)=>{

//         event.preventDefault();

//         const signUp_name=document.getElementById("signUp_name");
//         const signUp_email=document.getElementById("signUp_email");
//         const signup_password=document.getElementById("signUp_password");

//         if(signUp_name.value==="" || signUp_email.value===""||signup_password.value==="")
//         {
//             alert("enter all details ");
//             return;
//         }

//         var user={
//             uName:signUp_name.value,
//             uEmailId:signUp_email.value,
//             uPassword:signup_password.value
            

//         };

//         console.log(user);

//         axios.post("http://localhost:8080/signUp",user).then((response)=>
//         {
//             console.log(response);
//             alert("sign-up sucessfully");
//         }).catch((error)=>{
//             console.log(error);
//             console.log("no thyuuuuuuuu");
//         });

//     };

//     // ------------------signUp process------------------------------//

//     const loginProcess=(event)=>{
        
//         event.preventDefault();

//         // const signin_email=document.getElementById("signIn_email").value;
//         // const signin_pass=document.getElementById("signIn_password").value;  
       
//         if(loginDetails.password==="" || loginDetails.uname==="")
//         {
//             alert("fill all field");
//             return;
//         }

//         console.log(loginDetails.uname);
//         console.log(loginDetails.password);

//         axios.get("http://localhost:8080/logIn").then((response)=>{

//         console.log(response);
//         for(let arrElement of response.data)
//         {
//             if((arrElement.uEmailId===loginDetails.uname) && (arrElement.uPassword===loginDetails.password))
//             {
//                 alert("thay gyu login 😀😀..");
//                 console.log("sucessfull");
//                 nav("/home")
//                 return;
//             }
//         }
//         alert("enter valid name or pass")
//         }).catch((error)=>{

//             console.log("no thyu ....")
//         });

        


//     };


    

//   return (
//     <>
//     <div className='main-container'>
//         <div className='container'>
//         {/* .................... sign UP section............... */}
//             <div className='signup-section'>
//             <header><button id='btnsignup' onClick={signupbtnswapdown}>SigUp</button></header>

//                     <div className='social-icon'>
//                         <button ><i className="fa-brands fa-google"></i> Google</button>
//                         <button ><i className="fa-brands fa-facebook"></i> Face-Book</button>
//                     </div>

//                     <div className='saprator'>
//                         <div className='line'></div>
//                         <p>Or</p>
//                         <div className='line'></div>
//                     </div>

//                     <form>
//                         <input type='text' placeholder='Enter Your Name' id='signUp_name'/>
//                         <input type='email' placeholder='Enter Your Email' id='signUp_email'/>
//                         <input type='password' placeholder='Enter Password' id='signUp_password'/>
                 
//                         <button type='submit' onClick={signupprocess} className='btn btnsignup' >SignUp</button>

//                     </form>
//             </div>


//             {/* ............sign in section..................... */}

//             <div className='login-section'>
//                <header><button id='btnlogin' onClick={loginbtnswapup}>Login</button></header>

//                     <div className='social-icon'>
//                         <button><i className="fa-brands fa-google"></i> Google</button>
//                         <button><i className="fa-brands fa-facebook"></i> Face-Book</button>
//                     </div>

//                     <div className='saprator'>
//                         <div className='line'></div>
//                         <p>Or</p>
//                         <div className='line'></div>
//                     </div>

//                     <form>
                    
//                         <input type='email' placeholder='Enter Your Email' id='signIn_email'  onChange={(e)=>handlerLogin(e,'uname')} />
//                         <input type='password' placeholder='Enter Password' id='signIn_password' onChange={(e)=>handlerLogin(e,'password')} />
//                         <a href='#'>Forgot Password?</a>
//                         <button type='submit'  onClick={loginProcess} className='btn'>Login</button>

//                     </form>
//             </div>
//         </div>
//         </div>
//     </>
//   )
// }

// export default Authenti
import React, { useState } from 'react';
import './AuthentiCss.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Authenti = () => {
    const nav = useNavigate();
    const loginbtnswapup=()=>{
    
        document.querySelector(".container").classList.add("active");
    };
    const signupbtnswapdown=()=>{
        document.querySelector(".container").classList.remove("active");
    };
    
    const [loginDetails, setLoginDetails] = useState({
        uname: '',
        password: ''
    });

    const handlerLogin = (event, field) => {
        let actualValue = event.target.value;
        setLoginDetails({
            ...loginDetails,
            [field]: actualValue
        });
    };

    const loginProcess = (event) => {
        event.preventDefault();

        if (loginDetails.password === "" || loginDetails.uname === "") {
            alert("Fill all fields");
            return;
        }

        axios.get("http://localhost:8080/logIn")
            .then((response) => {
                console.log(response);
                for (let arrElement of response.data) {
                    if ((arrElement.uEmailId === loginDetails.uname) && (arrElement.uPassword === loginDetails.password)) {
                        alert("Login successful 😀😀..");
                        console.log("Successful");
                        if(loginDetails.uname==="admin@gmail.com" && loginDetails.password ==="admin")
                        {
                            nav("/admin");
                            return;
                        }
                        
                        nav("/song"); // Navigate to the "/home" route upon successful login
                        return;
                    }
                }
                alert("Enter valid name or password");
            })
            .catch((error) => {
                console.log("Error:", error);
                alert("An error occurred while logging in. Please try again later.");
            });
    };

    const signupprocess = (event) => {
        event.preventDefault();

        const signUp_name = document.getElementById("signUp_name");
        const signUp_email = document.getElementById("signUp_email");
        const signup_password = document.getElementById("signUp_password");

        if (signUp_name.value === "" || signUp_email.value === "" || signup_password.value === "") {
            alert("Enter all details");
            return;
        }

        var user = {
            uName: signUp_name.value,
            uEmailId: signUp_email.value,
            uPassword: signup_password.value
        };

        console.log(user);

        axios.post("http://localhost:8080/signUp", user)
            .then((response) => {
                console.log(response);
                alert("Sign-up successfully");
            })
            .catch((error) => {
                console.log(error);
                console.log("Error occurred while signing up");
            });
    };

    return (
        <>
            <div className='main-container'>
                <div className='container'>
                    {/* Sign Up Section */}
                    <div className='signup-section'>
                        <header><button id='btnsignup' onClick={signupbtnswapdown}>SignUp</button></header>
                        <div className='social-icon'>
                            <button><i className="fa-brands fa-google"></i> Google</button>
                            <button><i className="fa-brands fa-facebook"></i> Face-Book</button>
                        </div>
                        <div className='saprator'>
                            <div className='line'></div>
                            <p>Or</p>
                            <div className='line'></div>
                        </div>
                        <form>
                            <input type='text' placeholder='Enter Your Name' id='signUp_name' />
                            <input type='email' placeholder='Enter Your Email' id='signUp_email' />
                            <input type='password' placeholder='Enter Password' id='signUp_password' />
                            <button type='submit' onClick={signupprocess} className='btn btnsignup'>SignUp</button>
                        </form>
                    </div>

                    {/* Sign In Section */}
                    <div className='login-section'>
                        <header><button id='btnlogin' onClick={loginbtnswapup}>Login</button></header>
                        <div className='social-icon'>
                            <button><i className="fa-brands fa-google"></i> Google</button>
                            <button><i className="fa-brands fa-facebook"></i> Face-Book</button>
                        </div>
                        <div className='saprator'>
                            <div className='line'></div>
                            <p>Or</p>
                            <div className='line'></div>
                        </div>
                        <form>
                            <input type='email' placeholder='Enter Your Email' id='signIn_email' onChange={(e) => handlerLogin(e, 'uname')} />
                            <input type='password' placeholder='Enter Password' id='signIn_password' onChange={(e) => handlerLogin(e, 'password')} />
                            <a href='#'>Forgot Password?</a>
                            <button type='submit' onClick={loginProcess} className='btn'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authenti;

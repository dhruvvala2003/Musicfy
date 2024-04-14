import React, { useEffect, useState } from 'react'
import './loginCss.css'
import apiClient, { loginEndpoint } from '../../spotify'
const Login = () => {
   
  return (
    
    <div className='login-page'>
    <img src="https://imgs.search.brave.com/OxCiBszqfjx6KQrUTgUaBrHLOlOGkcwWVRQQUL6MKwk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9TcG90aWZ5/L1Nwb3RpZnktTG9n/by53aW5lLnN2Zw.svg"
    
         alt='logo-spotify'
         className='logo'
     />
    <a href={loginEndpoint}>
        <div className='login-btn'>Login</div>
    </a>
</div>
  )
}

export default Login

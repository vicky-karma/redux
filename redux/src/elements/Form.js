import React from 'react'
import '../elements/Form.css'

const Form = ({is_signup})=>{
    return(
    <>
    <div className='div'>
        <form className='form'>
          {
            is_signup ? <h1>welcome signup page</h1> : <h1>lets explore</h1>
          }
          {
            is_signup && <input type='text' placeholder='enter your name'></input>
          }
            <input type='text' placeholder='enter your email'></input>
            <input type='text' placeholder='enter your password'></input><br/>
            <button>{is_signup ? 'signup' : 'signin'}</button>
        </form>
    </div>
    </>
  )
}

export default Form

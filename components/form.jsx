import styles from './Form.module.css'
import React, {useState} from 'react'

export default function Form(){
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false)

    const submitContact = (e) => { 
        e.preventDefault()
        console.log('Sending')
    let data = {
        fullname,
        email,
        phone,
        message
    }

    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setFullname('')
          setEmail('')
          setBody('')
        }
      })
    
    }

    return <form onSubmit="{submitContact}" method='POST' > <div className='input-container'>
    <div className='col-xs-12'>
        <div className='styled-input wide'>
            <input type="text"
            value={fullname}
            onChange={(e) => {
                setFullname(e.target.value);
              }}
            name="fullname"
            required />
            <label>Full Name</label> 
        </div>
    </div>
    <div className='col-md-6 col-sm-12'>
        <div className='styled-input'>
            <input type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required />
            <label>Email</label> 
        </div>
    </div>
    <div className='col-md-6 col-sm-12'>
        <div className='styled-input'>
            <input type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required />
            <label>Phone Number</label> 
        </div>
    </div>
    <div className='col-xs-12'>
        <div className='styled-input wide'>
            <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required></textarea>
            <label>Enter Message</label>
        </div>
    </div>
    <div className='submitButton' >
    <button action='/success' type="submit" onClick={(e)=>{submitContact(e)}}>Submit</button>
    </div>
</div>
</form>
}
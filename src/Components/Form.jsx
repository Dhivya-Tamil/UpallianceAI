import React, { useEffect, useState } from 'react'

const Form = () => {
    const[formData,setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        password: "",
    })
    const[isNotSave,setisNotSave] = useState(false);

    useEffect(() => {
        
        const handleBeforeUnload = event => {
          if (isNotSave) {
            event.preventDefault();
            event.returnValue = "You have unsaved changes! Are you sure you want to leave?";
            alert(event.returnValue)
          }
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, [isNotSave]);

    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(()=>{
            return {
                ...formData,
                [name]: value,
            }
        })

        setisNotSave(true)

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const userId = Math.floor(Math.random()* 100) + 1;
        const userData = {...formData,userId}
       
        if(!formData.name || !formData.email || !formData.password || !formData.address || !formData.phone){
            alert("Please enter all the required fields")
            return;
        }
        console.log(userId)
        localStorage.setItem(`userData - ${userId}`,JSON.stringify(userData));
        setisNotSave(false)
        alert("User Data Saved successfully")
    }
    

  return (
    <div className='form-container'>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputBox'>
            <label htmlFor='name'>Name</label>
            <input type='text' 
            placeholder='Enter your name' 
            name='name'
            value={formData.name}
            onChange={handleChange}
            />
        </div>
         <div className='inputBox'>
            <label>Address</label>
            <textarea placeholder='Type your address here...' rows={10} cols={21}
             name='address'
             value={formData.address}
            onChange={handleChange}></textarea>
         </div>
         <div className='inputBox'>
            <label htmlFor='email'>Email</label>
            <input type='email' 
            placeholder='Enter your email' 
            name='email'
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        <div className='inputBox'>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' 
            placeholder='Enter your phone' 
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            />
        </div>
        <div className='inputBox'>
            <label htmlFor='password'>Password</label>
            <input type='password' 
            placeholder='Enter your password' 
            name='password'
            value={formData.password}
            onChange={handleChange}
            />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form

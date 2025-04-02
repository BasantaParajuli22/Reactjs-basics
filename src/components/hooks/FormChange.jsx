import React, { useState } from 'react'

function FormChange() {
    const users ={
        name:'',//same attribute(name) cannot be (user) as first input
        age: 0,
        email:""
    }

    const [user, setUser] = useState(users);
    const handleChange =(e) =>{
        setUser( {
             ...user,//spread operator //creates new array with existing input values
                     //without this changes other input value & throws error
            [e.target.name] :e.target.value
        })
    }

  return (
    <form>
        <input name="name" value={user.name} onChange={handleChange} />
        <input name="email" value={user.email} onChange={handleChange} />
        <input name="age" value={user.age} onChange={handleChange} type="number" />
    </form>

  )
}

export default FormChange
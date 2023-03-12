import React, { useState } from "react";

function RegisterForm() {
    const[data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
/*     const createUser =(e)=>{
        e.preventDefault()
        const newUser = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        console.log(newUser);
    } */
    return (
        <>
            <form>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="John"
                        onChange={(e)=>setData({...data, firstName: e.target.value})}
                    />
                    <label for="firstName" className="form-label">
                        First Name
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Doe"
                        onChange={(e)=>setData({...data, lastName: e.target.value})}
                    />
                    <label for="lastName" className="form-label">
                        Last Name
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        onChange={(e)=>setData({...data, email: e.target.value})}
                    />
                    <label for="email" className="form-label">
                        Email
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e)=>setData({...data, password: e.target.value})}
                    />
                    <label for="password" className="form-label">
                        Password
                    </label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPass"
                        onChange={(e)=>setData({...data, confirmPassword: e.target.value})}
                    />
                    <label for="confirmPass" className="form-label">
                        Confirm Password
                    </label>
                </div>
            </form>
            <p>Your Form Data</p>
            <div className="data">
                <p>First Name: {data.firstName}</p>
                <p>Last Name: {data.lastName}</p>
                <p>Email: {data.email}</p>
                <p>Password: {data.password}</p>
                <p>Confirm Password: {data.confirmPassword}</p>
            </div>
        </>
    );
}

export default RegisterForm;

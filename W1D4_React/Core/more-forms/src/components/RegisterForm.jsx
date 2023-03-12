import React, { useState } from "react";

function RegisterForm() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const validText = (state) => {
        return state.length < 2 && state !== "" ? true : false;
    };
    const validEmail = () => {
        return data.email.length < 5 && data.email !== "" ? true : false;
    };
    const validPassword = () => {
        if (data.password.length < 8 && data.password !== "") {
            return <p className="text-danger">Password must be at least 8 characters</p>;
        }
    };
    const confirmPassword = () =>
        data.confirmPassword !== data.password && data.confirmPassword !== "" ? (
            <p className="text-danger">Passwords must match</p>
        ) : (
            ""
        );
    return (
        <>
            <form>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="John"
                        onChange={(e) =>
                            setData({ ...data, firstName: e.target.value })
                        }
                    />
                    <label for="firstName" className="form-label">
                        First Name
                    </label>
                    {validText(data.firstName) ? (
                        <p className="text-danger">
                            First Name must be at least 2 characters
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="Doe"
                        onChange={(e) =>
                            setData({ ...data, lastName: e.target.value })
                        }
                    />
                    <label for="lastName" className="form-label">
                        Last Name
                    </label>
                    {validText(data.lastName) ? (
                        <p className="text-danger">
                            Last Name must be at least 2 characters
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                        }
                    />
                    <label for="email" className="form-label">
                        Email
                    </label>
                    {validEmail() ? (
                        <p className="text-danger">
                            Email must be at least 5 characters
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                    />
                    <label for="password" className="form-label">
                        Password
                    </label>
                    {validPassword()}
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPass"
                        onChange={(e) =>
                            setData({
                                ...data,
                                confirmPassword: e.target.value,
                            })
                        }
                    />
                    <label for="confirmPass" className="form-label">
                        Confirm Password
                    </label>
                    {confirmPassword()}
                </div>
            </form>
        </>
    );
}

export default RegisterForm;

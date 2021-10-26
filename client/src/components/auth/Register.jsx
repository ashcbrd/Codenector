import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (event) =>
    setFormData({ ...formData, [event.target.name]: event.target.value });

  const onSubmit = async (event) => {
    event.preventDefault();
    if (password !== password2) {
      console.log("passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <form
        className="b p-8  w-4/5 flex flex-col mx-auto shadow-xl"
        onSubmit={(event) => onSubmit(event)}
      >
        <h1 className="">Sign Up</h1>
        <p className="">
          <i className="fas fa-user"></i> Create Your Account
        </p>

        <div className="form-group">
          <input
            className="my-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="my-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(event) => onChange(event)}
            required
          />
          <small className="">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            className="my-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="my-3 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(event) => onChange(event)}
            required
          />
        </div>
        <input
          type="submit"
          className="text-xl  mr-4 text-white p-1 w-32 bg-blue-500 hover:opacity-80 border-2 border-blue-500 rounded-lg"
          value="Register"
        />
        <p className="">
          Already have an account?{" "}
          <Link className="text-blue-500 hover:opacity-70" to="/login">
            Login
          </Link>
        </p>
      </form>
    </Fragment>
  );
};

export default Register;

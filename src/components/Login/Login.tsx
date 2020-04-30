import React, { useState } from "react";
import { User } from "../../types";
import { Page } from "../../App";
import {BACKEND_URL, postApiRequest, registerUser, Result} from "../../services/ApiClient";

interface State {

  username: string;
  password: string;
}

export const Login = (props: { changePage: (page: Page) => void }) => {
  const [state, setState] = useState<State>({
    username: "" ,
    password: ""
 });


  function updateField(field: keyof State ): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return (e) => {
      state[field] = e.target.value;
      setState({ ...state });
    };
  }


  function login() {
postApiRequest(state, BACKEND_URL + "/api/auth/login").then((result : Result<unknown>) => {
  switch (result.type) {
    case "SUCCESS":
        // props.changePage({type: "BOARDS", user:User})

  case "FAILURE":
    alert("dupa")
  }
  })
  }


  return (
    <div className="bg-white font-family-karla h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a href="#" className="bg-black text-white font-bold text-xl p-4">
              Logo
            </a>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="text"
                  id="userName"
                  placeholder="your username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  onChange= {()=>updateField("username")}
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  onChange= {()=>updateField("password")}
                />
              </div>

              <input
                type="submit"
                value="Log In"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                onClick={() => login()}
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <a
                  href="/#"
                  className="underline font-semibold"
                  onClick={(_) => props.changePage({ type: "REGISTER" })}
                >
                  Register here.
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
          />
        </div>
      </div>
    </div>
  );
};

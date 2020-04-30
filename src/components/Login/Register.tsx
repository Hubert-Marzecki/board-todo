import React, { useState } from "react";
import { User } from "../../types";
import { Page } from "../../App";
import {BACKEND_URL, postApiRequest, registerUser, Result} from "../../services/ApiClient";

interface State {
  email: string;
  password: string;
  username: string;
}

export const Register = (props: { changePage: (page: Page) => void }) => {
  const [state, setState] = useState<State>({
    email: "",
    password: "",
    username: "",
  });



  function updateField(field: keyof State ): (e: React.ChangeEvent<HTMLInputElement>) => void {
    // keyof ==> filed : "emal" | "passsword" ....
    // keyof {dupa: number, kek: number} ==> "dupa" | "kek" 
    return (e) => {
      state[field] = e.target.value;
      setState({ ...state });
    };
  }

  //   function genericUpdateField<T>(
  //     someState: T,
  //     updateState: (newState: T) => void
  //   ): (field: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => void {
  //     return (field) => {
  //       return (e) => {
  //         someState[field] = e.target.value;
  //         updateState({ ...someState });
  //       };
  //     };
  //   }

  // function register() {
  //   registerUser(state).then((result: Result<void>) => {
  //     switch (result.type) {
  //       case "SUCCESS":
  //         props.changePage({ type: "LOGIN" });
  //         break;
  //       case "FAILURE":
  //         console.log("DUPA")
  //         break;
  //         // ALLERT CUSTOM - https://www.npmjs.com/package/react-notifications-component?activeTab=readme&fbclid=IwAR1UQffEbdFz0dEpP56zBlYtfQnuwvf_hLMKtCfyn1y4aPP9WJvaUyG7kf8
  //     }
  //   });
  // }
  function register() {
    postApiRequest(state, BACKEND_URL + "/api/auth/register" ).then((result: Result<unknown >) => {
      switch (result.type) {
        case "SUCCESS":
          props.changePage({ type: "LOGIN" });

          break;
        case "FAILURE":

          break;
          // ALLERT CUSTOM - https://www.npmjs.com/package/react-notifications-component?activeTab=readme&fbclid=IwAR1UQffEbdFz0dEpP56zBlYtfQnuwvf_hLMKtCfyn1y4aPP9WJvaUyG7kf8
      }
    });
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
            <p className="text-center text-3xl">REGISTER</p>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="text"
                  id="userEmail"
                  placeholder="your email"
                  onChange={updateField("email")}
                  //   onChange={(e) =>
                  //     setState({ ...state, email: e.target.value })
                  //   }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Username
                </label>
                <input
                  type="text"
                  id="userName"
                  onChange={updateField("username")}
                  placeholder="your username"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={updateField("password")}
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                onClick={(_) => register()}
              >
                Register
              </button>
            </form>
            <div className="text-center pt-12 pb-12"></div>
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

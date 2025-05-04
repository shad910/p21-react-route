import React, { Suspense, useState } from "react";
import { NavLink } from "react-router";
import UserDetailsGo from "./UserDetailsGo";

const User = ({ user }) => {
  const { id, name, email } = user;
  const [info, setInfo] = useState(false);

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  return (
    <div className="text-left text-lg border-2 border-amber-200 rounded-2xl p-2.5">
      <p>Name: {name}</p>
      <p>Email: {email}</p>

      <NavLink to={`/users/${id}`}>
        <button className="btn btn-sm ">Details</button>
      </NavLink>

      <button onClick={() => setInfo(!info)} className="btn btn-sm ml-1.5">
        {info ? "Hide" : "Show"}
      </button>
      <br />
      {info && (
        <Suspense
          fallback={
            <div className="flex justify-center items-center p-1">
              <span className="loading loading-spinner text-warning"></span>
            </div>
          }
        ><UserDetailsGo userPromise={userPromise}></UserDetailsGo></Suspense>
      )}
    </div>
  );
};

export default User;

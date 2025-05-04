import React from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const userData = useLoaderData();

  const { name, username, email, phone, website } = userData;
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);

  return (
    <section className="flex justify-center py-8">
      <div className="text-lg border-2 border-amber-200 p-2.5">
        <h3>User Details Here:</h3>
        <br />
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
        <br />
        <div className="flex gap-2.5">
        <NavLink to={"/"}>
          <button className="btn ">Back to Home</button>
        </NavLink>
        <button onClick={handleNavigate} className="btn">One Step back</button>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;

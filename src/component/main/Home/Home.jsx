import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="px-5 py-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5">
            Hey there, curious mind! 👋 Ready to dive into something exciting? You’ve just landed in the right place—where ideas come to life and creativity knows no bounds.
            </p>
            <button onClick={()=>navigate('/users')} className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

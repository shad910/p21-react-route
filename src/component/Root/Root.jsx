import React from "react";
import NavBar from "../header/navbar/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../footer/Footer/Footer";


const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <NavBar></NavBar>
      {isNavigating && (
        <div className="flex justify-center items-center p-1">
          <span class="loading loading-spinner text-warning"></span>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;

import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData();

  return (
    <div>
      {/* Bannar */}
      <Banner />
      {/*  */}
      <Heading
        title="Browse Coffees by Categorys"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nisi?"
      />

      {/* dynamic ways categories button */}
      <Categories categories={categories} />

      {/* doynamic datya */}

      <Outlet />
    </div>
  );
};

export default Home;

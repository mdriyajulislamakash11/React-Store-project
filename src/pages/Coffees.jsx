import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
  const data = useLoaderData();
  const [sort, setSort] = useState(data)

    const handlesort =(sortBy) => {
        if(sortBy === "popularity"){
            const filterByPopularity = [...data].sort((a, b)  => b.popularity - a.popularity)
            setSort(filterByPopularity)
        }else if(sortBy === "rating"){
            const filterByRating = [...data].sort((a, b)  => b.rating - a.rating)
            setSort(filterByRating)
        }
    }

  return (
    <div className="py-12">

    <div className="flex justify-between items-center px-6">
        <h1 className="text-2xl font-medium">Sort By Popularity and Rating</h1>

        <div>
            <button className="btn btn-warning mr-6" onClick={() => handlesort("popularity")}>Sort By Popularity</button>
            <button className="btn btn-warning" onClick={() => handlesort("rating")}>Sort By Rating</button>
        </div>
    </div>





      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sort.map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Coffees;

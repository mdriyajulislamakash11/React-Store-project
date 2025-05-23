import React, { useEffect, useState } from "react";
import { getCoffeeCart, removeFavorite } from "../utils/localStorage";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const favorite = getCoffeeCart();
    setCoffees(favorite);
  }, []);

  const handleRemoved = (id) => {
    removeFavorite(id)
    const favorite = getCoffeeCart()
    setCoffees(favorite)
  }

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffee) => (
          <Card key={coffee.id} handleRemoved={handleRemoved} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

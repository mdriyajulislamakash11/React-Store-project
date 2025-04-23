import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Card = ({ coffee, handleRemoved }) => {

    const {pathname} = useLocation()
    console.log(pathname)

  const { popularity, rating, id, type, origin, category, image, name } =
    coffee || {};

    

  return (
    <div className="relative flex justify-center items-center p-4">
      <Link
        to={`/coffee/${id}`}
        className="w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 overflow-hidden"
      >
        <figure className="w-full h-48 bg-gray-100">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </figure>
        <div className="p-5 space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Type:</span> {type}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Origin:</span> {origin}
          </p>
          <p className="text-yellow-600 font-semibold">⭐ Rating: {rating}</p>
          <p className="text-green-600 font-semibold">
            🔥 Popularity: {popularity}%
          </p>
        </div>
      </Link>

      {pathname === "/dashboard" && (
        <button
          onClick={() => handleRemoved(id)}
          className="absolute top-2 right-2 btn btn-warning text-white  p-3 rounded-full shadow hover:bg-red-600 transition"
        >
          <FaTrashCan />
        </button>
      )}
    </div>
  );
};

export default Card;
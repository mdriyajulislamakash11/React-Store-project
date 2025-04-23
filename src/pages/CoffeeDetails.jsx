import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToLocalstorage, getCoffeeCart } from '../utils/localStorage';

const CoffeeDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [coffees, setCoffees] = useState({})
    const [isFavorite, setIsFavorite] = useState(false)
    
    useEffect(() => {
        const find = data.find((item) => item.id == id)
        setCoffees(find)

        const favorite = getCoffeeCart();
        const isExist = favorite.find((item) => item.id == find.id);
        if(isExist){
            setIsFavorite(true);
        }
    }, [data, id]);

    
  const {
    popularity,
    rating,
    ingredients,
    description,
    making_process,
    // nutrition_info,
    image,
    name,
  } = coffees || {};


    const handleFavorite = (coffee) => {
        addToLocalstorage(coffee)
        setIsFavorite(true)
    }

    return (
        <div className="my-14 flex justify-center items-center px-4">
        {coffees ? (
          <div className="my-12">
            {/* Description */}
            <h1 className="text-2xl md:text-4xl font-thin mb-6">{description}</h1>
  
            {/* Image */}
            <div className="w-full h-full md:h-[500px] overflow-hidden rounded-xl shadow-xl">
              <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
  
            {/* Title and Favorite Button */}
            <div className="flex justify-between items-center my-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-thin">{name}</h1>
                <p className="text-base">Popularity: {popularity}</p>
                <p className="text-base">Rating: {rating}</p>
              </div>
              <div>
                <button
                  disabled={isFavorite}
                  onClick={() => handleFavorite(coffees)}
                  className="btn btn-warning"
                >
                  Add Favorite
                </button>
              </div>
            </div>
  
            {/* Extra Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Ingredients */}
              <div className="bg-base-100 shadow-lg p-6 rounded-xl border border-gray-200">
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                {ingredients?.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No ingredients info available.</p>
                )}
              </div>
            </div>
  
            {/* Making Process */}
            <div className="bg-base-100 shadow-lg p-6 rounded-xl border border-gray-200">
              <h2 className="text-xl font-semibold mb-2">Making Process</h2>
              <p>{making_process || "No process info available."}</p>
            </div>
  
            {/* Nutrition Info */}
            <div className="bg-base-100 shadow-lg p-6 rounded-xl border border-gray-200 md:col-span-2">
              <h2 className="text-xl font-semibold mb-2">Nutrition Info</h2>
              {/* <p>{nutrition_info || "No nutrition info available."}</p> */}
            </div>
          </div>
        ) : (
          <p className="text-center text-xl text-gray-500">
            Loading coffee details...
          </p>
        )}
      </div>
    );
};

export default CoffeeDetails;
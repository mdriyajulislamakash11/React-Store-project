import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CategoriesCard = () => {
    const navigate = useNavigate()
    console.log(navigate)
     const {category} = useParams()
    const data = useLoaderData()
    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        if(category){
            const filterByCoffees = [...data].filter((item) => item.category === category);
            setCoffees(filterByCoffees)
        }else{
            setCoffees(data.slice(0, 6))
        }
    }, [category, data])



    return (
        <div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    coffees.map((coffee) => <Card key={coffee.id} coffee={coffee} /> )
                }
            </div>

            <button className='btn btn-warning' onClick={() => navigate("/coffees")}>View All</button>
        </div>
    );
};

export default CategoriesCard;
//import React from "react";
import { useState } from "react";
import { filterData } from "../utils/helper";

const SearchFood = ({allRestaurent, setFilterRestaurentList}) => {
    //console.log(allRestaurent, 'allRestaurent')
    //console.log(setFilterRestaurentList, 'setFilterRestaurentList')

    const [searcInputText, setSearchInputText] = useState('');

    return(
        <>
            <div className='search-container m-5 flex'>
                <input type="text" className='p-2 border-gray-100 focus:border-lime-600 border-2 focus:outline-none sm:text-sm' placeholder='Search' value={searcInputText} onChange={ (e) => {
                    setSearchInputText(e.target.value);
                    if(e.target.value === '') {
                        setFilterRestaurentList(allRestaurent); 
                    } 
                    }
                }/>
                <button className='inline-flex justify-center border border-transparent bg-lime-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500' onClick={() => {
                const data = filterData(searcInputText, allRestaurent);
                setFilterRestaurentList(data); //kaha pe serach hoga..api mai
                }}>Search</button>
            </div>
        </>
    )
}

export default SearchFood;
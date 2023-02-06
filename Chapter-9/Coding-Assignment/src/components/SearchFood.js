//import React from "react";
import { useState } from "react";
import { filterData } from "../utils/helper";

const SearchFood = ({allRestaurent, setFilterRestaurentList}) => {
    //console.log(allRestaurent, 'allRestaurent')
    //console.log(setFilterRestaurentList, 'setFilterRestaurentList')

    const [searcInputText, setSearchInputText] = useState('');

    return(
        <>
            <div className='search-container'>
                <input type="text" className='search-input' placeholder='Search' value={searcInputText} onChange={ (e) => {
                    setSearchInputText(e.target.value);
                    if(e.target.value === '') {
                        setFilterRestaurentList(allRestaurent); 
                    } 
                    }
                }/>
                <button className='search-btn' onClick={() => {
                const data = filterData(searcInputText, allRestaurent);
                setFilterRestaurentList(data); //kaha pe serach hoga..api mai
                }}>Search</button>
            </div>
        </>
    )
}

export default SearchFood;
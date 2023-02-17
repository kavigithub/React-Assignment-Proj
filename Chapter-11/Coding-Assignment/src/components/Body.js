import { useEffect, useState } from 'react';
import { restaurentData } from '../constants';
import RestaurentCard from './RestaurentCard';
import {FoodItemSkeleton} from './FoodItemSkeleton';
import { Link } from 'react-router-dom';
import SearchFood from './SearchFood';
import { filterData } from '../utils/helper';
/* import { DESKTOP_WEB_LISTING } from '../constants' */
import useAllRestaurentList from '../utils/useAllRestaurentList'
import useOnline from '../utils/useOnline'

const Body = ({user}) => {
   

    const [allRestaurent, filterRestaurentList, setFilterRestaurentList] = useAllRestaurentList();

    console.log('render');

    //conditional redering
    //const restoLIst = restaurentList.map(box => (<ShimmerEffect itemNum={name}/>)); 
    //when restaurent data is not available...not render component ...Early return

    if(!allRestaurent) return null;

    return (allRestaurent.length === 0) ? <FoodItemSkeleton/> : (
        <>
      <SearchFood allRestaurent={allRestaurent} setFilterRestaurentList={setFilterRestaurentList}/>

 
      <section className="flex flex-wrap px-5">
            {
                (filterRestaurentList.length === 0) ? 
                <h1 style={{paddingLeft:'20px'}}> No Restaurent match your Filter Criteria</h1> :
                filterRestaurentList.map((restaurant) => {
                  return <Link className='md:w-1/4 sm:w-6/12' style={{textDecoration: 'none'}} to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}> 
                  <RestaurentCard {...restaurant.data} user={user}/></Link> 
                }) 
            }
        </section>
        
        </> 
    )
 }

 export default Body;
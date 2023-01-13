import { useState } from 'react';
import { restaurentData } from '../constants';
import RestaurentCard from './RestaurentCard';

const filterData = (searcInputText, restaurentData) => {
  return restaurentData.filter((item) => item.data.name.toLowerCase().includes(searcInputText));
}

const Body = () => {
    //let searchText = 'KFC';
    const [booleanText, setBooleanText] = useState('False');
    const [searcInputText, setSearchInputText] = useState('');
    const [restaurentList, setRestaurentList] = useState(restaurentData);

    return(
        <>
        <div className='search-container'>
            <input type="text" className='search-input' placeholder='Search' value={searcInputText} onChange={ (e) => {
                 setSearchInputText(e.target.value);
                 if(e.target.value === '') {
                    setRestaurentList(restaurentData)
                 }
                }
            }/>
            {/* <h1 style={{display:'flex', flexDirection:'column'}}>{booleanText}</h1> */}
            <button className='search-btn' onClick={() => {
               // booleanText === 'False' ? setBooleanText('True') : setBooleanText('False');
               //need to filter data
               const data = filterData(searcInputText, restaurentList);
               setRestaurentList(data); //kaha pe serach hoga..api mai
               //update the state ...restaurentList variable
               //Filter data
            }}>Search</button>
            
        </div>
        <section className="card-list">
            {
              //restaurentData.map((restaurant) => {
              restaurentList.map((restaurant) => {
                  return <RestaurentCard {...restaurant.data} key={restaurant.data.id}/>
              })
            }
        </section>
        </> 
    )
 }

 export default Body;
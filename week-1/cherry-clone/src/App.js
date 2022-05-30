import './App.css';
 import Navbar from './components/Navbar';
 import Filter from "./components/Filter";
 import Restaurants from "./components/Restaurants";
 import Offers from "./components/Offers";

 import Userinfo from "./data/Userinfo.json";
 import offer from "./data/offer.json";
 import restaurants from "./data/restaurants.json";
    import { useState } from 'react';
   const filters = {
          1:"Cost High to Lost",
          2:"Cost Lost to High",
          3:" Ratings",
          4:"Delivery Time",
          5:"Relevance"
   };

function App() {
     const [data, SetData] = useState(restaurants);
      const [filterby, SetFilterby] = useState("");
      const updatedfilter = (newfilter)=>{
          console.log(newfilter);
          switch(newfilter){
            case "2": {
                data.sort((a,b)=>a["cost-for-two"] - b["cost-for-two"]);
                SetData([...data]);
                break;
            } 
            case "1": {
              data.sort((a,b)=>b["cost-for-two"] - a["cost-for-two"]);
              SetData([...data]);
              break;
          } 

          default:{
            SetData(restaurants);
            break;
          }

          } 
      }
       
  return (
    <div>
        <Navbar {...Userinfo.Userinfo}/>
        <Offers offer={offer}/>
        <section className="near-you">
        <Filter filters ={filters} currentfilterby ={filterby} updatedfilters ={updatedfilter} />
        <Restaurants restaurant={data} />
        </section>
    </div>
  );
}

export default App;


import './Country.css';
import { useState } from 'react';
const Country = ({country,handleVisitedCountries}) => {


  console.log(handleVisitedCountries)


  const [visited,setVisited]=useState(false);

    console.log(country.population.population);

    const handleVisited=()=>{
      //basic system
      // if(visited){
      //   setVisited(false)
      // }else{
      //   setVisited(true);
      // }

      //2nd system

      // setVisited(visited?false:true);

      // 3rd
      setVisited(!visited);
      handleVisitedCountries(country);
    }
  return (
    //<div className={`country border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
    <div className={`country ${visited && 'country-visited'}`}>
<img src={country?.flags?.flags?.png} alt="{country.flags.flags.alt}"></img>
     <h3>Name:{country.name.common}</h3>
     <p>population:{country.population.population}</p>
     <p>{country.area.area} {country.area.area>300000?"Big Country":"small Country"}
     </p>
     <button onClick={handleVisited}>
      {
        visited ?" visited":"not visited"
      }
     </button>
    </div>
  )
}

export default Country

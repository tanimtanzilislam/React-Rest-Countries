import { use } from 'react';
import Country from'../Country/Country';
import './Countries.css'
import { useState } from 'react';

const Countries = ({ countriesPromise }) => {

  const [visitedCountries,setVisitedCountries]=useState([]);


  const handleVisitedCountries=(country)=>{
    console.log('handle visited Countries Clicked',country);
    const newVisitedCountries=[...visitedCountries,country];

    setVisitedCountries(newVisitedCountries)
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  console.log(countries);



  return (
    <div >
      <h1>In the countries: {countries.length}</h1>
      <h3> Total countries visited:{visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
        }
      </ol>
   <div className='countries'>
      {
        countries.map(country =>
          <Country   country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        )
      }
      </div>
    </div>
  );
}

export default Countries;
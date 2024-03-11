import React, { useEffect, useState } from 'react'

export const useCoffeeList = () => {
  const [originalCoffeeData, setOriginalCoffeeData] = useState([]);
  const [filteredCoffeeData, setFilteredCoffeeData] = useState([]);
  
  console.log('entra al hook');
  
  const fetchData = async () => {
    try {
      const response = await fetch(`https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`)
      const data = await response.json();

      if( !response.ok ) {
        throw new Error('Network response was not ok');
      }

      data.sort((a, b) => (a.available === b.available) ? 0 : a.available ? 1 : -1);

      setOriginalCoffeeData(data);
      setFilteredCoffeeData(data);
    } catch (error) {
      console.log('error', error);
    }
  }
    
  useEffect(() => {
    fetchData()
  }, []);

  const filterListCoffee = (filter) => {
    if (filter === 'availableNow') {
      const filtered = originalCoffeeData.filter(coffee => coffee.available === true);
      console.log('filtered-', filtered);
      setFilteredCoffeeData(filtered);
    } else {
      setFilteredCoffeeData(originalCoffeeData);
    }
  };
  
  return {
    filteredCoffeeData,
    filterListCoffee
  }
}

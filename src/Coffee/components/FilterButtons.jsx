import React, { useEffect, useState } from 'react';
import '../../App.css';
import { useCoffeeList } from '../hooks/useCoffeeList';
import { ButtonFilter } from '../../styled-component/CoffelistStyle';

export const FilterButtons = ({setCurrentData}) => {

    const [activeFilter, setActiveFilter] = useState('allProducts');
    const { filteredCoffeeData, filterListCoffee } = useCoffeeList();

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        filterListCoffee(filter);
    }

    useEffect(() => {
      setCurrentData(filteredCoffeeData);
    }, [filteredCoffeeData])
    
    
    console.log('filteresbuton', filteredCoffeeData);

  return (
    <ButtonFilter className="filter-buttons">
      <button
        className={activeFilter === 'allProducts' ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('allProducts')}
      >
        All Products
      </button>
      <button
        className={activeFilter === 'availableNow' ? 'filter-button active' : 'filter-button'}
        onClick={() => handleFilterClick('availableNow')}
      >
        Available Now
      </button>
    </ButtonFilter>
  );
}

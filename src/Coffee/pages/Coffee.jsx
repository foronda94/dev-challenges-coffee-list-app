import React, { useState, useEffect } from 'react';
import bgImg from  "../../assets/img/bg-cafe.jpg";
import vectorImg from '../../assets/img/vector.svg';
import { CardCoffee } from '../components/CardCoffee';
import { FilterButtons } from '../components/FilterButtons';
import { useCoffeeList } from '../hooks/useCoffeeList';
import { Coffe } from '../../styled-component/CoffelistStyle';
import '../../App.css';

export const Coffee = () => {
  
  const [currentData, setCurrentData] = useState([]);
  const [onSkeleton, setOnSkeleton] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setOnSkeleton(0)
    }, 1000);
  }, [currentData])
  
  
  return (
    <Coffe className='container'>
      <img className='coffee-list__image-header' src={bgImg} alt="coffe-list"/>
      <div className='coffee-list__container-list'>
        <div className='coffee-list__container-list-center'>
          <div>
            <img className="" src={vectorImg} alt="vector-coffee" />
            <h2 >Our Collection</h2>
            <p>
              Introducing our Coffee Colection, a selection of unique coffees from different roast types and origins,
              expertly roasted in small batches and shipped fresh weekly
            </p>

          </div>
        </div>
        <FilterButtons setCurrentData={ setCurrentData } setOnSkeleton={ setOnSkeleton }/>
        <CardCoffee currentData={ currentData } onSkeleton={ onSkeleton }/>
      </div>
    </Coffe>
  )
}

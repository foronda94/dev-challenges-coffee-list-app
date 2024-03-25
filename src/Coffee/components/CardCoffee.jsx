import React from 'react';
import { useCoffeeList } from '../hooks/useCoffeeList';
import '../../App.css';
import start from '../../assets/img/Star.svg';
import startOut from '../../assets/img/Star_fill.svg';
import { Card } from '../../styled-component/CoffelistStyle';
import { CardSkeleton } from './CardSkeleton';

export const CardCoffee = ({ currentData, onSkeleton }) => {

  return (
    <Card>
      <div className='card-container'>
        {currentData.map((coffee) => (
          <div key={coffee.id} className='card'>
            {
              onSkeleton === 1
              ?
                <CardSkeleton />
              :
              <>
                <div className='card-img'>
                  <img src={coffee.image} alt={coffee.name} />
                  <span className='card-info__popular'>
                    {
                      coffee.popular === true 
                      ? <p>Popular</p>
                      : ""
                    }
                  </span>
                </div>
                <div className='card-info'>
                  <p className='card-info__name'>{coffee.name}</p>
                  <p className='card-info__price'>{coffee.price}</p>
                </div>
                <div className='card-rating'>
                  <div style={{ }}>
                    <img className='' src={coffee.rating !== null ? startOut : start} alt={coffee.name} />
                    { 
                      coffee.rating === null 
                      ? 
                        <p className='card-rating__rating'>No ratings</p> 
                      : 
                        <p className='card-rating__vote' >{coffee.rating} <span>({coffee.votes} votes)</span></p>
                    }
                  </div>
                  { coffee.available === true ? "" : <p className='card-rating__soldOut'>Sold out</p> }
                </div>
              </>
            }
          </div>
          ))}
      </div>
    </Card>
  )
}

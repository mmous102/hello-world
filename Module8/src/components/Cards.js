import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Past Years Adventures!</h1>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the land'
              //label='Land'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore the sea'
             // label='Sea'
              path='/services'
            />

            <CardItem
              src='images/img-10.jpg'
              text='Explore the sky'
             // label='Sky'
              path='/services'
            />
          </ul>
          </div>
          <h1>Learn more about our Activities</h1>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Campfire Building'
             // label='New experience'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Horseback Riding'
             // label='Fun'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='Mountain Biking'
             // label='Workout'
              path='/sign-up'
            />
          </ul>

      </div>

    </div>
  );
}

export default Cards;

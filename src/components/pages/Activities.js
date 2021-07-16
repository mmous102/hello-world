import React from 'react';
import '../../App.css';
import './Activities.css';
import CardItem from './items';
import Footer from '../Footer';

 function Activities() {
  return (
    <div className='cards'>
      <h1>Check out our Camp Sites</h1>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/forest.jpeg'
              text='Explore the land'
              label='Forest'
              path='/services'
            />
            <CardItem
              src='images/sea.jpeg'
              text='Explore the sea'
             label='Sea'
              path='/services'
            />

            <CardItem
              src='images/mountain.jpeg'
              text='Explore the sky'
             label='Sky'
              path='/services'
            />
          </ul>
          </div>
          <h1>Our Activities</h1>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Campfire Building'
             label='Description: Teach kids how to start a fire from scratch with the monitors supervision'
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
              path='/products'
            />

          </ul>

      </div>
<div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/hiking.jpeg'
              text='Hiking'
             label='Hiking'
              path='/services'
            />
            <CardItem
              src='images/fishing.jpeg'
              text='Fishing'
             label='Fishing'
              path='/services'
            />
            <CardItem
              src='images/archery.jpeg'
              text='Archery'
             label='Archery'
              path='/services'
            />
            </ul>

      </div>
      <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/swimming.jpeg'
              text='Swimming'
              label='Swimming'
              path='/services'
            />
            <CardItem
              src='images/rescue.jpeg'
              text='Rescue'
              label='Rescue'
              path='/services'
            />
            <CardItem
              src='images/camping.jpeg'
              text='Camping'
              label='Camping'
              path='/services'
            />
            </ul>
      </div>
      <Footer/>
    </div>

  );
}

export default Activities;


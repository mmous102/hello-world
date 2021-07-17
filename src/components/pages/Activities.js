import React from 'react';
import '../../App.css';
import './Activities.css';
import CardItem from './items';
import Footer from '../Footer';

 function Activities(props) {
  let content = {
    English: {
      title: "Our Activities",
      camp: "Descover our outdoor camp sites",
      img1: "Explore the forest",
      img2: "Explore the sea",
      img3: "Explore the sky",
      Description: "Teach kids how to start a fire from scratch with the monitors supervision",
    },
    French: {
      title: "Nos activités",
      camp: "Decouvrez nos camps exterieurs",
      img1: "Decouvrez les forets",
      img2: "Decouvrez l'eau",
      img3: "Explorer le plein-air",
      Description: "Enseigner les enfants comment commencer le feu",
    }
  };

  props.language === "French"
    ? (content = content.French)
    : (content = content.English);

  return (
    <div className='app2'>
    <div className='cards'>
      <h1>{content.camp}</h1>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/forest.jpeg'
              text={content.img1}
              path='/services'
            />
            <CardItem
              src='images/sea.jpeg'
              text={content.img2}
              path='/services'
            />

            <CardItem
              src='images/mountain.jpeg'
              text={content.img3}
              path='/services'
            />
          </ul>
          </div>
          <h1>{content.title}</h1>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Campfire Building'
             label= {content.Description}
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
      </div>
      <Footer/>
    </div>

  );
}

export default Activities;


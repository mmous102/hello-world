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
      forest: "Explore the forest",
      sea: "Explore the sea",
      mountain: "Explore the sky",
      img4: "Campfire Building",
      Description: "Teach kids how to start a fire from scratch with the monitors supervision",
      img5: "Horseback Riding",
      Description1: "Teach kids how to ride a horse",
      img6: "Mountain Biking",
      Description2: "Teach kids how to ride a bike in Mountains",
      img7: "Hiking",
      Description3: "Help kids have a better cardio while doing hiking with their monitors",
      img8: "Fishing",
      Description4: "Teach kids how to fish",
      img9: "Archery",
      Description5: "Teach kids how to play archery",
      img10: "Swimming",
      Description6: "Teach students how to swim",
      img11: "Rescue",
      Description7: "Teach students what are the rescue procedures",
      img12: "Camping",
      Description8: "Teach students how to do a tent",

    },
    French: {
      title: "Nos activités",
      camp: "Découvrez nos camps exterieurs",
      forest: "Découvrez les forêts",
      sea: "Découvrez l'eau",
      mountain: "Explorer le plein-air",
      img4: "Feu de camp",
      Description: "Enseigner les enfants comment commencer le feu",
      img5: "Monter à cheval",
      Description1: "Enseigner les enfants comment monter sur le cheval",
      img6: "Vélo à montagne",
      Description2: "Enseigner les enfants comment conduire une bicyclette dans les montagnes",
      img7: "Randonnée",
      Description3: "Aider les enfants à faire de l'activité physique avec la supervision de leurs moniteurs",
      img8: "Pêche",
      Description4: "Enseigner les enfants comment pêcher",
      img9: "Tir à l'arc",
      Description5: "Enseigner les enfants comment jouer au tir à l'arc",
      img10: "Natation",
      Description6: "Donner des cours de natation aux enfants",
      img11: "Sauvetage",
      Description7: "Enseigner les enfants des cours de secourisme",
      img12: "Camping",
      Description8: "Enseigner les enfants comment faire du camping",

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
              text={content.forest}
              path='/services'
            />
            <CardItem
              src='images/sea.jpeg'
              text={content.sea}
              path='/services'
            />

            <CardItem
              src='images/mountain.jpeg'
              text={content.mountain}
              path='/services'
            />
          </ul>
          </div>
          <h1>{content.title}</h1>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text={content.img4}
             label= {content.Description}
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text={content.img5}
              label={content.Description1}
              path='/products'
            />
            <CardItem
              src='images/img-8.jpeg'
              text={content.img6}
              label={content.Description2}
              path='/products'
            />

          </ul>

      </div>
<div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/hiking.jpeg'
              text={content.img7}
             label={content.Description3}
              path='/services'
            />
            <CardItem
              src='images/fishing.jpeg'
              text={content.img8}
             label={content.Description4}
              path='/services'
            />
            <CardItem
              src='images/archery.jpeg'
              text={content.img9}
             label={content.Description5}
              path='/services'
            />
            </ul>

      </div>
      <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/swimming.jpeg'
              text={content.img10}
              label={content.Description6}
              path='/services'
            />
            <CardItem
              src='images/rescue.jpeg'
              text={content.img11}
              label={content.Description7}
              path='/services'
            />
            <CardItem
              src='images/camping.jpeg'
              text={content.img12}
              label={content.Description8}
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


import logo from './logo.svg';
import './App.css';

import RRRImg from "./images/RRR.jpg"
import IronManImg from "./images/ironman.jpg"
import NCFOMImg from "./images/NCFOM.jpg"
import JaiBhimImg from "./images/JaiBhim.jpg"

import { useState } from "react";



export default function  App() {
  let initialData = [
    {
      image:RRRImg,
      title:"RRR",
      rating:8.8,
      description:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments"
  
    },
  
    {
      image:IronManImg,
      title:"Iron man 2",
      rating:7,
      description:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
  
    {
      image:NCFOMImg,
      title:"No Country for Old Men",
      rating:8.1,
      description:"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
  
    {
      image:JaiBhimImg,
      title:"Jai Bhim",
      rating:8.8,
      description:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"
    }
  
  ]



  const [data, setData] = useState([
    {
      image:RRRImg,
      title:"RRR",
      rating:8.8,
      description:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments"
  
    },
  
    {
      image:IronManImg,
      title:"Iron man 2",
      rating:7,
      description:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
  
    {
      image:NCFOMImg,
      title:"No Country for Old Men",
      rating:8.1,
      description:"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
  
    {
      image:JaiBhimImg,
      title:"Jai Bhim",
      rating:8.8,
      description:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"
    }
  
  ]);
  const [name,setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [rating, setRating] = useState(null);
  return (
    <div>
     <div className='movies-container'>
      {data.map((ele, index) => <MovieInfo imageUrl={ele["image"]} title={ele["title"]} rating={ele["rating"]} key= {index} description={ele["description"]}/>)}
     </div>
     <div className='add-movie-container'>
        <div>
          <label for="add-movie-name">Name</label>
          <input onChange= {(event) => {
            setName(event.target.value);
          }} type="text" id="add-movie-name"  required/>
        </div>

        <div>
          <label  for="add-movie-description">description</label>
          <input onChange= {(event) => {
            setDescription(event.target.value);
          }} type="text" id="add-movie-description"  required/>
        </div>

        <div>
          <label for="add-movie-imageurl"> ImageUrl</label>
          <input onChange= {(event) => {
            setImageUrl(event.target.value);
          }} type="text" id="add-movie-imageurl"  required/>
        </div>

        <div>
          <label for="add-movie-rating">Rating</label>
          <input onChange= {(event) => {
            setRating(event.target.value);
          }} type="number" id="add-movie-rating" required/>
        </div>

        <button onClick={(event) => {
          let obj = {
            image:imageUrl,
            title:name,
            rating:rating,
            description:description

          }
          console.log(obj);
          setData([...data,obj]);
        }}>Add Movie</button>
     </div>
    </div>
  );


}

function MovieInfo({imageUrl, title, rating, description}) {
  const [display,setDisplay] = useState(true);
  return (
    <div className='movie-info-container'>
      <img className='movie-poster' src={imageUrl} alt={title}/>
      <Title title={title} rating={rating}/>
      <button onClick={() => setDisplay(!display)}>Toogle</button>
      {display?<p>{description}</p>:null}
      <Counter />
    </div>
  );
}

function Title({title, rating}) {
  const styles = {
    color: rating >=8.5 ? "green" : "red"
  }
  return(
    <div className='movie-stats'>
      <h2>{title}</h2>
      <p style={styles}>⭐{rating}</p>
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const[dislike, setDislike] = useState(0);
  return (
  <div>
    <button onClick={() => setLike(like+1)}>👍{like}</button>
    <button onClick={() => setDislike(dislike+1)}> 👎{dislike}</button>
  </div>
  );
}

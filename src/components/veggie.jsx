import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from "@splidejs/react-splide"; 
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom"

export default function Veggie() {
 
  const [veggie, setVeggie] = useState([])

  useEffect(()=>{
      getPopular()
  },[])

  const getPopular = async()=>{

      const check = localStorage.getItem("veggie")

      if(check){
          setVeggie(JSON.parse(check))
      }
      else{
          try{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=5fc09e12b5a04f0da70344a5b7d13629&number=9&tags=vegetarian`);
      const data = await api.json()
      localStorage.setItem("veggie", JSON.stringify(data.recipes))
      setVeggie(data.recipes)
      console.log(data.recipes)
      // console.log(JSON.stringify(data.recipes))
      }catch(err){
          console.log(`failed to get data ${err}`)
      }
      }
  }
  // const Wrapper = styled.div`
  //     margin: 0rem 4rem;
  // `;
  // const Card = styled.div`
  //     min-height: 30rem;
  //     border-radius: 2rem;
  //     overflow: hidden;
  //     position:relative;

  //     img{
  //         position:absolute;
  //         object-fit:cover;
  //         border-radius: 2rem;
  //     }
  //     p{
  //         position: absolute;
  //         z-index: 10;
  //         left: -1%;
  //         bottom: -10%;
  //         transform: translate (-50%, 0%);
  //         color: white;
  //         width: 100%;
  //         text-align: center;
  //         font-weight: 600;
  //         font-size: 1.5rem;
  //         height: 40%;
  //         display: flex;
  //         justify-content: center;
  //         align-items: center;
  //     }
  // `;

  const Wrapper = styled.div`
  margin: 2rem 0rem;
`;
const Grad = styled.div`
  height:90.8%;
  border-radius:0.8rem;
  width:100%;
  z-index:7;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3));
  position:absolute;
`
const Card = styled.div`
  border-radius:0.8rem;
      min-height:21rem;
      min-width:27rem;
      overflow:hidden;
      display:flex;
      flex-direction: column;
      object-position: center;


  img{
      border-radius:0.8rem;
  }
  p{
      transform: translate(0, -2rem);
      margin-inline:auto;
      z-index:10;
      color:white;
  }
`;

  return(<div>{Array.isArray(veggie) && veggie.length > 0 ? (
      <Wrapper><h3>
      Veggie Choices
  </h3><Splide options={{perPage:3, arrows:false, gap:'5rem', drag:true}}>
      {veggie.map((recipe)=>{return(<SplideSlide key={recipe.id}>
        <Link to={"/recipe/"+recipe.id}>
        <Card>
        <img src={recipe.image} alt={recipe.title}/><p>{recipe.title}</p><Grad></Grad>
        </Card>
        </Link>
        </SplideSlide>)})}
  </Splide>
  </Wrapper>
  ):(
      <p>Loading...</p>
  )}
  </div>)
}
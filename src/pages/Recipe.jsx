import React from 'react'
import { useEffect, useState } from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom'

const Wrapper = styled.div`
  margin-block:7rem;
  display:flex;
  .active{
    background:linear-gradient(35deg, #494949, #313131);
    color:white;
  }
  h2{
    margin:bottom;
  }
  li{
    font-size:1.2rem;
    line-height:2.5rem;
  }
  ul{
    margin-top:2rem;
  }
  img{
    margin:1rem;
    border-radius:1rem;
    background-color:black;
  }
  p{
    margin:1rem;
    font-size:1.5rem;
  }
` 
const Btn = styled.button`
  padding:1rem 2rem;
  color:#494949;
  background-color:white;
  border:2px solid black;
  font-weight:600;
  margin:1rem;
  border-radius:0.3rem;

`
const Info = styled.div`
  margin-inline:5rem;
`


function Recipe() {
  const params = useParams()
  const [details, setDetails] = useState({}) 
  const [activeTab, setActiveTab] = useState("Instructions")

  const fetchDetails = async ()=>{

    
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=5fc09e12b5a04f0da70344a5b7d13629`)
    const detailsData = await data.json()
    setDetails(detailsData)
  }
  useEffect(()=>{
    fetchDetails()
  },[params.name])

  return (<Wrapper>
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt="" loading="lazy"/>
    </div>
    <Info>
      <Btn className={activeTab === "Instructions" ? "active" : ''} onClick={()=> setActiveTab("Instructions")}>Instructions</Btn>
      <Btn className={activeTab === "Ingredients" ? "active" : ''} onClick={()=>setActiveTab("Ingredients")}>Ingredients</Btn>
      {activeTab === "Instructions" && (
      <div>
        <p dangerouslySetInnerHTML={{__html:details.summary}}></p>
        <p dangerouslySetInnerHTML={{__html:details.instructions}}></p>
      </div>
      )}
      {activeTab === "Ingredients" && (
      <ul>
          {details.extendedIngredients.map((Ingredient)=>{
            return(<li key={Ingredient.id}>{Ingredient.original}</li>)
          })}
      </ul>
      )}
    </Info>
  </Wrapper>
  )
}

export default Recipe

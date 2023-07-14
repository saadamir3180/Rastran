import React from 'react'
import {useEffect, useState} from "react"
import styled from "styled-components"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Grid = styled.div`
display: flex; 
flex-wrap: wrap; 
`
const Card = styled.div`
 width:25%;
 padding:1rem;
 img{
  width:100%;
  border-radius:2rem;
 }
 a{
  text-decoration:none;
 }
 h4{
  text-align:center;
  padding:1rem;
 }

`

function Searched() {

    const param = useParams()
    const [searchedRecipies, setSearchedRecipies] = useState([])
    const getSearched = async(name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5fc09e12b5a04f0da70344a5b7d13629&number=9&query=${name}`) 
        const recipes = await data.json()
        setSearchedRecipies(recipes.results)
       }
       useEffect(()=>{
        getSearched(param.search)
        //.srearch beacuse we used search key word in router
       },[param.search])


 
 
   return ( <Grid>
            {searchedRecipies.map((item)=>{
                return(<Card key={item.id}>
                    <Link to={"/recipe/"+ item.id}>
                    <img src={item.image} />
                    <h4>{item.title}</h4>
                    </Link>
                    </Card>)
            })}
            </Grid>
     
   )
}

export default Searched

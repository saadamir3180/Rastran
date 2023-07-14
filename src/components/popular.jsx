import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from "@splidejs/react-splide"; 
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from "react-router-dom"


export default function Popular() {

    const [popular, setPopular] = useState([])

    useEffect(()=>{
        getPopular()
    },[])

    const getPopular = async()=>{

        const check = localStorage.getItem("popular")

        if(check){
            setPopular(JSON.parse(check))
        }
        else{
            try{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=5fc09e12b5a04f0da70344a5b7d13629&number=9`);
        const data = await api.json()
        localStorage.setItem("popular", JSON.stringify(data.recipes))
        setPopular(data.recipes)
        console.log(data.recipes)
        // console.log(JSON.stringify(data.recipes))
        }catch(err){
            console.log(`failed to get data ${err}`)
        }
        }
    }
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

    return(<div>{Array.isArray(popular) && popular.length > 0 ? (
        <Wrapper><h3>
        Popular Choices
    </h3><Splide options={{perPage:3, arrows:false, gap:'5rem', drag:true}}>
        {popular.map((recipe)=>{return(<SplideSlide key={recipe.id}>
            <Link to={"/recipe/"+recipe.id}>
            <Card>
            <img src={recipe.image} alt={recipe.title}/>
            <p>{recipe.title}</p>
            <Grad></Grad>
            </Card>
            </Link></SplideSlide>)})}
    </Splide>
    </Wrapper>
    ):(
        <p>Loading...</p>
    )}
    </div>)
}

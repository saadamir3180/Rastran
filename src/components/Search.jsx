import React from 'react'
import styled from "styled-components" 
import { useState } from "react"
import {FaSearch} from "react-icons/fa"
import {useNavigate, Link} from "react-router-dom"

const FormStyle = styled.form`
margin:2% 50%;
position:relative;
input{
 border:none;
 background:linear-gradient(35deg, #494949, #313131);
 font-size:1.5rem;
 color:white;
 padding:1rem 3rem;
 border:none;
 border-radius:1rem;
 outline:none;
transform:translate(-50%, 0%);
 width:35rem;
}
svg{
 position:relative;
 top:50%;
 left:-50%;
 transform:translate(-16.4rem, 2.7rem);
 z-index:10;
 color:white;
}
`

function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const submitHandler = (e)=>{
      e.preventDefault();
      navigate("/searched/"+input)
    }


  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
      <FaSearch></FaSearch>
      <input onChange={(e)=>setInput(e.target.value)} type="text" value={input}/>
      </div>
    </FormStyle>
  )
}

export default Search;

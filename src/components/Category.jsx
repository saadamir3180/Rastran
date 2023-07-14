import { FaPizzaSlice, FaHamburger } from "react-icons/fa"; 
import { GiNoodles, GiChopsticks } from "react-icons/gi"; 
import styled from "styled-components";
import { NavLink } from "react-router-dom"

const List = styled.div`
    display:flex;
    justify-content:center;
    margin:2rem 0rem;
`
const Slink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:1rem;
    margin-inline:0.5rem;
    border-radius:50%;
    width:5.5rem;
    height:5.5rem;
    cursor:pointer;
    background:linear-gradient(35deg, #494949, #313131);
    border:1px solid black;
    h4{
        color:white;
        font-size:0.9rem;
    }
    svg{
        color:white;
        font-size:1.5rem;
    }
    &.active{
        background:linear-gradient(to right, #f27121, #e94057);
    }
` 


function Category() {



return (<List>
         <Slink to={"/cuisine/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
         </Slink>
         <Slink to={"/cuisine/American"}>
            <FaHamburger/>
            <h4>American</h4>
         </Slink>
         <Slink to={"/cuisine/Thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
         </Slink>
         <Slink to={"/cuisine/Japanese"}>
            <GiChopsticks/>
            <h4>Japanese</h4>
         </Slink> 
       </List>)
}
export default Category
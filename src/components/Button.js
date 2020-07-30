import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
// border: ${props => (props.cart?"#ff0000":"var(--lightBlue)")};
// border-color: ${props => (props.cart?"#ff0000":"var(--lightBlue)")};
color: ${props => (props.cart?"#ffffff":"#ffffff")};
border: 1.5px solid white;
border-radius: 8px;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
// &:hover{
//     background: #066705;
//     background-color:${props => (props.cart?"var(--)":"#066705")};
//     color:#ffffff;
// }
&:focus{
    outline: none;
}
`
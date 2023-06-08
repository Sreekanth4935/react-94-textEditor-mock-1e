import Styled from 'styled-components'

export const MainContainer = Styled.div`
background-color:#1b1c22;
min-height:100vh;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
color:#fff;
`
export const SecondContainer = Styled.div`
display:flex;
flex-direction:row;
width:80%;
height:70vh;
background-color:#25262c;
`

export const TextEditorContainer = Styled.div`
width:50%;
padding:10px;
display:flex;
flex-direction:column;
align-items:center;
`
export const TextAreaContainer = Styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:flex-start;
border:solid 1px #334155;
margin:20px;
border-radius:5px;
`
export const Button = Styled.button`
border:0px;
background-color:transparent;
color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
margin-top:20px;

`

export const TextArea = Styled.textarea`
background-color:#1b1c22;
color:white;
outline:none;
padding:10px;
width:100%
width:auto;
border:solid 1px #25262c;
font-size:20px;
border-radius:5px;
font-weight:${props => (props.isActiveFontWeight ? 'bold' : 'normal')};
font-style:${props => (props.isActiveFontFamily ? 'italic' : 'normal')};
text-decoration:${props =>
  props.isActiveTextDecoration ? 'underline' : 'normal'};
`
export const IconsContainer = Styled.ul`
width:100%;
border-bottom:solid 1px #334155;
background-color: #1b1c22;
border-radius:5px;
display:flex;
flex-direction:row;
align-items:center;
list-style:none;
padding:0;
margin-top:0px;
margin-bottom:0px;
`

export const ListItem = Styled.li`
margin:10px;
`

export const ImageTextEditor = Styled.img`
margin-top:15%;
height:200px;

`

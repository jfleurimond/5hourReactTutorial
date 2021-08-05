//this is another way to make the code cleaner and add the export function and function at once
//going to learn how to make conditionals 
// if a prop is not available or not using the ternary operator

import MainContent from "./MainContent"

export default function ConditionalLogic (props){

    return(
        // below will not display because no prop answer was provided within MainContent.js
    <p style={{display: props.answer ? "block" : "none"}}> A prop was provided {props.answer} </p>
    );
}
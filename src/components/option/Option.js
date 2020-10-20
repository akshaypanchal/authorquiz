import React from 'react';
import './option.css';

function Option({author, options, answer}){

    let optionArray;
    let btnClickFlag = true;
    let selectedOption;
    let colorChangedElement;

    // function for option selection and change the background color to blue
    function optionSelected(item){

         colorChangedElement =  document.getElementById(item);
       if(btnClickFlag)
       {
            colorChangedElement.style.backgroundColor="blue";
            selectedOption=item;
            btnClickFlag=false;
       }
       else{
        
        colorChangedElement.style.backgroundColor = "#c4e8f2";
        btnClickFlag=true;

       }
       
    }


    //function for comparing the answer with selectedoption and change styling 
   const checkAnswer = () =>{
        let colorChangedElement = document.getElementById(selectedOption);
        if(selectedOption === answer){
            colorChangedElement.style.backgroundColor = "green";
        }
        else{
            colorChangedElement.style.backgroundColor="red";
        }
                
    }


    // calling function to render all the options one by one 
    function renderArray (){
        if(options){
            optionArray = options.map(item=>{
                return <div key={item} id={item} onClick={optionSelected.bind(this,item)} className="options">{item}</div>;
            })
        }
        else{
            optionArray = "";
        }

        return <div>{optionArray}</div>
    }

    return(
        <div className="grid-container">
            <h3 className="author">{author}</h3>
            {
                //calling the function for options rendering
                renderArray()       
            }
            <button className="button" onClick={checkAnswer.bind(this)}>Check Answer</button>
        </div>
    );


};

export default Option;




// let colorChange =  document.getElementById(item);
// if(item===answer){
//     colorChange.style.backgroundColor="green";
// }
// else{
//     colorChange.style.backgroundColor="red";
// }
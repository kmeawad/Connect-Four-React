import './index.css';
import React, {useState} from 'react';

let color = 1; // if color is 1 then red, if color is 2 then yellow
let width = 5, height = 5; //width and height of the table
let yCounter = 0, rCounter = 0; //counter for how many yellows and reds in the grid/table 

//function to check if there are any 4 same colors in a row
function CheckWinner(buttonID, colorCheck){
  let x = 0 , y = 0, d1 = 0, d2 = 0;// x = horizontal, y = vertical, d1 & d2 = diagonal
  let rowNo = FindRow(buttonID); // find which row the button is in 

  //x start
  //check how many to the right
  let num = parseInt(buttonID)  + 1; //start from the button on the right
  for(let i=num; i<=num+2; i++){ //loop to check the next 2 buttons
    if(i<= (rowNo*width) && i>=(((rowNo*width)-(width-1)))){ //ensures it doesn't check outside the same row
      if(colorCheck == document.getElementById(String(i)).textContent) //if the color of the current button is the same as the original button that called the function then increment x
        x++;
      else 
        break;
    }
  }

  //check how many to the left
  num = parseInt(buttonID) - 1; // start from the button on the left
  for(let i=num; i>=num-2; i--){
    if(i<= (rowNo*width) && i>=(((rowNo*width)-(width-1)))){
      if(colorCheck == document.getElementById(String(i)).textContent)
        x++;  
      else 
        break; 
    }
  }
  
  //y start
  //check how many above
  num = parseInt(buttonID) + width; //start from the button above
  for(let i=num; i<=num + 2*width; i += width){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        y++;  
      else 
        break; 
    }
  }

  //check how many below
  num = parseInt(buttonID) - width;
  for(let i=num; i>=num - 2*width; i -= width){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        y++; 
      else 
        break;  
    }
  }

  //d1 start
  //check how many top left
  num = parseInt(buttonID) + 1 + width;
  for(let i=num; i<=num + 2*(width+1); i += width + 1){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        d1++;  
      else 
        break; 
    }
  }
  //check how many bottom right
  num = parseInt(buttonID) - (1 + width);
  for(let i=num; i>=num - 2*(width+1); i -= (width + 1)){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        d1++;
      else 
        break;   
    }
  }

  //d2 start
  //check how many top right
  num = parseInt(buttonID) - 1 + width;
  for(let i=num; i<=num + 2*(width-1); i += width - 1){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        d2++;  
      else 
        break; 
    }
  }
  //check how many bottom left
  num = parseInt(buttonID) + 1 - width;
  for(let i=num; i>=num - 2*(width-1); i += 1 - width){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        d2++;  
      else 
        break; 
    }
  }

  //if there are 3 more (other than the current button) with the same color then inform winner
  if(x >= 3 | y >= 3 | d1 >= 3 | d2 >= 3 ){
    alert(colorCheck + " wins")
    window.location.reload(false);//refresh page to restart
  }
  else if(yCounter + rCounter == width*height){  //if there are no buttons to click then draw
    alert("Draw")
    window.location.reload(false);
  }  
}

//function to find which row a button is in 
function FindRow(buttonID){
  let remainder = parseInt(buttonID)/width;
  
  return Math.ceil(remainder)
}

//function to allow the next button above to be clickable
function SetNextClickable(buttonID){
  let nextID = parseInt(buttonID) + width; // get the button above current button
  if(nextID <= height*width) // if the button is within grid then set its text to 'Click'
    document.getElementById(String(nextID)).textContent = 'Click';
}


function Buttons(props){
  const [changeColor, setChangeColor] = useState('Empty'); //state to store color of button
  const [hasBeenClicked, setHasBeenClicked] = useState(false); //state to store if the button can still be clicked or has been clicked
  const [clickable, setClickable] = useState(false); //state to store if button may be clicked or not based on if the button below it was clicked
  
  
  return(
    <button id={props.id} className={changeColor} onClick={() => {
      if(clickable){
        let newState;
        //change newState (used for changeColor) based on which player's turn
        if(color == 1 & !hasBeenClicked){ 
          newState = 'red';
          color = 2; //set to next player's color 
          rCounter++;
          setHasBeenClicked(true); //set hasBeenClicked to true so that it doesn't change again
          SetNextClickable(props.id); //set the next button above to be clickable
        }
        else if(color == 2 & !hasBeenClicked) {
          newState = 'yellow';
          color = 1;
          yCounter++;
          setHasBeenClicked(true);
          SetNextClickable(props.id);
        }
        else 
          newState = changeColor; //else keep same color state

        setChangeColor(newState);
        CheckWinner(props.id, newState);         
      }
    }     
    } onMouseOver ={() => { 
        //if the button was hovered on and it's 1st row or its text is Click then set its clickable to true
        if(FindRow(props.id) == 1 || document.getElementById(props.id).textContent == 'Click')
          setClickable(true)  
    }}> 
    {changeColor}</button> //set text to changeColor
  ); 
}

export default Buttons;
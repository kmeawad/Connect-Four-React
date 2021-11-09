import './index.css';
import React, {useState} from 'react';

//test
let color = 1, width = 5, height = 5; // if color is 1 then red, if color is 2 then yellow
let yCounter = 0, rCounter = 0;

function CheckWinner(buttonID, colorCheck){
  let x = 0 , y = 0, d1 = 0, d2 = 0;
  let rowNo = FindRow(buttonID);

  //x start
  let num = parseInt(buttonID)  + 1;
  for(let i=num; i<=num+2; i++){
    if(i<= (rowNo*width) && i>=(((rowNo*width)-(width-1)))){
      if(colorCheck == document.getElementById(String(i)).textContent)
        x++;
      else 
        break;
    }
  }

  num = parseInt(buttonID) - 1;
  for(let i=num; i>=num-2; i--){
    if(i<= (rowNo*width) && i>=(((rowNo*width)-(width-1)))){
      if(colorCheck == document.getElementById(String(i)).textContent)
        x++;  
      else 
        break; 
    }
  }
  
  //y start
  num = parseInt(buttonID) + width;
  for(let i=num; i<=num + 2*width; i += width){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        y++;  
      else 
        break; 
    }
  }

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
  num = parseInt(buttonID) + 1 + width;
  for(let i=num; i<=num + 2*(width+1); i += width + 1){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        d1++;  
      else 
        break; 
    }
  }

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
  num = parseInt(buttonID) - 1 + width;
  for(let i=num; i<=num + 2*(width-1); i += width - 1){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        d2++;  
      else 
        break; 
    }
  }

  num = parseInt(buttonID) + 1 - width;
  for(let i=num; i>=num - 2*(width-1); i += 1 - width){
    if(i<= (height*width) && i>=1){
      if(colorCheck == document.getElementById(String(i)).textContent)
        d2++;  
      else 
        break; 
    }
  }

  if(x >= 3 | y >= 3 | d1 >= 3 | d2 >= 3 ){
    alert(colorCheck + " wins")
    window.location.reload(false);
  }
  else if(yCounter + rCounter == width*height){  
    alert("Draw")
    window.location.reload(false);
  }  
}

function FindRow(buttonID){
  let remainder = parseInt(buttonID)/width;
  
  return Math.ceil(remainder)
}

function SetNextClickable(buttonID){
  let nextID = parseInt(buttonID) + width;
  if(nextID <= height*width)
    document.getElementById(String(nextID)).textContent = 'Click';
}


function Buttons(props){
  const [changeColor, setChangeColor] = useState('Empty');
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [clickable, setClickable] = useState(false);
  
  
  return(
    <button id={props.id} className={changeColor} onClick={() => {
      if(clickable){
        let newState;
        if(color == 1 & !hasBeenClicked){
          newState = 'red';
          color = 2;
          rCounter++;
          setHasBeenClicked(true);
          SetNextClickable(props.id);
        }
        else if(color == 2 & !hasBeenClicked) {
          newState = 'yellow';
          color = 1;
          yCounter++;
          setHasBeenClicked(true);
          SetNextClickable(props.id);
        }
        else 
          newState = changeColor;

        setChangeColor(newState);
        CheckWinner(props.id, newState);         
      }
    }     
    } onMouseOver ={() => { 
        if(FindRow(props.id) == 1 || document.getElementById(props.id).textContent == 'Click')
          setClickable(true)  
    }}> 
    {changeColor}</button>
  ); 
}

export default Buttons;
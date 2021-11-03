import './index.css';
import React, {useState} from 'react';
import Buttons from './Button';

function ButtonsGrid(){
   
  return(
    <table>
      <tr>
        <td><Buttons id='25'></Buttons></td>
        <td><Buttons id='24'></Buttons></td>
        <td><Buttons id='23'></Buttons></td>
        <td><Buttons id='22'></Buttons></td>
        <td><Buttons id='21'></Buttons></td>
      </tr>
      <tr>
        <td><Buttons id='20'></Buttons></td>
        <td><Buttons id='19'></Buttons></td>
        <td><Buttons id='18'></Buttons></td>
        <td><Buttons id='17'></Buttons></td>
        <td><Buttons id='16'></Buttons></td>
      </tr>
      <tr>
        <td><Buttons id='15'></Buttons></td>
        <td><Buttons id='14'></Buttons></td>
        <td><Buttons id='13'></Buttons></td>
        <td><Buttons id='12'></Buttons></td>
        <td><Buttons id='11'></Buttons></td>
      </tr>    
      <tr>
        <td><Buttons id='10'></Buttons></td>
        <td><Buttons id='9'></Buttons></td>
        <td><Buttons id='8'></Buttons></td>
        <td><Buttons id='7'></Buttons></td>
        <td><Buttons id='6'></Buttons></td>
      </tr>  
      <tr>
        <td><Buttons id='5'></Buttons></td>
        <td><Buttons id='4'></Buttons></td>
        <td><Buttons id='3'></Buttons></td>
        <td><Buttons id='2'></Buttons></td>
        <td><Buttons id='1'></Buttons></td>
      </tr>  
    </table> 
  );
}

export default ButtonsGrid;

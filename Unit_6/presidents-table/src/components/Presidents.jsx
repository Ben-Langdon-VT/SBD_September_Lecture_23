import React from 'react'
import PresidentTable from './PresidentTable'
import presidentsArray from './presidents.constant';



function Presidents() {

  const livingPresidents = [];
  const deadPresidents = [];

  presidentsArray.forEach(president => {
    if (president.passed === undefined){
      livingPresidents.push(president);
    }
    else{
      deadPresidents.push(president);
    }
  });


  return (
    <div>
      <h2>Presidents</h2>
      <PresidentTable title = "Living Presidents" presidentsArray = {livingPresidents}/>
      <PresidentTable title = "Dead Presidents "presidentsArray = {deadPresidents}/>
    </div>
  )
}

export default Presidents
import { useState } from 'react';
import './App.css';

function App() {
  const [marks, setMarks] = useState([10,120,21,12,32,23,1,12213,232,3232,232]);

  // const inc = (index) => {
   
  //   let copyMarks=[...marks]
  //   copyMarks[index]++
  //   setMarks(copyMarks);
  //   // setCounter(counter + 1);
     
  // };

 const dec=(index,value)=>
 {

   let copyMarks=[...marks];

   copyMarks[index] +=value;

    setMarks(copyMarks)
  }

  return(
    <>
    
    <h1>Makrs Sheet</h1>

     <ul>
      {

       marks.map((x, index)=>( <li><button onClick={()=>dec(index, +1)}>+</button>{x}
       <button onClick={()=>dec(index,-1)} disabled={x===0} >-</button></li>)  )     }


</ul>


    
    </>
  )













}



export default App;

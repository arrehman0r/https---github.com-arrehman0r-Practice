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

 const dec=(x,index,value)=>{

   let copyMarks=[...marks]

  //  let update = 0

   if (x > 0 && (value == -1))
   { 
    // update = x + value;
   copyMarks[index] +=value
   
   }
    if (value == +1)
              
              
    {  copyMarks[index] +=value}

    setMarks(copyMarks)
  }

  return(
    <>
    
    <h1>Makrs Sheet</h1>

     <ul>
      {

       marks.map((x, index)=>( <li><button onClick={()=>dec(x,index, +1)}>+</button>{x}
       <button onClick={()=>dec(x,index,-1)}>-</button></li>)  )     }


</ul>


    
    </>
  )













}



export default App;

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

   let update = x + value;
   if (x>0)
   { 
   copyMarks[index]--
   
              }
    setMarks(copyMarks)
  }

  return(
    <>
    
    <h1>Makrs Sheet</h1>

     <ul>
      {

       marks.map((x, index)=>( <li><button onClick={()=>dec(index, +1)}>+</button>{x}
       <button onClick={()=>dec(x,index,-1)}>-</button></li>)  )     }


</ul>


    
    </>
  )













}



export default App;

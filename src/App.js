import React from 'react';
import Card from './Card';
import Data from './Data'



function App(){
  return( 
    <>
    <h1 className="heading">List of top 5 Netflix series</h1>
    {Data.map((val)=>{
                return(
                <Card
                imgsrc={val.imgsrc}
                sname={val.sname}
                watchme={val.watchme}
                />
                )
  })};
    </>
  );
}
export default App;

// function name(a,b){
//   return a+b;
// }

// const name = (a,b) => a+b;


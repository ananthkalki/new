import React from 'react';
function Hello(){
    const sayHello= () =>{
        console.log("hello");
    };
    return(
        <div>
            <h1>hii</h1>
            <button onClick={sayHello}>hi</button>
        </div>
    );

}
export default Hello;
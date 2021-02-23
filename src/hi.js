import React from "react";

function Say() {
  const hello = () => {
    console.log("hello");
  };
  return (
    <div>
        <button onClick={hello}>butt0n</button>
    </div>       
  );
}

export default Say;

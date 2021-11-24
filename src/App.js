import React from "react"
import './App.scss';
import Portfolio from './Code/Components/PortfolioProject/Portfolio';
const { useRef, useState, useEffect } = React;

const App=()=> {
  const elRef = useRef();
  const [elWidth, setElWidth] = useState();

  useEffect(() => {
    setElWidth(elRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <input ref={elRef} style={{ width: "100px" }} />
      <input ref={elRef} style={{ width: "100px" }} />
        {/* Width is: {elWidth} */}
      
    </div>
  );
};


export default App;
  
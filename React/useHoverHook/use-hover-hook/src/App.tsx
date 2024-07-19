import { useState } from 'react';
import { useHover } from './hooks/useHovetr'
import { useToggle } from './hooks/useToggle';
import "./cssPractice/practise.scss"


function App() {
  const [ref, isHovered] = useHover();
  // const [toggle, toggleHandler] = useToggle(false);
  // const [tog, setTog] = useState(false);
  // console.log(ref,"ref", isHovered, "ref");
  
  return (
    <>
      {/* <div ref={ref}>{isHovered ? "hovered" : "not hovered"}</div> */}
       <label >
        {/* <input type="checkbox" onChange={toggleHandler(toggle)}>Hello</input> */}
        <span></span>
      </label>
      
      <div className='container'></div>
    </>
  );
}

export default App

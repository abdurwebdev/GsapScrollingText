import React, { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

const App = () => {
  const [direction, setDirection] = useState(1);
  const [rotates, setRotates] = useState(1);
  const mainRef = useRef(null);
  useEffect(() => {
    const main=mainRef.current;
    const handleMouseWheel = (e) =>{
    if(e.deltaY>0)
    {
      setDirection(-1);
      setRotates(-1);
    }
    else
    {
      setDirection(1);
      setRotates(1);
    }
    }
    main.addEventListener("wheel",handleMouseWheel);
    return () => {
    main.removeEventListener("wheel",handleMouseWheel);
    }
  }, [])
  
  return (
    <div ref={mainRef} >
      <div id="page1"></div>
      <div id="page2" >
        <div>
          <Marquee direction={direction===1?"right":"left"} speed={40} >
            <div className='hel'>
              <h1>I can be a  or just some text</h1>
              <img className={`arrow ${rotates===1?"rotate-180":"rotate-0"}`} src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="" />
            </div>
          </Marquee>
        </div>
      </div>
      <div id="page3"></div>
    </div>
  );
};

export default App;

import React,{ useLayoutEffect, useEffect, useRef } from 'react'

function LayoutEffectTutorial() {
    const inputRef = useRef(null);


    useLayoutEffect (() => {
        console.log(inputRef.current.value);
    }, []);

    useEffect (() => {
        inputRef.current.value = "Hello";
    },[]);

  return (<div className='App'>
           <input ref={inputRef} value="DANISH" />           
         </div>
);
}

export default LayoutEffectTutorial;

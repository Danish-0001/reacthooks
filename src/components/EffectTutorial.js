import React,{ useEffect, useState } from 'react';
import axios from 'axios';

function EffectTutorial() {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() =>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) =>{
            setData(response.data[0].email)
            console.log("API was called");
        });
    },[]);
  return ( <div>
                    <h1>{data}</h1>
                    <h2>{count} </h2>
                    <button onClick={() =>{
                        setCount(count + 1);
                    }}>Click Me
                    </button>
         </div>
  );
}

export default EffectTutorial;

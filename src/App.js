import React , {useRef, useState} from "react";
import './App.css';
import useRandomJoke from "./CustomHook/useRandomJoke";

function App() {
  
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const[firstName , setFirstName] = useState("Bhavana");
  const[lastName , setLastName] = useState("Reddy");

  const joke = useRandomJoke(firstName , lastName)

 const generateJoke = (e) => {
   e.preventDefault();
   setFirstName(firstNameRef.current.value);
   setLastName(lastNameRef.current.value);
 }


  return (
    <div className="container-sm">
      <div className="Card col-md-6 mx-auto mt-5 card-color text-center">
        <h1 className="card-header" >Random Jokes</h1>
        <div className="card-body">
          <div className="card-text">{joke}</div>
          <div className="max-auto text-center mt-5">
            <input className="mb-3" placeholder="First Name" ref={firstNameRef}></input> <br></br>
            <input placeholder="Last Name" ref={lastNameRef}></input>  <br></br>
            <button className="btn btn-block btn-voilet mt-4" onClick={generateJoke}>Generate Joke</button>
          </div>

        </div>

      </div>
    </div>

  );
}

export default App;

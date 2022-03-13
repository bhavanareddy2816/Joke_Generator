import React , {useEffect, useState} from "react";
import './App.css';

function App() {
  const [joke , setJoke] = useState();
  
  const generateJoke = () => {
    const fetchJoke = async() => {
      await fetch("http://api.icndb.com/jokes/random?firstName=Bhavana&&lastName=Reddy")
      .then(res => res.json())
      .then(data => setJoke(data.value.joke))
    }
    fetchJoke();
  }
    useEffect(() => {
      generateJoke();
    } , []);

  
  return (
    <div className="container-sm">
       <div className="Card col-md-6 mx-auto mt-5 card-color text-center">
       <h1 className="card-header" >Random Jokes</h1>
       <div className="card-body">
        <div className="card-text">{joke}</div>
        <div className="max-auto text-center mt-5">
        <button className="btn btn-block btn-voilet" onClick={generateJoke}>Generate Joke</button>
        </div>
        
       </div>
       
    </div>
    </div>
    
  );
}

export default App;

import { useState , useEffect } from 'react'

const useRandomJoke = (firstName , lastName) => {
    const[joke , setJoke] = useState("");
    const generateJoke = () => {
        const fetchJoke = async () => {
          await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&&lastName=${lastName}`)
            .then(res => res.json())
            .then(data => setJoke(data.value.joke))
        }
        fetchJoke();
      }
      useEffect(() => {
        generateJoke();
      }, [firstName , lastName]);

      return joke;
}

export default useRandomJoke;
import { puppyList } from './data.js'
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

//clearing out the old div
function App() {
 // creating new variables and using a function to tell React how I want the variables updated and what information I want to be shown when it is clicked
    const [puppies, setPuppies] = useState(puppyList);
    const [featPupId, setFeatPupId] = useState(null);
  
    const handlePuppyClick = (id) => {
      setFeatPupId(id);
    };
  
    const featuredPup = puppies.find((pup) => pup.id === featPupId);
  
    return (
      <div className="App">
        {puppies.map((puppy) => (
          <p onClick={() => handlePuppyClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
        
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default App;
  
import React from "react";
import "./App.css";
import PicCard from './components/PicCard'
import PicList from './components/PicList';



function App() {
  return (
    <div className="App">
      <PicList/>
      <PicCard/>
      
      <p>
        Nasa
      </p>
    </div>
  );
}

export default App;

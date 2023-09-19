import { wait } from '@testing-library/user-event/dist/utils';
import logo from './logo.svg';
import './swipePage.css';
import React from "react";
import CompanyCard from "./components/CompanyCard";

function SwipePage() {
  let [card, setCard] = React.useState(<CompanyCard/>);

  function spawnCard() {
    let paragraph = document.getElementById('cCard');
    paragraph.classList.add('slideRight');
    setTimeout(function(){
      setCard(<CompanyCard/>)
    }, 1900);
  }
  
  React.useEffect(() => {

  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div id='skills_placeholder'>
          <p>This is a skills_placeholder</p>
        </div>
        <div id="card-div" onClick={spawnCard}>
          {card}
        </div>
        <div id='select_site'>
          <p>
            This is the select_site
          </p>
        </div>
      </body>
    </div>
  );
}

export default SwipePage;

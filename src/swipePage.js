import { wait } from '@testing-library/user-event/dist/utils';
import logo from './logo.svg';
import './swipePage.css';
import React from "react";
import companies from "./data/companies.json"
import CompanyCard from "./components/CompanyCard";

function SwipePage() {
  let companiesElems = companies.map(comp => <CompanyCard item={comp}/>);
  let currentCard = 0;
  let [card, setCard] = React.useState(companiesElems[currentCard]);

  function spawnCard() {
    let paragraph = document.getElementById('cCard');
    paragraph.classList.add('slideRight');
    setTimeout(function(){
      currentCard++;
      setCard(companiesElems[currentCard]);
      paragraph.classList.remove('slideRight');
    }, 1900);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
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
      </main>
    </div>
  );
}

export default SwipePage;

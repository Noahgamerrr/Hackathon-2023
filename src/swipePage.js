import './swipePage.css';
import React from "react";
import companies from "./data/companies.json"
import CompanyCard from "./components/CompanyCard";

function SwipePage() {
  let companiesElems = companies.map(comp => <CompanyCard item={comp}/>);
  let currentCard = React.useRef(0);
  let [card, setCard] = React.useState(companiesElems[currentCard.current]);

  React.useEffect(() => {}, [])

  function spawnCard() {
    let paragraph = document.getElementById('cCard');
    paragraph.classList.add('slideRight');
    setTimeout(function(){
      currentCard.current++;
      setCard(companiesElems[currentCard.current]);
      paragraph.classList.remove('slideRight');
    }, 1900);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div id='skills_placeholder'>
        <img src='./assets/images/dollar-wahrungszeichen.png' width='50px' height='50px' alt='avatar' id='avatar-icon'></img>
        <img src='./assets/images/computer-science.png' width='50px' height='50px' alt='avatar' id='chat-icon'></img>
        </div>
        <div id="card-div" onClick={spawnCard}>
          {card}
        </div>
        <div id='buttons'>
          <button type='button' id='decline-button'><img src='./assets/images/decline.png' width='40px' height='40px' class='imageClass' alt='avatar'></img></button>
          <button type='button' id='accept-button'><img src='./assets/images/hakchen.png' width='40px' height='40px' class='imageClass' alt='avatar'></img></button>
        </div>
        <div id='select_site'>
          <img src='./assets/images/benutzer-avatar.png' width='50px' height='50px' alt='avatar' id='avatar-icon'></img>
          <img src='./assets/images/plaudern.png' width='50px' height='50px' alt='avatar' id='chat-icon'></img>
        </div>
      </main>
    </div>
  );
}

export default SwipePage;

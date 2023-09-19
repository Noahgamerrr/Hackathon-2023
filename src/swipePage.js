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
      </body>
    </div>
  );
}

export default SwipePage;

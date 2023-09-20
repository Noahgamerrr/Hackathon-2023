import './swipePage.css';
import React from "react";
import companies from "./data/companies.json"
import CompanyCard from "./components/CompanyCard";

function SwipePage() {
  let companiesElems = companies.map(comp => <CompanyCard item={comp}/>);
  let currentCard = React.useRef(0);
  let [card, setCard] = React.useState(companiesElems[currentCard.current]);
  let skillsFill = React.useRef([0, 0, 0, 0]);
  const colourCode = ["green", "greenyellow", "yellow", "orange", "red"];
  let clickable = React.useRef(true);

  function spawnCard(leftOrRight) {
    clickable.current = false;
    let paragraph = document.getElementById('cCard');
    let sign = leftOrRight === "slideRight" ? 1 : -1;
    paragraph.classList.add(leftOrRight);
    setTimeout(function() {
      for (let skill in companies[currentCard.current].careerImpact) {
        skillsFill.current[skill] += companies[currentCard.current].careerImpact[skill] * sign;
      }
      currentCard.current++;
      setCard(companiesElems[currentCard.current]);
      paragraph.classList.remove(leftOrRight);
      renderFill();
      clickable.current = currentCard.current < companies.length;
    }, 1450);
  }

  function renderFill() {
    let fillers = document.getElementsByClassName("progress");
    for (let filler = 0; filler < fillers.length; filler++) {
      //fillers[filler].style.background = `linear-gradient(to top, ${skillsFill.current[filler] > 0 ? "green" : "red"} ${Math.abs(skillsFill.current[filler])}%, grey ${Math.abs(skillsFill.current[filler])}%, grey 100%)`;
      let absSkill = 50 - skillsFill.current[filler];
      let colour = parseInt(absSkill / 20);
      if (absSkill > 50) fillers[filler].style.background = `linear-gradient(to bottom, grey 0%, grey 50%, ${colourCode[colour]} 50%, ${colourCode[colour]} ${absSkill}%, grey ${absSkill}%, grey 100%)`
      else fillers[filler].style.background = `linear-gradient(to bottom, grey 0%, grey ${absSkill}%, ${colourCode[colour]} ${absSkill}%, ${colourCode[colour]} 50%, grey 50%, grey 100%)`
    }
  }



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <div id='skills_placeholder'>
          <div class="img-container">
            <div class="progress"></div>
            <img src='./assets/images/career-paths/economics.svg' height="100%" alt='avatar' id='avatar-icon'></img>
          </div>
          <div class="img-container">
            <div class="progress"></div>
            <img src='./assets/images/career-paths/IT.svg' height="100%" alt='avatar' id='it-icon'></img>
          </div>
          <div class="img-container">
            <div class="progress"></div>
            <img src='./assets/images/career-paths/social-skills.svg' height="100%" alt='avatar' id='social-icon'></img>
          </div>
          <div class="img-container">
            <div class="progress"></div>
            <img src='./assets/images/career-paths/engineering.svg' height="100%" alt='avatar' id='engineer-icon'></img>
          </div>
        </div>
        <div id="card-div">
          {card}
        </div>
        <div id='buttons'>
          <button type='button' id='decline-button' onClick={() => clickable.current && spawnCard("slideLeft")}><img src='./assets/images/thumbs_down.png' width='60px' height='60px' class='imageClass' alt='avatar'></img></button>
          <button type='button' id='accept-button' onClick={() => clickable.current && spawnCard("slideRight")}><img src='./assets/images/icons8-daumen-hoch-96.png' width='60px' height='60px' class='imageClass' alt='avatar'></img></button>
        </div>
        <div id='select_site'>
          <img src='./assets/images/benutzer-avatar.png' width='50px' height='50px' alt='avatar' id='avatar-icon'></img>
          <img src='./assets/images/plaudern.png' width='50px' height='50px' alt='avatar' id='chat-icon'></img>
          <img src='./assets/images/gamebert_simp.png' width='50px' height='50px' alt='gambert' id='chat-icon'></img>
          <img src='./assets/images/teamwork-team-svgrepo-com.svg' width='50px' height='50px' alt='avatar' id='chat-icon'></img>
        </div>
      </main>
    </div>
  );
}

export default SwipePage;

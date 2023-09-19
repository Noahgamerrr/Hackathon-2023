import './swipePage.css';
import CompanyCard from "./components/CompanyCard"
import { ReactDOM } from 'react';

function SwipePage() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <div id='skills_placeholder'>
        <img src='./assets/images/dollar-wahrungszeichen.png' width='50px' height='50px' alt='avatar' id='avatar-icon'></img>
        <img src='./assets/images/computer-science.png' width='50px' height='50px' alt='avatar' id='chat-icon'></img>
        </div>
        <div id='swipe_space' onClick={() => {
          let paragraph = document.getElementById('cCard');
          paragraph.classList.add('slideRight');
          setTimeout(function(){
            paragraph.style.opacity = '0%';
          }, 1900);
          ReactDOM.render(<CompanyCard/>, document.getElementById("swipe_space"))
        }}>
          <CompanyCard/>
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

import { wait } from '@testing-library/user-event/dist/utils';
import logo from './logo.svg';
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
          <p>This is a skills_placeholder</p>
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
          <p>
            This is the select_site
          </p>
        </div>
      </body>
    </div>
  );
}

export default SwipePage;

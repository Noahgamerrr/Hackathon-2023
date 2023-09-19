import { wait } from '@testing-library/user-event/dist/utils';
import logo from './logo.svg';
import './swipePage.css';

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
          let paragraph = document.getElementById('companySlide');
          paragraph.classList.add('slideRight');
          setTimeout(function(){
            paragraph.style.opacity = '0%';
          }, 1900);
          
        }}>
          <p id='companySlide'>
            This is the swipe_space
          </p>
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

import React from 'react';
import { ThemeContextConsumer } from '../../contexts/ThemeContext';
import './style.scss';

const ThemeButton = (props) => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div>
          <button
            onClick={() => {
              context.setTheme(context.theme === 'DAY' ? 'NIGHT' : 'DAY');
            }}
            className='button'>
            SWITCH!
            <span role='img' aria-label='sun'>
              🌞
            </span>
            <span role='img' aria-label='moon'>
              🌚
            </span>
          </button>
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default ThemeButton;

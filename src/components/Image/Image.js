import React from 'react';
import Intermediate from '../Intermediate';
import { ThemeContextConsumer } from '../../contexts/ThemeContext';
import './style.scss';

const Image = (props) => {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={`${context.theme}-image image`}>
          <div className={`${context.theme}-ball ball`} />
          <Intermediate />
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default Image;

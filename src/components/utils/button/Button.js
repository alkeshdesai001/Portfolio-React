import React from 'react';

import './Button.css';

export const PrimaryButton = props => (
  <button
    type='button'
    className={`btn button primary-button mr-4 text-uppercase`}
  >
    {props.children}
  </button>
);

export const SecondaryButton = props => (
  <button type='button' className='btn button secondary-button text-uppercase'>
    {props.children}
  </button>
);

import React from 'react';
import ReactDom from 'react-dom';
import MainScreen from './MainScreen.js'
import { render } from '@testing-library/react';

test("Main Screen Renders Correctly", ()=> {
    const div = document.createElement("div");
    ReactDom.render(<MainScreen/>, div)
})
  
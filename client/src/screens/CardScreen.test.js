import React from 'react';
import ReactDom from 'react-dom';
import CardScreen from './CardScreen.js'
import { render } from '@testing-library/react';
import { useParams, MemoryRouter } from "react-router-dom";

test("working on mocking test for UseParams", ()=> {


})

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
//     useParams: () => ({
//       _id: '1',
//     })
//   }));


    
//     test("Card Screen Renders Correctly", ()=> {

//         jest.mock('react-router-dom', () => ({
//             ...jest.requireActual('react-router-dom'),
//             useParams: jest.fn().mockReturnValue({ _id: "1" }),
//           }))

//         const div = document.createElement("div");
//         ReactDom.render(<CardScreen/>, div)
//     })
    
  

import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled'
import tw from 'tailwind.macro';

const PageContainer = tw.div`
    bg-gray-800 text-xl w-1/2
`;

let SomeComp = styled.div({
  color: 'hotpink'
})
let AnotherComp = styled.div`
  color: ${props => props.color};
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <PageContainer>
          <SomeComp>good
            <AnotherComp color="green">lalala</AnotherComp>
          </SomeComp>
        </PageContainer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

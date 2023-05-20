import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BottomLeft, FadeIn, Overlay, TopLeft } from './styles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
      <FadeIn />
    </Suspense>
    <Overlay>
      <TopLeft>
        <h1>
          HAPPY —
          <br />
          BANANAS
        </h1>
        <p>In React & Threejs —</p>
      </TopLeft>
      <BottomLeft>
        A tutorial from <a href="https://twitter.com/0xca0a">Paul Henschel</a>
      </BottomLeft>
    </Overlay>
  </React.StrictMode>
);

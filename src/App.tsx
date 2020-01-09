import React from "react";
import "./App.css";

import logo from "./assets/logo.png";
import weed1 from "./assets/weed1.jpg";
import weed2 from "./assets/weed2.jpg";
import weed3 from "./assets/weed3.jpeg";
import weed4 from "./assets/weed4.jpg";
import weed6 from "./assets/weed6.jpg";
import weed5 from "./assets/weed5.jpeg";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <a href="/ewq">
          <img src={logo} className="logo" alt="ewqewqewqewq" />
        </a>
        <nav>
          <ul className="menu">
            <li>
              <a href="/ewq">To Home</a>
            </li>
            <li>
              <a href="/ewq">Produtos</a>
            </li>
            <li>
              <a href="/ewq">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <h1>Green World</h1>

      <section className="flex">
        <div>
          <img src={weed1} alt="" />
          <p>Weed 1</p>
        </div>

        <div>
          <img src={weed2} alt="" />
          <p>Weed 2</p>
        </div>

        <div>
          <img src={weed3} alt="" />
          <p>Weed 3</p>
        </div>

        <div>
          <img src={weed4} alt="" />
          <p>Weed 4</p>
        </div>

        <div>
          <img src={weed5} alt="" />
          <p>Weed 5</p>
        </div>

        <div>
          <img src={weed6} alt="" />
          <p>Weed 6</p>
        </div>
      </section>
    </div>
  );
};

export default App;

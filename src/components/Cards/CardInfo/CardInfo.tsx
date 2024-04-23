import React from "react";
import { useLocation } from "react-router-dom";
import './CardInfo.css'

const CardInfo = () => {
  const {state} = useLocation();

  return (
    <div>
      <div className="container">
        <div className="left-side">
          <ul className="info-container">
            <li>
              <p className="heading-1">Names:</p>
              <ul>
                <li>
                  <p className="heading-2">Common:</p>
                  {state.item.name.common}
                </li>
                <li>
                  <p className="heading-2"> Official:</p>
                  {state.item.name.official}
                </li>
              </ul>
            </li>
            <li>
              <p className="heading-1">Native Names:</p>
              <ul>
                <li>
                  <p className="heading-2">Common:</p>
                  {Object.values(state.item.name.nativeName)[0].common}
                </li>
                <li>
                  <p className="heading-2">Official:</p>
                  {Object.values(state.item.name.nativeName)[0].official}
                </li>
              </ul>
            </li>
            <li>
              <p className="heading-1">Capital:</p>
              {state.item.capital[0]}
            </li>
            <li>
              <p className="heading-1">Region:</p>
              {state.item.region}
            </li>
            <li>
              <p className="heading-1">Subregion:</p>
              {state.item.subregion}
            </li>
            <li>
              <p className="heading-1">Population:</p>
              {state.item.population}
            </li>
            <li>
              <p className="heading-1">Currencies:</p>
              <ul>
                <li>
                  <p className="heading-2">Name:</p>
                  {Object.values(state.item.currencies)[0].name}
                </li>
                <li>
                  <p className="heading-2">Symbol:</p>
                  {Object.values(state.item.currencies)[0].symbol}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="right-side">
          <div className="flag">
            <img src={state.item.flags.png}></img>
          </div>
          <div className="coat-of-arms">
            <img src={state.item.coatOfArms.png}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;

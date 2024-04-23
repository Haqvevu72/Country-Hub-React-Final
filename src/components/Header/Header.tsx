// import React from 'react';
import logo from "../../assets/images/ logo.png";
import menu from "../../assets/images/ hamburger-menu.png";
import Select from "react-select";
import "./Header.css";
import { useAppDispatch } from "../../utils/hooks";
import { fetchCountries, fetchIndependentCountires } from "../../utils/actions";

const Header = () => {
  interface option {
    value: string;
    label: string;
  }

  const options: option[] = [
    { value: "europe", label: "Europe" },
    { value: "northamerica", label: "North America" },
    { value: "americas", label: "Americas" },
    { value: "africa", label: "Africa" },
    { value: "oceania", label: "Oceania" },
    { value: "asia", label: "Asia" },
  ];

  const dispatch = useAppDispatch();

  const handleAll = () => {
    dispatch(fetchCountries());
  };
  const handleYes = () => {
    dispatch(fetchIndependentCountires("true"));
  }
  const handleNo = () => {
    dispatch(fetchIndependentCountires("false"));
  }

  return (
    <header>
      <div className="hd-elem-1">
        <div>
          <img src={logo} alt="logo image"></img>
        </div>
        <div className="hd-elem-1-2">
          <a href="/">CountryHub</a>
        </div>
      </div>
      <div className="hd-elem-2">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <img src={menu}></img>
        </button>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Filters
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-elem">
            <div>Independent</div>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                defaultChecked
                onChange={handleAll}
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                All
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                onChange={handleYes}
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio2">
                Yes
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
                onChange={handleNo}
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio3">
                No
              </label>
            </div>
          </div>
          <div className="offcanvas-elem">
            <div>Region</div>
            <Select isMulti options={options}></Select>
          </div>
          <div className="offcanvas-elem">
            <div>Population</div>
            <input
              type="range"
              className="form-range"
              id="customRange1"
            ></input>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

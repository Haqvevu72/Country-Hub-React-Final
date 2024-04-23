import { Link } from "react-router-dom";
import currencyUrl from "../../../assets/images/ currency.png";
import populationUrl from "../../../assets/images/ population.png";
import "./Card.css";

type CountryType = {
  key: number;
  flag: string;
  symbol: string;
  country: string;
  population: number;
  item: object;
};

const Card = ({
  flag,
  country,
  population,
  symbol,
  key,
  item,
}: CountryType) => {
  return (
    <Link to={`/${country}`} key={key} state={{ item: item }}>
      <div className="card">
        <div className="card-image">
          <img src={flag} />
        </div>
        <div className="card-name">
          <p>{country}</p>
        </div>
        <div className="population">
          <div>
            <img src={populationUrl} />
          </div>
          <div>{population}</div>
        </div>
        <div className="currency">
          <div>
            <img src={currencyUrl} />
          </div>
          <div>{symbol}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

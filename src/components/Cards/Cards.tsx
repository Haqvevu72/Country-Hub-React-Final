import { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./Cards.css";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { fetchCountries } from "../../utils/actions";

const Cards = () => {
  const dispatch = useAppDispatch();
  const [seeMore, setSeeMore] = useState(false);
  const [countries , setCountries] = useState<object>([])
  const { list } = useAppSelector((state) => state.fetchReducer);

  useEffect(() => {
    if (list.length == 0) dispatch(fetchCountries());
    if (seeMore) setCountries(list.filter(() => true));
    else {
        const filtered = list.filter((item,i) => {
            return (4 >=  i + 1);
        });
        setCountries(filtered);
    }

}, [seeMore, list]);

  return (
    <div className="cards">
      <div className="countries">
      {countries?.map((item, i) => (
                    <Card key={i} population={item.population} flag={item.flags.png } country={item.name.official} item={item} symbol={(item.currencies != null ? Object.values(item.currencies)[0].symbol : ' ')} />
                ))}
      </div>
      <div className="more">
        <button  onClick={() => setSeeMore(!seeMore)}>{!seeMore ? <p>More</p> : <p>Less</p>}</button>
      </div>
    </div>
  );
};

export default Cards;

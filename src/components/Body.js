import { useEffect, useState } from "react";
import resList from "../util/mockData";
import RestorentCard from "./RestorentCard";

const Body = () => {
  const [list, setList] = useState(resList);
  const [query, setQuery] = useState("");
  const handleClick = () => {
    const filterData = list.filter(
      (ele) =>
        ele.data.name.includes(query) || ele.data.cuisines.includes(query)
    );
    console.log(filterData);
    if (query !== "") {
      setList(filterData.length == 0 ? list : filterData);
    } else {
      setList(resList);
    }
  };

  useEffect(() => {
    handleClick();
  }, [query]);

  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button className="search-btn" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="card-container">
        {list?.map((res) => (
          <RestorentCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

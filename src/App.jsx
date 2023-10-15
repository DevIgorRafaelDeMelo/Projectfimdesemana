import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

function App() {
  const [city, setCity] = useState();
  const [menuLocation, setMenuLocation] = useState(false);
  const [selectCity, setSelectCity] = useState("kanto");

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/region").then((response) => {
      setCity(response.data.results);
    });
  }, []);
  return (
    <>
      <section id="MenuCity" className="fixed top-0 left-0 bg-blue-800">
        <h3 className="flex py-10 px-20  ">
          <h1 className="px-10 text-white">City</h1>
          {menuLocation === false ? (
            <AiOutlineDown
              className="text-white"
              onClick={() => setMenuLocation(!menuLocation)}
            />
          ) : (
            <AiOutlineUp
              className="text-white"
              onClick={() => setMenuLocation(!menuLocation)}
            />
          )}
        </h3>
        {menuLocation === true ? (
          <div className=" ">
            {city &&
              city.map((val) => (
                <div
                  onClick={() => setSelectCity(val.name)}
                  className="text-white hover:bg-blue-700 p-5 w-full ps-10"
                  key={val.name}
                >
                  {val.name}
                </div>
              ))}
          </div>
        ) : (
          <></>
        )}
      </section>
      <section id="MapCity" className="text-center">
        <div className="font-bold text-4xl font-mono mt-10">
          {selectCity.toUpperCase()}

          <section>
            
          </section>
        </div>
      </section>
    </>
  );
}

export default App;

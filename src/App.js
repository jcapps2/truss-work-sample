import { useState, useEffect } from "react";
import "./App.css";

const fetchData = async () => {
  const res = await fetch("https://swapi.dev/api/planets/");
  const data = res.json();
  return data;
};

function App() {
  const [state, setState] = useState();

  useEffect(() => {
    fetchData().then(res => {
      console.log("RESOLVED: ", res);
      setState(res);
    });
  }, []);

  return (
    <div className="App">
      <h1>Truss Work Sample</h1>
      {JSON.stringify(state.results)}
    </div>
  );
}

export default App;

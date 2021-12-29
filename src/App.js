import { useState, useEffect, useMemo } from "react";
import Table from "./components/Table";
import Loading from "./components/Loading";
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

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
      Cell: props => {
        const { url } = props.row.original;
        return (
          <a href={url} target="_blank">
            {props.value}
          </a>
        );
      }
    },
    {
      Header: "Climate",
      accessor: "climate"
    },
    // {
    //   Header: "Residents",
    //   accessor: "residents"
    // },
    {
      Header: "Terrain",
      accessor: "terrain"
    },
    {
      Header: "Population",
      accessor: "population"
    },
    {
      Header: "Surface Water",
      accessor: "surface_water"
    }
  ]);

  return (
    <div className="App">
      <h1>Truss Work Sample</h1>
      {state ? <Table columns={columns} data={state.results} /> : <Loading />}
    </div>
  );
}

export default App;

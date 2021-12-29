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
      accessor: "climate",
      Cell: props => {
        if (props.value === "unknown") {
          return <span>?</span>;
        }
        return <span>{props.value}</span>;
      }
    },
    {
      Header: "Residents",
      accessor: "residents",
      Cell: props => {
        if (props.value === "unknown") {
          return <span>?</span>;
        }
        return <span>{props.value.length}</span>;
      }
    },
    {
      Header: "Terrain",
      accessor: "terrain",
      Cell: props => {
        if (props.value === "unknown") {
          return <span>?</span>;
        }
        return <span>{props.value}</span>;
      }
    },
    {
      Header: "Population",
      accessor: "population",
      Cell: props => {
        if (props.value === "unknown") {
          return <span>?</span>;
        }
        const formattedNum = new Intl.NumberFormat("fr-FR").format(props.value);
        return <span>{formattedNum}</span>;
      }
    },
    {
      Header: "Surface Water",
      accessor: "surface_water",
      Cell: props => {
        if (props.value === "unknown") {
          return <span>?</span>;
        }
        return <span>{props.value}</span>;
      }
    }
  ]);

  return (
    <div className="App">
      <h1>Truss Work Sample</h1>
      <div className="table-container">
        {state ? <Table columns={columns} data={state.results} /> : <Loading />}
      </div>
    </div>
  );
}

export default App;

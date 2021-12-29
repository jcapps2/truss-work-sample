import { useState, useEffect, useMemo } from "react";
import Table from "../components/Table";
import Loading from "../components/Loading";
import { tableColumns } from "./column";
import "../App.css";

const fetchData = async url => {
  const res = await fetch(url);
  const data = res.json();
  return data;
};

function App() {
  const [state, setState] = useState();
  const [currentPage, setCurrentPage] = useState(
    "https://swapi.dev/api/planets/"
  );

  useEffect(() => {
    fetchData(currentPage).then(res => {
      console.log("RESOLVED: ", res);
      setState(res);
    });
  }, [currentPage]);

  const columns = useMemo(tableColumns, []);

  return (
    <div className="App">
      <h1>Truss Work Sample</h1>
      <div className="table-container">
        {state ? <Table columns={columns} data={state.results} /> : <Loading />}
        <div className="button-container">
          <div>
            {state && state.previous && (
              <button onClick={() => setCurrentPage(state.previous)}>
                Previous
              </button>
            )}
          </div>

          <div>
            {state && state.next && (
              <button onClick={() => setCurrentPage(state.next)}>Next</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

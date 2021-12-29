import { useState, useEffect, useMemo } from "react";
import Table from "../components/Table";
import Loading from "../components/Loading";
import { tableColumns } from "./column";
import {
  MainContainer,
  TableStyles,
  TableContainer,
  ButtonContainer,
  Button
} from "./styles";

function App() {
  const [state, setState] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    "https://swapi.dev/api/planets/"
  );

  const fetchData = async url => {
    setErrorMessage("");
    setState(null);
    setLoading(true);

    const res = await fetch(url);
    const data = res.json();

    setLoading(false);

    return data;
  };

  useEffect(() => {
    fetchData(currentPage)
      .then(res => {
        if (res && res.detail === "Not found") {
          setErrorMessage("Error! Item not found.");
        } else {
          setState(res);
        }
      })
      .catch(() => {
        setErrorMessage("Error!");
      });
  }, [currentPage]);

  const columns = useMemo(tableColumns, []);

  return (
    <MainContainer>
      <h1>Truss Work Sample</h1>

      {loading && <Loading />}

      <TableContainer>
        {state ? (
          <div>
            <TableStyles>
              <Table columns={columns} data={state.results} />
            </TableStyles>

            <ButtonContainer>
              <div>
                {state && state.previous && (
                  <Button onClick={() => setCurrentPage(state.previous)}>
                    Previous
                  </Button>
                )}
              </div>

              <div>
                {state && state.next && (
                  <Button onClick={() => setCurrentPage(state.next)}>
                    Next
                  </Button>
                )}
              </div>
            </ButtonContainer>
          </div>
        ) : (
          <h2>{errorMessage}</h2>
        )}
      </TableContainer>
    </MainContainer>
  );
}

export default App;

import { useState, useEffect, useMemo } from "react";
import Table from "../components/Table";
import Loading from "../components/Loading";
import { tableColumns } from "./column";
import {
  MainContainer,
  Styles,
  TableContainer,
  ButtonContainer,
  Button
} from "./styles";

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
      setState(res);
    });
  }, [currentPage]);

  const columns = useMemo(tableColumns, []);

  return (
    <MainContainer>
      <h1>Truss Work Sample</h1>
      <TableContainer>
        {state ? (
          <Styles>
            <Table columns={columns} data={state.results} />
          </Styles>
        ) : (
          <Loading />
        )}
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
              <Button onClick={() => setCurrentPage(state.next)}>Next</Button>
            )}
          </div>
        </ButtonContainer>
      </TableContainer>
    </MainContainer>
  );
}

export default App;

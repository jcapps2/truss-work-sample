import styled from "styled-components";

export const MainContainer = styled.div`
  text-align: center;
`;

export const Styles = styled.div`
  padding: 1rem;

  table {
    border: 1px solid gray;
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;

    :last-child {
      border-right: 0;
    }
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  cursor: pointer;
`;

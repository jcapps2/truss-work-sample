import styled from "styled-components";

export const MainContainer = styled.div`
  text-align: center;
`;

export const TableStyles = styled.div`
  padding: 1rem;

  table {
    border: 1px solid gray;
  }

  th,
  td {
    border: 1px solid gray;
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
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
`;

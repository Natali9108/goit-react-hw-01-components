import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: separate;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const TransactionHead = styled.thead`
  background-color: ${props => props.theme.colors.tableHeadBgColor};
`;

export const TableHeader = styled.th`
  padding: 10px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryWhite};
`;

export const TableData = styled.td`
  padding: 10px;
  letter-spacing: 0.01em;
  text-align: center;
  font-size: 18px;
  color: ${props => props.theme.colors.userTextColor};
`;

export const TableRow = styled.tr`
  &:nth-of-type(2n -1) {
    background-color: ${props => props.theme.colors.tableBodyOddBgColor};
  }

  &:nth-of-type(2n) {
    background-color: ${props => props.theme.colors.tableBodyEvenBgColor};
  }
`;

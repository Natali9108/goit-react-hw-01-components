import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHead,
  TableHeader,
  TableBody,
  TableData,
} from './Trabsaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </TransactionHead>
      {items.map(({ id, type, amount, currency }) => (
        <TableBody key={id}>
          <tr>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </tr>
        </TableBody>
      ))}
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

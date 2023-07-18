import PropTypes from "prop-types";
import css from "./Transactions.module.css";

export const TransactionHistory = ({ items }) => (
 
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.categoryRow}>Type</th>
          <th className={css.categoryRow}>Amount</th>
          <th className={css.categoryRow}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.tableList}>
            <td className={css.categoryItem}>{type}</td>
            <td className={css.categoryItem}>{amount}</td>
            <td className={css.categoryItem}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
 
);

TransactionHistory.propTypes = {
    items: PropTypes.array,
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
};
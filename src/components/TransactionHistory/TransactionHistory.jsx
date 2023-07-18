import PropTypes from "prop-types";
import css from "./Transactions.module.css";

export const TransactionHistory = ({ items }) => (

    <table className={css.transactionHistory}>
        <thead>
            <tr className={css.categogoryRow}>
                <th className={css.categoryItem}>Type</th>
                <th className={css.categoryItem}>Amount</th>
                <th className={css.categoryItem}>Currency</th>
            </tr>
        </thead>
            
        <tbody>
            <tr>
                <td>Invoice</td>
                <td>125</td>
                <td>USD</td>
            </tr>
            <tr>
                <td>Withdrawal</td>
                <td>85</td>
                <td>USD</td>
            </tr>
        </tbody>
    </table>

)

TransactionHistory.propTypes = {
    items: PropTypes.array,
    id: PropTypes.number,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}
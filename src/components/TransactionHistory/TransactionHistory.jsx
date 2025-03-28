import PropTypes from 'prop-types';

import style from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={style.transactionHistory}>
            <thead className={style.tableHead}>
                <tr>
                    <th className={style.tableHeader}>Type</th>
                    <th className={style.tableHeader}>Amount</th>
                    <th className={style.tableHeader}>Currency</th>
                </tr>
            </thead>

            <tbody className={style.tableBody}>
                {items.map(item => (
                    <tr key={item.id} className={style.tableRow}>
                        <td className={style.tableData}>{item.type}</td>
                        <td className={style.tableData}>{item.amount}</td>
                        <td className={style.tableData}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
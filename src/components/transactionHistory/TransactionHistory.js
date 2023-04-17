// import PropTypes from 'prop-types';
// export const TransactionHistory = ({ transactions }) => (
//   <table class="transaction-history">
//     <thead>
//       <tr>
//         <th>Type</th>
//         <th>Amount</th>
//         <th>Currency</th>
//       </tr>
//     </thead>

//         <tbody>
//             {transactions.map(({ id, type, amount, currency }) => {
//           return (
//             // створюємо рядок таблиці з даними про кожну транзакцію
//             <tr className={css.tr} key={id}>
//               {/* Ключом кожного створеного рядка є id */}
//               <td
//                 className={css.td}
//                 style={{
//                   textTransform: 'capitalize', // відображення першої літери - великою літерою
//                   color: '#818181',
//                 }}></td>;
//       <tr>
//         <td>Invoice</td>
//         <td>125</td>
//         <td>USD</td>
//       </tr>
//       <tr>
//         <td>Withdrawal</td>
//         <td>85</td>
//         <td>USD</td>
//       </tr>
//     </tbody>
//   </table>
// );
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <tr className={css.tr} key={id}>
          <td
            className={css.td}
            style={{
              textTransform: 'capitalize',
              color: '#818181',
            }}
          >
            {type}
          </td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

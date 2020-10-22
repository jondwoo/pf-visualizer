import React from 'react';
import TableRow from './TableRow/TableRow';

import './RecentTransactions.css';

const RecentTransactions = () => {
  return (
    <div className="table-responsive" style={{ height: '40vh' }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        {/* TODO: turn to component */}
        {/* TODO: overflow off */}
        <tbody>
          {/* <TableRow date={} amount={} description={} category={}/> */}
          <tr>
            <td scope="row">10/05</td>
            <td>-29.99</td>
            <td>gym membership</td>
            <td>services</td>
          </tr>
          <tr>
            <td scope="row">10/10</td>
            <td>12.39</td>
            <td>amazon refund</td>
            <td>other</td>
          </tr>
          <tr>
            <td scope="row">10/15</td>
            <td>-300.00</td>
            <td>gmk olivia++</td>
            <td>personal</td>
          </tr>
          <tr>
            <td scope="row">10/05</td>
            <td>-29.99</td>
            <td>gym membership</td>
            <td>services</td>
          </tr>
          <tr>
            <td scope="row">10/10</td>
            <td>12.39</td>
            <td>amazon refund</td>
            <td>other</td>
          </tr>
          <tr>
            <td scope="row">10/15</td>
            <td>-300.00</td>
            <td>gmk olivia++</td>
            <td>personal</td>
          </tr>
          <tr>
            <td scope="row">10/05</td>
            <td>-29.99</td>
            <td>gym membership</td>
            <td>services</td>
          </tr>
          <tr>
            <td scope="row">10/10</td>
            <td>12.39</td>
            <td>amazon refund</td>
            <td>other</td>
          </tr>
          <tr>
            <td scope="row">10/15</td>
            <td>-300.00</td>
            <td>gmk olivia++</td>
            <td>personal</td>
          </tr>
          <tr>
            <td scope="row">10/05</td>
            <td>-29.99</td>
            <td>gym membership</td>
            <td>services</td>
          </tr>
          <tr>
            <td scope="row">10/10</td>
            <td>12.39</td>
            <td>amazon refund</td>
            <td>other</td>
          </tr>
          <tr>
            <td scope="row">10/15</td>
            <td>-300.00</td>
            <td>gmk olivia++</td>
            <td>personal</td>
          </tr>
          <tr>
            <td scope="row">10/05</td>
            <td>-29.99</td>
            <td>gym membership</td>
            <td>services</td>
          </tr>
          <tr>
            <td scope="row">10/10</td>
            <td>12.39</td>
            <td>amazon refund</td>
            <td>other</td>
          </tr>
          <tr>
            <td scope="row">10/15</td>
            <td>-300.00</td>
            <td>gmk olivia++</td>
            <td>personal</td>
          </tr>
          <tr>
            <td scope="row">10/05</td>
            <td>-29.99</td>
            <td>gym membership</td>
            <td>services</td>
          </tr>
          <tr>
            <td scope="row">10/10</td>
            <td>12.39</td>
            <td>amazon refund</td>
            <td>other</td>
          </tr>
          <tr>
            <td scope="row">10/15</td>
            <td>-300.00</td>
            <td>gmk olivia++</td>
            <td>personal</td>
          </tr>
          <tr>
            <td scope="row">10/05</td>
            <td>-29.99</td>
            <td>gym membership</td>
            <td>services</td>
          </tr>
          <tr>
            <td scope="row">10/10</td>
            <td>12.39</td>
            <td>amazon refund</td>
            <td>other</td>
          </tr>
          <tr>
            <td scope="row">10/15</td>
            <td>-300.00</td>
            <td>gmk olivia++</td>
            <td>personal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;

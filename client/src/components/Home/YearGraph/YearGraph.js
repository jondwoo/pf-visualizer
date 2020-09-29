import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const YearGraph = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [availableMonths, setAvailableMonths] = useState([]);
  // get transactions for current year
  useEffect(() => {
    const fetchCurrentYearData = async () => {
      const responseData = await axios.get(
        'http://localhost:9000/current/year',
      );
      setAllTransactions(responseData.data.transactions);
    };
    fetchCurrentYearData();
  }, []);

  useEffect(() => {
    let months = [];

    if (allTransactions.length) {
      for (const monthlyTransactions of allTransactions) {
        const transactions = Object.values(monthlyTransactions);

        for (const transactionGroup of transactions) {
          for (const transaction of transactionGroup) {
            let monthName = new Date(transaction.date).toLocaleString(
              'default',
              {
                month: 'long',
              },
            );
            months.push(monthName);
            break;
          }
        }
      }
    }

    const uniqueMonths = [...new Set(months)];
    setAvailableMonths(uniqueMonths);
  }, [allTransactions]);

  useEffect(() => {
    if (availableMonths.length) {
      console.log(availableMonths);
    }
  }, [availableMonths]);

  // TODO: combine all expense for specific month
  // TODO: same for income

  const data = {
    labels: availableMonths,
    datasets: [
      {
        label: 'Expense',
        data: [2500, 1490, 1890, 2349],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderWidth: 1,
      },
      // {
      //   label: 'Income',
      //   data: [1700, 2000, 1500],
      //   backgroundColor: [
      //     'rgba(255, 99, 132, 0.2)',
      //     'rgba(54, 162, 235, 0.2)',
      //     'rgba(255, 206, 86, 0.2)',
      //     'rgba(75, 192, 192, 0.2)',
      //     'rgba(153, 102, 255, 0.2)',
      //     'rgba(255, 159, 64, 0.2)',
      //   ],
      //   borderColor: [
      //     'rgba(255, 99, 132, 1)',
      //     'rgba(54, 162, 235, 1)',
      //     'rgba(255, 206, 86, 1)',
      //     'rgba(75, 192, 192, 1)',
      //     'rgba(153, 102, 255, 1)',
      //     'rgba(255, 159, 64, 1)',
      //   ],
      //   borderWidth: 1,
      // },
    ],
  };

  const options = {
    // legend: { display: false },
    title: {
      display: true,
      text: 'Year in Review',
    },
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '60%' }}>
      <Card>
        <Container className="mt-5 mb-5" style={{ maxWidth: '95%' }}>
          <Line data={data} options={options} />
        </Container>
      </Card>
    </Container>
  );
};

export default YearGraph;

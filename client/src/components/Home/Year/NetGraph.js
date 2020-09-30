import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const YearGraph = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [availableMonths, setAvailableMonths] = useState([]);
  const [netMonthlyValue, setNetMonthlyValue] = useState([]);

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
    let monthlyNet = [];

    if (allTransactions.length) {
      for (const monthlyTransactions of allTransactions) {
        const transactions = Object.values(monthlyTransactions);

        for (const transactionGroup of transactions) {
          let monthNet = 0;
          for (const transaction of transactionGroup) {
            const monthName = new Date(transaction.date).toLocaleString(
              'default',
              {
                month: 'long',
              },
            );

            if (transaction.type === 'expense') {
              monthNet -= transaction.amount;
            } else {
              monthNet += transaction.amount;
            }

            months.push(monthName);
          }
          monthlyNet.push(monthNet);
        }
      }
    }
    let x = 0;
    let len = monthlyNet.length;
    while (x < len) {
      monthlyNet[x] = monthlyNet[x].toFixed(2);
      x++;
    }
    setNetMonthlyValue(monthlyNet);

    const uniqueMonths = [...new Set(months)];
    setAvailableMonths(uniqueMonths);
  }, [allTransactions]);

  useEffect(() => {
    if (availableMonths.length) {
      console.log(availableMonths);
      console.log(allTransactions);
    }
  }, [availableMonths]);

  const data = {
    labels: availableMonths,
    datasets: [
      {
        label: 'Net Savings',
        data: netMonthlyValue,
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
    <Container className="mt-5" style={{ maxWidth: '62%' }}>
      <Card>
        <Container className="mt-5 mb-5" style={{ maxWidth: '95%' }}>
          <Line data={data} options={options} />
        </Container>
      </Card>
    </Container>
  );
};

export default YearGraph;

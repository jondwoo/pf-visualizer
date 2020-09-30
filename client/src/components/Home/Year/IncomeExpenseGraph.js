import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const IncomeExpenseGraph = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [availableMonths, setAvailableMonths] = useState([]);

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
            const monthName = new Date(transaction.date).toLocaleString(
              'default',
              {
                month: 'long',
              },
            );
            console.log(transaction);
          }
        }
      }
    }

    const uniqueMonths = [...new Set(months)];
    setAvailableMonths(uniqueMonths);
  }, [allTransactions]);

  return (
    <Container className="mt-5" style={{ maxWidth: '62%' }}>
      <Card>
        <Container className="mt-5 mb-5" style={{ maxWidth: '95%' }}>
          <Bar />
        </Container>
      </Card>
    </Container>
  );
};

export default IncomeExpenseGraph;

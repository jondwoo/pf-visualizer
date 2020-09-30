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

  // useEffect(() => {
  //   if (availableMonths.length) {
  //     console.log(availableMonths);
  //     console.log(allTransactions);
  //   }
  // }, [availableMonths, allTransactions]);

  const data = {
    labels: availableMonths,
    datasets: [
      {
        data: netMonthlyValue,
        backgroundColor: 'rgba(67, 70, 75, 0.3)',
        borderColor: 'rgba(67, 70, 75, 0.3)',
        fill: true,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    legend: { display: false },
    title: {
      display: true,
      text: 'Year in Review - Net Savings',
    },
  };

  const plugins = [
    {
      beforeRender: function (x) {
        var c = x.chart;
        var dataset = x.data.datasets[0];
        var yScale = x.scales['y-axis-0'];
        var yPos = yScale.getPixelForValue(0);

        var gradientFill = c.ctx.createLinearGradient(0, 0, 0, c.height);
        gradientFill.addColorStop(0, 'rgba(119,221,119,0.6)');
        gradientFill.addColorStop(yPos / c.height, 'rgba(119,221,119,0.6)');
        gradientFill.addColorStop(yPos / c.height, 'rgba(255,82, 82,0.5)');
        gradientFill.addColorStop(1, 'rgba(255, 82, 82,0.5)');

        var model =
          x.data.datasets[0]._meta[Object.keys(dataset._meta)[0]].dataset
            ._model;
        model.backgroundColor = gradientFill;
      },
    },
  ];

  return (
    <Container className="mt-5" style={{ maxWidth: '62%' }}>
      <Card>
        <Container className="mt-5 mb-5" style={{ maxWidth: '95%' }}>
          <Line data={data} options={options} plugins={plugins} redraw />
        </Container>
      </Card>
    </Container>
  );
};

export default YearGraph;

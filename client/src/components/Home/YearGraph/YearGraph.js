import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const YearGraph = () => {
  // const [data, setData] = useState(null);

  // get transactions for current year
  useEffect(() => {
    const fetchCurrentYear = async () => {
      try {
        const responseData = await axios.get(
          'http://localhost:9000/current/year',
        );
        console.log(responseData);
        // eslint-disable-next-line no-empty
      } catch (err) {}
    };
    fetchCurrentYear();
  }, []);
  // get months for current year

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container className="mt-5" style={{ maxWidth: '60%' }}>
      <Card>
        <Container className="mt-5 mb-5" style={{ maxWidth: '95%' }}>
          <Line data={data} />
        </Container>
      </Card>
    </Container>
  );
};

export default YearGraph;

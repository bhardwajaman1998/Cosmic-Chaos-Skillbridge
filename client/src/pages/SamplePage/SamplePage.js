import React, { useEffect, useState } from 'react';
import SampleComponent from '../components/SampleComponent';
import { fetchData } from '../services/SampleService';

const SamplePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1>Welcome to the Sample Page</h1>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default SamplePage;


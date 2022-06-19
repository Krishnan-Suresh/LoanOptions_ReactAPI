import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://universities.hipolabs.com/search?country=Australia',
      );

      setData(result.data);
    };

    fetchData();
  }, [])

  return (
    <div>
      <table>
        <tr>
          <th>Domains</th>
          <th>Web pages</th>
          <th>State province</th>
          <th>Name</th>
          <th>Country</th>
          <th>Country code</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.domains.map((d, k) => {
                return (
                  <div>{d}</div>
                )
              })}</td>
              <td>{val.web_pages.map((w, k) => {
                return (
                  <div>{w}</div>
                )
              })}</td>
              <td>{val.state_province}</td>
              <td>{val.name}</td>
              <td>{val.country}</td>
              <td>{val.alpha_two_code}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;

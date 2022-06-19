import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState([]);

  const loadData = async () => {
    const result = await axios('http://universities.hipolabs.com/search?country=Australia');
    setData(result.data);
  };

  const addData = () => {
    if (data.length) {
      setData([...data, data[0]]);
    }
  };

  const deleteData = () => {
    if (data.length) {
      setData((data) => data.filter((_,i) => i !== data.length - 1));
    }
  };

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
      <button onClick={loadData}>LOAD</button>
      <button onClick={addData}>ADD</button>
      <button onClick={deleteData}>DELETE</button>
    </div>
  );
}

export default App;

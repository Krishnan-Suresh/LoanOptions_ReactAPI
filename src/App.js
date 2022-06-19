import React from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = React.useState([]);

  const getUniversities = async () => {
    try {
        const res = await axios.get('http://universities.hipolabs.com/search?country=Australia');
        setData(JSON.stringify(res.data));
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
  }

  React.useEffect(() => {
    getUniversities();
  }, [])

  return (
        <p> {data} </p>
  );
}

export default App;

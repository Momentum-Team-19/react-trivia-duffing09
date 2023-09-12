import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Categories({ setCategoryId }) {
  const [trivCatData, setTrivCatData] = useState([])
  // pulling in the data and manipulating it the way you want to
  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then((response) => setTrivCatData(response.data.trivia_categories))
  }, []);
// visual representation of the data from above
  return(
    <div>
      {trivCatData.map((trivCat) => (
        <button key={trivCat.id} onClick={() => setCategoryId(trivCat.id)}>
          {trivCat.name}
        </button>
      ))}
    </div>
  );
}
export default Categories

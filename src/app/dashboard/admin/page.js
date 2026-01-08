import React from 'react'

const DashboardAdmin = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache : 'no-store'});
  const data = await response.json();
  console.log("data", data);
  return (
    <div>
      <h1>DashboardAdmin</h1>
    </div>
  )
}

export default DashboardAdmin
//multiple route
//manager/abhi  -->['abhi']
//manager/abhi/singh --> ['abhi','singh']

import React from 'react'

const ManagerUser = async ({params}) => {
  const resolvedParams = await params;
  console.log(resolvedParams);
  return (
    <div>
      <h1>ManagerUser</h1>
      <h2>Filters Applied: {resolvedParams.filters.join(", ")}</h2>
    </div>
  )
}

export default ManagerUser
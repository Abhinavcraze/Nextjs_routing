//dynamic routing concept the folder of route has access by different id's

//...user implies for both dynamic route and multiple routing*************
//Dynamic route



//If it is a server component

import React from 'react'

const AdminUser = async ({ params }) => {

  const { userId } = await params;

  return (
    <div>
      <h1>AdminUser : {userId}</h1>
    </div> 
  )
}

export default AdminUser




//if we are using client component

// "use client"


// import React from 'react'
// import { useParams } from 'next/navigation' 

// const AdminUser = () => {
//   const params = useParams(); // <--- Get params via hook

//   return (
//     <div>
//       <h1>AdminUser : {params.userId}</h1>
//     </div> 
//   )
// }

// export default AdminUser
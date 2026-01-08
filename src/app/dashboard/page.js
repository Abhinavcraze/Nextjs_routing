//file based routing in nextjs

// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//     </div>
//   );
// };

// export default Dashboard


//make a dashboard into client side rendering

"use client"
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => router.push("/dashboard/admin")}>
        Go to Admin
      </button>
      <br/>
      <button onClick={() => router.push("/dashboard/admin/settings")}>
        Go to AdminSettings
      </button>
    </div>
  );
}

export default Dashboard
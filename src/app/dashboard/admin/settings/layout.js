import React from 'react'
import { redirect } from 'next/navigation';

async function temp() {
  return await new Promise((res, rej) => {
    setTimeout(() => {
      return res({data : 499, role: 'user'})
      //return rej({data : 500}); //error.js applies if rejected
    }, 2000)
  })
}

const settingslayout = async({children}) => {

  const response = await temp();
    if(response.data === 500 && response.role !== 'user') {
      redirect('/dashboard/admin');
    }

    if(response.data !== 500 && response.role === 'user') {
      redirect('/dashboard');
    }

  return (
    <div>
      <nav>Settings layout</nav>
      {children}
    </div>
  )
}

export default settingslayout
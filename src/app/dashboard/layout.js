//works for that route and child routes
import Link from "next/link"
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h2>Layout on dashboard</h2>
      {/*<nav>Only for dashboard!</nav>*/}
      <nav>
        <Link href="/dashboard">Dashboard</Link>
        <br/>
        <Link href="/dashboard/admin">Admin</Link>
        <br/>
        <Link href="/dashboard/admin/settings">Settings</Link>
      </nav>
      {children}
    </div>
  )
}

export default DashboardLayout
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div>
      <nav>
        <h2>Admin Layout Navigation</h2>
        {children}
      </nav>
    </div>
  )
}

export default AdminLayout
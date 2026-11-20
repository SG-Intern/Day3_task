import React from 'react'

function page() {
  return (
    <div>
      <h1 style={{ color: 'blue' }}>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
      <h2>Shantanu</h2>
    </div>
  )
}

export default page


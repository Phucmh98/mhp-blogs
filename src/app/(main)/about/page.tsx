'use client'

import { useEffect, useState } from 'react'

const About = () => {
  // Sử dụng state để hiển thị nội dung chỉ khi ở client-side
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Render nội dung đơn giản khi ở server-side
  if (!isClient) {
    return <div>Loading...</div>
  }

  // Render đầy đủ nội dung khi ở client-side
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p>This is the about page content.</p>
    </div>
  )
}

export default About
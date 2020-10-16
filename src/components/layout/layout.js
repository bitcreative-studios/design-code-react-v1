import React from 'react'
import tw from 'twin.macro'
// import './layout.css'

const PageContainer = tw.div`bg-gray-500 text-xl  w-1/2`
function Layout({ children }) {
  return (
    <PageContainer>
      <main>{children}</main>
    </PageContainer>
  )
}

export default Layout

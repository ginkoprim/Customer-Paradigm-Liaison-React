import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Paradigm Liaison</title>
        <meta property="og:title" content="Customer Paradigm Liaison" />
      </Helmet>
    </div>
  )
}

export default Home

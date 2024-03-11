import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/Banner/banner.jsx';
import "../src/index.css"
import Header from './components/Header/header.jsx';
import Content from './components/Content/content.jsx';
import  Footer from './components/Footer/footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Content />
    <Footer />
  </React.StrictMode>,
)

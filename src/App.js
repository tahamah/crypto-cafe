import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../src/components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import Header from '../src/components/Header/Header'
import About from '../src/components/About/About'
import Footer from '../src/components/Footer/Footer'
import CoinDetails from './components/CoinDetails/CoinDetails'

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="coins" element={<Coins />} />
                <Route path="coin-details/:id" element={<CoinDetails />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../src/components/Homepage/Homepage'
import Coins from './components/Coins/Coins'
import Contact from './components/Contact/Contact'
import BDAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'
import Header from '../src/components/Header/Header'
import About from '../src/components/About/About'
import Footer from '../src/components/Footer/Footer'
import CoinDetails from './components/CoinDetails/CoinDetails'
import NotFound from './components/NotFound/NotFound'

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="coins" element={<Coins />} />
                <Route path="coin-details/:id" element={<CoinDetails />} />
                <Route path="contact" element={<Contact />}>
                    <Route path="bd-address" element={<BDAddress />} />
                    <Route path="us-address" element={<UsAddress />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App

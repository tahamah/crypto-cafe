import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})
    const [loading, setLoading] = useState(false)
    const {
        name,
        coingecko_rank,
        country_origin,
        community_score,
        developer_score,
        liquidity_score,
        public_interest_score,
        genesis_date,
        hashing_algorithm,
        last_updated,
        image,
    } = coin
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCoin(data)
                setLoading(false)
            })
    }, [id])

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <div className="px-4 h-[70vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2">
                    <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center">
                        <div className="order-2 md:order-1">
                            <h1 className="text-3xl"> General Info:</h1>
                            <hr />
                            <h1>Coin Name: {name}</h1>
                            <h1>Market Cap Rank: {coingecko_rank}</h1>
                            <h1>
                                Origin:{' '}
                                {country_origin ? country_origin : 'N/A'}
                            </h1>
                            <h1>Contract Address: </h1>
                            <h1>Hashing Algorithm: {hashing_algorithm} </h1>
                            <h1>Genesis Date: {genesis_date} </h1>
                            <h1>Last Updated: {last_updated} </h1>
                            <br />
                            <h1 className="text-3xl"> Scores:</h1>
                            <hr />
                            <h1>Community Score: {community_score}</h1>
                            <h1>Developer Score: {developer_score}</h1>
                            <h1>Liquidity Score: {liquidity_score}</h1>
                            <h1>
                                Public Interest Score: {public_interest_score}
                            </h1>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src={image?.large} alt="coin-img" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CoinDetails

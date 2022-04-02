import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({ coin }) => {
    const { id, name, image, symbol } = coin
    return (
        <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4">
            <Link to={`/coin-details/${id}`}>
                <div className="flex gap-4 justify-between items-center">
                    <div>
                        <img
                            className="mx-auto object-cover rounded-full h-16 w-16"
                            src={image}
                            alt="coinImg"
                        />
                    </div>
                    <div className="flex flex-col justify-end">
                        <span className="font-medium text-gray-600">
                            {name}
                        </span>
                        <span className="font-xs text-gray-400">{symbol}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CoinCard

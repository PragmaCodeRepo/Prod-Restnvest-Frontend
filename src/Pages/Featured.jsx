import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';

const Featured = () => {
    const [data, setData] = useState(null);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!data) return null;

    return (
        <div className='w-full py-32 bg-[#191D32]'>
            <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4'>
                {/* Left Section */}
                <div className='flex flex-col justify-center'>
                    <h2 className='text-white text-3xl md:text-4xl font-bold'>
                    Restnvest — Top Stocks, Trusted Companies, Secure Trades
                    </h2>
                    <p className='text-gray-400 my-6'>
                    Empowering you to invest in the best, with companies you can trust
                    </p>
                    <button className='bg-[#3892BB] text-white px-6 py-3 rounded-md w-max hover:bg-[#41ADAF] transition duration-300'>
                        See More Coins
                    </button>
                </div>

                {/* Right Section (Coin Cards) */}
                <div className='flex flex-wrap justify-evenly'>
                    {data.slice(0, 6).map((coin, index) => (
                        <div key={index} className='bg-white p-4 m-2 rounded-lg shadow-lg text-center w-[170px] h-[170px] transition-shadow duration-300 hover:shadow-xl'>
                            <div className='flex justify-center'>
                                <img src={coin.image} alt={coin.name} className='w-[50px]' />
                            </div>
                            <h5 className='mt-2 text-lg font-semibold'>{coin.name}</h5>
                            <p className='text-gray-600'>${coin.current_price.toLocaleString()}</p>
                            <span className={coin.price_change_percentage_24h < 0 ? 'text-[#41ADAF] flex justify-center items-center' : 'text-green-600 flex justify-center items-center'}>
                                {coin.price_change_percentage_24h < 0 ? (
                                    <FiArrowDown className='mr-1' />
                                ) : (
                                    <FiArrowUpRight className='mr-1' />
                                )}
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;

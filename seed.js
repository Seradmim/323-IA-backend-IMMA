import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Crypto from './models/Crypto.js';

dotenv.config();

const cryptos = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 65000,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/btc.png',
        change24h: 2.5
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        price: 3500,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/eth.png',
        change24h: 1.2
    },
    {
        name: 'BNB',
        symbol: 'BNB',
        price: 600,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/bnb.png',
        change24h: -0.5
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        price: 150,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/sol.png',
        change24h: 5.4
    },
    {
        name: 'Dogecoin',
        symbol: 'DOGE',
        price: 0.15,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/doge.png',
        change24h: 12.5
    },
    {
        name: 'Cardano',
        symbol: 'ADA',
        price: 0.45,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/ada.png',
        change24h: -1.2
    },
    {
        name: 'Polkadot',
        symbol: 'DOT',
        price: 7.2,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/dot.png',
        change24h: 0.8
    },
    {
        name: 'Chainlink',
        symbol: 'LINK',
        price: 18.5,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/link.png',
        change24h: 4.1
    },
    {
        name: 'Avalanche',
        symbol: 'AVAX',
        price: 35.5,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/avax.png',
        change24h: 3.2
    },
    {
        name: 'Polygon',
        symbol: 'MATIC',
        price: 0.75,
        image: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/32/color/matic.png',
        change24h: 8.5
    }
];

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        await Crypto.deleteMany(); // Clear existing data
        await Crypto.insertMany(cryptos);
        console.log('Data Imported!');
        process.exit();
    })
    .catch((err) => {
        console.error('Error with data import', err);
        process.exit(1);
    });

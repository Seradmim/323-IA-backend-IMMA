import Crypto from '../models/Crypto.js';

// @desc    Get all tradable cryptocurrencies
// @route   GET /api/crypto
// @access  Public
export const getCryptos = async (req, res) => {
    try {
        const cryptos = await Crypto.find({});
        res.json(cryptos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
export const getGainers = async (req, res) => {
    try {
        // Sort by change24h in descending order
        const gainers = await Crypto.find({}).sort({ change24h: -1 }).limit(10);
        res.json(gainers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
export const getNewCryptos = async (req, res) => {
    try {
        // Sort by createdAt in descending order (newest first)
        const newCryptos = await Crypto.find({}).sort({ createdAt: -1 }).limit(10);
        res.json(newCryptos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};

// @desc    Add new cryptocurrency
// @route   POST /api/crypto
// @access  Public (Should ideally be admin only, but per instructions we just create the endpoint)
export const addCrypto = async (req, res) => {
    try {
        const { name, symbol, price, image, change24h } = req.body;

        if (!name || !symbol || !price || !image || change24h === undefined) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const cryptoExists = await Crypto.findOne({ symbol });

        if (cryptoExists) {
            return res.status(400).json({ message: 'Cryptocurrency with this symbol already exists' });
        }

        const crypto = await Crypto.create({
            name,
            symbol,
            price,
            image,
            change24h
        });

        res.status(201).json(crypto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};

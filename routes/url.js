const express = require('express');
const {URL} = require('../model/url');
const shortid = require('shortid');

const router = express.Router();

router
    .post('/', async (req, res) => {
        const url = req.body.url;
        const shortUrl = shortid.generate();
        if(!url) {
            return res.status(400).send("Please pass the url");
        }
        await URL.create({
            url,
            shortUrl
        })
        await analyticsUrl.create({
            url,
            shortUrl
        })
        res.send(shortUrl);
    })
    .get('/:id', async (req, res) => {
        const id = req.params.id;
        const urlObj =  await URL.findOne({
        shortUrl: id
    })
        res.send(urlObj.url)
    });

module.exports = router;


const router   = require('express').Router()
const Url      = require('../models/url')

router.get('/', async (req,res) => {
    const shortUrl = await Url.find()
    res.render('index',{shortUrl:shortUrl})
})

router.post('/create-short-url', async (req, res) => {
    const url = new Url({
        fullUrl:req.body.fullUrl
    })
    url.save()
    res.redirect('/')
})

router.get('/shorturl/:shortUrl', async (req, res) => {

    const shortUrl = await Url.findOne({ shortUrl: req.params.shortUrl })
    if (shortUrl == null) return res.sendStatus(404)
    shortUrl.clicks++
    shortUrl.save()
    res.redirect(shortUrl.fullUrl)
})

router.get('/url/delete/:id',async(req,res)=>{
    await Url.findOneAndRemove({_id: req.params.id})
    res.redirect('/')
})


module.exports = router;
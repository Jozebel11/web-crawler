const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')
const PORT = 2121

const app = express()
const url = 'https://www.bbc.co.uk'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []
        $('.e1gp961v0', html).each(function(){
           const list = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                list,
                url
            })
        })
        console.log(articles)


    }).catch(err => console.log(err))

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
const axios = require("axios")
const cheerio = require("cheerio")
const cors = require("cors")
const express = require("express")

const app = express()

app.use(cors())
app.use(express.json())

console.log("Rozpoczeto scrapowanie!")

const sendWebsite = (req, res) => {
    let {url, site} = req.body

    axios.get(url)
    .then(result => {
        const $ = cheerio.load(result.data);
        let htmlCode;

        switch(site){
            case "Teslarati":
                htmlCode = content($, '#content-main')
            break;
            case "NASA Spaceflight":
                htmlCode = content($, '.entry-content')
            break;
            case "SpaceNews":
                htmlCode = content($, '.tablet-wrapper')
            break;
            case "Spaceflight Now":
                htmlCode = content($, '.entry-content')
            break;
            case "Arstechnica":
                htmlCode = content($, '.article-content')
            break;
            case "NASA":
                htmlCode = content($, '.wysiwyg_content')
            break;
            default:
                htmlCode = "Cannot get article from original site"
            break;
        }

        res.send(htmlCode)

    })
    .catch(error => res.send(error))
}

const content = ($, pageEl) => {
    let contentBody = ""
    let content = $(pageEl)

    content.each((i, el) => {
        let item = $(el)
        $("figure").remove()
        $("div").remove()
        $("aside").remove()
        contentBody += item
    })
    return contentBody
}

app.post("/web", sendWebsite)

app.listen(8080);
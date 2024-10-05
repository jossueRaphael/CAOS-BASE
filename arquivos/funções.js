const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const mimetype = require('mime-types')
const {
downloadContentFromMessage, proto, delay, getContentType
} = require('@whiskeysockets/baileys')

const getBuffer = async (url, opcoes) => {
try {
opcoes ? opcoes : {}
const post = await axios({
method: "get",
url,
headers: {
    'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 
	'DNT': 1,
	'Upgrade-Insecure-Request': 1
},
...opcoes,
responseType: 'arraybuffer'
})
return post.data
} catch (erro) {
console.log(`Erro identificado: ${erro}`)
}
}
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

module.exports = { getBuffer, fetchJson }
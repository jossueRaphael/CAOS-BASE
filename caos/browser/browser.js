const fs = require('fs')
const chalk = require('chalk')
const axios = require('axios')
const cfonts = require('cfonts')

function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

const banner = cfonts.render((`CAOS|BASE`), {
font: 'block',
color: 'white',
align: 'center',
colors: ["whiteBright","blue"],
lineHeight: 3
});
module.exports = { getGroupAdmins, banner }
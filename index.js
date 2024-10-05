require("./config.js")

const { 
default:
makeWASocket, 
downloadContentFromMessage,
generateWAMessageContent,
generateWAMessageFromContent,
StylePrivWaFromMessage,
delay,
useMultiFileAuthState,
BufferJSON,
proto,
prepareWAMessageMedia, 
MediaType,
ChatModification,
DisconnectReason,
relayWAMessage,
fetchLatestBaileysVersion,
WASocket,
Browsers,
EyeWaSocket,
makeInMemoryStore,
} = require('@whiskeysockets/baileys');

// ──────┤MODULOS├──────//

const { exec } = require("child_process")

const chalk = require('chalk');

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) };

let pino = require('pino')

const fs = require('fs')

const axios = require('axios');

const util = require("util")

const path = require("path")

const fetch = require('node-fetch');

const moment = require('moment-timezone');

const ffmpeg = require('fluent-ffmpeg');

const mimetype = require("mime-types")

const BodyForm = require("form-data")

const { Boom }  = require('@hapi/boom');

const yts = require('yt-search');

const crypto = require('crypto');

const encodeUrl = require('encodeurl');

const cheerio = require('cheerio');

const { Configuration, OpenAIApi } = require("openai");

const { menu } = require('./menus/menu.js')

const { menudono } = require('./menus/menudono.js')

const antilink = JSON.parse(fs.readFileSync('./caos/seguranca/antilink.json'))

const { menuadm } = require("./menus/menuadm.js")

const { performance } = require('perf_hooks');
//ARQUIVOS JS
const { getGroupAdmins, banner } = require('./caos/browser/browser.js');
const { 
getExtension, Random, 
getFileBuffer, getBuffer,
} = require("./caos/browser/get.js")
const { fetchJson } = require('./arquivos/funções.js');
const { addFlod , isFlod } = require('./spam.js')
const { isFiltered, addFilter } = require('./spam.js')
const { palavras } = require('./arquivos/lib/conselhos.js');

donoName = global.donoName
botName = global.botName
donoNumher = global.donoNumher
prefix = global.prefix

// IGNORE //
function kyun(seconds){
function pad(s){ return (s < 10 ? '0' : '') + s;}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos` }
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

//// DATA E HORA

data = moment.tz("America/Sao_Paulo").format("DD/MM/YY");

hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');


async function startCaos() {

const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })

const { state, saveCreds } = await useMultiFileAuthState('./qrcode')

const { version, isLatest } = await fetchLatestBaileysVersion()




console.log(banner.string)
console.log((`
==================
CreaTor: CaioXyZ
DaTa: ${data}
HoRa: ${hora}
PreFiXo: ${prefix}
==================`))
const caos = makeWASocket({
logger: pino({ level: 'silent'}),
printQRInTerminal: true,
qrTimeout: 180000,
browser: ['caos', 'browser', '1.0.0'],
auth: state
})
store.bind(caos.ev)


caos.ev.on('chats.set', () => {
console.log('setando conversas...')
})


caos.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

caos.ev.on('creds.update', saveCreds)

caos.ev.on('messages.upsert', async ({ messages }) => {
try {
//=============funções
const info = m = messages[0]
if (!info.message) return 

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}

if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

type_message = JSON.stringify(info.message)

const isQuotedImage = type === "extendedTextMessage" && type_message.includes("imageMessage")
const from = m.chat = info.key.remoteJid

/// ==============budy
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

///============body
var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId : (type == 'templateButtonenviarMessage') ?
info.message.templateButtonenviarMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectenviar.selectedRowId || info.text) : ''
////========
const content = JSON.stringify(info.message);
const isCmd = body.startsWith(prefix)

const isGroup = from.endsWith("@g.us")


/////==================
const isUrl = (url) => {
	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
const sender = isGroup ? info.key.participant: from
const command = comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const nome = pushName = info.pushName ? info.pushName: botName 
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await caos.groupMetadata(from): ""
const participants = isGroup ? await groupMetadata.participants : ''
const groupName = isGroup  ? groupMetadata.subject: ""
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const args = body.trim().split(/ +/).splice(1)
const q = text = args.join(' ')
const criador = `${donoNumher}@s.whatsapp.net`
const numeroBot = caos.user.id.split(":")[0]+"@s.whatsapp.net"
const isCreator = criador.includes(sender)
const isGroupAdmins = groupAdmins.includes(sender) || false  
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false

//********************************************//

var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await caos.sendPresenceUpdate('composing', from) 
await esperar(1000)   
caos.sendMessage(from, { text: texto }, {quoted: info})
}

const reply = (texto) => {
caos.sendMessage(from, { text: texto }, {quoted: info})
}

const esperar = sleep = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}

//================//isquoted/const
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
 
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const exportion = JSON.parse(fs.readFileSync('./exportion.json'))

const isAntiLink = isGroup ? antilink.includes(from) : false

const cell = sender.split("@")[0];





// ======= FUNCAO DE ANTILINK ======= \\
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	    }, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
caos.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
    setTimeout( () => {
        
	            }, 0)
    }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	    }, 100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
caos.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
    setTimeout( () => {
        
	            }, 0)
    }  
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
		    var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	    }  ,100)
	     	reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
caos.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
    setTimeout( () => {
    
	            }, 0)
    }

// 🚀𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅🚀
if (!isGroup && isCmd) console.log(
    color('╭━─━─━─≪◇≫─━─━─━╮', 'white') + '\n' +
    color('│╭─────────────╮', 'white') + '\n' +
    color('││', 'white') + color('𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅', 'yellow') + '\n' +
    color('│╰─────────────╯', 'white') + '\n' +
    color('╰━─━─━─≪◇≫─━─━─━╮', 'white') + '\n' +
    color('╭━─━─━─≪◇≫─━─━─━╯', 'white') + '\n' +
    color('│➜', 'white') + color('INFORMAÇÕES', 'yellow') + '\n' +
    color('│╭─────────────╮', 'white') + '\n' +
    color('││', 'white') + color('Hora: ', 'yellow') + hora + '\n' +
    color('││', 'white') + color('Data: ', 'yellow') + data + '\n' +
    color('│├─────────────', 'white') + '\n' +
    color('││', 'white') + color('Nome: ', 'yellow') + pushname + '\n' +
    color('││', 'white') + color('Número: ', 'yellow') + sender.split("@")[0] + '\n' +
    color('│├─────────────', 'white') + '\n' +
    color('││> ', 'white') + color(budy, 'yellow') + ' <' + '\n' +
    color('│╰─────────────╯', 'white') + '\n' +
    color('╰━─━─━─≪◇≫─━─━─━╯', 'white')
);

// 🚀𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙾 𝙿𝚅🚀
if (!isCmd && !isGroup && !info.key.fromMe) console.log(
    color('╭━─━─━─≪◇≫─━─━─━╮', 'white') + '\n' +
    color('│╭─────────────╮', 'white') + '\n' +
    color('││', 'white') + color('𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙾 𝙿𝚅', 'yellow') + '\n' +
    color('│╰─────────────╯', 'white') + '\n' +
    color('╰━─━─━─≪◇≫─━─━─━╮', 'white') + '\n' +
    color('╭━─━─━─≪◇≫─━─━─━╯', 'white') + '\n' +
    color('│➜', 'white') + color('INFORMAÇÕES', 'yellow') + '\n' +
    color('│╭─────────────╮', 'white') + '\n' +
    color('││', 'white') + color('Hora: ', 'yellow') + hora + '\n' +
    color('││', 'white') + color('Data: ', 'yellow') + data + '\n' +
    color('│├─────────────', 'white') + '\n' +
    color('││', 'white') + color('Nome: ', 'yellow') + pushname + '\n' +
    color('││', 'white') + color('Número: ', 'yellow') + sender.split("@")[0] + '\n' +
    color('│├─────────────', 'white') + '\n' +
    color('││> ', 'white') + color(budy, 'yellow') + ' <' + '\n' +
    color('│╰─────────────╯', 'white') + '\n' +
    color('╰━─━─━─≪◇≫─━─━─━╯', 'white')
);

// 🚀𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾🚀
if (isCmd && isGroup) console.log(
    color('╭━─━─━─≪◇≫─━─━─━╮', 'white') + '\n' +
    color('│╭─────────────╮', 'white') + '\n' +
    color('││', 'white') + color('𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾', 'yellow') + '\n' +
    color('│╰─────────────╯', 'white') + '\n' +
    color('╰━─━─━─≪◇≫─━─━─━╮', 'white') + '\n' +
    color('╭━─━─━─≪◇≫─━─━─━╯', 'white') + '\n' +
    color('│➜', 'white') + color('INFORMAÇÕES', 'yellow') + '\n' +
    color('│╭─────────────╮', 'white') + '\n' +
    color('││', 'white') + color('Hora: ', 'yellow') + hora + '\n' +
    color('││', 'white') + color('Data: ', 'yellow') + data + '\n' +
    color('│├─────────────', 'white') + '\n' +
    color('││', 'white') + color('Nome: ', 'yellow') + pushname + '\n' +
    color('││', 'white') + color('Número: ', 'yellow') + sender.split("@")[0] + '\n' +
    color('│├─────────────', 'white') + '\n' +
    color('││> ', 'white') + color(budy, 'yellow') + ' <' + '\n' +
    color('│╰─────────────╯', 'white') + '\n' +
    color('╰━─━─━─≪◇≫─━─━─━╯', 'white')
);

// 🚀𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾🚀
if (!isCmd && isGroup && !info.key.fromMe) console.log(
    color('╭━─━─━─≪◇≫─━─━─━╮', 'white') + '\n' +
    color('│╭─────────────╮', 'white') + '\n' +
    color('││', 'white') + color('𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾', 'yellow') + '\n' +
    color('│╰─────────────╯', 'white') + '\n' +
    color('╰━─━─━─≪◇≫─━─━─━╮', 'white') + '\n' +
    color('╭━─━─━─≪◇≫─━─━─━╯', 'white') + '\n' +
    color('│➜', 'white') + color('INFORMAÇÕES', 'yellow') + '\n' +
    color('│╭─────────────╮', 'white') + '\n' +
    color('││', 'white') + color('Hora: ', 'yellow') + hora + '\n' +
    color('││', 'white') + color('Data: ', 'yellow') + data + '\n' +
    color('│├─────────────', 'white') + '\n' +
    color('││', 'white') + color('Nome: ', 'yellow') + pushname + '\n' +
    color('││', 'white') + color('Número: ', 'yellow') + sender.split("@")[0] + '\n' +
    color('│├─────────────', 'white') + '\n' +
    color('││> ', 'white') + color(budy, 'yellow') + ' <' + '\n' +
    color('│╰─────────────╯', 'white') + '\n' +
    color('╰━─━─━─≪◇≫─━─━─━╯', 'white')
);

msg = {
aguarde: "aguarde um pouco, estou processado👀",
dono: "este comando so podera ser usado pelo meu dono😴",
group: "este comando so pode ser usado em grupo🫂",
private: "este comando so pode ser usado no privado👀",
premium: "[🚀] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS",
administrador: "este comando so pode ser usado por um adm🤣",
error: "ocorreu uma falha no comando por favor aguarde ate meu dono ajeitar", 
dono: "Esse comando so pode ser usado pelo meu dono!!!",
}


const loc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"locationMessage": {
"name": ' •CAOS• ',
}}}

const foto = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"imageMessage": {
"caption": ' caos V3 ',
"jpegThumbnail": fs.readFileSync('./caos/image/menu.jpg')
}}}

const order = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "120363034719882460@g.us" } : {}) },
message: { 
"orderMessage": {
"thumbnail": fs.readFileSync('./caos/image/menu.jpg'),
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `👁 caos-V3 👁`,
}}}

switch(comando) {

case 'foto':
if (!info.key.fromMe && !isCreator) return caos.sendMessage(from, {text: 'somente dono ou adm'})
caos.sendMessage(from, {image: fs.readFileSync('./caos/image/menu.jpg'), caption: 'caos-V3'},{quoted: info})
break

case 'video':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return caos.sendMessage(from, {text: 'somente dono ou adm'})
caos.sendMessage(from, {video: fs.readFileSync('./caos/video/cantada brabakkkkk.mp4'), caption: 'caos-V3'},{quoted: info})
break

case 'audio':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return caos.sendMessage(from, {text: 'somente dono ou adm'})
caos.sendMessage(from, {audio: fs.readFileSync('./caos/audio/sim.mp3'), mimetype: "audio/mpeg",},{quoted: info})
break

case 'limpeza':
if (!info.key.fromMe && !isCreator && !isBotGroupAdmins) return caos.sendMessage(from, {text: 'somente dono ou adm'})
caos.sendMessage(m.chat, {text: `Mensagem dms slk\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Limpo ✅`},{quoted: m})
break

function runtime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = Math.floor(seconds % 60);
    return `${hours}h ${minutes}m ${secs}s`;
}

case 'ping':
    let startTime = performance.now();

    await caos.sendMessage(from, { react: { text: `💧`, key: info.key }});

    let endTime = performance.now();
    let latency = (endTime - startTime).toFixed(1);
    let uptime = process.uptime();

    let toping = 
`
┌───< 🚀 𝙋𝙞𝙣𝙜 🚀 >
┊
┊⚡*Velocidade:* ${latency} ms
┊❄${!isGroup ? `*Usuario:* ${pushname}` : `*Grupo:* ${groupName}`}
┊⏳*Tempo Ativo:* ${runtime(uptime)}
┊
└───<`;

    caos.sendMessage(from, { text: toping }, { quoted: info });
    break;

case 'menu': case 'comandos':
await caos.sendMessage(from, { react: { text: `🚀`, key: info.key }})
caos.sendMessage(from,
{image: fs.readFileSync('./caos/image/menu.jpg'),
caption: menu(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case 'menudono':
if(!isCreator) return reply(msg.dono)
await caos.sendMessage(from, { react: { text: `🚀`, key: info.key }})
caos.sendMessage(from,
{image: fs.readFileSync('./caos/image/menu.jpg'),
caption: menudono(comando, prefix, hora, data, pushname),
gifPlayback: true},
{quoted: info})
break

case "menuadm":
await caos.sendMessage(from, { react: { text: `🚀`, key: info.key }})
templateMassage = {
image: {url:"./caos/image/menu.jpg",
quoted: info},
caption: menuadm(prefix, hora, data, pushname),
headerType: 4,
contextinfo:{externalAdReply:{
thumbnail: global.goimg,
mediaType:2,
}}
}
caos.sendMessage(from, templateMassage)
break

case 'taon?':
reply(`Sim!!`)
break

case 'marcar':
    if (!isGroup) return enviar('Este comando só deve ser utilizado em Grupo.');
    if (!isGroupAdmins) return enviar('Você precisa ser ADM pra utilizar este comando');

    await caos.sendMessage(from, { react: { text: `🚀`, key: info.key }});

    const membros = (groupId, membros1) => {
        let array = [];
        for (let i = 0; i < membros1.length; i++) {
            array.push(membros1[i].id);
        }
        return array;
    };

    var yd = membros(from, groupMembers);
    const senderName = info.pushName || 'Desconhecido';
    
    const mensagemUsuario = body.slice(7).trim();

    let mensagem = `📢 Marcando todos 📢\nUsuário: ${senderName}\nMensagem: ${mensagemUsuario}\n\nIntegrantes: `;

    yd.forEach(membro => {
        mensagem += `@${membro.split('@')[0]} `;
    });

    await caos.sendMessage(from, { text: mensagem, mentions: yd });
break;

case 'chifre':
    await caos.sendMessage(from, { react: { text: `🐂`, key: info.key } });
    const random2 = `${Math.floor(Math.random() * 35)}`;
    const tamanho2 = random2;
    let resultado;

    if (tamanho2 < 13) {
        resultado = 'muito corno🤟';
    } else if (tamanho2 == 13) {
        resultado = 'meio corno😬';
    } else if (tamanho2 == 14) {
        resultado = 'muito corno😳';
    } else if (tamanho2 == 15) {
        resultado = 'cuidado com o poste';
    } else if (tamanho2 == 16) {
        resultado = 'vai pegar manga com esse chifre?';
    } else if (tamanho2 == 17) {
        resultado = 'eita poha, levou muita galha em😳';
    } else if (tamanho2 == 18) {
        resultado = 'cuidado com os fios de energia😳';
    } else if (tamanho2 == 19) {
        resultado = 'como você aguenta esse peso todo😳';
    } else if (tamanho2 == 20) {
        resultado = 'recorde de maior chifre, parabéns';
    } else if (tamanho2 == 21) {
        resultado = 'parabéns, belos chifres';
    } else if (tamanho2 == 22) {
        resultado = 'parabéns, belos chifres';
    } else if (tamanho2 == 23) {
        resultado = 'parabéns, belos chifres';
    } else if (tamanho2 == 24) {
        resultado = 'parabéns, belos chifres';
    } else if (tamanho2 > 25) {
        resultado = 'vai construir uma torre com isso?';
    }

    const bglh = 
`╭═════════════════ ⪩
│   RESULTADO DO CHIFRE👁⃟
├───────────────
│  OLÁ: ${pushName} 🤟
│  SEU CHIFRE TEM: ${random2} CM
│  RESULTADO: ${resultado}
╰═════════════════ ⪨`;

    reply(bglh);
break

case 'cassino':
    if (!isGroup) return reply('Você só pode jogar em grupos.');

    const soto = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍇',
        '🍊 : 🍋 : 🔔',
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🍌',
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍐 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍒 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍌',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍐 : 🍇',
        '🔔 : 🔔 : 🔔',
        '🍒 : 🍒 : 🍒',
        '🍌 : 🍌 : 🍌'
    ];

    const somtoy2 = soto[Math.floor(Math.random() * soto.length)];

    const vitoriaFrases = [
        '🥑 : 🥑 : 🥑',
        '🍉 : 🍉 : 🍉',
        '🍓 : 🍓 : 🍓',
        '🍎 : 🍎 : 🍎',
        '🍍 : 🍍 : 🍍',
        '🥝 : 🥝 : 🥝',
        '🍑 : 🍑 : 🍑',
        '🥥 : 🥥 : 🥥',
        '🍋 : 🍋 : 🍋',
        '🍐 : 🍐 : 🍐',
        '🍌 : 🍌 : 🍌',
        '🍒 : 🍒 : 🍒',
        '🔔 : 🔔 : 🔔',
        '🍊 : 🍊 : 🍊',
        '🍇 : 🍇 : 🍇'
    ];

    let vitoriaMensagem;

    if (vitoriaFrases.includes(somtoy2)) {
        vitoriaMensagem = 'Você ganhou! 🎉';
    } else {
        vitoriaMensagem = 'Você perdeu. 😢';
    }

    const cassinoMensagem = `
╭───────────────
│   ☲ 𝐂𝐀𝐒𝐒𝐈𝐍𝐎 ☲
├───────────────
│  Resultado: 
│  ${somtoy2}
│  
│  ${vitoriaMensagem}
╰───────────────`;

    reply(cassinoMensagem);
    break;

case 'calculadora':
case 'calcular':  
case 'calc':
    rsp = q.replace("x", "*")
            .replace('"', ":")
            .replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "")
            .replace("÷", "/");

    try {
        const resultado = eval(rsp);
        
        const resultadoMensagem = 
`
╔══════════════════════════════════════╗
║ 🌟 **Resultado da sua conta** 🌟
╠══════════════════════════════════════╣
║ 📐 **Expressão:**  \`${q}\`
║ 📊 **Resultado:**   \`${resultado}\`
╚══════════════════════════════════════╝
`;

        return reply(resultadoMensagem);
    } catch (error) {
        return reply("⚠️ Desculpe, não consegui calcular isso. Verifique a expressão e tente novamente.");
    }
    break;

case 'reiniciar':
caos.sendMessage(from,{text: `Reiniciando...`}, {quoted: info})
setTimeout(() => {process.exit(0)}, 3000)
break

case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Você ganhou -_-"
}
if (vit == "derrota") {
var tes = "Eu ganhei pobre kkkkkk"
}
if (vit == "empate") {
var tes = "Deu empate 😐"
}
reply(`${botName} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
}
break

case 'sn':
const sn = ['Sim', 'Não']
gosto = body.slice(3)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break

case "ddd":
            await caos.sendMessage(from, { react: { text: `🚀`, key: info.key }})
            if (args.length < 1) return reply(`Use ${prefix + command} 79`);
            ddd = body.slice(5);
            ddds = await axios.get(
            `https://brasilapi.com.br/api/ddd/v1/${ddd}`
            );
            dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD\n\n`;
            for (let i = 0; i < ddds.data.cities.length; i++) {
              dddlist += `${i + 1} ✦ *${ddds.data.cities[i]}*\n`;
            }
            await caos.sendMessage(from, { text: dddlist }, { quoted: info});
            break;

            case 'cep':
                await caos.sendMessage(from, { react: { text: `🚀`, key: info.key }})
                if (args.length < 1) return reply('Digite o CEP que deseja buscar');
                cep = body.slice(4);
                hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`);
                if (hehe.error) return reply(hehe.error);
                ccg =
`💧 INFORMAÇÕES DO CEP 💧

*◍₊ิ۪͡୭⇾ Cep: ${hehe.cep}
*◍₊ิ۪͡୭⇾ Estado: ${hehe.state}
*◍₊ิ۪͡୭⇾ Cidade: ${hehe.city}
*◍₊ิ۪͡୭⇾ Bairro: ${hehe.neighborhood}`;
                
                caos.sendMessage(from, { text: ccg }, {
                    quoted: info
                });
                break;

///////////////////////////////////////////////////////////

case 'figurinha':
case 's':
case 'f':
case 'fig': {
    function getRandom(extension) {
        return `${Math.floor(Math.random() * 10000)}${extension}`;
    }

    async function enviar(message) {
        await caos.sendMessage(from, { text: message }, { quoted: info });
    }

    (async function () {
        var legenda = q ? q.split("/")[0] : "CaioXyZ"; 
        let isMedia = info.message.imageMessage || info.message.videoMessage;
        let isQuotedImage = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
        let isQuotedVideo = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage;

        if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
            var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage;
            var rane = getRandom('.' + await getExtension(encmedia.mimetype));
            var buffimg = await getFileBuffer(encmedia, 'image');
            fs.writeFileSync(rane, buffimg);
            var rano = getRandom('.webp');

            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                fs.unlinkSync(rane);
                if (err) {
                    console.error("Erro ao converter imagem:", err);
                    enviar("Erro ao converter a imagem.");
                    return;
                }

                var json = { "sticker-pack-name": legenda };
                var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00]);
                var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                var exif = Buffer.concat([exifAttr, jsonBuff]);
                exif.writeUIntLE(jsonBuff.length, 14, 4);
                let nomemeta = `./${getRandom('.temp.exif')}`;
                fs.writeFileSync(nomemeta, exif);

                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                    caos.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info });
                    fs.unlinkSync(nomemeta);
                    fs.unlinkSync(rano);
                });
            });
        } else if ((isMedia && info.message.videoMessage.seconds < 11) || (isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35)) {
            var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage;
            var rane = getRandom('.' + await getExtension(encmedia.mimetype));
            var buffimg = await getFileBuffer(encmedia, 'video');
            fs.writeFileSync(rane, buffimg);
            var rano = getRandom('.webp');

            exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                fs.unlinkSync(rane);
                if (err) {
                    console.error("Erro ao converter vídeo:", err);
                    enviar("Erro ao converter o vídeo.");
                    return;
                }

                let json = { "sticker-pack-name": legenda };
                let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00]);
                let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8");
                let exif = Buffer.concat([exifAttr, jsonBuff]);
                exif.writeUIntLE(jsonBuff.length, 14, 4);
                let nomemeta = `./${getRandom('.temp.exif')}`;
                fs.writeFileSync(nomemeta, exif);

                exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                    caos.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info });
                    fs.unlinkSync(nomemeta);
                    fs.unlinkSync(rano);
                });
            });
        } else {
            enviar("Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos.");
        }
    })().catch(e => {
        console.log(e);
        enviar("Hmm deu erro");
        try {
            if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
            if (fs.existsSync(rano)) fs.unlinkSync(rano);
            if (fs.existsSync(rane)) fs.unlinkSync(rane);
        } catch {}
    });
}
break;

//////////////////////////////////////////////////////////

    case 'clima':
        await caos.sendMessage(from, { react: { text: `🚀`, key: info.key } });

        const cidade = body.slice(7).trim();
    
        if (!cidade) {
            reply('Por favor, forneça o nome de uma cidade após o comando. Exemplo: >clima São Paulo');
            break;
        }
    
        axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: cidade,
                appid: 'sua_api_aqui', //Coloque sua api do site openweathermap.org no lugar
                units: 'metric',
                lang: 'pt'
            }
        })
        .then(response => {
            const data = response.data;
    
            if (data.cod !== 200) {
                reply(`Erro: ${data.message}`);
                return;
            }
    
            const cidadeNome = data.name;
            const temperatura = data.main.temp;
            const descricao = data.weather[0].description;
            const umidade = data.main.humidity;
            const vento = data.wind.speed;
    
            const resposta = 
`💧 *Clima em ${cidadeNome}* 💧\n\n` +
`Descrição: ${descricao.charAt(0).toUpperCase() + descricao.slice(1)}\n` +
`Temperatura: ${temperatura}°C\n` +
`Umidade: ${umidade}%\n` +
`Velocidade do Vento: ${vento} m/s`;
    
            reply(resposta);
        })
        .catch(error => {
            reply('Erro ao obter os dados do clima. Verifique se a cidade está correta.');
        });
    
        break;

//////////////////////////////////////////////////////////////////

case 'gostoso': case 'gostosa':
if (!isGroup) return reply(resposta.grupo)
const aletd = `${Math.floor(Math.random() * 105)}`
reply('Aguarde avaliando seu perfil...')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gostoso(a) é De : ${aletd}%`)
break

case 'report':
case 'bug':
if (!q) return reply('Exemplo: /report bug no menu 18... por favor fale o nome so comando que esta com bugs, obrigado.')
reply(`${pushname} Obrigado pela colaboração, o bug foi reportado ao meu criador...`)
let templateMesssage = {
image: {url: './caos/image/menu.jpg',
quoted: info},
caption: `🚀Bug Novo🚀\nDo Número: @${sender.split('@')[0]},\nReportou:\n${q}`,
footer: 'Noelle_md'
}
caos.sendMessage("557988759129@s.whatsapp.net",templateMesssage) // Modifique com o seu numero para os bugs chegarem para vc
break

case 'gado': case 'gada':
if (!isGroup) return reply(resposta.group)
const alete = `${Math.floor(Math.random() * 105)}`
reply('Aguarde, confiscando sua porcentagem de gado...🐂😅😅😅')
await delay(5000)
reply(`${pushname} Sua Porcentagem De Gado(a) é De : ${alete}%`)
break

case 'nazista':
if (!isGroup) return reply(resposta.grupo)
const aletg = `${Math.floor(Math.random() * 105)}`
reply('Aguarde...💂')
await delay(3000)
reply(`${pushname} Sua Porcentagem De nazista é De💂: ${aletg}%`)
break

case 'teste':
await caos.sendMessage(from, { react: { text: `🚀`, key: info.key }})
if(!isCreator) return reply(msg.dono)
reply(`Caos Funcionando`)
break

default:
if(budy =="prefix" || budy == "prefixo" || budy == "Prefixo" || budy == "Prefix" || budy == "PREFIXO"|| budy == "PREFIX") {
reply(`Meu prefixo: [ ${prefix} ]`); 
await caos.sendMessage }

if (budy.includes("Qual o prefix?") || (budy.includes("Qual o Prefixo?") || (budy.includes("qual o prefix?") || (budy.includes("Prefixo do bot") || (budy.includes("prefixo?")))))) {
                await caos.sendMessage(from, { text: `${prefix}` }, { quoted: info })
            }

}} catch (erro) {
console.log(erro)
}})



caos.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
startCaos()
}})}
startCaos()


fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})

fs.watchFile('./config.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A config foi editada, irei reiniciar...');
process.exit()
}
})
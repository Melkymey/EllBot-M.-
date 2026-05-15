import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
import { en as enDefault, es as esDefault } from './lib/multi-language/_default.js'
import { ar, en, es, id, pt } from './lib/idiomas/total-idiomas.js'

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
global.owner = [
['6281245695410', 'ellBot-MK', true],
['593968263524', 'Owner 1', true],
['5492916450307', 'Owner 2', true],
['5215539356057', 'Owner 3', true]
]

global.mods = []
global.prems = []

global.ellJadibts = true
global.isBaileysFail = false

global.obtenerQrWeb = 0 
global.keepAliveRender = 0 

global.botNumberCode = '' 
global.confirmCode = '' 

global.lenguajeGB = id
global.mid = esDefault
global.version_language = '1.0 (MID-GB)'

global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://api.delirius.store'

global.APIs = {
lolhuman: {url: 'https://api.lolhuman.xyz/api', key: 'GataDiosV3'},
stellar: {url: 'https://api.stellarwa.xyz', key: 'GataDios'},
skizo: {url: 'https://skizo.tech/api', key: 'GataDios'},
alyachan: {url: 'https://api.alyachan.dev/api', key: null},
exonity: {url: 'https://exonity.tech/api', key: 'GataDios'},
ryzendesu: {url: 'https://api.ryzendesu.vip/api', key: null},
neoxr: {url: 'https://api.neoxr.eu/api', key: 'GataDios'},
davidcyriltech: {url: 'https://api.davidcyriltech.my.id', key: null},
dorratz: {url: 'https://api.dorratz.com', key: null},
siputzx: {url: 'https://api.siputzx.my.id/api', key: null},
vreden: {url: 'https://api.vreden.web.id/api', key: null},
fgmods: {url: 'https://api.fgmods.xyz/api', key: 'elrebelde21'},
popcat: {url: 'https://api.popcat.xyz', key: null}
}

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

global.official = [
['593968263524', 'ellBot Owner 💻', 1],
['573147616444', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],
['5521989092076', '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗮 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1]
]

global.mail = 'ellbotmk@gmail.com' 
global.desc = 'WhatsApp Bot Pro' 
global.desc2 = 'ellBot-MK - Your AI Personal Assistant' 
global.country = '🇮🇩' 

global.packname = '╭ 𝗲𝗹𝗹𝗕𝗼𝘁-𝗠𝗞 🤖\n┃\n┃ » 𝚃𝚎𝚕𝚎𝚐𝚛𝚊𝚖:\n┃ @ellbotmk\n┃\n┃ » 𝚈𝚘𝚞𝚃𝚞𝚋𝚎:\n┃ @ellbot\n┃\n┃ » 𝙸𝚗𝚜𝚝𝚊グラム:\n┃ @ellbot_mk\n╰━━━━━━━━•' 
global.author = ' ╭ 𝗲𝗹𝗹𝗕𝗼𝘁-𝗠𝗞 ✓\n ┃\n ┃ » 𝙶𝚒𝚝𝙷𝚞𝚋:\n ┃ ellBot-MK\n ┃\n ┃ ⊹ Super Bot WhatsApp.\n ┃\n ┃ ♡ Apoyo\n ┃ » 𝙿𝚊𝚢𝙿𝚊𝚕:\n ┃ @ellbot\n ╰━━━━━━━━•'

global.vs = '1.7.0'
global.vsJB = '5.0 (Beta)'
global.gt = '𝗲𝗹𝗹𝗕𝗼𝘁-𝗠𝗞'

// Use a fallback image if Menu2.jpg doesn't exist
try {
    global.imagen = fs.existsSync('./Menu2.jpg') ? fs.readFileSync('./Menu2.jpg') : fs.readFileSync('./media/menus/Menu3.jpg')
} catch (e) {
    global.imagen = Buffer.alloc(0)
}

global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 | 𝙍𝙀𝙎𝙐𝙇𝙏* ⊱✅⊱╮\n\n'
global.resultado = global.rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 | 𝙒𝘼𝙍𝙉𝙄𝙉𝙂* ⊱⚠️⊱╮\n\n'
global.advertencia = global.ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 | 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙏𝙄𝙊𝙉* ⊱⊱╮\n\n'
global.informacion = global.iig

global.fg = '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n'
global.fallo = global.fg

global.mg = '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n'
global.mal = global.mg

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀 | 𝙍𝙀𝙋𝙊𝙍𝙏* ⊱📩⊱╮\n\n'
global.envio = global.eeg

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n'
global.exito = global.eg

global.wm = '𝗲𝗹𝗹𝗕𝗼𝘁-𝗠𝗞'
global.igfg = '𝗲𝗹𝗹𝗕𝗼𝘁-𝗠𝗞'
global.nomorown = '6281245695410'
global.pdoc = [
'application/vnd.openxmlformats-officedocument.presentationml.presentation',
'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'application/vnd.ms-excel',
'application/msword',
'application/pdf',
'text/rtf'
]

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '

global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'
global.fin = ' • •'

global.botdate = `⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}` 
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`

global.multiplier = 85 

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🧬 Nivel : Level',
limit: global.lenguajeGB.eDiamante(),
exp: global.lenguajeGB.eExp(),
bank: '🏦 Banco : Bank',
diamond: global.lenguajeGB.eDiamantePlus(),
health: '❤️ Salud : Health',
kyubi: global.lenguajeGB.eMagia(),
joincount: global.lenguajeGB.eToken(),
emerald: global.lenguajeGB.eEsmeralda(),
stamina: global.lenguajeGB.eEnergia(),
role: '💪 Rango | Role',
premium: '🎟️ Premium',
pointxp: '📧 Puntos Exp : Point Xp',
gold: global.lenguajeGB.eOro(),
trash: global.lenguajeGB.eBasura(),
crystal: '🔮 Cristal : Crystal',
intelligence: '🧠 Inteligencia : Intelligence',
string: global.lenguajeGB.eCuerda(),
keygold: '🔑 Llave de Oro : Key Gold',
keyiron: '🗝️ Llave de Hierro : Key Iron',
emas: global.lenguajeGB.ePinata(),
fishingrod: '🎣 Caña de Pescar : Fishing Rod',
gems: '🍀 Gemas : Gemas',
magicwand: '⚕️ Varita Mágica : Magic Wand',
mana: '🪄 Hechizo : Spell',
agility: '🤸♂️ Agilidad : Agility',
darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
iron: global.lenguajeGB.eHierro(),
rock: global.lenguajeGB.eRoca(),
potion: global.lenguajeGB.ePocion(),
superior: '💼 Superior : Superior',
robo: '🚔 Robo : Robo',
upgrader: '🧰 Aumentar Mejora : Upgrade',
wood: global.lenguajeGB.eMadera(),
strength: '🦹 ♀️ Fuerza : Strength',
arc: '🏹 Arco : Arc',
armor: '🥼 Armadura : Armor',
bow: '🏹 Super Arco : Super Bow',
pickaxe: '⛏️ Pico : Peak',
sword: global.lenguajeGB.eEspada(),
common: global.lenguajeGB.eCComun(),
uncoommon: global.lenguajeGB.ePComun(),
mythic: global.lenguajeGB.eCMistica(),
legendary: global.lenguajeGB.eClegendaria(),
petFood: global.lenguajeGB.eAMascots(), 
pet: global.lenguajeGB.eCMascota(), 
bibitanggur: global.lenguajeGB.eSUva(),
bibitapel: global.lenguajeGB.eSManzana(),
bibitjeruk: global.lenguajeGB.eSNaranja(),
bibitmangga: global.lenguajeGB.eSMango(),
bibitpisang: global.lenguajeGB.eSPlatano(),
ayam: '🐓 Pollo : Chicken',
babi: '🐖 Puerco : Pig',
Jabali: '🐗 Jabalí : Wild Boar',
bull: '🐃 Toro : Bull',
buaya: '🐊 Cocodrilo : Alligator',
cat: global.lenguajeGB.eGato(),
centaur: global.lenguajeGB.eCentauro(),
chicken: '🐓 Pollo : Chicken',
cow: '🐄 Vaca : Cow',
dog: global.lenguajeGB.ePerro(),
dragon: global.lenguajeGB.eDragon(),
elephant: '🐘 Elefante : Elephant',
fox: global.lenguajeGB.eZorro(),
giraffe: '🦒 Jirafa : Giraffe',
griffin: global.lenguajeGB.eAve(), 
horse: global.lenguajeGB.eCaballo(),
kambing: '🐐 Cabra : Goat',
kerbau: '🐃 Búfalo : Buffalo',
lion: '🦁 León : Lion',
money: global.lenguajeGB.eEllCoins(),
monyet: '🐒 Mono : Monkey',
panda: '🐼 Panda',
snake: '🐍 Serpiente : Snake',
phonix: '🕊️ Fénix : Phoenix',
rhinoceros: '🦏 Rinoceronte : Rhinoceros',
wolf: global.lenguajeGB.eLobo(),
tiger: '🐅 Tigre : Tiger',
cumi: '🦑 Calamar : Squid',
udang: '🦐 Camarón : Shrimp',
ikan: '🐟 Pez : Fish',
fideos: '🍝 Fideos : Noodles',
ramuan: '🧪 Ingrediente NOVA : Ingredients',
knife: '🔪 Cuchillo : Knife'
}
let results = Object.keys(emot)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

global.rpgg = {
emoticon(string) {
string = string.toLowerCase()
let emott = {
level: '🧬',
limit: '💎',
exp: '⚡',
bank: '🏦',
diamond: '💎+',
health: '❤️',
kyubi: '🌀',
joincount: '🪙',
emerald: '💚',
stamina: '✨',
role: '💪',
premium: '🎟️',
pointxp: '📧',
gold: '👑',
trash: '🗑',
crystal: '🔮',
intelligence: '🧠',
string: '🕸️',
keygold: '🔑',
keyiron: '🗝️',
emas: '🪅',
fishingrod: '🎣',
gems: '🍀',
magicwand: '⚕️',
mana: '🪄',
agility: '🤸♂️',
darkcrystal: '♠️',
iron: '⛓️',
rock: '🪨',
potion: '🥤',
superior: '💼',
robo: '🚔',
upgrader: '🧰',
wood: '🪵',
strength: '🦹 ♀️',
arc: '🏹',
armor: '🥼',
bow: '🏹',
pickaxe: '⛏️',
sword: '⚔️',
common: '📦',
uncoommon: '🥡',
mythic: '🗳️',
legendary: '🎁',
petFood: '🍖',
pet: '🍱',
bibitanggur: '🍇',
bibitapel: '🍎',
bibitjeruk: '🍊',
bibitmangga: '🥭',
bibitpisang: '🍌',
ayam: '🐓',
babi: '🐖',
Jabali: '🐗',
bull: '🐃',
buaya: '🐊',
cat: '🐈',
centaur: '🐐',
chicken: '🐓',
cow: '🐄',
dog: '🐕',
dragon: '🐉',
elephant: '🐘',
fox: '🦊',
giraffe: '🦒',
griffin: '🦅', 
horse: '🐎',
kambing: '🐐',
kerbau: '🐃',
lion: '🦁',
money: '🐱',
monyet: '🐒',
panda: '🐼',
snake: '🐍',
phonix: '🕊️',
rhinoceros: '🦏',
wolf: '🐺',
tiger: '🐅',
cumi: '🦑',
udang: '🦐',
ikan: '🐟',
fideos: '🍝',
ramuan: '🧪',
knife: '🔪'
}
let results = Object.keys(emott)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emott[results[0][0]]
}
}
global.rpgshop = {
emoticon(string) {
string = string.toLowerCase()
let emottt = {
exp: global.lenguajeGB.eExp(),
limit: global.lenguajeGB.eDiamante(),
diamond: global.lenguajeGB.eDiamantePlus(),
joincount: global.lenguajeGB.eToken(),
emerald: global.lenguajeGB.eEsmeralda(),
berlian: global.lenguajeGB.eJoya(),
kyubi: global.lenguajeGB.eMagia(),
gold: global.lenguajeGB.eOro(),
money: global.lenguajeGB.eEllCoins(),
tiketcoin: global.lenguajeGB.eEllTickers(),
stamina: global.lenguajeGB.eEnergia(),
potion: global.lenguajeGB.ePocion(),
aqua: global.lenguajeGB.eAgua(),
trash: global.lenguajeGB.eBasura(),
wood: global.lenguajeGB.eMadera(),
rock: global.lenguajeGB.eRoca(),
batu: global.lenguajeGB.ePiedra(),
string: global.lenguajeGB.eCuerda(),
iron: global.lenguajeGB.eHierro(),
coal: global.lenguajeGB.eCarbon(),
botol: global.lenguajeGB.eBotella(),
kaleng: global.lenguajeGB.eLata(),
kardus: global.lenguajeGB.eCarton(),
eleksirb: global.lenguajeGB.eEletric(),
emasbatang: global.lenguajeGB.eBarraOro(),
emasbiasa: global.lenguajeGB.eOroComun(),
rubah: global.lenguajeGB.eZorroG(),
sampah: global.lenguajeGB.eBasuraG(),
serigala: global.lenguajeGB.eLoboG(),
kayu: global.lenguajeGB.eMaderaG(),
sword: global.lenguajeGB.eEspada(),
umpan: global.lenguajeGB.eCarnada(),
healtmonster: global.lenguajeGB.eBillete(),
emas: global.lenguajeGB.ePinata(),
pancingan: global.lenguajeGB.eGancho(),
pancing: global.lenguajeGB.eCanaPescar(),
common: global.lenguajeGB.eCComun(),
uncoommon: global.lenguajeGB.ePComun(),
mythic: global.lenguajeGB.eCMistica(),
pet: global.lenguajeGB.eCMascota(), 
gardenboxs: global.lenguajeGB.eCJardineria(), 
legendary: global.lenguajeGB.eClegendaria(),
anggur: global.lenguajeGB.eUva(),
apel: global.lenguajeGB.eManzana(),
jeruk: global.lenguajeGB.eNaranja(),
mangga: global.lenguajeGB.eMango(),
pisang: global.lenguajeGB.ePlatano(),
bibitanggur: global.lenguajeGB.eSUva(),
bibitapel: global.lenguajeGB.eSManzana(),
bibitjeruk: global.lenguajeGB.eSNaranja(),
bibitmangga: global.lenguajeGB.eSMango(),
bibitpisang: global.lenguajeGB.eSPlatano(),
centaur: global.lenguajeGB.eCentauro(),
griffin: global.lenguajeGB.eAve(),
kucing: global.lenguajeGB.eGato(),
naga: global.lenguajeGB.eDragon(),
fox: global.lenguajeGB.eZorro(),
kuda: global.lenguajeGB.eCaballo(),
phonix: global.lenguajeGB.eFenix(),
wolf: global.lenguajeGB.eLobo(),
anjing: global.lenguajeGB.ePerro(),
petFood: global.lenguajeGB.eAMascots(), 
makanancentaur: global.lenguajeGB.eCCentauro(),
makanangriffin: global.lenguajeGB.eCAve(),
makanankyubi: global.lenguajeGB.eCMagica(),
makanannaga: global.lenguajeGB.eCDragon(),
makananpet: global.lenguajeGB.eACaballo(),
makananphonix: global.lenguajeGB.eCFenix()
}
let results = Object.keys(emottt)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emottt[results[0][0]]
}
}

global.rpgshopp = {
emoticon(string) {
string = string.toLowerCase()
let emotttt = {
exp: '⚡',
limit: '💎',
diamond: '💎+',
joincount: '🪙',
emerald: '💚',
berlian: '♦️',
kyubi: '🌀',
gold: '👑',
money: '🐱',
tiketcoin: '🎫',
stamina: '✨',
potion: '🥤',
aqua: '💧',
trash: '🗑',
wood: '🪵',
rock: '🪨',
batu: '🥌',
string: '🕸️',
iron: '⛓️',
coal: '⚱️',
botol: '🍶',
kaleng: '🥫',
kardus: '🪧',
eleksirb: '💡',
emasbatang: '〽️',
emasbiasa: '🧭',
rubah: '🦊🌫️',
sampah: '🗑🌫️',
serigala: '🐺🌫️',
kayu: '🛷',
sword: '⚔️',
umpan: '🪱',
healtmonster: '💵',
emas: '🪅',
pancingan: '🪝',
pancing: '🎣',
common: '📦',
uncoommon: '🥡',
mythic: '🗳️',
legendary: '🎁',
petFood: '🍖',
pet: '🍱',
bibitanggur: '🌾🍇',
bibitapel: '🌾🍎',
bibitjeruk: '🌾🍊',
bibitmangga: '🌾🥭',
bibitpisang: '🌾🍌',
centaur: '🐐',
griffin: '🦅',
kucing: '🐈',
naga: '🐉',
fox: '🦊',
kuda: '🐎',
phonix: '🕊️',
wolf: '🐺',
anjing: '🐶',
    petFood: '🍖', 
    makanancentaur: '🐐🥩',
    makanangriffin: '🦅🥩',
    makanankyubi: '🌀🥩',
    makanannaga: '🐉🥩',
    makananpet: '🍱🥩',
    makananphonix: '🕊️🥩'
}
let results = Object.keys(emotttt)
.map((v) => [v, new RegExp(v, 'gi')])
.filter((v) => v[1].test(string))
if (!results.length) return ''
else return emotttt[results[0][0]]
}
}

global.ch = {
ch1: '120363203805910750@newsletter',
ch2: '120363317213148300@newsletter',
ch3: '120363301598733462@newsletter',
ch4: '120363418207293803@newsletter',
ch5: '120363343811229130@newsletter',
ch6: '120363307551724976@newsletter',
ch7: '120363370415738881@newsletter',
ch8: '120363374372683775@newsletter',
ch9: '120363190430436554@newsletter',
ch10: '120363323286489957@newsletter',
ch11: '120363263466636910@newsletter',
ch12: '120363323882134704@newsletter',
ch13: '120363347440552857@newsletter',
ch14: '120363403479934106@newsletter',
ch15: '120363419262674739@newsletter',
ch16: '120363167110224268@newsletter',
ch17: '120363302472386010@newsletter',
ch18: '120363305941657414@newsletter',
ch19: '120363336642332098@newsletter',
ch20: '120363385983031660@newsletter',
ch21: '120363420992828502@newsletter',
ch22: '120363420238618096@newsletter'
}

let file = typeof __filename !== 'undefined' ? __filename : fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)
})

global.yt = 'https://youtube.com/@ellbotmk'
global.ig = 'https://www.instagram.com/ellbot_mk'
global.md = 'https://github.com/balah6/ellBot-MK'
global.fb = 'https://www.facebook.com/groups/ellbot'
global.tk = 'https://www.tiktok.com/@ellbot_mk'
global.ths = 'https://www.threads.net/@ellbot_mk'
global.paypal = 'https://paypal.me/ellbot'
global.asistencia = 'https://wa.me/6281245695410'
global.all = 'https://www.atom.bio/ellbotmk'
global.canal1 = 'https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A'
global.canal2 = 'https://whatsapp.com/channel/0029Va6yY0iLY6d6XDmqA03g'
global.canal3 = 'https://whatsapp.com/channel/0029VaKn22pDJ6GwY61Ftn15'
global.canal4 = 'https://t.me/globalgb'

global.soporteGB = 'https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV'
global.grupo1 = 'https://chat.whatsapp.com/JRG6rVJJV40IxlI1wjQ0E9'
global.grupo2 = 'https://chat.whatsapp.com/B5s3ohjEGofH5YDD05jAV5'
global.grupo_collab1 = 'https://chat.whatsapp.com/IO5k0UOF7hOJHE1eH3Fcxh'
global.grupo_collab2 = 'https://chat.whatsapp.com/GFsgXW2VD4I4FEOSlEg9wp'
global.grupo_collab3 = 'https://chat.whatsapp.com/H1TEBeMtFVv3RcayD1WfGU'
global.grupo_collab4 = 'https://chat.whatsapp.com/LuD3YzdOjH16LUwPPCVmL6'

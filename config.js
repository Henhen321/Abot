import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285866034212', './Henz', true],
  ['6285866034212']
] // nomor owner

global.mods = ['6285866034212'] 
global.prems = ['6285866034212', '6285866034212']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.betabotz.eu.org': 'CIYiVxDJ'
}

// daftar di sini https://api.betabotz.eu.org
global.lann = 'CIYiVxDJ'

// setting limit user
global.limit = 69

// Sticker WM
global.packname = 'Serene' 
global.author = '@nansoffc' 
//--info NS [ NANS ]
global.NSnama = 'H-Arv BOT MD'
global.NSig = 'https://www.instagram.com/henhen.drajat' 
global.NSgc = 'https://whatsapp.com/channel/'
global.NSthumb = 'https://i.ibb.co/bFvNLgs/Ungu-Kreatif-Siaran-Langsung-Game-You-Tube-Thumbnail-20240326-105826-0000-1.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.eror = 'Error, Kesalahan tidak terduga'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // max warning

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

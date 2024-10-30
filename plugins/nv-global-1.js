let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './media/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}   

if (!chat.isBanned && chat.audios && m.text.match(/(админы)/gi)) {
let vn = './media/админы.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(аууу|есть кто)/gi)) {    
let vn = './media/аууу.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
      
if (!chat.isBanned && chat.audios && m.text.match(/(досведули|пока)/gi)) {    
let vn = './media/досвее.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  

if (!chat.isBanned && chat.audios && m.text.match(/(интересно)/gi)) {    
let vn = './media/интересно.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(нету денег|кайф)/gi)) {    
let vn = './media/кайф.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(вауу|красота)/gi)) {    
let vn = './media/красотка.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(люблю)/gi)) {    
let vn = './media/люблю.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(ура|удачи)/gi)) {    
let vn = './media/мечта.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(молчуны|выходите|где все)/gi)) {    
let vn = './media/молчуны.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(отвали)/gi)) {    
let vn = './media/отвали.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(отцтань)/gi)) {    
let vn = './media/отцтань.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(печалька|не повезло)/gi)) {    
let vn = './media/печалька.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(правила)/gi)) {    
let vn = './media/правила.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(привет|здравствуйте)/gi)) {    
let vn = './media/привет.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(сломайся)/gi)) {    
let vn = './media/сломайся.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(🤣)/gi)) {    
let vn = './media/смех.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(удалить)/gi)) {    
let vn = './media/спам.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(сладких снов|доброй ночи)/gi)) {    
let vn = './media/спать.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(страшная|ужас)/gi)) {    
let vn = './media/страшная.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(дурак|дура|тупой)/gi)) {    
let vn = './media/тупой.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(фууу)/gi)) {    
let vn = './media/фуу.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(хочу)/gi)) {    
let vn = './media/хочу.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(я здесь|я тут)/gi)) {    
let vn = './media/ятут.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
    
if (!chat.isBanned && chat.audios && m.text.match(/(псих)/gi)) {    
let vn = './media/дура.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}








if (!chat.isBanned && chat.audios && m.text.match(/(поздравляю)/gi)) {
    let vn = './media/поздравляю.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(всмысле)/gi)) {    
    let vn = './media/всмысле.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
          
    if (!chat.isBanned && chat.audios && m.text.match(/(тишина)/gi)) {    
    let vn = './media/тишина.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  
    
    if (!chat.isBanned && chat.audios && m.text.match(/(хорошая идея)/gi)) {    
    let vn = './media/хорошая идея.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(номер счет)/gi)) {    
    let vn = './media/счет.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(ушла)/gi)) {    
    let vn = './media/ушла.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(лот)/gi)) {    
    let vn = './media/лот.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(блин)/gi)) {    
    let vn = './media/блин.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(круто)/gi)) {    
    let vn = './media/круто.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(давай мне)/gi)) {    
    let vn = './media/давай мне.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(досвидания)/gi)) {    
    let vn = './media/досвидания.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(😡)/gi)) {    
    let vn = './media/смайлый.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(спам|ссылка)/gi)) {    
    let vn = './media/сыылка.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}
        
    if (!chat.isBanned && chat.audios && m.text.match(/(ухожу)/gi)) {    
    let vn = './media/ухожу.mp3'
    this.sendPresenceUpdate('recording', m.chat)   
    this.sendFile(m.chat, vn, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}


    

return !0 }
export default handler

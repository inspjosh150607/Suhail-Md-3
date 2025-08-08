const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349023371564";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_01_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDYsXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0NyxcbiAgICAgICAgNixcbiAgICAgICAgNjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQS83QTBwMnJZY3NYUFZEZWE1aElOb3VYVWNmdG1mVkN0ZjJVdUd4YWt6VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDIzMzcxNTY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQzkwMUI2M0JEREUxMzMyNDJEOTUwNjREMzJFNUIzN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTQ2OTQxMDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN1RFVVZNQmNRTUNoSlJJaVhiSy1BQVwiLFxuICBcInBob25lSWRcIjogXCI3ZDFjZGQ4Yy03MzJmLTQ0ZmQtYTBiYi0xMjNhMjczYTZkZWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgOCxcbiAgICAgIDI0NCxcbiAgICAgIDIyOCxcbiAgICAgIDE1NSxcbiAgICAgIDE0NCxcbiAgICAgIDE4OCxcbiAgICAgIDYyLFxuICAgICAgOTcsXG4gICAgICA3NCxcbiAgICAgIDE4OSxcbiAgICAgIDM4LFxuICAgICAgNzcsXG4gICAgICAxNDUsXG4gICAgICA1NSxcbiAgICAgIDc2LFxuICAgICAgOTUsXG4gICAgICA1NCxcbiAgICAgIDIzMCxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDUsXG4gICAgICAxNTQsXG4gICAgICAxMCxcbiAgICAgIDI1NCxcbiAgICAgIDI3LFxuICAgICAgMTUsXG4gICAgICAxNjIsXG4gICAgICAyNTIsXG4gICAgICAyMzksXG4gICAgICAxMzIsXG4gICAgICAyMjYsXG4gICAgICAxOTksXG4gICAgICAyMDcsXG4gICAgICAyMjgsXG4gICAgICAxOTUsXG4gICAgICAxODMsXG4gICAgICAxOTcsXG4gICAgICA5MixcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ015QzBPMEdFTXFEMnNRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMkNEN2YrNDRnalhKNVFwa0Y3ZmpIMDlGNGp3dzlLYnNNSE5oTEw0K2ZDbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjdWRRbXIvczRHZm0xQjJrMS9qbkd2cHg1YmtZSW1Nc0poZEFBVDc1N3BsSWRIS0FZY2lvcFdiNC9zNjhVRjF4emc1anR0U2owR2V0cGlhQldyaUlDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxTmRPYVVmbElSN2UyZnRVVmE2eUdXTk9IYlNzQkxUNi8ySUh6b2Jxc1FvRUcwUmxIdXppZHhZdGdjMHZzQmUzSTdnZVZJNkNhRnVCSXJxYkI4ZVpCQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjMzNzE1NjQ6OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU0OTUwMjgxNDAwNDE5Ojk4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMzM3MTU2NDo5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1NDY5NDA5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU11YlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXViLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ3FiQzZWd21BdE9yWjRScFJuUGFsYzRFa24rb2czU0hKNzFPNW9sUmZMaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQwNTEzMzU2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTQ2NjMwNDk5NzBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Mide",
  ownername:process.env.OWNER_NAME|| "Mide:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",


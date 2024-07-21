const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347083104693";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_21_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMzLFxuICAgICAgICA0MixcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTAwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICAyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTksXG4gICAgICAgIDg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSUlGdjdoLzkvd2dnMWhvSW5DbGVZQURreFdoR01ZcEFHemJxTUxYMnZIMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOWJPSkxqdTdSdFdlNGNFeGl0SWxoUVwiLFxuICBcInBob25lSWRcIjogXCJlNDRhYzliNi05ZDE3LTQyNTEtYjVkZC01NjA5YWUzZjI3NjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgMTU1LFxuICAgICAgMjM0LFxuICAgICAgMTM5LFxuICAgICAgMTI4LFxuICAgICAgMTk2LFxuICAgICAgMzMsXG4gICAgICAyMSxcbiAgICAgIDY2LFxuICAgICAgMjUxLFxuICAgICAgNzMsXG4gICAgICA4NCxcbiAgICAgIDE3NyxcbiAgICAgIDE3NixcbiAgICAgIDY1LFxuICAgICAgOTYsXG4gICAgICA4MCxcbiAgICAgIDYwLFxuICAgICAgNzUsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxNzksXG4gICAgICAxODcsXG4gICAgICA0MCxcbiAgICAgIDQyLFxuICAgICAgMjIxLFxuICAgICAgMTgyLFxuICAgICAgMTk4LFxuICAgICAgMTkwLFxuICAgICAgMTM2LFxuICAgICAgMjQzLFxuICAgICAgMzksXG4gICAgICAxMzIsXG4gICAgICAyMDEsXG4gICAgICAyNDIsXG4gICAgICAxMzgsXG4gICAgICAxNjYsXG4gICAgICAxOTksXG4gICAgICA4OSxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMyTVhCOTcyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDgzMTA0NjkzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGtsYXNzaWMgSGFpcm1waXJlXCIsXG4gICAgXCJsaWRcIjogXCIxMDk0ODMzMzAxNzExMjc6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3ZZcnB3UEVMejY4N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCL0hXcVZ0c1dwb2JtblIyb2NsM0FzeVBCTGtncHp2UXdWWXQveUptV1ZVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBTQnUyLzdKK3k3Kzkvbk43UHBwOWRpVWdzU2wwbHgxb0R2dnQ3TDZjenRKREhaY3dqN2Ixd0thM1UzN1JEdnU3dmN0SGFPZWdkc2F3QW0zeHFZWkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhQcGxHcWMvV0l3ZVR1b1FrbXJTS2VDRnpMdmkvZU1hNlFzNWlWdXBEUTgrcTBSK0dLODJmWnE5bHNIN3NJVDVXOXhSTWwwdUZXYUloZzhmOTh0UEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODMxMDQ2OTM6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU2NDQ3OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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

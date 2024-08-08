//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "2349162203566";
global.sudo = process.env.SUDO || "2349162203566";
global.owner = process.env.OWNER_NUMBER || "2349162203566";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 10;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid01NN1ZLL2tmaVF4dHYydloxWm5WNGtxajBYMzBHaEVYTGY2a0Qrdmxtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3dQalIzcis0cWhnQkxqd2dneGtkVjhnOWxjSlgvREpxRnJFVzFkK0ZUUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQnBkSFpOb3VSenBXRUJYd1lubG1ydSt4Wm1RMEMwY1d1dVdyQTJ1ajJJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlNkVLa0hjbmNxYyt6RDNjeFlSc0ljWlNGTnN4bjJ5UFpGam5DZjRxWmswPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGbXVpNzgvdmd1K2p2bWhMNWFtTy80MEFDNlZpdHUzNUloeXV3RkY3WDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlqT3dCdWYwcDN2a3dZSjZ6czRLR1FUc0xaV3c0OFFGR0w3RUQvL1dleDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NvM09LZWF0QWpQQ0p2Sk5LcWwrWVA5R244QkpqM2xydWtxcjdvQ0xIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibldDdERaWHNaa3E3akZOckg3bWZCT3BMOWtOSVlmUm5YN1d6Wnp5Um9BWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ4SmhsSG9NRVF1bWtHWXBFMXlnVUpjbFRQVitwUVhFSEFjZ1ZteEJId1kxNi8rK2dTS0NjdlMrWWxlYml0b0VBZHk4ODJRTFRYL3Ftc1FjYTVSbWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJZNk9VRzFjdG13QWNpVy83M2pBWkw4YmRITjJidGN4VnAyVXhraVVGL1hZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1T00tY2xCcFF4ZTVER1h0aFpKMmtBIiwicGhvbmVJZCI6ImRlNmRjOGYwLTliYjAtNDJiZS1hZjZhLWJhM2UyMzZiNjg0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdFpaWSs2OVVacis1RitnU1RNT2o3dnQxeHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUMzOWtsRUV4d1E1elJOdURxK2lSaUtlek1BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZaNzQ2TlFKIiwibWUiOnsiaWQiOiIyMzQ5MTYyMjAzNTY2OjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoid2l6enlibHUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04vaXRjZ0VFSnlQdnJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjN4RXZyYWtta1lWMlJZejErMytBVEp5eENaemppUUM3Tm1qMFRFbkZKQlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjQrOUVFK2x1aE5hM0xrN0I0aUhleDVsYVp2TzZSNDZqNitGSmNJOEJaSENoWVBvMzFLZ3htY0ZvSldHb3BrRHA3RDU0Y2xJTmFkT0lVSW1xTmppZENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQdktpNFhxWk0vQkwwN2xEWUo0bTA0SkRPcHhUeGFTNGdHb2xvK3NpWDNhcUsvM2xSc2ZFZkJ6aHlaZk1hSVNUTnNEMHFlOWlmOEJVSHBaSzNOb0FqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjIyMDM1NjY6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkOFJMNjJwSnBHRmRrV005ZnQvZ0V5Y3NRbWM0NGtBdXpabzlFeEp4U1FVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzc5NTYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJETyJ9|
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

/* Codded by @King Yehan

Whatsapp* {{
    "name": "✬King Yehan✬",
    "description": "World Best Whatsapp Bot",
    "logo": "https://i.ibb.co/cQQ7RkC/main.jpg",
    "keywords": ["King", "KingYehan"],
    "stack": "container",
    "env": {
        "_KING_YEHAN_SESSION": {
            "description": "Scan the QR code and enter the code obtained. QR කෝඩය ස්කෑන් කර ලබා ගන්නා කේතය ඇතුලත් කරන්න",i,am king yehan✊
            "required": true
        },
        "LANGUAGE": {
            "description": "Enter the language you want (EN or SI), ඔබට අවශ්‍ය භාෂාව ඇතුලත් කරන්න.. (EN හො SI)",
            "required": true,
            "value": "en"
        },
        "S_DOWN_SONG": {
            "description": "Enter the audio download message... ශබ්ද බාගත වීමේ පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "_*🧿I'm Searching your song🧿
        },
        "S_UP_SONG": {
            "description": "Enter the audio upload message... ශබ්ද උඩුගත වීමේ පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "_🧿Im Uploading your song🧿
        },
        "S_DOWN_VID": {
            "description": "Enter the video download message... වීඩියෝ බාගත වීමේ පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "_*🧿I'm Bringing your video🧿
        },
        "S_UP_VID": {
            "description": "Enter the video upload message... වීඩියෝ උඩුගත වීමේ පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "_*🧿Im Uploading your video🧿"
        },
        "MENU_HEADER": {
            "description": "ITS CHANGE YOUR CMD LIST HEADER",
            "required": true,
            "value": "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━\n┃   *KING YEHAN WHATSAPP BOT*\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n THIS IS KING YEHAN CMD MENU"
        },
        "GROUP_MANAGE": {
            "description": "If you want the admin in the group to be able to use the admin command too, enter true. සමූහය තුල සිටින ඇඩ්මින් හටද ඇඩ්මින් විදාන භාවිතා කිරීමට හැකි සේ සැකසීම අවශ්‍යයි නම් true ලෙස ඇතුලත් කරන්න",
            "required": true,
            "value": "false"
        },
        "ANTI_LINK": {
            "description": "If someone inserts a link into the group and wants to remove him from the group, enter true..සමූහයට කෙනෙකු ලින්ක් එකක් ඇතුලත් කලහොත් ඔහුව ගෲපයෙන් නෙරපා දැමීමට අවශ්‍ය නම් true ලෙස ඇතුලත් කරන්න",
            "required": true,
            "value": "false"
        },
        "INBO_BLOCK": {
            "description": "INBOX BLOCKING SYSTEM.. ඉන්බොක්ස් බ්ලොක් කිරීමේ පද්දතිය.. eg true/all or true/cmd or false",
            "required": true,
            "value": "false"
        },
        "SPAM_CMD": {
            "description": "Changeble Spam CMD... ස්පෑම් සදහා ඌ විදානය ලබා දෙන්න",
            "required": true,
            "value": "hunt"
        },
        "BAD_KICK": {
            "description": "BAD WORD &  GROUP LINK KICKING SYSTEM.. අසබ්‍ය වචන හා ගෲප් ලින්ක් දමන්නන් ඉවත් කිරීමේ පද්දතිය",
            "required": true,
            "value": "true"
        },
        "ALIVE_LOGO": {
            "description": "Add Your Alive Logo",
            "required": false
        },
        "WARN_MSG": {
            "description": "WANR KICK MASSAGE .. වර්න් ලබා දී කික් වන විට යෙදිය යුතු පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "*Your Times over Now.. So Good Bye*"
        },
        "WARN_COUNT": {
            "description": "Input Warn Count",
            "required": true,
            "value": "3"
        },
        "HANDLERS": {
            "description": "For commands.",
            "required": true,
            "value": "^[.!;]"
        },
        "CAPTION_NAME": {
            "description": "කැප්ශන් එක ඇතුලත් කරන්න... Enter the Caption",
            "required": false
         },
        "IMGBB_API": {
            "description": "Add the api i.ibb.co site..==> i.ibb.co සයිට් එකට ලොග් වී ලබා ගන්නා api එක ඇතුලත් කරන්න",
            "required": true,
            "value": "2290891d3a7b4fdfc2abffceb5a3bc92"
         },
          "ZZ_PASSWORD": {
            "description": "ඔතන raviya ඔහොම ගහන්න නැත්තම් බොට් වැඩ නෑ
            "required": true
         },
        "OWNER_SHIP": {
            "description": "බොට් අයිතිකරුගේ නාමය ඇතුලත් කරන්න ==> Input The Owner Name",
            "required": false,
            "value": "KING YEHAN"
        },
        
        "YOUR_BOT_NAME": {
            "description": "බොට්ගේ නාමය ඇතුලත් කරන්න ==> Input The Bot Name",
            "required": false,
            "value": "✬ KING YEHAN ✬"
        },
        "NO_LOG": {
            "description": "Set true if you don't want to see error log.",
            "required": true,
            "value": "false"
        },
        "SEND_READ": {
            "description": "Write true if you want to throw seen.",
            "required": true,
            "value": "true"
        },
        "HEROKU": {
            "description": "If it is running in Heroku, type true.",
            "required": true,
            "value": "true"
        },
        "HEROKU_API_KEY": {
            "description": "Heroku API Key.",
            "required": true
        },
        "MUTE_MESSAGE": {
            "description": "Customizable Mute Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "UNMUTE_MESSAGE": {
            "description": "Customizable Unmute Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "BLOCK_MESSAGE": {
            "description": "Customizable Block Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "UNBLOCK_MESSAGE": {
            "description": "Customizable Unblock Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "WORK_TYPE": {
            "description": "KING YEHAN BOT Working Type. If you use “public”, everyone can use the bot. Else if you use “private”, only you can use your bot.",
            "required": true,
            "value": "public"
        },
        "HEROKU_APP_NAME": {
            "description": "Heroku APP Name.",
            "required": true
        },
        "DEBUG": {
            "description": "Geliştiricilere özeldir.",
            "required": true,
            "value": "false"
        },
        "REMOVE_BG_API_KEY": {
            "description": "Get API Key. https://remove.bg",
            "required": false
        },
        "ALIVE_MESSAGE": {
            "description": "Customizable Alive Message! Use => default, to change back.  include {status} & {phoneinfo} & {sever} & {ratings} to add about chat & phone info & saver info & Your Ratings to your alive message",
            "required": false,
            "value": "Hello I Am Alive POWERD BY KING YEHAN\n{ratings}\n {status} \n {phoneinfo} \n {sever}"
        },
        "BAN_MESSAGE": {
            "description": "Customizable Ban Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "ADD_MESSAGE": {
            "description": "Customizable Add Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "KICKME_MESSAGE": {
            "description": "Customizable Kickme Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "PROMOTE_MESSAGE": {
            "description": "Customizable Promote Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "DEMOTE_MESSAGE": {
            "description": "Customizable Demote Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "AFK_MESSAGE": {
            "description": "Customizable AFK Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "GAN_IMAGE": {
            "description": "Type image link for Gan Style plugin.",
            "required": true,
            "value": "https://i.hizliresim.com/loUtAb.jpg"
        },
        "GROUP_MANAGE": {
            "description": "Type true if you need allow admin to use admin command",
            "required": false,
            "value": "false"
        },
        "CLONE_MSG": {
            "description": "This MSG will display after the clone end",
            "required": false
        },
        "NO_ONLINE": {
            "description": "Type true if you don't want to appear online.",
            "required": false,
            "value": "false"
        },
        "SEW_AI": {
            "description": "Artificial Intelligence Chat Bot!",
            "required": false,
            "value": "false"
        },
        "COFFEEHOUSE_API_KEY": {
            "description": "Pass This Step!",
            "required": false,
            "value": "true"
        }
    },
    "addons": [{
      "plan": "heroku-postgresql"
    }],
    "buildpacks": [{
      "url": "heroku-community/apt"
      }]
  }
    "name": "✬King Yehan✬",
    "description": "World Best Whatsapp Bot",
    "logo": "https://i.ibb.co/cQQ7RkC/main.jpg",
    "keywords": ["King", "KingYehan"],
    "stack": "container",
    "env": {
        "_KING_YEHAN_SESSION": {
            "description": "Scan the QR code and enter the code obtained. QR කෝඩය ස්කෑන් කර ලබා ගන්නා කේතය ඇතුලත් කරන්න",i,am king yehan✊
            "required": true
        },
        "LANGUAGE": {
            "description": "Enter the language you want (EN or SI), ඔබට අවශ්‍ය භාෂාව ඇතුලත් කරන්න.. (EN හො SI)",
            "required": true,
            "value": "en"
        },
        "S_DOWN_SONG": {
            "description": "Enter the audio download message... ශබ්ද බාගත වීමේ පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "_*🧿I'm Searching your song🧿
        },
        "S_UP_SONG": {
            "description": "Enter the audio upload message... ශබ්ද උඩුගත වීමේ පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "_🧿Im Uploading your song🧿
        },
        "S_DOWN_VID": {
            "description": "Enter the video download message... වීඩියෝ බාගත වීමේ පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "_*🧿I'm Bringing your video🧿
        },
        "S_UP_VID": {
            "description": "Enter the video upload message... වීඩියෝ උඩුගත වීමේ පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "_*🧿Im Uploading your video🧿"
        },
        "MENU_HEADER": {
            "description": "ITS CHANGE YOUR CMD LIST HEADER",
            "required": true,
            "value": "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━\n┃   *KING YEHAN WHATSAPP BOT*\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n THIS IS KING YEHAN CMD MENU"
        },
        "GROUP_MANAGE": {
            "description": "If you want the admin in the group to be able to use the admin command too, enter true. සමූහය තුල සිටින ඇඩ්මින් හටද ඇඩ්මින් විදාන භාවිතා කිරීමට හැකි සේ සැකසීම අවශ්‍යයි නම් true ලෙස ඇතුලත් කරන්න",
            "required": true,
            "value": "false"
        },
        "ANTI_LINK": {
            "description": "If someone inserts a link into the group and wants to remove him from the group, enter true..සමූහයට කෙනෙකු ලින්ක් එකක් ඇතුලත් කලහොත් ඔහුව ගෲපයෙන් නෙරපා දැමීමට අවශ්‍ය නම් true ලෙස ඇතුලත් කරන්න",
            "required": true,
            "value": "false"
        },
        "INBO_BLOCK": {
            "description": "INBOX BLOCKING SYSTEM.. ඉන්බොක්ස් බ්ලොක් කිරීමේ පද්දතිය.. eg true/all or true/cmd or false",
            "required": true,
            "value": "false"
        },
        "SPAM_CMD": {
            "description": "Changeble Spam CMD... ස්පෑම් සදහා ඌ විදානය ලබා දෙන්න",
            "required": true,
            "value": "hunt"
        },
        "BAD_KICK": {
            "description": "BAD WORD &  GROUP LINK KICKING SYSTEM.. අසබ්‍ය වචන හා ගෲප් ලින්ක් දමන්නන් ඉවත් කිරීමේ පද්දතිය",
            "required": true,
            "value": "true"
        },
        "ALIVE_LOGO": {
            "description": "Add Your Alive Logo",
            "required": false
        },
        "WARN_MSG": {
            "description": "WANR KICK MASSAGE .. වර්න් ලබා දී කික් වන විට යෙදිය යුතු පණිවිඩය ඇතුලත් කරන්න",
            "required": true,
            "value": "*Your Times over Now.. So Good Bye*"
        },
        "WARN_COUNT": {
            "description": "Input Warn Count",
            "required": true,
            "value": "3"
        },
        "HANDLERS": {
            "description": "For commands.",
            "required": true,
            "value": "^[.!;]"
        },
        "CAPTION_NAME": {
            "description": "කැප්ශන් එක ඇතුලත් කරන්න... Enter the Caption",
            "required": false
         },
        "IMGBB_API": {
            "description": "Add the api i.ibb.co site..==> i.ibb.co සයිට් එකට ලොග් වී ලබා ගන්නා api එක ඇතුලත් කරන්න",
            "required": true,
            "value": "2290891d3a7b4fdfc2abffceb5a3bc92"
         },
          "ZZ_PASSWORD": {
            "description": "ඔතන raviya ඔහොම ගහන්න නැත්තම් බොට් වැඩ නෑ
            "required": true
         },
        "OWNER_SHIP": {
            "description": "බොට් අයිතිකරුගේ නාමය ඇතුලත් කරන්න ==> Input The Owner Name",
            "required": false,
            "value": "KING YEHAN"
        },
        
        "YOUR_BOT_NAME": {
            "description": "බොට්ගේ නාමය ඇතුලත් කරන්න ==> Input The Bot Name",
            "required": false,
            "value": "✬ KING YEHAN ✬"
        },
        "NO_LOG": {
            "description": "Set true if you don't want to see error log.",
            "required": true,
            "value": "false"
        },
        "SEND_READ": {
            "description": "Write true if you want to throw seen.",
            "required": true,
            "value": "true"
        },
        "HEROKU": {
            "description": "If it is running in Heroku, type true.",
            "required": true,
            "value": "true"
        },
        "HEROKU_API_KEY": {
            "description": "Heroku API Key.",
            "required": true
        },
        "MUTE_MESSAGE": {
            "description": "Customizable Mute Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "UNMUTE_MESSAGE": {
            "description": "Customizable Unmute Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "BLOCK_MESSAGE": {
            "description": "Customizable Block Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "UNBLOCK_MESSAGE": {
            "description": "Customizable Unblock Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "WORK_TYPE": {
            "description": "KING YEHAN BOT Working Type. If you use “public”, everyone can use the bot. Else if you use “private”, only you can use your bot.",
            "required": true,
            "value": "public"
        },
        "HEROKU_APP_NAME": {
            "description": "Heroku APP Name.",
            "required": true
        },
        "DEBUG": {
            "description": "Geliştiricilere özeldir.",
            "required": true,
            "value": "false"
        },
        "REMOVE_BG_API_KEY": {
            "description": "Get API Key. https://remove.bg",
            "required": false
        },
        "ALIVE_MESSAGE": {
            "description": "Customizable Alive Message! Use => default, to change back.  include {status} & {phoneinfo} & {sever} & {ratings} to add about chat & phone info & saver info & Your Ratings to your alive message",
            "required": false,
            "value": "Hello I Am Alive POWERD BY KING YEHAN\n{ratings}\n {status} \n {phoneinfo} \n {sever}"
        },
        "BAN_MESSAGE": {
            "description": "Customizable Ban Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "ADD_MESSAGE": {
            "description": "Customizable Add Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "KICKME_MESSAGE": {
            "description": "Customizable Kickme Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "PROMOTE_MESSAGE": {
            "description": "Customizable Promote Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "DEMOTE_MESSAGE": {
            "description": "Customizable Demote Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "AFK_MESSAGE": {
            "description": "Customizable AFK Message! Use => default, to change back.",
            "required": false,
            "value": "default"
        },
        "GAN_IMAGE": {
            "description": "Type image link for Gan Style plugin.",
            "required": true,
            "value": "https://i.hizliresim.com/loUtAb.jpg"
        },
        "GROUP_MANAGE": {
            "description": "Type true if you need allow admin to use admin command",
            "required": false,
            "value": "false"
        },
        "CLONE_MSG": {
            "description": "This MSG will display after the clone end",
            "required": false
        },
        "NO_ONLINE": {
            "description": "Type true if you don't want to appear online.",
            "required": false,
            "value": "false"
        },
        "SEW_AI": {
            "description": "Artificial Intelligence Chat Bot!",
            "required": false,
            "value": "false"
        },
        "COFFEEHOUSE_API_KEY": {
            "description": "Pass This Step!",
            "required": false,
            "value": "true"
        }
    },
    "addons": [{
      "plan": "heroku-postgresql"
    }],
    "buildpacks": [{
      "url": "heroku-community/apt"
      }]
  }

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
const { DataTypes } = require('sequelize');

const PluginDB = Details.DATABASE.define('Plugin', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

async function installPlugin(adres, file) {
    var Plugin = await PluginDB.findAll({
        where: {url: adres}
    });

    if (Plugin.length >= 1) {
        return false;
    } else {
        return await PluginDB.create({ url: adres, name: file });
    }
}
module.exports = { PluginDB: PluginDB, installPlugin: installPlugin };

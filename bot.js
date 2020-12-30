const Discord = require('discord.js');
const client = new Discord.Client();

client.login('NzkzOTEzNjI1MDY0MjQzMjIx.X-zLrg.adwqPLz9qTxif_RgZg6tvtWT9Mw');

client.on('ready', readyDiscord);

function readyDiscord(){
    console.log("yessir")
}

client.on('message', newMessage);

const replies = [
    "yea",
    "oh yea",
    "spice",
    "sweet",
    "ooh thats hot",
    "ur adopted and everyone pretends to like you"
]

function newMessage(msg){
    console.log(msg.content);
    if(msg.channel.id === "793922994413764638" && msg.content==="hi"){
       // msg.reply("aight bet, secret channel")
        msg.channel.send(replies[Math.floor((Math.random()*replies.length))])
    }
}
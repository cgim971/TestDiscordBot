const Discord = require('discord.js');
const { excelParser } = require('./excelRender');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!");
    excelParser();
});

client.login('MTA5Mjk4NDQ5MTg3MTU3MTk5OA.GSDKER.SDvntF4Wvf5I0Hj_w3gSJPXIqaL0IsHOHMcEHg');

client.on('message', async (message) => {
    const content = message.content;

    let date = new Date();
    let day = date.getDay();
    if (day == 6 || day == 0) {
        return;
    }


    const s = content.split(" ");
    if (s == "!봉사") {

        await message.channel.send(`${date.getMonth() + 1}월 ${date.getDate()}일 봉사는 `);
    }
    else if (s == "!이벤트") {

    }

});

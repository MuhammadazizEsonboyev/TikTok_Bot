const TelegramBot = require("node-telegram-bot-api");
const {tiktok_dowlander} = require("./request")


const TOKEN = "5718842803:AAEd2DXfrAQPKcUXrN9BKZEhm7E9ulVLrsg";

const bot = new TelegramBot(TOKEN, { polling: true });



bot.on("message", async (message) => {
    const chatId = message.chat.id;
    if(message.text == "/start"){
        await bot.sendMessage(chatId, "Assalomu Alaykum botimizga hush kelibsiz. Bot ga biron bir link yuboring!")
    }

    const video_link = await tiktok_dowlander(message.text)
    await bot.sendVideo(chatId, video_link)

})
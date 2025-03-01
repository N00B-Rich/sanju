require("dotenv").config();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN); // Token ko .env file se lena

// Start command ka reply
bot.start((ctx) => {
  ctx.reply("Hello! Main Sanju bol rhi hu. Kya haal h aapka?");
});

// Jo bhi user likhega, bot wahi reply karega
bot.on("text", (ctx) => {
  ctx.reply(`Bot Response: ${ctx.message.text}`);
});

// Bot ko start karo
bot.launch();
console.log("🤖 Bot is running...");

import { Telegraf, Markup } from "telegraf";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const token = process.env.BOT_TOKEN;
const webAppUrl = "https://google.com";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome! Press the button to launch an app",
    Markup.keyboard([Markup.button.webApp("Send a message", webAppUrl)])
      .resize()
      .oneTime()
  );
});

bot.launch();

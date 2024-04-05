require('dotenv').config();
const { Telegraf, Markup } = require('telegraf')

const token = process.env.API_KEY_T
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const bot = new Telegraf(token)

bot.use(Telegraf.log())

bot.command('inline', (ctx) => {
    return ctx.reply('<b>Coke</b> or <i>Pepsi?</i>', {
      parse_mode: 'HTML',
      ...Markup.inlineKeyboard([
        Markup.button.callback('Coke', 'Coke'),
        Markup.button.callback('Pepsi', 'Pepsi')
      ])
    })
  })
  
  bot.command('random', (ctx) => {
    return ctx.reply(
      'random example',
      Markup.inlineKeyboard([
        Markup.button.callback('Coke', 'Coke'),
        Markup.button.callback('Dr Pepper', 'Dr Pepper', Math.random() > 0.5),
        Markup.button.callback('Pepsi', 'Pepsi')
      ])
    )
  })
  
  bot.command('caption', (ctx) => {
    return ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300/?random' },
      {
        caption: 'Caption',
        parse_mode: 'Markdown',
        ...Markup.inlineKeyboard([
          Markup.button.callback('Plain', 'plain'),
          Markup.button.callback('Italic', 'italic')
        ])
      }
    )
  })
  
  bot.hears(/\/wrap (\d+)/, (ctx) => {
    return ctx.reply(
      'Keyboard wrap',
      Markup.keyboard(['one', 'two', 'three', 'four', 'five', 'six'], {
        columns: parseInt(ctx.match[1])
      })
    )
  })
  
  bot.action('Dr Pepper', (ctx, next) => {
    return ctx.reply('👍').then(() => next())
  })
  
  bot.action('plain', async (ctx) => {
    await ctx.answerCbQuery()
    await ctx.editMessageCaption('Caption', Markup.inlineKeyboard([
      Markup.button.callback('Plain', 'plain'),
      Markup.button.callback('Italic', 'italic')
    ]))
  })
  
  bot.action('italic', async (ctx) => {
    await ctx.answerCbQuery()
    await ctx.editMessageCaption('_Caption_', {
      parse_mode: 'Markdown',
      ...Markup.inlineKeyboard([
        Markup.button.callback('Plain', 'plain'),
        Markup.button.callback('* Italic *', 'italic')
      ])
    })
  })

  bot.launch()

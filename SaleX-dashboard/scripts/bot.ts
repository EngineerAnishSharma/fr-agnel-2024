import * as qrcode from 'qrcode-terminal';
import { Client, LocalAuth, Message } from 'whatsapp-web.js';

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr: string) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', (message: Message) => {
    console.log(message.body);
});

client.on('message', async (message: Message) => {
    if (message.body === '!ping') {
        await message.reply('pong');
    }
});

client.initialize();

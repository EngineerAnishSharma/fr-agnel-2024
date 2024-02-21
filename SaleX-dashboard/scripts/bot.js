const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qrCode) => {
    // Display the QR code for the user to scan
    qrcode.generate(qrCode, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

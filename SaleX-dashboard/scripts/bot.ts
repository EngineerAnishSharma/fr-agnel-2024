import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

const client = new Client({
    // Add your client options here
});

client.on('qr', (qrCode: string) => {
    // Display the QR code for the user to scan
    qrcode.generate(qrCode, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

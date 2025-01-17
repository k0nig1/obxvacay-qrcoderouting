// Run this script with Node.js to generate a QR code in PNG and SVG format    
// run node generateQR.js or use npm script
import QRCode from 'qrcode';
import fs from 'fs';

// The URL to encode in the QR code
const url = 'https://obxvacay-qrcoderouting.web.app/';
const outputLocation = "./QRCodes/";

// Ensure the output directory exists
if (!fs.existsSync(outputLocation)){
  fs.mkdirSync(outputLocation, { recursive: true });
}

// Generate a PNG file
QRCode.toFile(outputLocation + '/qrcode' + new Date().toISOString().replace(/T/, '_').replace(/\..+/, '') + '.png', url, {
  width: 1000, // Set a high resolution for printing
  errorCorrectionLevel: 'H', // Highest error correction level for reliability
}, (err) => {
  if (err) throw err;
  console.log('High-resolution QR code saved as qrcode.png');
});

// Generate an SVG file (great for vector-based printing)
QRCode.toString(url, { type: 'svg' }, (err, svg) => {
  if (err) throw err;

  // Save the SVG to a file
  fs.writeFileSync(outputLocation + '/qrcode' + new Date().toISOString().replace(/T/, '_').replace(/\..+/, '') + '.svg', svg);
  console.log('Vector QR code saved as qrcode.svg');
});
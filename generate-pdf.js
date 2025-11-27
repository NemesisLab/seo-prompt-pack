import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
    console.log('🚀 Starting PDF generation...');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Read the HTML template
    const htmlPath = path.join(__dirname, 'src', 'assets', 'prompt-pack-template.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // Set content
    await page.setContent(htmlContent, {
        waitUntil: 'networkidle0'
    });

    // Generate PDF
    const pdfPath = path.join(__dirname, 'public', 'Viral_Social_Media_Prompts.pdf');
    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }
    });

    await browser.close();

    console.log('✅ PDF generated successfully!');
    console.log(`📄 Location: ${pdfPath}`);

    // Get file size
    const stats = fs.statSync(pdfPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 File size: ${fileSizeInMB} MB`);
}

generatePDF().catch(console.error);

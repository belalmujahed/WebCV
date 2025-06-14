import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }

    const {name, email, message} = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({message: 'Missing required fields'});
    }

    // Configure your SMTP transporter (use environment variables in production)
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`,
        });
        return res.status(200).json({message: 'Email sent successfully'});
    } catch (error) {
        return res.status(500).json({message: 'Failed to send email', error});
    }
}

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.mailersend.net',
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_MAILERSEND_USER,
        pass: process.env.NEXT_PUBLIC_MAILERSEND_PASS
    }
});

export default async function mailerFunction(data: object) {
    const info = await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_MAILERSEND_USER,
        to: process.env.NEXT_PUBLIC_MYEMAIL,
        subject: "HedgeHog Finances Notification",
        text: JSON.stringify(data),
        // html: "<b>Hello world!</b>",
    });

    console.log("Message sent: %s", info.messageId);
}
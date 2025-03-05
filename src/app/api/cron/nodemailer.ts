import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'mxslurp.click',
    port: 2525,
    secure: false,
    auth: {
        user: 'hedhehog@mailslurp.biz',
        pass: process.env.NEXT_PUBLIC_NODEMAILERPASS
    }
});

export default async function mailerFunction() {
    const info = await transporter.sendMail({
        from: 'hedhehog@mailslurp.biz',
        to: "hedhehog@mailslurp.biz",
        subject: "Hello",
        text: "Hello world",
        html: "<b>Hello world!</b>",
    });

    console.log("Message sent: %s", info.messageId);
}
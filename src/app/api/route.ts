import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'mxslurp.click',
    port: 2525,
    secure: false,
    auth: {
        user: 'hedgehogstocks@mailslurp.biz',
        pass: 'UihFOU7mN0GoCGwk0DuLy5H6wSJVqMie'
    }
});

export default async function mailerFunction() {
    const info = await transporter.sendMail({
        from: 'hedgehogstocks@mailslurp.biz',
        to: "hedgehogstocks@mailslurp.biz",
        subject: "Hello",
        text: "Hello world",
        html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
}

mailerFunction();
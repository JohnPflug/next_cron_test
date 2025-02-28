import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'mxslurp.click',
    port: 2525,
    auth: {
        user: 'hedgehogstocks@mailslurp.biz',
        pass: 'UihFOU7mN0GoCGwk0DuLy5H6wSJVqMie',
    },
});

const sendMail = async (): Promise<void> => {
    try {
        const info = await transporter.sendMail({
            from: 'hedgehogstocks@mailslurp.biz',
            to: 'hedgehogstocks@mailslurp.biz',
            subject: 'Hello',
            text: 'Hello',
            html: '<b>Hello</b>',
        });

        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

sendMail();
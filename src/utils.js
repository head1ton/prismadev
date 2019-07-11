import dotenv from "dotenv";
import path from "path";
//console.log(__dirname);
dotenv.config({ path: path.resolve(__dirname, ".env") });


import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

// console.log(process.env.SENDGRID_USERNAME,
//             process.env.SENDGRID_PASSWD)

export const sendMail = email => {
    const options = {
        auth: {
            api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENDGRID_PASSWD
        }
    }
    const client = nodemailer.createTransport(sgTransport(options));
    //console.log('client :', client);
    return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
    const email = {
        from: "head1ton@gmail.com",
        to: address,
        subject: "🔒 Login Secret for Prismadev 🔒",
        html: `Hello Your login secret it ${secret}.<br />Copy paste on the app/website to login in.`
    }
    return sendMail(email);
}
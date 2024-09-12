import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, phone, name, message, companyName } = await request.json();

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptionsToOwner: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `הודעה מ${name} (${phone}${email ? `, ${email}` : ''})`,
    text: `${message}\n
------------------------
שם: ${name}
טלפון: ${phone}
${companyName ? `שם חברה: ${companyName}` : ''}
מייל: ${email || 'לא סופק'}`,
  };

  const mailOptionsToUser: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: 'תודה על פנייתך',
    text: `תודה רבה על פנייתך
קיבלתי את המייל ואחזור אליך בהקדם האפשרי

בברכה,
אביטל גולן שפר`,
  };

  const sendMailPromise = (options: Mail.Options) =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(options, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise(mailOptionsToOwner);
    if (email) {
      await sendMailPromise(mailOptionsToUser);
    }
    return NextResponse.json({ message: 'קיבלנו את ההודעה שלך ונחזור אליך בהקדם האפשרי' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

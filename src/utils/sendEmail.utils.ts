import { createTransport } from "nodemailer";
import { IEmailRequest } from "../interfaces/users";
import { AppError } from "../error";
import Mailgen from "mailgen";

class EmailService {
  async sendEmail({ to, subject, text }: IEmailRequest) {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter
      .sendMail({
        from: "eduardo.kenzie123@gmail.com",
        to,
        subject,
        html: text,
      })
      .then(() => {
        console.log("Email send with sucess!");
      })
      .catch((err) => {
        console.log(err);
        throw new AppError("Error sending email, try again later", 500);
      });
  }

  resetPasswordTemplate(
    userName: string,
    userEmail: string,
    resetToken: string
  ) {
    var mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Motorsshop",
        link: "https://localhost:3000/seller",
      },
    });

    var email = {
      body: {
        name: userName,
        intro:
          "You have received this email because a password reset request for your account was received.",
        action: {
          instructions: "Click the button below to reset your password:",
          button: {
            color: "#DC4D2F",
            text: "Reset your password",
            link: `http://localhost:3001/resetPassword/${resetToken}`,
          },
        },
        outro:
          "If you did not request a password reset, no further action is required on your part.",
      },
    };
    const emailBody = mailGenerator.generate(email);
    const emailTemplate = {
      to: userEmail,
      subject: "Reset Password",
      text: emailBody,
    };
    return emailTemplate;
  }
}
const emailService = new EmailService();

export { emailService };

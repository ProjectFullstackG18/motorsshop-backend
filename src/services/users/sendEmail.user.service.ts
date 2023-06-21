import { Repository } from "typeorm"
import { sendEmailResetPassword } from "../../controllers/users.controller"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { IUser, IUserReturn } from "../../interfaces/users"
import { AppError } from "../../error"
import { randomUUID } from "crypto"
import { returnUserSchema } from "../../schemas/users.schema"
import { emailService } from "../../utils/sendEmail.utils"
import { hashSync } from "bcryptjs"


const sendEmailResetPasswordService = async(email: string) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where:{
            email: email
        }
    }) 

    if(!user){
        throw new AppError("User not found!")
    }

    const resetToken = randomUUID()

    user.resettoken = resetToken

      await userRepository.save(user);

      const resetPasswordTemplate = emailService.resetPasswordTemplate(user.name, email, resetToken)

      await emailService.sendEmail(resetPasswordTemplate)
    
}

const resetPasswordService = async (password: string, resetToken: string) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where:{
            resettoken: resetToken
        }
    }) 

    if(!user){
        throw new AppError("User Not Found!", 404)
    }

    user.password = hashSync(password, 10)
    user.resettoken = null

    await userRepository.save(user)


}

export {sendEmailResetPasswordService, resetPasswordService}
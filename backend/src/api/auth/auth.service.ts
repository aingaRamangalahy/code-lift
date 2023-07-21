import { Service } from 'typedi'
import { ErrorResponse } from '@core/utils'
import { UserRepository } from '@api/user/user.repository'
import User from '@api/user/user.model'
import { IUserDocument } from '@api/user/user.interface'

@Service()
export default class AuthService {
    private readonly userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository(User)
    }

    singin = async (credentials) => {
        try {
            const { email, password } = credentials

            if (!email || !password) {
                throw new ErrorResponse('Invalid email or password', 400)
            }

            const user = await this.userRepository.getOneUser(
                { email },
                'password'
            )

            if (!user) {
                throw new ErrorResponse(
                    `User with email: ${email} not found`,
                    401
                )
            }

            // check if password match
            const isMatched = await user.matchPassword(password)

            if (!isMatched) {
                throw new ErrorResponse('Wrong password', 401)
            }

            user.connected = true
            user.save({ validateBeforeSave: false })
            return this.generateResponseToken(user)
            
        } catch (error) {
            throw error
        }
    }

    register = async (userPayload) => {
        try {
            const { name, email, password, role } = userPayload

            const user = await this.userRepository.addUser({
                name,
                email,
                password,
                role,
            })

            return this.generateResponseToken(user);
        } catch (error) {
            throw error
        }
    }

    signout = async (id: string) => {
        const user = await this.userRepository.findById(id)

        user.connected = false

        user.save({ validateBeforeSave: false })

        return {
            success: true,
            data: user,
        }
    }

    generateResponseToken = (user: IUserDocument) => {
        // generate token
        const token = user.generateToken()
        const data = {
            _id: user._id,
            role: user.role,
            email: user.email,
            name: user.name,
        }
        return {
            success: true,
            data,
            token,
        }
    }
}

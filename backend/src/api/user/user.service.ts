import { Service } from "typedi";
import { IUserDocument } from "./user.interface";
import User from "./user.model";
import { ErrorResponse } from "@core/utils";
import { UserRepository } from "./user.repository";

@Service()
export default class UserService {
    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository(User);
    }

    createUser = async (userPayload: IUserDocument) => {
        try {
            const user = await this.userRepository.addUser(userPayload);
            return {
                success: true,
                data: user,
            };
        } catch (error) {
            /**thorw errors to let erroHandler handle them */
            throw error;
        }
    };

    getAllUsers = async () => {
        try {
            const users = await this.userRepository.getUsers();
            return {
                success: true,
                data: users,
            };
        } catch (error) {
            throw error;
        }
    };

    getUserById = async (id: string) => {
        try {
            const user = await this.userRepository.getUserById(id);

            if (!user) {
                throw new ErrorResponse(`User with id: ${id} not found`, 404);
            }

            return {
                success: true,
                data: user,
            };
        } catch (error) {
            throw error;
        }
    };

    updateUser = async (id: string, userPayload: IUserDocument) => {
        try {
            const user = await this.userRepository.updateUser(id, userPayload);

            if (!user) {
                throw new ErrorResponse(`User with id: ${id} not found`, 404);
            }

            return {
                success: true,
                data: user,
            };

        } catch (error) {
            throw error;
        }
    };

    deleteUser = async (id: string) => {
        try {
            const user = await this.userRepository.deleteUser(id);
            if (!user) {
                throw new ErrorResponse(`User with id: ${id} not found`, 404);
            }
            return {
                success: true,
                data: `User removed successfully`,
            };
            
        } catch (error) {
            throw error;
        }
    };
}
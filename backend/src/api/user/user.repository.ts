import { IUserDocument } from "./user.interface";
import { BaseRepository } from "@core/repositories";
import { IFindPayload } from "@core/interfaces";

export class UserRepository extends BaseRepository<IUserDocument> {
  addUser = (user: any) => {
    return this.create(user);
  };

  getUsers = () => {
    return this.find();
  };

  getOneUser = (payload:IFindPayload) => {
    return this.findOne(payload);
  };

  getUserById = (id: string) => {
    return this.findById(id);
  };

  updateUser = (id: string, user: IUserDocument) => {
    return this.update(id, user);
  };

  deleteUser = (id: string) => {
    return this.delete(id);
  };
}
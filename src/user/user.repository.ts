import { GenericRepository } from "src/utils/abstract.repository";
import { CreateUserDto } from "./dto/create_user.dto";
import { UpdateUserDto } from "./dto/update_user.dto";
import { GetUserDto } from "./dto/get_user.dto";

export class UserRepository extends GenericRepository<CreateUserDto, UpdateUserDto, GetUserDto> {

    async findUserByEmail(data: CreateUserDto): Promise<boolean> {
        if(this.p.user.findUnique({ where: { email: data.email, name: data.name, password: data.password } })){
            return true
        }

        return false

    }
    getAll(): Promise<GetUserDto[]> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<GetUserDto> {
        throw new Error("Method not implemented.");
    }
    create(data: CreateUserDto): boolean {

        if (this.p.user.create({ data })) {
            return true
        }

        return false

    }
    update(id: string, data: UpdateUserDto): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: string): boolean {
        throw new Error("Method not implemented.");
    }


}



import { GenericRepository } from "src/utils/abstract.repository";
import { PrismaService } from "src/utils/prisma.service";
import { UserDto } from "./dto/user.dto";

export class UserRepository extends GenericRepository<UserDto> {
    getAll(): Promise<UserDto[]> {
        throw new Error("Method not implemented.");
    }
    get(id: string): Promise<UserDto> {
        throw new Error("Method not implemented.");
    }
    create(data: UserDto): boolean {
        if(this.prisma.user.create({data})){
            return true;
        }

        return false;
    }
    update(id: string, data: UserDto) {
        throw new Error("Method not implemented.");
    }
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    constructor(private prisma: PrismaService) {
        super();
    }



   

    
}
import { User } from "@prisma/client";

export class UserDto implements User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
    name: string;
}

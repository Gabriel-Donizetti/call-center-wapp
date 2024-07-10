import { User } from "@prisma/client";

export class UpdateUserDto {
    email?: string;
    password?: string;
    name?: string;
}
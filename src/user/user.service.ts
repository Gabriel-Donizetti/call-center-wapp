import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';
import { UserRepository } from './user.repository';
import { json } from 'stream/consumers';

@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository) { }

  create(createUserDto: CreateUserDto) {
    if(this.userRepository.findUserByEmail(createUserDto)){
      throw new Error("usuario ja cadastrado")
    }

    this.userRepository.create(createUserDto)

    return "usuario criado";
  }

  findAll() {


    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

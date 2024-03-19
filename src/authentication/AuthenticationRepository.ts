import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { UserEntity } from './Entity/UserEntity'
import { UserDataDto } from './Dto/UserDataDto'
import { IAuthenticationRepository } from './IAuthenticationRepository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AuthenticationRepository implements IAuthenticationRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly authenticationRepository: Repository<UserEntity>,
  ) {}

  async save(userData: UserEntity): Promise<UserEntity> {
    return await this.authenticationRepository.save(userData)
  }

  create(userData: UserDataDto): UserEntity {
    const newUser = this.authenticationRepository.create(userData)
    return newUser
  }

  async findByUsername(username: string): Promise<UserEntity> {
    return await this.authenticationRepository.findOne({
      where: { username: username },
    })
  }

  async find() {
    return await this.authenticationRepository.find()
  }

  async deleteById(id: number){
    await this.authenticationRepository.delete(id)
  }
}

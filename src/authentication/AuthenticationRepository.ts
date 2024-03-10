import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { UserEntity } from './Entity/UserEntity'
import { UserDataDto } from './Dto/UserDataDto'

@Injectable()
export class AuthenticationRepository {
  constructor(
    private readonly authenticationRepository: Repository<UserEntity>,
  ) {}

  async registerUser(userData: UserDataDto) : Promise<UserEntity> {
    const newUser = this.authenticationRepository.create(userData)
    await this.authenticationRepository.save(newUser)
    return newUser
  }

  async authenticateUser(userData: UserDataDto) : Promise<UserEntity>{
    const user = await this.authenticationRepository.findOne({
        where: { username: userData.username }
    })

    if(!user){
        return null
    }

    const valid = this.validateUser(userData, user)

    if(valid){
        return null
    }

    return user
  }

  validateUser(userData: UserDataDto, user: UserEntity) {
    return userData.password === user.password
  }
}

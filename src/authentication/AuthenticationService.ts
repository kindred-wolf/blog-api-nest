import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { UserDataDto } from './Dto/UserDataDto'
import { UserEntity } from './Entity/UserEntity'
import { IAuthenticationRepository } from './IAuthenticationRepository'
import { AuthenticationRepository } from './AuthenticationRepository'
import * as bcrypt from 'bcrypt';
import PostgresErrorCode from '../database/PostgresErrorCode.enum';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly authenticationRepository: AuthenticationRepository,
  ) {}

  async registerUser(userData: UserDataDto) {
    const hashedPassword = await bcrypt.hash(userData.password, 10)
    try {
      var newUser = this.authenticationRepository.create({
        ...userData,
        password: hashedPassword,
      })
      await this.authenticationRepository.save(newUser)
      newUser.password = undefined
      return newUser
    } catch (error) {
      if (error?.code ===  PostgresErrorCode.UniqueViolation) {
        throw new HttpException(
          'User with that email already exists',
          HttpStatus.BAD_REQUEST,
        )
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      )
    }
  }

  async authenticateUser(userData: UserDataDto): Promise<UserEntity> {
    var user = await this.authenticationRepository.findByUsername(
      userData.username,
    )

    if (!user) {
      return null
    }

    if (bcrypt.compare(userData.password, user.password)) {
      console.log('validated')
      return user
    }

    console.log('Wrong password')
  }

  async getUserByUsername(username: string) {
    return await this.authenticationRepository.findByUsername(username)
  }

  async getUsers() {
    return await this.authenticationRepository.find()
  }

  async deleteUserById(id: number) {
    await this.authenticationRepository.deleteById(id)
  }
}

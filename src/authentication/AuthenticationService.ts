import { Injectable } from '@nestjs/common';
import { AuthenticationRepository } from './AuthenticationRepository'
import { UserDataDto } from './Dto/UserDataDto'
import { UserEntity } from './Entity/UserEntity'

@Injectable()
export class AuthenticationService {
    constructor(private readonly authenticationRepository: AuthenticationRepository) {}
    
    async registerUser(userData: UserDataDto){
        return await this.authenticationRepository.registerUser(userData)
    }

    async authenticateUser(userData: UserDataDto): Promise<UserEntity>{
        return await this.authenticationRepository.authenticateUser(userData)
    }
}

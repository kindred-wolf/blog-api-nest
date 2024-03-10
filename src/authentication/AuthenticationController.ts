import { Body, Controller, Post } from '@nestjs/common';
import { UserDataDto } from './Dto/UserDataDto'
import { AuthenticationService } from './AuthenticationService'

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticationService){}

    @Post('register')
    async registerUser(@Body() userData: UserDataDto){
        return await this.authenticationService.registerUser(userData)
    }

    @Post('login')
    async authenticateUser(@Body() userData: UserDataDto){
        return await this.authenticateUser(userData)
    }
}

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
        return await this.authenticationService.authenticateUser(userData)
    }

    @Get('user/:username')
    async getUseryUsername(@Param('username') username: string){
        return await this.authenticationService.getUserByUsername(username)
    }

    @Get('users')
    async getAllUsers(){
        return await this.authenticationService.getUsers()
    }

    @Delete('user/:id')
    async deleteUserById(@Param('id') id: number){
        await this.authenticationService.deleteUserById(id)
    }
}

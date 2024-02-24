import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { PostsService } from './posts.service'
import { CreatePostDto } from './DTO/createPost.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly appService: PostsService
  ) {}

  @Get()
  async getAllPosts() {
    await this.appService.getAllPosts();
  }

  @Get('/:id')
  async getPostByID(@Param('id') id) {
    await this.appService.getPostByID(id)
  }

  @Post()
  async createPost(@Body() post: CreatePostDto){
    await this.appService.createPost(post)
  }

  @Delete('/:id')
  async deletePost(@Param('id') id: number){
    await this.appService.deletePost(id)
  }
}

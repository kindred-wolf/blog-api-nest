import { Injectable } from '@nestjs/common'
import { CreatePostDto } from '../dto/createPost.dto'

@Injectable()
export class PostsService {
  async getAllPosts() {
    console.log('Get all posts')
  }

  async getPostByID(id: number){
    console.log(`Get post ${id}`)
  }

  async createPost(post: CreatePostDto){
    console.log(`Creating post: ${post.title}: ${post.content}`)
  }

  async deletePost(id: number){
    console.log(`Delete post ${id}`)
  }
}

import { Injectable } from '@nestjs/common'
import { CreatePostDto } from './DTO/createPost.dto'
import { Post } from './Entities/post.entity'
import { PostsRepository } from './posts.repository'

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async getAllPosts(): Promise<Post[] | undefined> {
    try {
      return await this.postsRepository.getAllPosts()
    } catch (e) {
      console.log(e)
    }
  }

  async getPostByID(id: number) {
    try {
      return await this.postsRepository.getPostByID(id)
    } catch (e) {
      console.log(e)
    }
  }

  async createPost(post: CreatePostDto): Promise<Post> {
    console.log(`Creating post: ${post.title}: ${post.content}`)
    return await this.postsRepository.createPost(post)
  }

  async deletePost(id: number) {
    console.log(`Delete post ${id}`)
  }
}

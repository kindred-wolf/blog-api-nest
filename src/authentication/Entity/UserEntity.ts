import { PostEntity } from "src/posts/Entities/PostEntity"
import { Column, Entity, PrimaryGeneratedColumn, Table } from "typeorm"

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    public id?: number

    @Column({ unique: true })
    public username: string

    @Column()
    public password: string
}
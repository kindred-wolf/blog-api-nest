import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    public id?: number

    @Column({ unique: true })
    public username: string

    @Column()
    public password: string
}
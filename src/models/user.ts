import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({
  name: 'USERS',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({nullable: true})
  profilePictureUrl?: string

  @Column({default: false})
  isAdmin?: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  lastUpdatedAt: Date
}

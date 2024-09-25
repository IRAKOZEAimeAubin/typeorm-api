import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity({
  name: 'COURSES',
})
export class Course {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  seqNo: number

  @Column()
  title: string

  @Column()
  iconUrl: string

  @Column()
  longDescription: string

  @Column()
  category: string
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  surname: string;
  
  @Column('text', { unique: true })
  email: string;

  @Column()
  password: string;
}

export default User;

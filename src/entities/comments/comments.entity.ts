import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Car } from "../cars/cars.entity";
import { User } from "../user/user.entity";

@Entity("Comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  comment: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Car, { onDelete: "CASCADE" })
  car: Car;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;
}

export { Comment };

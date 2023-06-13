import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "../user/user.entity";

@Entity("Cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 30 })
  brand: string;

  @Column({ length: 60 })
  model: string;

  @Column({ length: 4 })
  year: string;

  @Column({ length: 60 })
  fuel_type: string;

  @Column({ length: 8 })
  km: string;

  @Column({ length: 60 })
  color: string;

  @Column({ length: 60 })
  fipe_price: string;

  @Column({ length: 60 })
  price: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  is_active: Boolean;

  @OneToMany(() => Image, (image) => image.car)
  @JoinColumn()
  images: Image[];
}

@Entity("Images")
class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text" })
  URL: string;

  @ManyToOne(() => Car, { onDelete: "CASCADE" })
  @JoinColumn()
  car: Car;
}

export { Car, Image };

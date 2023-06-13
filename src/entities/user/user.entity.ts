import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Car } from "../cars/cars.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 30, unique: true })
  email: string;

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ length: 10 })
  birthdate: string;

  @Column({ type: "varchar", nullable: true })
  description?: string | null | undefined;

  @Column({ length: 10 })
  cep: string;

  @Column({ length: 10 })
  estate: string;

  @Column({ length: 30 })
  city: string;

  @Column({ length: 30 })
  street: string;

  @Column({ length: 10 })
  number: string;

  @Column({ type: "varchar", nullable: true })
  complement?: string | null | undefined;

  @Column()
  seller: boolean;

  @Column({ length: 150 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

  @OneToMany(() => Car, (car) => car.user, { cascade: true })
  cars: Car[];
}

export { User };

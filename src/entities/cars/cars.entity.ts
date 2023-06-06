import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("Cars")
class Cars {
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
  update_at: Date;

  @Column()
  is_active: Boolean;
}

export { Cars };

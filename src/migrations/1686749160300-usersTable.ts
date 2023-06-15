import { MigrationInterface, QueryRunner } from "typeorm";

export class UsersTable1686749160300 implements MigrationInterface {
    name = 'UsersTable1686749160300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(30) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(20) NOT NULL, "birthdate" character varying(10) NOT NULL, "description" character varying, "cep" character varying(10) NOT NULL, "estate" character varying(10) NOT NULL, "city" character varying(30) NOT NULL, "street" character varying(30) NOT NULL, "number" character varying(10) NOT NULL, "complement" character varying, "seller" boolean NOT NULL, "password" character varying(150) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD CONSTRAINT "FK_d653766e036b766919dab6970d8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Cars" DROP CONSTRAINT "FK_d653766e036b766919dab6970d8"`);
        await queryRunner.query(`ALTER TABLE "Cars" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

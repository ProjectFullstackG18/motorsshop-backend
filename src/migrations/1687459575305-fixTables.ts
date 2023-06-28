import { MigrationInterface, QueryRunner } from "typeorm";

export class FixTables1687459575305 implements MigrationInterface {
    name = 'FixTables1687459575305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(30) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(20) NOT NULL, "birthdate" character varying(10) NOT NULL, "description" character varying, "cep" character varying(10) NOT NULL, "estate" character varying(10) NOT NULL, "city" character varying(30) NOT NULL, "street" character varying(30) NOT NULL, "number" character varying(10) NOT NULL, "complement" character varying, "seller" boolean NOT NULL, "password" character varying(150) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "resettoken" character varying, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(30) NOT NULL, "model" character varying(60) NOT NULL, "year" character varying(4) NOT NULL, "fuel_type" character varying(60) NOT NULL, "km" character varying(8) NOT NULL, "color" character varying(60) NOT NULL, "fipe_price" character varying(60) NOT NULL, "price" character varying(60) NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL, "userId" uuid, CONSTRAINT "PK_37ee9dbe8c8c8ff70b35afaf2a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "URL" text NOT NULL, "carId" uuid, CONSTRAINT "PK_2d64b690d92c5ffcfd162cec31c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Cars" ADD CONSTRAINT "FK_d653766e036b766919dab6970d8" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Images" ADD CONSTRAINT "FK_8d4b3d041602c88c8cf7d80ef69" FOREIGN KEY ("carId") REFERENCES "Cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Images" DROP CONSTRAINT "FK_8d4b3d041602c88c8cf7d80ef69"`);
        await queryRunner.query(`ALTER TABLE "Cars" DROP CONSTRAINT "FK_d653766e036b766919dab6970d8"`);
        await queryRunner.query(`DROP TABLE "Images"`);
        await queryRunner.query(`DROP TABLE "Cars"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

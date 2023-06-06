import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1686075783187 implements MigrationInterface {
    name = 'InitialMigrations1686075783187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(30) NOT NULL, "model" character varying(60) NOT NULL, "year" character varying(4) NOT NULL, "fuel_type" character varying(60) NOT NULL, "km" character varying(8) NOT NULL, "color" character varying(60) NOT NULL, "fipe_price" character varying(60) NOT NULL, "price" character varying(60) NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL, CONSTRAINT "PK_37ee9dbe8c8c8ff70b35afaf2a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "URL" text NOT NULL, "carId" uuid, CONSTRAINT "PK_2d64b690d92c5ffcfd162cec31c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Images" ADD CONSTRAINT "FK_8d4b3d041602c88c8cf7d80ef69" FOREIGN KEY ("carId") REFERENCES "Cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Images" DROP CONSTRAINT "FK_8d4b3d041602c88c8cf7d80ef69"`);
        await queryRunner.query(`DROP TABLE "Images"`);
        await queryRunner.query(`DROP TABLE "Cars"`);
    }

}

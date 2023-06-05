import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1686003932216 implements MigrationInterface {
    name = 'InitialMigration1686003932216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Cars" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(30) NOT NULL, "model" character varying(60) NOT NULL, "year" character varying(4) NOT NULL, "fuel_type" character varying(60) NOT NULL, "km" character varying(8) NOT NULL, "color" character varying(60) NOT NULL, "fipe_price" character varying(60) NOT NULL, "price" character varying(60) NOT NULL, "description" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL, CONSTRAINT "PK_37ee9dbe8c8c8ff70b35afaf2a8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Cars"`);
    }

}

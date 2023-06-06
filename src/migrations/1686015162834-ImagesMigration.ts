import { MigrationInterface, QueryRunner } from "typeorm";

export class ImagesMigration1686015162834 implements MigrationInterface {
  name = "ImagesMigration1686015162834";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "URL" text NOT NULL, "carId" uuid, CONSTRAINT "PK_2d64b690d92c5ffcfd162cec31c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "Images" ADD CONSTRAINT "FK_8d4b3d041602c88c8cf7d80ef69" FOREIGN KEY ("carId") REFERENCES "Cars"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Images" DROP CONSTRAINT "FK_8d4b3d041602c88c8cf7d80ef69"`
    );
    await queryRunner.query(`DROP TABLE "Images"`);
    await queryRunner.query(`DROP TABLE "Cars"`);
  }
}

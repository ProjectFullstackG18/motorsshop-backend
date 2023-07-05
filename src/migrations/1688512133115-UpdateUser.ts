import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1688512133115 implements MigrationInterface {
  name = "UpdateUser1688512133115";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Cars" ALTER COLUMN "price" TYPE double precision`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Cars" ALTER COLUMN "price" TYPE double precision`
    );
  }
}

import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1616793762452 implements MigrationInterface {
    name = 'CreateTables1616793762452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_application"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_application" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_subscription"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_subscription" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_terminal"."purchase_date" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_terminal" ALTER COLUMN "purchase_date" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_merchant_log"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_merchant_log" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_merchant_log" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_merchant_log" ADD "message" character varying(1000) NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_submerchant"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_submerchant" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_merchant"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_merchant" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_branch"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_branch" ALTER COLUMN "created_at" SET DEFAULT 'now()'`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_sale" DROP CONSTRAINT "PK_70de4bc44135460d35bd008d428"`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_sale" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_sale" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_sale" ADD CONSTRAINT "PK_70de4bc44135460d35bd008d428" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dev"."tb_sale" DROP CONSTRAINT "PK_70de4bc44135460d35bd008d428"`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_sale" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_sale" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_sale" ADD CONSTRAINT "PK_70de4bc44135460d35bd008d428" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_branch" ALTER COLUMN "created_at" SET DEFAULT '2021-03-26 13:19:39.290633+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_branch"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_merchant" ALTER COLUMN "created_at" SET DEFAULT '2021-03-26 13:19:39.290633+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_merchant"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_submerchant" ALTER COLUMN "created_at" SET DEFAULT '2021-03-26 13:19:39.290633+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_submerchant"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_merchant_log" DROP COLUMN "message"`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_merchant_log" ADD "message" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_merchant_log" ALTER COLUMN "created_at" SET DEFAULT '2021-03-26 13:19:39.290633+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_merchant_log"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_terminal" ALTER COLUMN "purchase_date" SET DEFAULT '2021-03-26 13:19:39.290633+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_terminal"."purchase_date" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_subscription" ALTER COLUMN "created_at" SET DEFAULT '2021-03-26 13:19:39.290633+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_subscription"."created_at" IS NULL`);
        await queryRunner.query(`ALTER TABLE "dev"."tb_application" ALTER COLUMN "created_at" SET DEFAULT '2021-03-26 13:19:39.290633+00'`);
        await queryRunner.query(`COMMENT ON COLUMN "dev"."tb_application"."created_at" IS NULL`);
    }

}

import { application } from "express";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelApplication } from "../models/modelApplication";
import { ApplicationCategory } from "./ApplicationCategory";
import { Common } from "./Common";
import { MerchantApplication } from "./MerchantApplication";
import { ParameterKey } from "./ParameterKey";

@Entity(modelApplication.TABLE_APPLICATION_WITHOUT_SCHEMA)
export class Application extends Common {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelApplication.columns.NAME, type: "text", unique: true })
    applicationName: string;

    @Column({ name: modelApplication.columns.KEY, type: "text", nullable: true })
    applicationKey: string;

    @Column({ name: modelApplication.columns.AVATAR_PATH, type: "text", nullable: true })
    avatarPath: string;

    @Column({ name: modelApplication.columns.CATEGORY, type: "int4", nullable: true })
    category: number;

    @Column({ name: modelApplication.columns.CLIENT_ID, type: "varchar", nullable: true })
    clientId: string;

    @Column({ name: modelApplication.columns.CLIENT_SECRET, type: "varchar", nullable: true })
    clientSecret: string;

    @Column({ name: modelApplication.columns.WEBHOOK_URL, type: "varchar", nullable: true })
    webhookUrl: string;

    @Column({ name: modelApplication.columns.WEBHOOK_USERNAME, type: "varchar", nullable: true })
    webhookUsername: string;

    @Column({ name: modelApplication.columns.WEBHOOK_PASSWORD, type: "varchar", nullable: true })
    webhookPassword: string;

    @OneToMany(() => ParameterKey, parameterKey => parameterKey.application)
    parameterKeys: ParameterKey[];

    @ManyToOne(() => ApplicationCategory, applicationCategory => applicationCategory.applications)
    applicationCategory: ApplicationCategory;

    @OneToMany(() => MerchantApplication, merchantApplicatipn => merchantApplicatipn.application)
    merchantApplications: MerchantApplication[];
}
import { application } from "express";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelMerchantApplication } from "../models/modelMerchantApplication";
import { Application } from "./Application";
import { Merchant } from "./Merchant";
import { Terminal } from "./Terminal";
import { TerminalApplication } from "./TerminalApplication";

@Entity(modelMerchantApplication.TABLE_MERCHANTAPPLICATION_WITHOUT_SCHEMA)
export class MerchantApplication {

    @PrimaryGeneratedColumn({type: "int4"})
    id: number;

    @ManyToOne(() => Application, application => application.merchantApplications)
    application: Application;

    @Column({name: modelMerchantApplication.columns.ACTIVATION_STATUS, type: "int2", default: modelMerchantApplication.defaults.ACTIVATION_STATUS})
    activationStatus: number;

    @OneToMany(() => TerminalApplication, terminalApplication => terminalApplication.merchantApplication)
    terminalApplications: TerminalApplication[];

    @ManyToOne(() => Merchant, merchant => merchant.merchantApplications, { onDelete: 'CASCADE' })
    merchant: Merchant;
}
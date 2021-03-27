import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelTerminalApplication } from "../models/modelTerminalApplication";
import { MerchantApplication } from "./MerchantApplication";
import { Terminal } from "./Terminal";

@Entity(modelTerminalApplication.TABLE_TERMINALAPPLICATION_WITHOUT_SCHEMA)
export class TerminalApplication {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelTerminalApplication.columns.ACTIVATION_DATE, type: "timestamp", nullable: true })
    activationDate: Date;

    @Column({ name: modelTerminalApplication.columns.ACTIVATION_STATUS, type: "int2", nullable: true })
    activationStatus: number;

    @ManyToOne(() => MerchantApplication, merchantApplication => merchantApplication.terminalApplications)
    merchantApplication: MerchantApplication;

    @ManyToOne(() => Terminal, terminal => terminal.terminalApplications, { onDelete: 'CASCADE' })
    terminal: Terminal;

}
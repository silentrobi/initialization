import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelTerminal } from "../models/modelTerminal";
import { Branch } from "./Branch";
import { Subscription } from "./Subscription";
import { TerminalApplication } from "./TerminalApplication";

@Entity(modelTerminal.TABLE_TERMINAL_WITHOUT_SCHEMA)
export class Terminal {

    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ name: modelTerminal.columns.FISCAL_ID, type: 'text' })
    fiscalId: string;

    @Column({ name: modelTerminal.columns.IMEI, type: 'text' })
    imei: string;

    @Column({ name: modelTerminal.columns.ICCID, type: 'text' })
    iccid: string;

    @Column({ name: modelTerminal.columns.BARCODE, type: 'text' })
    barcode: string;

    @Column({ name: modelTerminal.columns.MODEL, type: 'text', default: modelTerminal.defaults.MODEL })
    model: string;

    @Column({ name: modelTerminal.columns.PURCHASE_DATE, type: 'timestamptz', default: modelTerminal.defaults.PURCHASE_DATE })
    purchaseDate: Date;

    @Column({ name: modelTerminal.columns.EXPIRATION_DATE, type: 'timestamptz', nullable: true })
    expirationDate: Date;

    @ManyToOne(() => Branch, branch => branch.terminals, { onDelete: 'CASCADE' })
    branch: Branch;

    @OneToMany(() => Subscription, subscription => subscription.terminal)
    subscriptions: Subscription[];

    @OneToMany(() => TerminalApplication, terminalApplication => terminalApplication.terminal)
    terminalApplications: TerminalApplication[];
}
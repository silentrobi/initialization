import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelMerchantLog } from "../models/modelMerchantLog";
import { Common } from "./Common";
import { Merchant } from "./Merchant";
import { Terminal } from "./Terminal";

@Entity(modelMerchantLog.TABLE_MERCHANT_LOG_WITHOUT_SCHEMA)
export class MerchantLog extends Common {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelMerchantLog.columns.TYPE, type: "int2" })
    type: number;

    @Column({ name: modelMerchantLog.columns.TRANSACTION_ID, type: "uuid" })
    transactionId: string;

    @Column({ name: modelMerchantLog.columns.MESSAGE, type: "varchar", length: 1000 })
    message: string;

    @Column({ name: modelMerchantLog.columns.STATUS, type: "int2" })
    status: number;

    @ManyToOne(() => Merchant, merchant => merchant.merchantLogs)
    merchant: Merchant;

    @ManyToOne(() => Terminal, { onDelete: 'CASCADE' })
    @JoinColumn()
    terminal: Terminal;
}
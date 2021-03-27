import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelSubscription } from "../models/modelSubscription";
import { Common } from "./Common";
import { Terminal } from "./Terminal";

@Entity(modelSubscription.TABLE_SUBSCRIPTION_WITHOUT_SCHEMA)
export class Subscription extends Common {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelSubscription.columns.SERIAL_NO, type: "varchar", length: 14 })
    serialNo: string;

    @Column({ name: modelSubscription.columns.ARCELIK_SERIAL_NO, type: "varchar", length: 18 })
    arcelikSerialNo: string;

    @Column({ name: modelSubscription.columns.EAN_CODE, type: "varchar", length: 13 })
    eanCode: string;

    @Column({ name: modelSubscription.columns.DURATION, type: "int4" })
    duration: number;

    @ManyToOne(() => Terminal, terminal => terminal.subscriptions, { onDelete: 'CASCADE' })
    terminal: Terminal;
}
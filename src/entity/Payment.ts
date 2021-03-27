import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelPayment } from "../models/modelPayment";
import { Merchant } from "./Merchant";

@Entity(modelPayment.TABLE_PAYMENT_WITHOUT_SCHEMA)
export class Payment {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelPayment.columns.PAYMENT_ID, type: "int4" })
    paymentId: number;

    @Column({ name: modelPayment.columns.CREATED_AT, type: "timestamptz" })
    createdAt: Date;

    @ManyToOne(() => Merchant, merchant => merchant.payments, { onDelete: 'CASCADE' })
    merchant: Merchant;
}
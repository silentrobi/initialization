import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { modelSale } from "../models/modelSale";

@Entity(modelSale.TABLE_SALES_WITHOUT_SCHEMA)
export class Sale {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: modelSale.columns.RELATED_ID, type: "int2" })
    relatedId: number;

    @Column({ name: modelSale.columns.SELLER_EMAIL, type: "varchar", length: 50 })
    sellerEmail: string;

    @Column({ name: modelSale.columns.TYPE, type: "int2" })
    type: number;

    @CreateDateColumn({ name: modelSale.columns.DATE, type: "timestamptz" })
    date: Date;
}
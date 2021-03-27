import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { modelCombo } from "../models/modelCombo";

@Entity(modelCombo.TABLE_COMBO_WITHOUT_SCHEMA)
export class Combo {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelCombo.columns.TABLE_NAME, type: "varchar" })
    tableName: string;

    @Column({ name: modelCombo.columns.FIELD_NAME, type: "varchar" })
    fieldName: string;

    @Column({ name: modelCombo.columns.ORDER_ID, type: "int4" })
    orderId: number;

    @Column({ name: modelCombo.columns.COMBO_DESC, type: "varchar" })
    comboDesc: string;
}
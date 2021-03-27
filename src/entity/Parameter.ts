import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelParameter } from "../models/modelParameter";
import { ParameterKey } from "./ParameterKey";

@Entity(modelParameter.TABLE_PARAMETER_WITHOUT_SCHEMA)
export class Parameter {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelParameter.columns.RELATED_ID, type: "int4" })
    relatedId: number;

    @ManyToOne(() => ParameterKey, parameterKey => parameterKey.parameters, {onDelete: 'CASCADE'})
    parameterKey: ParameterKey;

    @Column({ name: modelParameter.columns.PARAM_VALUE, type: "int4" })
    paramValue: number;

    @Column({ name: modelParameter.columns.IS_ACTIVE, type: "bool", default: modelParameter.defaults.IS_ACTIVE })
    isActive: Date;

    @Column({ name: modelParameter.columns.REC_DATE, type: "timestamptz", default: () => modelParameter.defaults.REC_DATE })
    recDate: Date;
}
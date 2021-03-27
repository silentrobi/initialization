import { application } from "express";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelParameterKey } from "../models/modelParameterKey";
import { Application } from "./Application";
import { Parameter } from "./Parameter";

@Entity(modelParameterKey.TABLE_PARAMETER_KEY_WITHOUT_SCHEMA)
export class ParameterKey {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelParameterKey.columns.RELATED_TABLE, type: "varchar", length: 30 })
    relatedTable: string;

    @Column({ name: modelParameterKey.columns.RELATED_FIELD, type: "varchar", length: 30 })
    relatedField: string;

    @Column({ name: modelParameterKey.columns.KEY, type: "varchar", length: 30 })
    key: string;

    @Column({ name: modelParameterKey.columns.DESCRIPTION, type: "varchar", length: 30 })
    description: string;

    @Column({ name: modelParameterKey.columns.SOURCE, type: "int8" })
    source: number;

    @OneToMany(() => Parameter, parameter => parameter.parameterKey)
    parameters: Parameter[];

    @ManyToOne(() => Application, application => application.parameterKeys, { onDelete: 'CASCADE' })
    application: Application;
}
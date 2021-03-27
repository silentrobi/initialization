import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelTaxOffice } from "../models/modelTaxOffice";
import { City } from "./City";
import { Merchant } from "./Merchant";

@Entity(modelTaxOffice.TABLE_TAX_OFFICE_WITHOUT_SCHEMA)
export class TaxOffice {

    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ name: modelTaxOffice.columns.NAME, type: "varchar" })
    name: string;

    @Column({ name: modelTaxOffice.columns.CODE, type: "varchar" })
    code: number;

    @Column({ name: modelTaxOffice.columns.CITY_SUBDIVISION, type: "varchar" })
    cityDivision: string;

    @ManyToOne(() => City, city => city.taxOffices, { onDelete: 'CASCADE' })
    city: City;
}
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { modelCity } from "../models/modelCity";  
import { CitySubdivision } from "./CitySubdivision";
import { Country } from "./Country";
import { TaxOffice } from "./TaxOffice";

// Note: while trying to access modelCity.TABLE_CITY using 'import' keyword, at run time it gives 'undefined' error. 
//Sol: use require() module.
@Entity(modelCity.TABLE_CITY_WITHOUT_SCHEMA)
export class City {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelCity.columns.NAME, type: "varchar" })
    name: string;

    @Column({ name: modelCity.columns.CODE, type: "int4" })
    code: number;

    @ManyToOne(() => Country, country => country.cities, { onDelete: 'CASCADE' })
    country: Country;

    @OneToMany(() => CitySubdivision, citySubdivision => citySubdivision.city, { onDelete: 'CASCADE' })
    citySubdivisions: CitySubdivision[];

    @OneToMany(() => TaxOffice, taxOffice => taxOffice.city)
    taxOffices: TaxOffice[];
}
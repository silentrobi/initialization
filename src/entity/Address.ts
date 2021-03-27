import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelAddress } from "../models/modelAddress";
import { Branch } from "./Branch";
import { City } from "./City";
import { CitySubdivision } from "./CitySubdivision";
import { Country } from "./Country";
import { Neighborhood } from "./Neighborhood";

@Entity(modelAddress.TABLE_ADDRESS_WITHOUT_SCHEMA)
export class Address {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @OneToOne(() => City)
    @JoinColumn()
    city: City;

    @OneToOne(() => Country)
    @JoinColumn()
    county: Country;

    @OneToOne(() => Neighborhood)
    @JoinColumn()
    neighborhood: Neighborhood;

    @OneToOne(() => CitySubdivision)
    @JoinColumn()
    citySubdivision: CitySubdivision;

    @Column({ name: modelAddress.columns.POSTAL_ZONE, type: "varchar", length: 10, nullable: true })
    postalZone: string;

    @Column({ name: modelAddress.columns.ADDRESS_TYPE, type: "int2" })
    addressType: number;

    @Column({ name: modelAddress.columns.BUILDING_NO, type: "varchar", length: 10 })
    buildingNo: string;

    @Column({ name: modelAddress.columns.STREET, type: "varchar", length: 10 })
    street: string;

    @Column({ name: modelAddress.columns.APARTMENT_NO, type: "varchar", length: 10 })
    apartmentNo: string;

    @ManyToOne(() => Branch, branch => branch.addresses, { onDelete: 'CASCADE' })
    branch: Branch;
}
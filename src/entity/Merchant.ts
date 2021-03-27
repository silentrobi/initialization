import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { modelMerchant } from "../models/modelMerchant";
import { Branch } from "./Branch";
import { Common } from "./Common";
import { MerchantApplication } from "./MerchantApplication";
import { MerchantLog } from "./MerchantLog";
import { MerchantPolicy } from "./MerchantPolicy";
import { Payment } from "./Payment";
import { SavedCard } from "./SavedCard";
import { Submerchant } from "./Submerchant";
import { TaxOffice } from "./TaxOffice";

@Entity(modelMerchant.TABLE_MERCHANT_WITHOUT_SCHEMA)
export class Merchant extends Common {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: modelMerchant.columns.MERCHANT_NAME, type: "varchar", length: 50, nullable: true })
    merchantName: string;

    @Column({ name: modelMerchant.columns.MERCHANT_SURNAME, type: "varchar", length: 50, nullable: true })
    merchantSurname: string;

    @Column({ name: modelMerchant.columns.MERCHANT_CITIZEN_ID, type: "varchar", length: 30, nullable: true })
    merchantCitizenId: string;

    @Column({ name: modelMerchant.columns.COMPANY_NAME, type: "text", nullable: true })
    companyName: string;

    @Column({ name: modelMerchant.columns.COMPANY_REGISTRATION_NO, type: "text", nullable: true })
    companyRegistrationNo: string;

    @Column({ name: modelMerchant.columns.COMPANY_TYPE, type: "int2" })
    companyType: number;

    @Column({ name: modelMerchant.columns.SECTOR, type: "int2", default: modelMerchant.defaults.SECTOR })
    sector: number;

    @Column({ name: modelMerchant.columns.KVC_DONE, type: "bool", default: modelMerchant.defaults.KVC_DONE })
    kvcDone: boolean;

    @Column({ name: modelMerchant.columns.AUTHORIZED_PERSON_NAME, type: "text" })
    authorizedPersonName: string;

    @Column({ name: modelMerchant.columns.AUTHORIZED_PERSON_SURNAME, type: "text" })
    authorizedPersonSurname: string;

    @Column({ name: modelMerchant.columns.NACE, type: "text", nullable: true })
    nace: string;

    @Column({ name: modelMerchant.columns.TAX_SCHEME, type: "int4" })
    taxScheme: number;

    @Column({ name: modelMerchant.columns.ISACTIVATEDONALLTERMINALS, type: "int2", default: modelMerchant.defaults.ISACTIVATEDONALLTERMINALS })
    isActivatedOnAllTerminals: number;

    @ManyToOne(() => TaxOffice, {onDelete: 'CASCADE'})
    @JoinColumn({name: modelMerchant.columns.TAX_SCHEME})
    taxOffice: TaxOffice;

    @Column({ name: modelMerchant.columns.AUTHORIZED_PERSON_GSM, type: "varchar", length: 30 })
    authorizedPersonGsm: string;

    @Column({ name: modelMerchant.columns.AUTHORIZED_PERSON_EMAIL, type: "varchar", length: 50, unique: true })
    authorizedPersonEmail: string;

    @Column({ name: modelMerchant.columns.CREATED_BY, type: "varchar", length: 50, nullable: true })
    createdBy: string;

    @OneToMany(() => Branch, branch => branch.merchant)
    branches: Branch[];

    @OneToMany(() => MerchantPolicy, merchantPolicy => merchantPolicy.merchant)
    merchantPolicies: MerchantPolicy[];

    @OneToMany(() => Payment, payment => payment.merchant)
    payments: Payment[];

    @OneToMany(() => SavedCard, savedCard => savedCard.merchant)
    savedCards: SavedCard[];

    @OneToMany(() => Submerchant, submerchant => submerchant.merchant)
    submerchants: Submerchant[];

    @OneToMany(() => MerchantApplication, merchantApplication => merchantApplication.merchant)
    merchantApplications: MerchantApplication[];

    @OneToMany(() => MerchantLog, merchantLog => merchantLog.merchant)
    merchantLogs: MerchantLog[];
}
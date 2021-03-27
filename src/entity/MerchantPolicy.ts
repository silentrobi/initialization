import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { isDate } from "util";
import { modelMerchantPolicy } from "../models/modelMerchantPolicy";
import { Merchant } from "./Merchant";

@Entity(modelMerchantPolicy.TABLE_MERCHANT_POLICY_WITHOUT_SCHEMA)
export class MerchantPolicy{

    @PrimaryGeneratedColumn({type: "int4"})
    id: number;
    
    @Column({name: modelMerchantPolicy.columns.DAILY_SMS_COUNT, type: "int4", default: modelMerchantPolicy.defaults.DAILY_SMS_COUNT})
    dailySmsCount: number;
    
    @Column({name: modelMerchantPolicy.columns.LAST_SMS_DATE, type: "timestamptz", nullable: true})
    lastSmsDate: Date;

    @ManyToOne(() => Merchant, merchant => merchant.merchantPolicies, { onDelete: 'CASCADE' })
    merchant: Merchant;
}
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { modelSubmerchant } from "../models/modelSubmerchant";
import { Common } from "./Common";
import { Merchant } from "./Merchant";

@Entity(modelSubmerchant.TABLE_SUBMERCHANT_WITHOUT_SCHEMA)
export class Submerchant extends Common {

    @PrimaryGeneratedColumn({ type: "int4" })
    id: number;

    @Column({ name: modelSubmerchant.columns.SUBMERCHANT_ID, type: "uuid" })
    submerchantId: string;

    @Column({ name: modelSubmerchant.columns.INVITE_STATUS, type: "int2", default: modelSubmerchant.defaults.INVITE_STATUS })
    inviteStatus: number;

    @Column({ name: modelSubmerchant.columns.INVITED_AT, type: "timestamptz", default: () => modelSubmerchant.defaults.INVITED_AT })
    invitedAt: Date;

    @Column({ name: modelSubmerchant.columns.REINVITED_AT, type: "timestamptz", nullable: true })
    reinvitedAt: Date;

    @Column({ name: modelSubmerchant.columns.INVITATION_COMPLETED_AT, type: "timestamptz", nullable: true })
    invitationCompletedAt: Date;

    @Column({ name: modelSubmerchant.columns.INVITATION_CANCELLED_AT, type: "timestamptz", nullable: true })
    invitationCancelledAt: Date;

    @Column({ name: modelSubmerchant.columns.RESEND, type: "bool", default: modelSubmerchant.defaults.RESEND})
    resend: boolean;

    @ManyToOne(() => Merchant, merchant => merchant.submerchants, { onDelete: 'CASCADE' })
    merchant: Merchant;
}
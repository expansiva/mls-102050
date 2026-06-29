/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/recordPayment.ts" enhancement="_blank"/>

export interface CafeFlowRecordPaymentInput {
  method: string;
  amount: number;
  status: "authorized" | "captured" | "voided" | "refunded";
}

export interface CafeFlowRecordPaymentOutput {
  paymentId: string;
}

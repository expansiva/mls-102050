/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/recordPayment.test.ts" enhancement="_blank"/>

import type { CafeFlowRecordPaymentInput, CafeFlowRecordPaymentOutput } from './recordPayment.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowRecordPaymentInput = {
  method: string;
  amount: number;
  status: "authorized" | "captured" | "voided" | "refunded";
};
type ExpectedCafeFlowRecordPaymentOutput = {
  paymentId: string;
};

type _CafeFlowRecordPaymentInput = Assert<Equal<CafeFlowRecordPaymentInput, ExpectedCafeFlowRecordPaymentInput>>;
type _CafeFlowRecordPaymentOutput = Assert<Equal<CafeFlowRecordPaymentOutput, ExpectedCafeFlowRecordPaymentOutput>>;

export {};
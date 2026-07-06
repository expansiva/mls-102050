/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/openDailyShift.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateDailyShiftInput, CafeFlowCreateDailyShiftOutput, CafeFlowRecordOpeningCashMovementInput, CafeFlowRecordOpeningCashMovementOutput } from './openDailyShift.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowCreateDailyShiftInput = {
  shiftDate: string;
  status: "open" | "closed";
  openedAt: string;
  openingCashBalance?: number;
};
type ExpectedCafeFlowCreateDailyShiftOutput = {
  dailyShiftId: string;
};
type ExpectedCafeFlowRecordOpeningCashMovementInput = {
  movementType: "entrada" | "saída";
  amount: number;
  reason: string;
};
type ExpectedCafeFlowRecordOpeningCashMovementOutput = {
  cashMovementId: string;
};

type _CafeFlowCreateDailyShiftInput = Assert<Equal<CafeFlowCreateDailyShiftInput, ExpectedCafeFlowCreateDailyShiftInput>>;
type _CafeFlowCreateDailyShiftOutput = Assert<Equal<CafeFlowCreateDailyShiftOutput, ExpectedCafeFlowCreateDailyShiftOutput>>;
type _CafeFlowRecordOpeningCashMovementInput = Assert<Equal<CafeFlowRecordOpeningCashMovementInput, ExpectedCafeFlowRecordOpeningCashMovementInput>>;
type _CafeFlowRecordOpeningCashMovementOutput = Assert<Equal<CafeFlowRecordOpeningCashMovementOutput, ExpectedCafeFlowRecordOpeningCashMovementOutput>>;

export {};
/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/closeDailyShift.test.ts" enhancement="_blank"/>

import type { CafeFlowRecordClosingCashMovementInput, CafeFlowRecordClosingCashMovementOutput, CafeFlowUpdateDailyShiftStatusInput, CafeFlowUpdateDailyShiftStatusOutput } from './closeDailyShift.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowUpdateDailyShiftStatusInput = {
  dailyShiftId?: string;
  shiftDate: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt?: string;
  openingCashBalance?: number;
  closingCashBalance?: number;
  totalSales?: number;
  totalPayments?: number;
  closingNotes?: string;
};
type ExpectedCafeFlowUpdateDailyShiftStatusOutput = {
  dailyShiftId: string;
};
type ExpectedCafeFlowRecordClosingCashMovementInput = {
  shiftDate: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt?: string;
  openingCashBalance?: number;
  closingCashBalance?: number;
  totalSales?: number;
  totalPayments?: number;
  closingNotes?: string;
};
type ExpectedCafeFlowRecordClosingCashMovementOutput = {
  dailyShiftId: string;
};

type _CafeFlowUpdateDailyShiftStatusInput = Assert<Equal<CafeFlowUpdateDailyShiftStatusInput, ExpectedCafeFlowUpdateDailyShiftStatusInput>>;
type _CafeFlowUpdateDailyShiftStatusOutput = Assert<Equal<CafeFlowUpdateDailyShiftStatusOutput, ExpectedCafeFlowUpdateDailyShiftStatusOutput>>;
type _CafeFlowRecordClosingCashMovementInput = Assert<Equal<CafeFlowRecordClosingCashMovementInput, ExpectedCafeFlowRecordClosingCashMovementInput>>;
type _CafeFlowRecordClosingCashMovementOutput = Assert<Equal<CafeFlowRecordClosingCashMovementOutput, ExpectedCafeFlowRecordClosingCashMovementOutput>>;

export {};
/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.test.ts" enhancement="_blank"/>

import type { CafeFlowGenerateShiftCloseReportInput, CafeFlowGenerateShiftCloseReportOutput, CafeFlowGenerateShiftCloseReportOutputItem } from './generateShiftCloseReport.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowGenerateShiftCloseReportInput = {
  status?: "open" | "closed";
  openedAt?: string;
  closedAt?: string;
};
type ExpectedCafeFlowGenerateShiftCloseReportOutputItem = {
  status: "open" | "closed";
  openedAt: string;
  closedAt: string;
  openingCashBalance: number;
  closingCashBalance: number;
  totalSales: number;
  totalPayments: number;
  closingNotes: string;
};
type ExpectedCafeFlowGenerateShiftCloseReportOutput = ExpectedCafeFlowGenerateShiftCloseReportOutputItem[];

type _CafeFlowGenerateShiftCloseReportInput = Assert<Equal<CafeFlowGenerateShiftCloseReportInput, ExpectedCafeFlowGenerateShiftCloseReportInput>>;
type _CafeFlowGenerateShiftCloseReportOutputItem = Assert<Equal<CafeFlowGenerateShiftCloseReportOutputItem, ExpectedCafeFlowGenerateShiftCloseReportOutputItem>>;
type _CafeFlowGenerateShiftCloseReportOutput = Assert<Equal<CafeFlowGenerateShiftCloseReportOutput, ExpectedCafeFlowGenerateShiftCloseReportOutput>>;

export {};
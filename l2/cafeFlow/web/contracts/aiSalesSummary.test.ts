/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.test.ts" enhancement="_blank"/>

import type { CafeFlowAiSalesSummaryInput, CafeFlowAiSalesSummaryOutput, CafeFlowAiSalesSummaryOutputItem } from './aiSalesSummary.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowAiSalesSummaryInput = {
  dailyShiftId?: string;
  status?: "draft" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "closed" | "cancelled";
  closedAt?: string;
};
type ExpectedCafeFlowAiSalesSummaryOutputItem = {
  dailyShiftId: string;
  status: "draft" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "closed" | "cancelled";
  totalAmount: number;
  closedAt: string;
};
type ExpectedCafeFlowAiSalesSummaryOutput = ExpectedCafeFlowAiSalesSummaryOutputItem[];

type _CafeFlowAiSalesSummaryInput = Assert<Equal<CafeFlowAiSalesSummaryInput, ExpectedCafeFlowAiSalesSummaryInput>>;
type _CafeFlowAiSalesSummaryOutputItem = Assert<Equal<CafeFlowAiSalesSummaryOutputItem, ExpectedCafeFlowAiSalesSummaryOutputItem>>;
type _CafeFlowAiSalesSummaryOutput = Assert<Equal<CafeFlowAiSalesSummaryOutput, ExpectedCafeFlowAiSalesSummaryOutput>>;

export {};
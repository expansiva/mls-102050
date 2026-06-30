/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.test.ts" enhancement="_blank"/>

import type { CafeFlowCreateStockConsumptionInput, CafeFlowCreateStockConsumptionOutput } from './consumeIngredientsOnConfirmation.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowCreateStockConsumptionInput = {
  quantity: number;
  status: "posted" | "voided";
  consumedAt: string;
};
type ExpectedCafeFlowCreateStockConsumptionOutput = {
  id: string;
};

type _CafeFlowCreateStockConsumptionInput = Assert<Equal<CafeFlowCreateStockConsumptionInput, ExpectedCafeFlowCreateStockConsumptionInput>>;
type _CafeFlowCreateStockConsumptionOutput = Assert<Equal<CafeFlowCreateStockConsumptionOutput, ExpectedCafeFlowCreateStockConsumptionOutput>>;

export {};
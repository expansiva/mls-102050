/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.test.ts" enhancement="_blank"/>

import type { CafeFlowManageInventoryItemsInput, CafeFlowManageInventoryItemsOutput } from './manageInventoryItems.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowManageInventoryItemsInput = {
  name: string;
  description?: string;
  unit: string;
  currentQuantity: number;
  minimumLevel: number;
  status: "active" | "inactive";
};
type ExpectedCafeFlowManageInventoryItemsOutput = {
  inventoryItemId: string;
};

type _CafeFlowManageInventoryItemsInput = Assert<Equal<CafeFlowManageInventoryItemsInput, ExpectedCafeFlowManageInventoryItemsInput>>;
type _CafeFlowManageInventoryItemsOutput = Assert<Equal<CafeFlowManageInventoryItemsOutput, ExpectedCafeFlowManageInventoryItemsOutput>>;

export {};
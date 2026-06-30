/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageMenuItems.test.ts" enhancement="_blank"/>

import type { CafeFlowManageMenuItemsInput, CafeFlowManageMenuItemsOutput } from './manageMenuItems.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowManageMenuItemsInput = {
  menuItemId?: string;
  menuCategoryId?: string;
  name: string;
  description?: string;
  price: number;
  status: "draft" | "active" | "inactive";
};
type ExpectedCafeFlowManageMenuItemsOutput = {
  menuItemId: string;
};

type _CafeFlowManageMenuItemsInput = Assert<Equal<CafeFlowManageMenuItemsInput, ExpectedCafeFlowManageMenuItemsInput>>;
type _CafeFlowManageMenuItemsOutput = Assert<Equal<CafeFlowManageMenuItemsOutput, ExpectedCafeFlowManageMenuItemsOutput>>;

export {};
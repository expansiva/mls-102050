/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.test.ts" enhancement="_blank"/>

import type { CafeFlowManageMenuCategoriesInput, CafeFlowManageMenuCategoriesOutput } from './manageMenuCategories.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowManageMenuCategoriesInput = {
  menuCategoryId?: string;
  name: string;
  description?: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowManageMenuCategoriesOutput = {
  menuCategoryId: string;
};

type _CafeFlowManageMenuCategoriesInput = Assert<Equal<CafeFlowManageMenuCategoriesInput, ExpectedCafeFlowManageMenuCategoriesInput>>;
type _CafeFlowManageMenuCategoriesOutput = Assert<Equal<CafeFlowManageMenuCategoriesOutput, ExpectedCafeFlowManageMenuCategoriesOutput>>;

export {};
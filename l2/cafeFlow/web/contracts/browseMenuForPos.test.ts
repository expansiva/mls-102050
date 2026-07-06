/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.test.ts" enhancement="_blank"/>

import type { CafeFlowBrowseMenuForPosInput, CafeFlowBrowseMenuForPosOutput, CafeFlowBrowseMenuForPosOutputItem } from './browseMenuForPos.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowBrowseMenuForPosInput = {
  menuItemId?: string;
  menuCategoryId?: string;
  name?: string;
  status?: "draft" | "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowBrowseMenuForPosOutputItem = {
  menuItemId: string;
  menuCategoryId: string;
  name: string;
  description: string;
  price: number;
  status: "draft" | "active" | "inactive";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowBrowseMenuForPosOutput = ExpectedCafeFlowBrowseMenuForPosOutputItem[];

type _CafeFlowBrowseMenuForPosInput = Assert<Equal<CafeFlowBrowseMenuForPosInput, ExpectedCafeFlowBrowseMenuForPosInput>>;
type _CafeFlowBrowseMenuForPosOutputItem = Assert<Equal<CafeFlowBrowseMenuForPosOutputItem, ExpectedCafeFlowBrowseMenuForPosOutputItem>>;
type _CafeFlowBrowseMenuForPosOutput = Assert<Equal<CafeFlowBrowseMenuForPosOutput, ExpectedCafeFlowBrowseMenuForPosOutput>>;

export {};
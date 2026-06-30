/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageTables.test.ts" enhancement="_blank"/>

import type { CafeFlowManageTablesInput, CafeFlowManageTablesOutput } from './manageTables.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowManageTablesInput = {
  tableId?: string;
  number: string;
  status: "active" | "inactive";
};
type ExpectedCafeFlowManageTablesOutput = {
  tableId: string;
};

type _CafeFlowManageTablesInput = Assert<Equal<CafeFlowManageTablesInput, ExpectedCafeFlowManageTablesInput>>;
type _CafeFlowManageTablesOutput = Assert<Equal<CafeFlowManageTablesOutput, ExpectedCafeFlowManageTablesOutput>>;

export {};
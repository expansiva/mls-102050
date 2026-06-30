/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.test.ts" enhancement="_blank"/>

import type { CafeFlowViewOperationalDashboardInput, CafeFlowViewOperationalDashboardOutput, CafeFlowViewOperationalDashboardOutputItem } from './viewOperationalDashboard.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowViewOperationalDashboardInput = {
  dailyShiftId?: string;
  shiftDate?: string;
  status?: "open" | "closed";
  openedAt?: string;
  closedAt?: string;
  createdAt?: string;
};
type ExpectedCafeFlowViewOperationalDashboardOutputItem = {
  dailyShiftId: string;
  shiftDate: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt: string;
  openingCashBalance: number;
  closingCashBalance: number;
  totalSales: number;
};
type ExpectedCafeFlowViewOperationalDashboardOutput = ExpectedCafeFlowViewOperationalDashboardOutputItem[];

type _CafeFlowViewOperationalDashboardInput = Assert<Equal<CafeFlowViewOperationalDashboardInput, ExpectedCafeFlowViewOperationalDashboardInput>>;
type _CafeFlowViewOperationalDashboardOutputItem = Assert<Equal<CafeFlowViewOperationalDashboardOutputItem, ExpectedCafeFlowViewOperationalDashboardOutputItem>>;
type _CafeFlowViewOperationalDashboardOutput = Assert<Equal<CafeFlowViewOperationalDashboardOutput, ExpectedCafeFlowViewOperationalDashboardOutput>>;

export {};
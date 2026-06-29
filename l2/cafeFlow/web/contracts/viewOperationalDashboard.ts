/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts" enhancement="_blank"/>

export interface CafeFlowViewOperationalDashboardInput {
  dailyShiftId?: string;
  shiftDate?: string;
  status?: "open" | "closed";
  openedAt?: string;
  closedAt?: string;
  createdAt?: string;
}

export interface CafeFlowViewOperationalDashboardOutputItem {
  dailyShiftId: string;
  shiftDate: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt: string;
  openingCashBalance: number;
  closingCashBalance: number;
  totalSales: number;
}

export type CafeFlowViewOperationalDashboardOutput = CafeFlowViewOperationalDashboardOutputItem[];

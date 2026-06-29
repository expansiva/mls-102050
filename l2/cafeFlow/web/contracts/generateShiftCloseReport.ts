/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts" enhancement="_blank"/>

export interface CafeFlowGenerateShiftCloseReportInput {
  status?: "open" | "closed";
  openedAt?: string;
  closedAt?: string;
}

export interface CafeFlowGenerateShiftCloseReportOutputItem {
  status: "open" | "closed";
  openedAt: string;
  closedAt: string;
  openingCashBalance: number;
  closingCashBalance: number;
  totalSales: number;
  totalPayments: number;
  closingNotes: string;
}

export type CafeFlowGenerateShiftCloseReportOutput = CafeFlowGenerateShiftCloseReportOutputItem[];

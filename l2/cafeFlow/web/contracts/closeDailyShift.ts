/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts" enhancement="_blank"/>

export interface CafeFlowUpdateDailyShiftStatusInput {
  dailyShiftId?: string;
  shiftDate: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt?: string;
  openingCashBalance?: number;
  closingCashBalance?: number;
  totalSales?: number;
  totalPayments?: number;
  closingNotes?: string;
}

export interface CafeFlowUpdateDailyShiftStatusOutput {
  dailyShiftId: string;
}

export interface CafeFlowRecordClosingCashMovementInput {
  shiftDate: string;
  status: "open" | "closed";
  openedAt: string;
  closedAt?: string;
  openingCashBalance?: number;
  closingCashBalance?: number;
  totalSales?: number;
  totalPayments?: number;
  closingNotes?: string;
}

export interface CafeFlowRecordClosingCashMovementOutput {
  dailyShiftId: string;
}

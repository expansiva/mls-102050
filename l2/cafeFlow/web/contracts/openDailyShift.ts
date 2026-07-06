/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts" enhancement="_blank"/>

export interface CafeFlowCreateDailyShiftInput {
  shiftDate: string;
  status: "open" | "closed";
  openedAt: string;
  openingCashBalance?: number;
}

export interface CafeFlowCreateDailyShiftOutput {
  dailyShiftId: string;
}

export interface CafeFlowRecordOpeningCashMovementInput {
  movementType: "entrada" | "saída";
  amount: number;
  reason: string;
}

export interface CafeFlowRecordOpeningCashMovementOutput {
  cashMovementId: string;
}

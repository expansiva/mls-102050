/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageTables.ts" enhancement="_blank"/>

export interface CafeFlowManageTablesInput {
  tableId?: string;
  number: string;
  status: "available" | "occupied" | "disabled";
}

export interface CafeFlowManageTablesOutput {
  tableId: string;
}

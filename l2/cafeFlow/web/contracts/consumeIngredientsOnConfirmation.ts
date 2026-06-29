/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts" enhancement="_blank"/>

export interface CafeFlowCreateStockConsumptionInput {
  quantity: number;
  status: "posted" | "voided";
  consumedAt: string;
}

export interface CafeFlowCreateStockConsumptionOutput {
  id: string;
}

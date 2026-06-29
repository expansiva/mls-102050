/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.ts" enhancement="_blank"/>

export interface CafeFlowManageInventoryItemsInput {
  name: string;
  description?: string;
  unit: string;
  currentQuantity: number;
  minimumLevel: number;
  status: "active" | "inactive";
}

export interface CafeFlowManageInventoryItemsOutput {
  inventoryItemId: string;
}

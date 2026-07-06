/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts" enhancement="_blank"/>

export interface CafeFlowManageMenuItemsInput {
  menuItemId?: string;
  menuCategoryId?: string;
  name: string;
  description?: string;
  price: number;
  status: "draft" | "active" | "inactive";
}

export interface CafeFlowManageMenuItemsOutput {
  menuItemId: string;
}

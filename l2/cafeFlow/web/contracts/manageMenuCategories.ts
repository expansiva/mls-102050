/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts" enhancement="_blank"/>

export interface CafeFlowManageMenuCategoriesInput {
  menuCategoryId?: string;
  name: string;
  description?: string;
  status: "active" | "inactive";
}

export interface CafeFlowManageMenuCategoriesOutput {
  menuCategoryId: string;
}

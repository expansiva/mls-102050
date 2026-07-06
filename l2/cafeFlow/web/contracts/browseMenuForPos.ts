/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts" enhancement="_blank"/>

export interface CafeFlowBrowseMenuForPosInput {
  menuItemId?: string;
  menuCategoryId?: string;
  name?: string;
  status?: "draft" | "active" | "inactive";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowBrowseMenuForPosOutputItem {
  menuItemId: string;
  menuCategoryId: string;
  name: string;
  description: string;
  price: number;
  status: "draft" | "active" | "inactive";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowBrowseMenuForPosOutput = CafeFlowBrowseMenuForPosOutputItem[];

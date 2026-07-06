/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts" enhancement="_blank"/>

export interface CafeFlowAiSalesSummaryInput {
  dailyShiftId?: string;
  status?: "draft" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "closed" | "cancelled";
  closedAt?: string;
}

export interface CafeFlowAiSalesSummaryOutputItem {
  dailyShiftId: string;
  status: "draft" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "closed" | "cancelled";
  totalAmount: number;
  closedAt: string;
}

export type CafeFlowAiSalesSummaryOutput = CafeFlowAiSalesSummaryOutputItem[];

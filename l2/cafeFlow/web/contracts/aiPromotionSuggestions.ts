/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts" enhancement="_blank"/>

export interface CafeFlowAiPromotionSuggestionsInput {
  id?: string;
  orderId?: string;
  menuItemId?: string;
  kitchenTicketId?: string;
  status?: "new" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "cancelled";
  createdAt?: string;
}

export interface CafeFlowAiPromotionSuggestionsOutputItem {
  id: string;
  orderId: string;
  menuItemId: string;
  kitchenTicketId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  observations: string;
}

export type CafeFlowAiPromotionSuggestionsOutput = CafeFlowAiPromotionSuggestionsOutputItem[];

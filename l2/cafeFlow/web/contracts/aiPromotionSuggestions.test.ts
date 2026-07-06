/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.test.ts" enhancement="_blank"/>

import type { CafeFlowAiPromotionSuggestionsInput, CafeFlowAiPromotionSuggestionsOutput, CafeFlowAiPromotionSuggestionsOutputItem } from './aiPromotionSuggestions.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowAiPromotionSuggestionsInput = {
  id?: string;
  orderId?: string;
  menuItemId?: string;
  kitchenTicketId?: string;
  status?: "new" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "cancelled";
  createdAt?: string;
};
type ExpectedCafeFlowAiPromotionSuggestionsOutputItem = {
  id: string;
  orderId: string;
  menuItemId: string;
  kitchenTicketId: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  observations: string;
};
type ExpectedCafeFlowAiPromotionSuggestionsOutput = ExpectedCafeFlowAiPromotionSuggestionsOutputItem[];

type _CafeFlowAiPromotionSuggestionsInput = Assert<Equal<CafeFlowAiPromotionSuggestionsInput, ExpectedCafeFlowAiPromotionSuggestionsInput>>;
type _CafeFlowAiPromotionSuggestionsOutputItem = Assert<Equal<CafeFlowAiPromotionSuggestionsOutputItem, ExpectedCafeFlowAiPromotionSuggestionsOutputItem>>;
type _CafeFlowAiPromotionSuggestionsOutput = Assert<Equal<CafeFlowAiPromotionSuggestionsOutput, ExpectedCafeFlowAiPromotionSuggestionsOutput>>;

export {};
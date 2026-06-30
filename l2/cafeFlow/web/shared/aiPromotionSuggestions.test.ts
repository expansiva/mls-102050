/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowAiPromotionSuggestionsBase } from './aiPromotionSuggestions.js';

type Assignable<Actual, Expected> = Actual extends Expected ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowAiPromotionSuggestionsBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_aiPromotionSuggestionsState = Assert<Assignable<typeof page.aiPromotionSuggestionsState, "idle" | "loading" | "success" | "error">>;
type _State_aiPromotionSuggestionsId = Assert<Assignable<typeof page.aiPromotionSuggestionsId, string>>;
type _State_aiPromotionSuggestionsOrderId = Assert<Assignable<typeof page.aiPromotionSuggestionsOrderId, string>>;
type _State_aiPromotionSuggestionsMenuItemId = Assert<Assignable<typeof page.aiPromotionSuggestionsMenuItemId, string>>;
type _State_aiPromotionSuggestionsKitchenTicketId = Assert<Assignable<typeof page.aiPromotionSuggestionsKitchenTicketId, string>>;
type _State_aiPromotionSuggestionsStatus = Assert<Assignable<typeof page.aiPromotionSuggestionsStatus, string>>;
type _State_aiPromotionSuggestionsCreatedAt = Assert<Assignable<typeof page.aiPromotionSuggestionsCreatedAt, string>>;
type _State_aiPromotionSuggestionsData = Assert<Assignable<typeof page.aiPromotionSuggestionsData, unknown[]>>;
type _Action_loadAiPromotionSuggestions = Assert<Assignable<typeof page.loadAiPromotionSuggestions, (...args: any[]) => Promise<void>>>;
type _Handler_handleAiPromotionSuggestionsClick = Assert<Assignable<typeof page.handleAiPromotionSuggestionsClick, (...args: any[]) => void>>;
type _Action_setAiPromotionSuggestionsId = Assert<Assignable<typeof page.setAiPromotionSuggestionsId, (...args: any[]) => void>>;
type _Handler_handleAiPromotionSuggestionsIdChange = Assert<Assignable<typeof page.handleAiPromotionSuggestionsIdChange, (...args: any[]) => void>>;
type _Action_setAiPromotionSuggestionsOrderId = Assert<Assignable<typeof page.setAiPromotionSuggestionsOrderId, (...args: any[]) => void>>;
type _Handler_handleAiPromotionSuggestionsOrderIdChange = Assert<Assignable<typeof page.handleAiPromotionSuggestionsOrderIdChange, (...args: any[]) => void>>;
type _Action_setAiPromotionSuggestionsMenuItemId = Assert<Assignable<typeof page.setAiPromotionSuggestionsMenuItemId, (...args: any[]) => void>>;
type _Handler_handleAiPromotionSuggestionsMenuItemIdChange = Assert<Assignable<typeof page.handleAiPromotionSuggestionsMenuItemIdChange, (...args: any[]) => void>>;
type _Action_setAiPromotionSuggestionsKitchenTicketId = Assert<Assignable<typeof page.setAiPromotionSuggestionsKitchenTicketId, (...args: any[]) => void>>;
type _Handler_handleAiPromotionSuggestionsKitchenTicketIdChange = Assert<Assignable<typeof page.handleAiPromotionSuggestionsKitchenTicketIdChange, (...args: any[]) => void>>;
type _Action_setAiPromotionSuggestionsStatus = Assert<Assignable<typeof page.setAiPromotionSuggestionsStatus, (...args: any[]) => void>>;
type _Handler_handleAiPromotionSuggestionsStatusChange = Assert<Assignable<typeof page.handleAiPromotionSuggestionsStatusChange, (...args: any[]) => void>>;
type _Action_setAiPromotionSuggestionsCreatedAt = Assert<Assignable<typeof page.setAiPromotionSuggestionsCreatedAt, (...args: any[]) => void>>;
type _Handler_handleAiPromotionSuggestionsCreatedAtChange = Assert<Assignable<typeof page.handleAiPromotionSuggestionsCreatedAtChange, (...args: any[]) => void>>;

export {};
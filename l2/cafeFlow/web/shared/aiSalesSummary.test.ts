/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/aiSalesSummary.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowAiSalesSummaryBase } from './aiSalesSummary.js';

type Assignable<Actual, Expected> = Actual extends Expected ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowAiSalesSummaryBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_aiSalesSummaryState = Assert<Assignable<typeof page.aiSalesSummaryState, "idle" | "loading" | "success" | "error">>;
type _State_aiSalesSummaryDailyShiftId = Assert<Assignable<typeof page.aiSalesSummaryDailyShiftId, string>>;
type _State_aiSalesSummaryStatus = Assert<Assignable<typeof page.aiSalesSummaryStatus, string>>;
type _State_aiSalesSummaryClosedAt = Assert<Assignable<typeof page.aiSalesSummaryClosedAt, string>>;
type _State_aiSalesSummaryData = Assert<Assignable<typeof page.aiSalesSummaryData, unknown[]>>;
type _Action_loadAiSalesSummary = Assert<Assignable<typeof page.loadAiSalesSummary, (...args: any[]) => Promise<void>>>;
type _Handler_handleAiSalesSummaryClick = Assert<Assignable<typeof page.handleAiSalesSummaryClick, (...args: any[]) => void>>;
type _Action_setAiSalesSummaryDailyShiftId = Assert<Assignable<typeof page.setAiSalesSummaryDailyShiftId, (...args: any[]) => void>>;
type _Handler_handleAiSalesSummaryDailyShiftIdChange = Assert<Assignable<typeof page.handleAiSalesSummaryDailyShiftIdChange, (...args: any[]) => void>>;
type _Action_setAiSalesSummaryStatus = Assert<Assignable<typeof page.setAiSalesSummaryStatus, (...args: any[]) => void>>;
type _Handler_handleAiSalesSummaryStatusChange = Assert<Assignable<typeof page.handleAiSalesSummaryStatusChange, (...args: any[]) => void>>;
type _Action_setAiSalesSummaryClosedAt = Assert<Assignable<typeof page.setAiSalesSummaryClosedAt, (...args: any[]) => void>>;
type _Handler_handleAiSalesSummaryClosedAtChange = Assert<Assignable<typeof page.handleAiSalesSummaryClosedAtChange, (...args: any[]) => void>>;

export {};
/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowConsumeIngredientsOnConfirmationBase } from './consumeIngredientsOnConfirmation.js';

type Assignable<Actual, Expected> = Actual extends Expected ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowConsumeIngredientsOnConfirmationBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_createStockConsumptionState = Assert<Assignable<typeof page.createStockConsumptionState, "idle" | "loading" | "success" | "error">>;
type _State_createStockConsumptionQuantity = Assert<Assignable<typeof page.createStockConsumptionQuantity, string>>;
type _State_createStockConsumptionStatus = Assert<Assignable<typeof page.createStockConsumptionStatus, string>>;
type _State_createStockConsumptionConsumedAt = Assert<Assignable<typeof page.createStockConsumptionConsumedAt, string>>;
type _Action_createStockConsumption = Assert<Assignable<typeof page.createStockConsumption, (...args: any[]) => Promise<void>>>;
type _Handler_handleCreateStockConsumptionClick = Assert<Assignable<typeof page.handleCreateStockConsumptionClick, (...args: any[]) => void>>;
type _Action_setCreateStockConsumptionQuantity = Assert<Assignable<typeof page.setCreateStockConsumptionQuantity, (...args: any[]) => void>>;
type _Handler_handleCreateStockConsumptionQuantityChange = Assert<Assignable<typeof page.handleCreateStockConsumptionQuantityChange, (...args: any[]) => void>>;
type _Action_setCreateStockConsumptionStatus = Assert<Assignable<typeof page.setCreateStockConsumptionStatus, (...args: any[]) => void>>;
type _Handler_handleCreateStockConsumptionStatusChange = Assert<Assignable<typeof page.handleCreateStockConsumptionStatusChange, (...args: any[]) => void>>;
type _Action_setCreateStockConsumptionConsumedAt = Assert<Assignable<typeof page.setCreateStockConsumptionConsumedAt, (...args: any[]) => void>>;
type _Handler_handleCreateStockConsumptionConsumedAtChange = Assert<Assignable<typeof page.handleCreateStockConsumptionConsumedAtChange, (...args: any[]) => void>>;

export {};
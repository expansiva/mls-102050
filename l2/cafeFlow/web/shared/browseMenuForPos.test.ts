/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/browseMenuForPos.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowBrowseMenuForPosBase } from './browseMenuForPos.js';

type Assignable<Actual, Expected> = Actual extends Expected ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowBrowseMenuForPosBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseMenuForPosState = Assert<Assignable<typeof page.browseMenuForPosState, "idle" | "loading" | "success" | "error">>;
type _State_browseMenuForPosMenuItemId = Assert<Assignable<typeof page.browseMenuForPosMenuItemId, string>>;
type _State_browseMenuForPosMenuCategoryId = Assert<Assignable<typeof page.browseMenuForPosMenuCategoryId, string>>;
type _State_browseMenuForPosName = Assert<Assignable<typeof page.browseMenuForPosName, string>>;
type _State_browseMenuForPosStatus = Assert<Assignable<typeof page.browseMenuForPosStatus, string>>;
type _State_browseMenuForPosCreatedAt = Assert<Assignable<typeof page.browseMenuForPosCreatedAt, string>>;
type _State_browseMenuForPosUpdatedAt = Assert<Assignable<typeof page.browseMenuForPosUpdatedAt, string>>;
type _State_browseMenuForPosData = Assert<Assignable<typeof page.browseMenuForPosData, unknown[]>>;
type _Action_loadBrowseMenuForPos = Assert<Assignable<typeof page.loadBrowseMenuForPos, (...args: any[]) => Promise<void>>>;
type _Handler_handleBrowseMenuForPosClick = Assert<Assignable<typeof page.handleBrowseMenuForPosClick, (...args: any[]) => void>>;
type _Action_setBrowseMenuForPosMenuItemId = Assert<Assignable<typeof page.setBrowseMenuForPosMenuItemId, (...args: any[]) => void>>;
type _Handler_handleBrowseMenuForPosMenuItemIdChange = Assert<Assignable<typeof page.handleBrowseMenuForPosMenuItemIdChange, (...args: any[]) => void>>;
type _Action_setBrowseMenuForPosMenuCategoryId = Assert<Assignable<typeof page.setBrowseMenuForPosMenuCategoryId, (...args: any[]) => void>>;
type _Handler_handleBrowseMenuForPosMenuCategoryIdChange = Assert<Assignable<typeof page.handleBrowseMenuForPosMenuCategoryIdChange, (...args: any[]) => void>>;
type _Action_setBrowseMenuForPosName = Assert<Assignable<typeof page.setBrowseMenuForPosName, (...args: any[]) => void>>;
type _Handler_handleBrowseMenuForPosNameChange = Assert<Assignable<typeof page.handleBrowseMenuForPosNameChange, (...args: any[]) => void>>;
type _Action_setBrowseMenuForPosStatus = Assert<Assignable<typeof page.setBrowseMenuForPosStatus, (...args: any[]) => void>>;
type _Handler_handleBrowseMenuForPosStatusChange = Assert<Assignable<typeof page.handleBrowseMenuForPosStatusChange, (...args: any[]) => void>>;
type _Action_setBrowseMenuForPosCreatedAt = Assert<Assignable<typeof page.setBrowseMenuForPosCreatedAt, (...args: any[]) => void>>;
type _Handler_handleBrowseMenuForPosCreatedAtChange = Assert<Assignable<typeof page.handleBrowseMenuForPosCreatedAtChange, (...args: any[]) => void>>;
type _Action_setBrowseMenuForPosUpdatedAt = Assert<Assignable<typeof page.setBrowseMenuForPosUpdatedAt, (...args: any[]) => void>>;
type _Handler_handleBrowseMenuForPosUpdatedAtChange = Assert<Assignable<typeof page.handleBrowseMenuForPosUpdatedAtChange, (...args: any[]) => void>>;

export {};
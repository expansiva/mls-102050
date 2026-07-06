/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/closeDailyShift.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowCloseDailyShiftBase } from './closeDailyShift.js';

type Assignable<Actual, Expected> = Actual extends Expected ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowCloseDailyShiftBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_updateDailyShiftStatusState = Assert<Assignable<typeof page.updateDailyShiftStatusState, "idle" | "loading" | "success" | "error">>;
type _State_updateDailyShiftStatusDailyShiftId = Assert<Assignable<typeof page.updateDailyShiftStatusDailyShiftId, string>>;
type _State_updateDailyShiftStatusShiftDate = Assert<Assignable<typeof page.updateDailyShiftStatusShiftDate, string>>;
type _State_updateDailyShiftStatusStatus = Assert<Assignable<typeof page.updateDailyShiftStatusStatus, string>>;
type _State_updateDailyShiftStatusOpenedAt = Assert<Assignable<typeof page.updateDailyShiftStatusOpenedAt, string>>;
type _State_updateDailyShiftStatusClosedAt = Assert<Assignable<typeof page.updateDailyShiftStatusClosedAt, string>>;
type _State_updateDailyShiftStatusOpeningCashBalance = Assert<Assignable<typeof page.updateDailyShiftStatusOpeningCashBalance, string>>;
type _State_updateDailyShiftStatusClosingCashBalance = Assert<Assignable<typeof page.updateDailyShiftStatusClosingCashBalance, string>>;
type _State_updateDailyShiftStatusTotalSales = Assert<Assignable<typeof page.updateDailyShiftStatusTotalSales, string>>;
type _State_updateDailyShiftStatusTotalPayments = Assert<Assignable<typeof page.updateDailyShiftStatusTotalPayments, string>>;
type _State_updateDailyShiftStatusClosingNotes = Assert<Assignable<typeof page.updateDailyShiftStatusClosingNotes, string>>;
type _State_recordClosingCashMovementState = Assert<Assignable<typeof page.recordClosingCashMovementState, "idle" | "loading" | "success" | "error">>;
type _State_recordClosingCashMovementShiftDate = Assert<Assignable<typeof page.recordClosingCashMovementShiftDate, string>>;
type _State_recordClosingCashMovementStatus = Assert<Assignable<typeof page.recordClosingCashMovementStatus, string>>;
type _State_recordClosingCashMovementOpenedAt = Assert<Assignable<typeof page.recordClosingCashMovementOpenedAt, string>>;
type _State_recordClosingCashMovementClosedAt = Assert<Assignable<typeof page.recordClosingCashMovementClosedAt, string>>;
type _State_recordClosingCashMovementOpeningCashBalance = Assert<Assignable<typeof page.recordClosingCashMovementOpeningCashBalance, string>>;
type _State_recordClosingCashMovementClosingCashBalance = Assert<Assignable<typeof page.recordClosingCashMovementClosingCashBalance, string>>;
type _State_recordClosingCashMovementTotalSales = Assert<Assignable<typeof page.recordClosingCashMovementTotalSales, string>>;
type _State_recordClosingCashMovementTotalPayments = Assert<Assignable<typeof page.recordClosingCashMovementTotalPayments, string>>;
type _State_recordClosingCashMovementClosingNotes = Assert<Assignable<typeof page.recordClosingCashMovementClosingNotes, string>>;
type _Action_updateDailyShiftStatus = Assert<Assignable<typeof page.updateDailyShiftStatus, (...args: any[]) => Promise<void>>>;
type _Handler_handleUpdateDailyShiftStatusClick = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusClick, (...args: any[]) => void>>;
type _Action_recordClosingCashMovement = Assert<Assignable<typeof page.recordClosingCashMovement, (...args: any[]) => Promise<void>>>;
type _Handler_handleRecordClosingCashMovementClick = Assert<Assignable<typeof page.handleRecordClosingCashMovementClick, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusDailyShiftId = Assert<Assignable<typeof page.setUpdateDailyShiftStatusDailyShiftId, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusDailyShiftIdChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusDailyShiftIdChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusShiftDate = Assert<Assignable<typeof page.setUpdateDailyShiftStatusShiftDate, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusShiftDateChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusShiftDateChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusStatus = Assert<Assignable<typeof page.setUpdateDailyShiftStatusStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusStatusChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusStatusChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusOpenedAt = Assert<Assignable<typeof page.setUpdateDailyShiftStatusOpenedAt, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusOpenedAtChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusOpenedAtChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusClosedAt = Assert<Assignable<typeof page.setUpdateDailyShiftStatusClosedAt, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusClosedAtChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusClosedAtChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusOpeningCashBalance = Assert<Assignable<typeof page.setUpdateDailyShiftStatusOpeningCashBalance, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusOpeningCashBalanceChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusOpeningCashBalanceChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusClosingCashBalance = Assert<Assignable<typeof page.setUpdateDailyShiftStatusClosingCashBalance, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusClosingCashBalanceChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusClosingCashBalanceChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusTotalSales = Assert<Assignable<typeof page.setUpdateDailyShiftStatusTotalSales, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusTotalSalesChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusTotalSalesChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusTotalPayments = Assert<Assignable<typeof page.setUpdateDailyShiftStatusTotalPayments, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusTotalPaymentsChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusTotalPaymentsChange, (...args: any[]) => void>>;
type _Action_setUpdateDailyShiftStatusClosingNotes = Assert<Assignable<typeof page.setUpdateDailyShiftStatusClosingNotes, (...args: any[]) => void>>;
type _Handler_handleUpdateDailyShiftStatusClosingNotesChange = Assert<Assignable<typeof page.handleUpdateDailyShiftStatusClosingNotesChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementShiftDate = Assert<Assignable<typeof page.setRecordClosingCashMovementShiftDate, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementShiftDateChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementShiftDateChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementStatus = Assert<Assignable<typeof page.setRecordClosingCashMovementStatus, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementStatusChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementStatusChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementOpenedAt = Assert<Assignable<typeof page.setRecordClosingCashMovementOpenedAt, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementOpenedAtChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementOpenedAtChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementClosedAt = Assert<Assignable<typeof page.setRecordClosingCashMovementClosedAt, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementClosedAtChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementClosedAtChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementOpeningCashBalance = Assert<Assignable<typeof page.setRecordClosingCashMovementOpeningCashBalance, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementOpeningCashBalanceChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementOpeningCashBalanceChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementClosingCashBalance = Assert<Assignable<typeof page.setRecordClosingCashMovementClosingCashBalance, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementClosingCashBalanceChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementClosingCashBalanceChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementTotalSales = Assert<Assignable<typeof page.setRecordClosingCashMovementTotalSales, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementTotalSalesChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementTotalSalesChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementTotalPayments = Assert<Assignable<typeof page.setRecordClosingCashMovementTotalPayments, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementTotalPaymentsChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementTotalPaymentsChange, (...args: any[]) => void>>;
type _Action_setRecordClosingCashMovementClosingNotes = Assert<Assignable<typeof page.setRecordClosingCashMovementClosingNotes, (...args: any[]) => void>>;
type _Handler_handleRecordClosingCashMovementClosingNotesChange = Assert<Assignable<typeof page.handleRecordClosingCashMovementClosingNotesChange, (...args: any[]) => void>>;

export {};
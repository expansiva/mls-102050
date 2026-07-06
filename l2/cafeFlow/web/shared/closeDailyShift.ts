/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/closeDailyShift.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowUpdateDailyShiftStatusInput,
  CafeFlowUpdateDailyShiftStatusOutput,
  CafeFlowRecordClosingCashMovementInput,
  CafeFlowRecordClosingCashMovementOutput,
} from '/_102050_/l2/cafeFlow/web/contracts/closeDailyShift.js';

/// **collab_i18n_start**
const message_pt = {
  "closeDailyShift.section.main": "Fechar turno diário (fechamento de caixa)",
  "closeDailyShift.update.title": "Atualizar status do turno diário",
  "closeDailyShift.record.title": "Registrar movimento de fechamento do caixa",
  "closeDailyShift.summary.title": "Resumo do fechamento do turno",
  "closeDailyShift.action.updateDailyShiftStatus": "Atualizar status",
  "closeDailyShift.action.recordClosingCashMovement": "Registrar movimento",
  "field.dailyShiftId": "ID do turno",
  "field.shiftDate": "Data do turno",
  "field.status": "Status do turno",
  "field.openedAt": "Abertura do turno",
  "field.closedAt": "Fechamento do turno",
  "field.openingCashBalance": "Saldo inicial em caixa",
  "field.closingCashBalance": "Saldo final em caixa",
  "field.totalSales": "Total de vendas",
  "field.totalPayments": "Total de pagamentos",
  "field.closingNotes": "Observações de fechamento"
};
const message_en = {
  "closeDailyShift.section.main": "Close daily shift (cash closing)",
  "closeDailyShift.update.title": "Update daily shift status",
  "closeDailyShift.record.title": "Record closing cash movement",
  "closeDailyShift.summary.title": "Daily shift closing summary",
  "closeDailyShift.action.updateDailyShiftStatus": "Update status",
  "closeDailyShift.action.recordClosingCashMovement": "Record movement",
  "field.dailyShiftId": "Shift ID",
  "field.shiftDate": "Shift date",
  "field.status": "Shift status",
  "field.openedAt": "Shift opening",
  "field.closedAt": "Shift closing",
  "field.openingCashBalance": "Opening cash balance",
  "field.closingCashBalance": "Closing cash balance",
  "field.totalSales": "Total sales",
  "field.totalPayments": "Total payments",
  "field.closingNotes": "Closing notes"
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowCloseDailyShiftBase extends CollabLitElement {
  @property({ type: String }) status = '';

  @property({ type: String }) updateDailyShiftStatusState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) updateDailyShiftStatusDailyShiftId = '';
  @property({ type: String }) updateDailyShiftStatusShiftDate = '';
  @property({ type: String }) updateDailyShiftStatusStatus = '';
  @property({ type: String }) updateDailyShiftStatusOpenedAt = '';
  @property({ type: String }) updateDailyShiftStatusClosedAt = '';
  @property({ type: String }) updateDailyShiftStatusOpeningCashBalance = '';
  @property({ type: String }) updateDailyShiftStatusClosingCashBalance = '';
  @property({ type: String }) updateDailyShiftStatusTotalSales = '';
  @property({ type: String }) updateDailyShiftStatusTotalPayments = '';
  @property({ type: String }) updateDailyShiftStatusClosingNotes = '';

  @property({ type: String }) recordClosingCashMovementState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) recordClosingCashMovementShiftDate = '';
  @property({ type: String }) recordClosingCashMovementStatus = '';
  @property({ type: String }) recordClosingCashMovementOpenedAt = '';
  @property({ type: String }) recordClosingCashMovementClosedAt = '';
  @property({ type: String }) recordClosingCashMovementOpeningCashBalance = '';
  @property({ type: String }) recordClosingCashMovementClosingCashBalance = '';
  @property({ type: String }) recordClosingCashMovementTotalSales = '';
  @property({ type: String }) recordClosingCashMovementTotalPayments = '';
  @property({ type: String }) recordClosingCashMovementClosingNotes = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || messages['en'];
  }

  // ── State setters: updateDailyShiftStatus inputs ──

  setUpdateDailyShiftStatusDailyShiftId(value: string): void {
    this.updateDailyShiftStatusDailyShiftId = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.dailyShiftId', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusDailyShiftIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusDailyShiftId(target.value);
  }

  setUpdateDailyShiftStatusShiftDate(value: string): void {
    this.updateDailyShiftStatusShiftDate = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusShiftDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusShiftDate(target.value);
  }

  setUpdateDailyShiftStatusStatus(value: string): void {
    this.updateDailyShiftStatusStatus = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.status', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusStatus(target.value);
  }

  setUpdateDailyShiftStatusOpenedAt(value: string): void {
    this.updateDailyShiftStatusOpenedAt = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.openedAt', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusOpenedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusOpenedAt(target.value);
  }

  setUpdateDailyShiftStatusClosedAt(value: string): void {
    this.updateDailyShiftStatusClosedAt = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.closedAt', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusClosedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusClosedAt(target.value);
  }

  setUpdateDailyShiftStatusOpeningCashBalance(value: string): void {
    this.updateDailyShiftStatusOpeningCashBalance = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusOpeningCashBalanceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusOpeningCashBalance(target.value);
  }

  setUpdateDailyShiftStatusClosingCashBalance(value: string): void {
    this.updateDailyShiftStatusClosingCashBalance = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusClosingCashBalanceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusClosingCashBalance(target.value);
  }

  setUpdateDailyShiftStatusTotalSales(value: string): void {
    this.updateDailyShiftStatusTotalSales = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.totalSales', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusTotalSalesChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusTotalSales(target.value);
  }

  setUpdateDailyShiftStatusTotalPayments(value: string): void {
    this.updateDailyShiftStatusTotalPayments = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusTotalPaymentsChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusTotalPayments(target.value);
  }

  setUpdateDailyShiftStatusClosingNotes(value: string): void {
    this.updateDailyShiftStatusClosingNotes = value;
    setState('ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes', value);
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusClosingNotesChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateDailyShiftStatusClosingNotes(target.value);
  }

  // ── State setters: recordClosingCashMovement inputs ──

  setRecordClosingCashMovementShiftDate(value: string): void {
    this.recordClosingCashMovementShiftDate = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.shiftDate', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementShiftDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementShiftDate(target.value);
  }

  setRecordClosingCashMovementStatus(value: string): void {
    this.recordClosingCashMovementStatus = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.status', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementStatus(target.value);
  }

  setRecordClosingCashMovementOpenedAt(value: string): void {
    this.recordClosingCashMovementOpenedAt = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.openedAt', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementOpenedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementOpenedAt(target.value);
  }

  setRecordClosingCashMovementClosedAt(value: string): void {
    this.recordClosingCashMovementClosedAt = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.closedAt', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementClosedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementClosedAt(target.value);
  }

  setRecordClosingCashMovementOpeningCashBalance(value: string): void {
    this.recordClosingCashMovementOpeningCashBalance = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.openingCashBalance', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementOpeningCashBalanceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementOpeningCashBalance(target.value);
  }

  setRecordClosingCashMovementClosingCashBalance(value: string): void {
    this.recordClosingCashMovementClosingCashBalance = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementClosingCashBalanceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementClosingCashBalance(target.value);
  }

  setRecordClosingCashMovementTotalSales(value: string): void {
    this.recordClosingCashMovementTotalSales = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.totalSales', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementTotalSalesChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementTotalSales(target.value);
  }

  setRecordClosingCashMovementTotalPayments(value: string): void {
    this.recordClosingCashMovementTotalPayments = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.totalPayments', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementTotalPaymentsChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementTotalPayments(target.value);
  }

  setRecordClosingCashMovementClosingNotes(value: string): void {
    this.recordClosingCashMovementClosingNotes = value;
    setState('ui.closeDailyShift.input.recordClosingCashMovement.closingNotes', value);
    this.requestUpdate();
  }

  handleRecordClosingCashMovementClosingNotesChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordClosingCashMovementClosingNotes(target.value);
  }

  // ── Command: updateDailyShiftStatus ──

  async updateDailyShiftStatus(): Promise<void> {
    this.updateDailyShiftStatusState = 'loading';
    setState('ui.closeDailyShift.action.updateDailyShiftStatus.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowUpdateDailyShiftStatusInput = {
      dailyShiftId: this.updateDailyShiftStatusDailyShiftId || undefined,
      shiftDate: this.updateDailyShiftStatusShiftDate,
      status: this.updateDailyShiftStatusStatus as "open" | "closed",
      openedAt: this.updateDailyShiftStatusOpenedAt,
      closedAt: this.updateDailyShiftStatusClosedAt || undefined,
      openingCashBalance: this.updateDailyShiftStatusOpeningCashBalance
        ? Number(this.updateDailyShiftStatusOpeningCashBalance)
        : undefined,
      closingCashBalance: this.updateDailyShiftStatusClosingCashBalance
        ? Number(this.updateDailyShiftStatusClosingCashBalance)
        : undefined,
      totalSales: this.updateDailyShiftStatusTotalSales
        ? Number(this.updateDailyShiftStatusTotalSales)
        : undefined,
      totalPayments: this.updateDailyShiftStatusTotalPayments
        ? Number(this.updateDailyShiftStatusTotalPayments)
        : undefined,
      closingNotes: this.updateDailyShiftStatusClosingNotes || undefined,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CafeFlowUpdateDailyShiftStatusOutput>(
      'cafeFlow.closeDailyShift.updateDailyShiftStatus',
      params,
      options
    );

    if (response.ok) {
      this.updateDailyShiftStatusState = 'success';
      setState('ui.closeDailyShift.action.updateDailyShiftStatus.status', 'success');
    } else {
      this.updateDailyShiftStatusState = 'error';
      setState('ui.closeDailyShift.action.updateDailyShiftStatus.status', 'error');
    }
    this.requestUpdate();
  }

  handleUpdateDailyShiftStatusClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async () => {
      await this.updateDailyShiftStatus();
    });
  }

  // ── Command: recordClosingCashMovement ──

  async recordClosingCashMovement(): Promise<void> {
    this.recordClosingCashMovementState = 'loading';
    setState('ui.closeDailyShift.action.recordClosingCashMovement.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowRecordClosingCashMovementInput = {
      shiftDate: this.recordClosingCashMovementShiftDate,
      status: this.recordClosingCashMovementStatus as "open" | "closed",
      openedAt: this.recordClosingCashMovementOpenedAt,
      closedAt: this.recordClosingCashMovementClosedAt || undefined,
      openingCashBalance: this.recordClosingCashMovementOpeningCashBalance
        ? Number(this.recordClosingCashMovementOpeningCashBalance)
        : undefined,
      closingCashBalance: this.recordClosingCashMovementClosingCashBalance
        ? Number(this.recordClosingCashMovementClosingCashBalance)
        : undefined,
      totalSales: this.recordClosingCashMovementTotalSales
        ? Number(this.recordClosingCashMovementTotalSales)
        : undefined,
      totalPayments: this.recordClosingCashMovementTotalPayments
        ? Number(this.recordClosingCashMovementTotalPayments)
        : undefined,
      closingNotes: this.recordClosingCashMovementClosingNotes || undefined,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CafeFlowRecordClosingCashMovementOutput>(
      'cafeFlow.closeDailyShift.recordClosingCashMovement',
      params,
      options
    );

    if (response.ok) {
      this.recordClosingCashMovementState = 'success';
      setState('ui.closeDailyShift.action.recordClosingCashMovement.status', 'success');
    } else {
      this.recordClosingCashMovementState = 'error';
      setState('ui.closeDailyShift.action.recordClosingCashMovement.status', 'error');
    }
    this.requestUpdate();
  }

  handleRecordClosingCashMovementClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async () => {
      await this.recordClosingCashMovement();
    });
  }

  // ── Lifecycle ──

  connectedCallback(): void {
    super.connectedCallback();

    this.status = (getState('ui.closeDailyShift.status') as string) || '';
    this.updateDailyShiftStatusState =
      (getState('ui.closeDailyShift.action.updateDailyShiftStatus.status') as "idle" | "loading" | "success" | "error") || 'idle';
    this.updateDailyShiftStatusDailyShiftId =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.dailyShiftId') as string) || '';
    this.updateDailyShiftStatusShiftDate =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate') as string) || '';
    this.updateDailyShiftStatusStatus =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.status') as string) || '';
    this.updateDailyShiftStatusOpenedAt =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.openedAt') as string) || '';
    this.updateDailyShiftStatusClosedAt =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.closedAt') as string) || '';
    this.updateDailyShiftStatusOpeningCashBalance =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance') as string) || '';
    this.updateDailyShiftStatusClosingCashBalance =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance') as string) || '';
    this.updateDailyShiftStatusTotalSales =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.totalSales') as string) || '';
    this.updateDailyShiftStatusTotalPayments =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments') as string) || '';
    this.updateDailyShiftStatusClosingNotes =
      (getState('ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes') as string) || '';

    this.recordClosingCashMovementState =
      (getState('ui.closeDailyShift.action.recordClosingCashMovement.status') as "idle" | "loading" | "success" | "error") || 'idle';
    this.recordClosingCashMovementShiftDate =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.shiftDate') as string) || '';
    this.recordClosingCashMovementStatus =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.status') as string) || '';
    this.recordClosingCashMovementOpenedAt =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.openedAt') as string) || '';
    this.recordClosingCashMovementClosedAt =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.closedAt') as string) || '';
    this.recordClosingCashMovementOpeningCashBalance =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.openingCashBalance') as string) || '';
    this.recordClosingCashMovementClosingCashBalance =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance') as string) || '';
    this.recordClosingCashMovementTotalSales =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.totalSales') as string) || '';
    this.recordClosingCashMovementTotalPayments =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.totalPayments') as string) || '';
    this.recordClosingCashMovementClosingNotes =
      (getState('ui.closeDailyShift.input.recordClosingCashMovement.closingNotes') as string) || '';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}

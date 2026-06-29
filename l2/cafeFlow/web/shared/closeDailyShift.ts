/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/closeDailyShift.ts" enhancement="_blank"/>

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

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

const message_pt: Record<string, string> = {
  'closeDailyShift.section.main.title': 'Fechar turno diário (fechamento de caixa)',
  'closeDailyShift.organism.updateDailyShiftStatus.title': 'Atualizar status do turno',
  'closeDailyShift.organism.recordClosingCashMovement.title': 'Registrar movimento de fechamento',
  'closeDailyShift.intent.updateDailyShiftStatus.title': 'Atualizar status do turno',
  'closeDailyShift.intent.recordClosingCashMovement.title': 'Registrar movimento de fechamento',
  'closeDailyShift.field.dailyShiftId.label': 'ID do turno',
  'closeDailyShift.field.shiftDate.label': 'Data do turno',
  'closeDailyShift.field.status.label': 'Status do turno',
  'closeDailyShift.field.openedAt.label': 'Abertura',
  'closeDailyShift.field.closedAt.label': 'Fechamento',
  'closeDailyShift.field.openingCashBalance.label': 'Saldo inicial em caixa',
  'closeDailyShift.field.closingCashBalance.label': 'Saldo final em caixa',
  'closeDailyShift.field.totalSales.label': 'Total de vendas',
  'closeDailyShift.field.totalPayments.label': 'Total de pagamentos',
  'closeDailyShift.field.closingNotes.label': 'Observações de fechamento',
  'closeDailyShift.action.updateDailyShiftStatus.label': 'Atualizar status do turno',
  'closeDailyShift.action.recordClosingCashMovement.label': 'Registrar movimento de fechamento',
};

const message_en: Record<string, string> = {
  'closeDailyShift.section.main.title': 'Close daily shift (cash closing)',
  'closeDailyShift.organism.updateDailyShiftStatus.title': 'Update shift status',
  'closeDailyShift.organism.recordClosingCashMovement.title': 'Record closing cash movement',
  'closeDailyShift.intent.updateDailyShiftStatus.title': 'Update shift status',
  'closeDailyShift.intent.recordClosingCashMovement.title': 'Record closing cash movement',
  'closeDailyShift.field.dailyShiftId.label': 'Shift ID',
  'closeDailyShift.field.shiftDate.label': 'Shift date',
  'closeDailyShift.field.status.label': 'Shift status',
  'closeDailyShift.field.openedAt.label': 'Opened at',
  'closeDailyShift.field.closedAt.label': 'Closed at',
  'closeDailyShift.field.openingCashBalance.label': 'Opening cash balance',
  'closeDailyShift.field.closingCashBalance.label': 'Closing cash balance',
  'closeDailyShift.field.totalSales.label': 'Total sales',
  'closeDailyShift.field.totalPayments.label': 'Total payments',
  'closeDailyShift.field.closingNotes.label': 'Closing notes',
  'closeDailyShift.action.updateDailyShiftStatus.label': 'Update shift status',
  'closeDailyShift.action.recordClosingCashMovement.label': 'Record closing cash movement',
};

export class CafeFlowCloseDailyShiftBase extends CollabLitElement {
  // ── Page status ──────────────────────────────────────────────
  @property({ type: String }) status = '';

  // ── Action status: updateDailyShiftStatus ────────────────────
  @property({ type: String }) updateDailyShiftStatusState: ActionStatus = 'idle';

  // ── Input: updateDailyShiftStatus ────────────────────────────
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

  // ── Action status: recordClosingCashMovement ─────────────────
  @property({ type: String }) recordClosingCashMovementState: ActionStatus = 'idle';

  // ── Input: recordClosingCashMovement ─────────────────────────
  @property({ type: String }) recordClosingCashMovementShiftDate = '';
  @property({ type: String }) recordClosingCashMovementStatus = '';
  @property({ type: String }) recordClosingCashMovementOpenedAt = '';
  @property({ type: String }) recordClosingCashMovementClosedAt = '';
  @property({ type: String }) recordClosingCashMovementOpeningCashBalance = '';
  @property({ type: String }) recordClosingCashMovementClosingCashBalance = '';
  @property({ type: String }) recordClosingCashMovementTotalSales = '';
  @property({ type: String }) recordClosingCashMovementTotalPayments = '';
  @property({ type: String }) recordClosingCashMovementClosingNotes = '';

  // ── i18n ─────────────────────────────────────────────────────
  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { lang?: string }).lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  // ── Lifecycle ────────────────────────────────────────────────
  connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState('ui.closeDailyShift.status') as string) ?? '';
    this.updateDailyShiftStatusState =
      (getState('ui.closeDailyShift.action.updateDailyShiftStatus.status') as ActionStatus) ?? 'idle';
    this.recordClosingCashMovementState =
      (getState('ui.closeDailyShift.action.recordClosingCashMovement.status') as ActionStatus) ?? 'idle';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // ── State setters: updateDailyShiftStatus ────────────────────

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
    const target = e.target as HTMLInputElement | HTMLSelectElement;
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
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setUpdateDailyShiftStatusClosingNotes(target.value);
  }

  // ── State setters: recordClosingCashMovement ─────────────────

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
    const target = e.target as HTMLInputElement | HTMLSelectElement;
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
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setRecordClosingCashMovementClosingNotes(target.value);
  }

  // ── Command: updateDailyShiftStatus ──────────────────────────

  async updateDailyShiftStatus(): Promise<void> {
    this.updateDailyShiftStatusState = 'loading';
    setState('ui.closeDailyShift.action.updateDailyShiftStatus.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowUpdateDailyShiftStatusInput = {
      dailyShiftId: this.updateDailyShiftStatusDailyShiftId || undefined,
      shiftDate: this.updateDailyShiftStatusShiftDate,
      status: this.updateDailyShiftStatusStatus as 'open' | 'closed',
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

    try {
      const response = await execBff<CafeFlowUpdateDailyShiftStatusOutput>(
        'cafeFlow.closeDailyShift.updateDailyShiftStatus',
        params,
        options,
      );

      if (response.ok) {
        this.updateDailyShiftStatusState = 'success';
        setState('ui.closeDailyShift.action.updateDailyShiftStatus.status', 'success');
      } else {
        this.updateDailyShiftStatusState = 'error';
        setState('ui.closeDailyShift.action.updateDailyShiftStatus.status', 'error');
      }
    } catch {
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

  // ── Command: recordClosingCashMovement ───────────────────────

  async recordClosingCashMovement(): Promise<void> {
    this.recordClosingCashMovementState = 'loading';
    setState('ui.closeDailyShift.action.recordClosingCashMovement.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowRecordClosingCashMovementInput = {
      shiftDate: this.recordClosingCashMovementShiftDate,
      status: this.recordClosingCashMovementStatus as 'open' | 'closed',
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

    try {
      const response = await execBff<CafeFlowRecordClosingCashMovementOutput>(
        'cafeFlow.closeDailyShift.recordClosingCashMovement',
        params,
        options,
      );

      if (response.ok) {
        this.recordClosingCashMovementState = 'success';
        setState('ui.closeDailyShift.action.recordClosingCashMovement.status', 'success');
      } else {
        this.recordClosingCashMovementState = 'error';
        setState('ui.closeDailyShift.action.recordClosingCashMovement.status', 'error');
      }
    } catch {
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
}

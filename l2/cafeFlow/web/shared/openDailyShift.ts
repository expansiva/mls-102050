/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/openDailyShift.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowCreateDailyShiftInput,
  CafeFlowCreateDailyShiftOutput,
  CafeFlowRecordOpeningCashMovementInput,
  CafeFlowRecordOpeningCashMovementOutput,
} from '/_102050_/l2/cafeFlow/web/contracts/openDailyShift.js';

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

const message_pt: Record<string, string> = {
  'openDailyShift.section.main.title': 'Abrir turno diário',
  'openDailyShift.organism.createDailyShift.title': 'Criar turno diário',
  'openDailyShift.intention.createDailyShift.form.title': 'Command Form',
  'openDailyShift.field.createDailyShift.shiftDate.label': 'Shift Date',
  'openDailyShift.field.createDailyShift.status.label': 'Status',
  'openDailyShift.field.createDailyShift.openedAt.label': 'Opened At',
  'openDailyShift.field.createDailyShift.openingCashBalance.label': 'Opening Cash Balance',
  'openDailyShift.action.createDailyShift.submit.label': 'Create Daily Shift',
  'openDailyShift.organism.recordOpeningCashMovement.title': 'Registrar movimento de caixa de abertura',
  'openDailyShift.intention.recordOpeningCashMovement.form.title': 'Command Form',
  'openDailyShift.field.recordOpeningCashMovement.movementType.label': 'Movement Type',
  'openDailyShift.field.recordOpeningCashMovement.amount.label': 'Amount',
  'openDailyShift.field.recordOpeningCashMovement.reason.label': 'Reason',
  'openDailyShift.action.recordOpeningCashMovement.submit.label': 'Record Opening Cash Movement',
};

const message_en: Record<string, string> = {
  'openDailyShift.section.main.title': 'Open Daily Shift',
  'openDailyShift.organism.createDailyShift.title': 'Create Daily Shift',
  'openDailyShift.intention.createDailyShift.form.title': 'Command Form',
  'openDailyShift.field.createDailyShift.shiftDate.label': 'Shift Date',
  'openDailyShift.field.createDailyShift.status.label': 'Status',
  'openDailyShift.field.createDailyShift.openedAt.label': 'Opened At',
  'openDailyShift.field.createDailyShift.openingCashBalance.label': 'Opening Cash Balance',
  'openDailyShift.action.createDailyShift.submit.label': 'Create Daily Shift',
  'openDailyShift.organism.recordOpeningCashMovement.title': 'Record Opening Cash Movement',
  'openDailyShift.intention.recordOpeningCashMovement.form.title': 'Command Form',
  'openDailyShift.field.recordOpeningCashMovement.movementType.label': 'Movement Type',
  'openDailyShift.field.recordOpeningCashMovement.amount.label': 'Amount',
  'openDailyShift.field.recordOpeningCashMovement.reason.label': 'Reason',
  'openDailyShift.action.recordOpeningCashMovement.submit.label': 'Record Opening Cash Movement',
};

export class CafeFlowOpenDailyShiftBase extends CollabLitElement {
  // ── State properties ──────────────────────────────────────────────

  @property({ type: String })
  status = '';

  @property({ type: String })
  createDailyShiftState: ActionStatus = 'idle';

  @property({ type: String })
  createDailyShiftShiftDate = '';

  @property({ type: String })
  createDailyShiftStatus = '';

  @property({ type: String })
  createDailyShiftOpenedAt = '';

  @property({ type: String })
  createDailyShiftOpeningCashBalance = '';

  @property({ type: String })
  recordOpeningCashMovementState: ActionStatus = 'idle';

  @property({ type: String })
  recordOpeningCashMovementMovementType = '';

  @property({ type: String })
  recordOpeningCashMovementAmount = '';

  @property({ type: String })
  recordOpeningCashMovementReason = '';

  // ── i18n ──────────────────────────────────────────────────────────

  protected get msg(): Record<string, string> {
    const lang = (typeof document !== 'undefined' && document.documentElement?.lang) || 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  // ── State setters ─────────────────────────────────────────────────

  setCreateDailyShiftShiftDate(value: string): void {
    this.createDailyShiftShiftDate = value;
    setState('ui.openDailyShift.input.createDailyShift.shiftDate', value);
    this.requestUpdate();
  }

  handleCreateDailyShiftShiftDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateDailyShiftShiftDate(target.value);
  }

  setCreateDailyShiftStatus(value: string): void {
    this.createDailyShiftStatus = value;
    setState('ui.openDailyShift.input.createDailyShift.status', value);
    this.requestUpdate();
  }

  handleCreateDailyShiftStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCreateDailyShiftStatus(target.value);
  }

  setCreateDailyShiftOpenedAt(value: string): void {
    this.createDailyShiftOpenedAt = value;
    setState('ui.openDailyShift.input.createDailyShift.openedAt', value);
    this.requestUpdate();
  }

  handleCreateDailyShiftOpenedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateDailyShiftOpenedAt(target.value);
  }

  setCreateDailyShiftOpeningCashBalance(value: string): void {
    this.createDailyShiftOpeningCashBalance = value;
    setState('ui.openDailyShift.input.createDailyShift.openingCashBalance', value);
    this.requestUpdate();
  }

  handleCreateDailyShiftOpeningCashBalanceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateDailyShiftOpeningCashBalance(target.value);
  }

  setRecordOpeningCashMovementMovementType(value: string): void {
    this.recordOpeningCashMovementMovementType = value;
    setState('ui.openDailyShift.input.recordOpeningCashMovement.movementType', value);
    this.requestUpdate();
  }

  handleRecordOpeningCashMovementMovementTypeChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setRecordOpeningCashMovementMovementType(target.value);
  }

  setRecordOpeningCashMovementAmount(value: string): void {
    this.recordOpeningCashMovementAmount = value;
    setState('ui.openDailyShift.input.recordOpeningCashMovement.amount', value);
    this.requestUpdate();
  }

  handleRecordOpeningCashMovementAmountChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordOpeningCashMovementAmount(target.value);
  }

  setRecordOpeningCashMovementReason(value: string): void {
    this.recordOpeningCashMovementReason = value;
    setState('ui.openDailyShift.input.recordOpeningCashMovement.reason', value);
    this.requestUpdate();
  }

  handleRecordOpeningCashMovementReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setRecordOpeningCashMovementReason(target.value);
  }

  // ── Command: createDailyShift ─────────────────────────────────────

  async createDailyShift(): Promise<void> {
    this.createDailyShiftState = 'loading';
    setState('ui.openDailyShift.action.createDailyShift.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowCreateDailyShiftInput = {
      shiftDate: this.createDailyShiftShiftDate,
      status: this.createDailyShiftStatus as 'open' | 'closed',
      openedAt: this.createDailyShiftOpenedAt,
      openingCashBalance: this.createDailyShiftOpeningCashBalance
        ? Number(this.createDailyShiftOpeningCashBalance)
        : undefined,
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowCreateDailyShiftOutput>(
        'cafeFlow.openDailyShift.createDailyShift',
        params,
        options,
      );

      if (response.ok) {
        this.createDailyShiftState = 'success';
        setState('ui.openDailyShift.action.createDailyShift.status', 'success');
      } else {
        this.createDailyShiftState = 'error';
        setState('ui.openDailyShift.action.createDailyShift.status', 'error');
      }
    } catch {
      this.createDailyShiftState = 'error';
      setState('ui.openDailyShift.action.createDailyShift.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateDailyShiftClick(): void {
    runBlockingUiAction(async () => {
      await this.createDailyShift();
    });
  }

  // ── Command: recordOpeningCashMovement ────────────────────────────

  async recordOpeningCashMovement(): Promise<void> {
    this.recordOpeningCashMovementState = 'loading';
    setState('ui.openDailyShift.action.recordOpeningCashMovement.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowRecordOpeningCashMovementInput = {
      movementType: this.recordOpeningCashMovementMovementType as 'entrada' | 'saída',
      amount: Number(this.recordOpeningCashMovementAmount),
      reason: this.recordOpeningCashMovementReason,
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowRecordOpeningCashMovementOutput>(
        'cafeFlow.openDailyShift.recordOpeningCashMovement',
        params,
        options,
      );

      if (response.ok) {
        this.recordOpeningCashMovementState = 'success';
        setState('ui.openDailyShift.action.recordOpeningCashMovement.status', 'success');
      } else {
        this.recordOpeningCashMovementState = 'error';
        setState('ui.openDailyShift.action.recordOpeningCashMovement.status', 'error');
      }
    } catch {
      this.recordOpeningCashMovementState = 'error';
      setState('ui.openDailyShift.action.recordOpeningCashMovement.status', 'error');
    }
    this.requestUpdate();
  }

  handleRecordOpeningCashMovementClick(): void {
    runBlockingUiAction(async () => {
      await this.recordOpeningCashMovement();
    });
  }

  // ── Lifecycle ─────────────────────────────────────────────────────

  connectedCallback(): void {
    super.connectedCallback();

    // Restore shared state if available, otherwise keep defaults
    this.status = (getState('ui.openDailyShift.status') as string) ?? this.status;
    this.createDailyShiftState =
      (getState('ui.openDailyShift.action.createDailyShift.status') as ActionStatus) ??
      this.createDailyShiftState;
    this.createDailyShiftShiftDate =
      (getState('ui.openDailyShift.input.createDailyShift.shiftDate') as string) ??
      this.createDailyShiftShiftDate;
    this.createDailyShiftStatus =
      (getState('ui.openDailyShift.input.createDailyShift.status') as string) ??
      this.createDailyShiftStatus;
    this.createDailyShiftOpenedAt =
      (getState('ui.openDailyShift.input.createDailyShift.openedAt') as string) ??
      this.createDailyShiftOpenedAt;
    this.createDailyShiftOpeningCashBalance =
      (getState('ui.openDailyShift.input.createDailyShift.openingCashBalance') as string) ??
      this.createDailyShiftOpeningCashBalance;
    this.recordOpeningCashMovementState =
      (getState('ui.openDailyShift.action.recordOpeningCashMovement.status') as ActionStatus) ??
      this.recordOpeningCashMovementState;
    this.recordOpeningCashMovementMovementType =
      (getState('ui.openDailyShift.input.recordOpeningCashMovement.movementType') as string) ??
      this.recordOpeningCashMovementMovementType;
    this.recordOpeningCashMovementAmount =
      (getState('ui.openDailyShift.input.recordOpeningCashMovement.amount') as string) ??
      this.recordOpeningCashMovementAmount;
    this.recordOpeningCashMovementReason =
      (getState('ui.openDailyShift.input.recordOpeningCashMovement.reason') as string) ??
      this.recordOpeningCashMovementReason;

    // No initialLoads defined for this page
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}

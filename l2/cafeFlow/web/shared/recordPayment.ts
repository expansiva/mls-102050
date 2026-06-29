/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/recordPayment.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowRecordPaymentInput, CafeFlowRecordPaymentOutput } from '/_102050_/l2/cafeFlow/web/contracts/recordPayment.js';

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

const message_pt: Record<string, string> = {
  'recordPayment.section.title': 'Registrar pagamento/recebimento',
  'recordPayment.organism.title': 'Registrar pagamento/recebimento',
  'recordPayment.form.title': 'Command Form',
  'recordPayment.field.method': 'Method',
  'recordPayment.field.amount': 'Amount',
  'recordPayment.field.status': 'Status',
  'recordPayment.action.submit': 'Record Payment',
};

const message_en: Record<string, string> = {
  'recordPayment.section.title': 'Register payment/receipt',
  'recordPayment.organism.title': 'Register payment/receipt',
  'recordPayment.form.title': 'Command Form',
  'recordPayment.field.method': 'Method',
  'recordPayment.field.amount': 'Amount',
  'recordPayment.field.status': 'Status',
  'recordPayment.action.submit': 'Record Payment',
};

export class CafeFlowRecordPaymentBase extends CollabLitElement {
  @property({ type: String }) status = '';
  @property({ type: String }) recordPaymentState: ActionStatus = 'idle';
  @property({ type: String }) recordPaymentMethod = '';
  @property({ type: String }) recordPaymentAmount = '';
  @property({ type: String }) recordPaymentStatus = '';

  protected get msg(): Record<string, string> {
    const lang = (this as any).__lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState('ui.recordPayment.status') ?? '';
    this.recordPaymentState = (getState('ui.recordPayment.action.recordPayment.status') as ActionStatus) ?? 'idle';
    this.recordPaymentMethod = getState('ui.recordPayment.input.recordPayment.method') ?? '';
    this.recordPaymentAmount = getState('ui.recordPayment.input.recordPayment.amount') ?? '';
    this.recordPaymentStatus = getState('ui.recordPayment.input.recordPayment.status') ?? '';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- State setters ---

  setRecordPaymentMethod(value: string): void {
    this.recordPaymentMethod = value;
    setState('ui.recordPayment.input.recordPayment.method', value);
    this.requestUpdate();
  }

  handleRecordPaymentMethodChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setRecordPaymentMethod(target.value);
  }

  setRecordPaymentAmount(value: string): void {
    this.recordPaymentAmount = value;
    setState('ui.recordPayment.input.recordPayment.amount', value);
    this.requestUpdate();
  }

  handleRecordPaymentAmountChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setRecordPaymentAmount(target.value);
  }

  setRecordPaymentStatus(value: string): void {
    this.recordPaymentStatus = value;
    setState('ui.recordPayment.input.recordPayment.status', value);
    this.requestUpdate();
  }

  handleRecordPaymentStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setRecordPaymentStatus(target.value);
  }

  // --- Command action: recordPayment ---

  async recordPayment(): Promise<void> {
    this.recordPaymentState = 'loading';
    setState('ui.recordPayment.action.recordPayment.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowRecordPaymentInput = {
      method: this.recordPaymentMethod,
      amount: Number(this.recordPaymentAmount) || 0,
      status: this.recordPaymentStatus as CafeFlowRecordPaymentInput['status'],
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowRecordPaymentOutput>(
        'cafeFlow.recordPayment.recordPayment',
        params,
        options,
      );

      if (response.ok) {
        this.recordPaymentState = 'success';
        setState('ui.recordPayment.action.recordPayment.status', 'success');
      } else {
        this.recordPaymentState = 'error';
        setState('ui.recordPayment.action.recordPayment.status', 'error');
      }
    } catch {
      this.recordPaymentState = 'error';
      setState('ui.recordPayment.action.recordPayment.status', 'error');
    }
    this.requestUpdate();
  }

  handleRecordPaymentClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async () => {
      await this.recordPayment();
    });
  }
}

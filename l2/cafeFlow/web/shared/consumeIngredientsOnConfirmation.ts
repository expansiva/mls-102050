/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowCreateStockConsumptionInput, CafeFlowCreateStockConsumptionOutput } from '/_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.js';

const message_pt: Record<string, string> = {
  'consumeIngredientsOnConfirmation.section.main.title': 'Baixar estoque por consumo de ingredientes',
  'consumeIngredientsOnConfirmation.organism.createStockConsumption.title': 'Registrar consumo de estoque',
  'consumeIngredientsOnConfirmation.intent.createStockConsumption.form.title': 'Registrar consumo de estoque',
  'consumeIngredientsOnConfirmation.field.quantity.label': 'Quantidade consumida',
  'consumeIngredientsOnConfirmation.field.status.label': 'Situação do consumo',
  'consumeIngredientsOnConfirmation.field.consumedAt.label': 'Data e hora do consumo',
  'consumeIngredientsOnConfirmation.action.createStockConsumption.label': 'Registrar consumo',
};

const message_en: Record<string, string> = {
  'consumeIngredientsOnConfirmation.section.main.title': 'Deduct stock by ingredient consumption',
  'consumeIngredientsOnConfirmation.organism.createStockConsumption.title': 'Register stock consumption',
  'consumeIngredientsOnConfirmation.intent.createStockConsumption.form.title': 'Register stock consumption',
  'consumeIngredientsOnConfirmation.field.quantity.label': 'Consumed quantity',
  'consumeIngredientsOnConfirmation.field.status.label': 'Consumption status',
  'consumeIngredientsOnConfirmation.field.consumedAt.label': 'Consumption date and time',
  'consumeIngredientsOnConfirmation.action.createStockConsumption.label': 'Register consumption',
};

export class CafeFlowConsumeIngredientsOnConfirmationBase extends CollabLitElement {
  @property({ type: String }) status = '';
  @property({ type: String }) createStockConsumptionState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) createStockConsumptionQuantity: string | number = '';
  @property({ type: String }) createStockConsumptionStatus = '';
  @property({ type: String }) createStockConsumptionConsumedAt = '';

  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { __lang?: string }).__lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState('ui.consumeIngredientsOnConfirmation.status') ?? '';
    this.createStockConsumptionState = getState('ui.consumeIngredientsOnConfirmation.action.createStockConsumption.status') ?? 'idle';
    this.createStockConsumptionQuantity = getState('ui.consumeIngredientsOnConfirmation.input.createStockConsumption.quantity') ?? '';
    this.createStockConsumptionStatus = getState('ui.consumeIngredientsOnConfirmation.input.createStockConsumption.status') ?? '';
    this.createStockConsumptionConsumedAt = getState('ui.consumeIngredientsOnConfirmation.input.createStockConsumption.consumedAt') ?? '';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- State setters ---

  setCreateStockConsumptionQuantity(value: string | number): void {
    this.createStockConsumptionQuantity = value;
    setState('ui.consumeIngredientsOnConfirmation.input.createStockConsumption.quantity', value);
    this.requestUpdate();
  }

  handleCreateStockConsumptionQuantityChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    const raw = target.value;
    const parsed = raw === '' ? '' : Number(raw);
    this.setCreateStockConsumptionQuantity(parsed);
  }

  setCreateStockConsumptionStatus(value: string): void {
    this.createStockConsumptionStatus = value;
    setState('ui.consumeIngredientsOnConfirmation.input.createStockConsumption.status', value);
    this.requestUpdate();
  }

  handleCreateStockConsumptionStatusChange(e: Event): void {
    const target = e.target as HTMLSelectElement;
    this.setCreateStockConsumptionStatus(target.value);
  }

  setCreateStockConsumptionConsumedAt(value: string): void {
    this.createStockConsumptionConsumedAt = value;
    setState('ui.consumeIngredientsOnConfirmation.input.createStockConsumption.consumedAt', value);
    this.requestUpdate();
  }

  handleCreateStockConsumptionConsumedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateStockConsumptionConsumedAt(target.value);
  }

  // --- Command: createStockConsumption ---

  async createStockConsumption(): Promise<void> {
    this.createStockConsumptionState = 'loading';
    setState('ui.consumeIngredientsOnConfirmation.action.createStockConsumption.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowCreateStockConsumptionInput = {
      quantity: Number(this.createStockConsumptionQuantity),
      status: this.createStockConsumptionStatus as 'posted' | 'voided',
      consumedAt: this.createStockConsumptionConsumedAt,
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowCreateStockConsumptionOutput>(
        'cafeFlow.consumeIngredientsOnConfirmation.createStockConsumption',
        params,
        options,
      );

      if (response.ok) {
        this.createStockConsumptionState = 'success';
        setState('ui.consumeIngredientsOnConfirmation.action.createStockConsumption.status', 'success');
      } else {
        this.createStockConsumptionState = 'error';
        setState('ui.consumeIngredientsOnConfirmation.action.createStockConsumption.status', 'error');
      }
    } catch {
      this.createStockConsumptionState = 'error';
      setState('ui.consumeIngredientsOnConfirmation.action.createStockConsumption.status', 'error');
    }

    this.requestUpdate();
  }

  handleCreateStockConsumptionClick(): void {
    void runBlockingUiAction(async () => {
      await this.createStockConsumption();
    });
  }
}

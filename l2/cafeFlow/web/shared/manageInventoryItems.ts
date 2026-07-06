/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageInventoryItems.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowManageInventoryItemsInput, CafeFlowManageInventoryItemsOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.js';

// ─── State key → property mapping ─────────────────────────────────────────────
// ui.manageInventoryItems.status                                   → status
// ui.manageInventoryItems.action.manageInventoryItems.status       → manageInventoryItemsState
// ui.manageInventoryItems.input.manageInventoryItems.name          → manageInventoryItemsName
// ui.manageInventoryItems.input.manageInventoryItems.description   → manageInventoryItemsDescription
// ui.manageInventoryItems.input.manageInventoryItems.unit          → manageInventoryItemsUnit
// ui.manageInventoryItems.input.manageInventoryItems.currentQuantity → manageInventoryItemsCurrentQuantity
// ui.manageInventoryItems.input.manageInventoryItems.minimumLevel  → manageInventoryItemsMinimumLevel
// ui.manageInventoryItems.input.manageInventoryItems.status        → manageInventoryItemsStatus

// ─── i18n ──────────────────────────────────────────────────────────────────────
const message_pt: Record<string, string> = {
  'manageInventoryItems.section.main.title': 'Gerenciar itens de estoque (ingredientes)',
  'manageInventoryItems.organism.form.title': 'Gerenciar itens de estoque',
  'manageInventoryItems.intention.status.title': 'Status da operação',
  'manageInventoryItems.intention.form.title': 'Dados do item de estoque',
  'manageInventoryItems.field.name.label': 'Nome',
  'manageInventoryItems.field.description.label': 'Descrição',
  'manageInventoryItems.field.unit.label': 'Unidade',
  'manageInventoryItems.field.currentQuantity.label': 'Quantidade atual',
  'manageInventoryItems.field.minimumLevel.label': 'Nível mínimo',
  'manageInventoryItems.field.status.label': 'Status',
  'manageInventoryItems.action.submit.label': 'Salvar alterações',
};

const message_en: Record<string, string> = {
  'manageInventoryItems.section.main.title': 'Manage inventory items (ingredients)',
  'manageInventoryItems.organism.form.title': 'Manage inventory items',
  'manageInventoryItems.intention.status.title': 'Operation status',
  'manageInventoryItems.intention.form.title': 'Inventory item data',
  'manageInventoryItems.field.name.label': 'Name',
  'manageInventoryItems.field.description.label': 'Description',
  'manageInventoryItems.field.unit.label': 'Unit',
  'manageInventoryItems.field.currentQuantity.label': 'Current quantity',
  'manageInventoryItems.field.minimumLevel.label': 'Minimum level',
  'manageInventoryItems.field.status.label': 'Status',
  'manageInventoryItems.action.submit.label': 'Save changes',
};

export class CafeFlowManageInventoryItemsBase extends CollabLitElement {
  // ── Reactive state properties ──────────────────────────────────────────────
  @property({ type: String }) status = '';
  @property({ type: String }) manageInventoryItemsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) manageInventoryItemsName = '';
  @property({ type: String }) manageInventoryItemsDescription = '';
  @property({ type: String }) manageInventoryItemsUnit = '';
  @property({ type: String }) manageInventoryItemsCurrentQuantity = '';
  @property({ type: String }) manageInventoryItemsMinimumLevel = '';
  @property({ type: String }) manageInventoryItemsStatus = '';

  // ── i18n ───────────────────────────────────────────────────────────────────
  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { lang?: string }).lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  // ── Lifecycle ──────────────────────────────────────────────────────────────
  connectedCallback(): void {
    super.connectedCallback();
    // Restore shared state if available
    const savedStatus = getState('ui.manageInventoryItems.status');
    if (savedStatus !== undefined) this.status = savedStatus;
    const savedActionStatus = getState('ui.manageInventoryItems.action.manageInventoryItems.status');
    if (savedActionStatus !== undefined) this.manageInventoryItemsState = savedActionStatus as 'idle' | 'loading' | 'success' | 'error';
    const savedName = getState('ui.manageInventoryItems.input.manageInventoryItems.name');
    if (savedName !== undefined) this.manageInventoryItemsName = savedName;
    const savedDescription = getState('ui.manageInventoryItems.input.manageInventoryItems.description');
    if (savedDescription !== undefined) this.manageInventoryItemsDescription = savedDescription;
    const savedUnit = getState('ui.manageInventoryItems.input.manageInventoryItems.unit');
    if (savedUnit !== undefined) this.manageInventoryItemsUnit = savedUnit;
    const savedCurrentQuantity = getState('ui.manageInventoryItems.input.manageInventoryItems.currentQuantity');
    if (savedCurrentQuantity !== undefined) this.manageInventoryItemsCurrentQuantity = savedCurrentQuantity;
    const savedMinimumLevel = getState('ui.manageInventoryItems.input.manageInventoryItems.minimumLevel');
    if (savedMinimumLevel !== undefined) this.manageInventoryItemsMinimumLevel = savedMinimumLevel;
    const savedItemStatus = getState('ui.manageInventoryItems.input.manageInventoryItems.status');
    if (savedItemStatus !== undefined) this.manageInventoryItemsStatus = savedItemStatus;
    // No initial loads defined
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // ── State setters ──────────────────────────────────────────────────────────
  setManageInventoryItemsName(value: string): void {
    this.manageInventoryItemsName = value;
    setState('ui.manageInventoryItems.input.manageInventoryItems.name', value);
    this.requestUpdate();
  }

  handleManageInventoryItemsNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageInventoryItemsName(value);
  }

  setManageInventoryItemsDescription(value: string): void {
    this.manageInventoryItemsDescription = value;
    setState('ui.manageInventoryItems.input.manageInventoryItems.description', value);
    this.requestUpdate();
  }

  handleManageInventoryItemsDescriptionChange(e: Event): void {
    const value = (e.target as HTMLTextAreaElement).value;
    this.setManageInventoryItemsDescription(value);
  }

  setManageInventoryItemsUnit(value: string): void {
    this.manageInventoryItemsUnit = value;
    setState('ui.manageInventoryItems.input.manageInventoryItems.unit', value);
    this.requestUpdate();
  }

  handleManageInventoryItemsUnitChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageInventoryItemsUnit(value);
  }

  setManageInventoryItemsCurrentQuantity(value: string): void {
    this.manageInventoryItemsCurrentQuantity = value;
    setState('ui.manageInventoryItems.input.manageInventoryItems.currentQuantity', value);
    this.requestUpdate();
  }

  handleManageInventoryItemsCurrentQuantityChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageInventoryItemsCurrentQuantity(value);
  }

  setManageInventoryItemsMinimumLevel(value: string): void {
    this.manageInventoryItemsMinimumLevel = value;
    setState('ui.manageInventoryItems.input.manageInventoryItems.minimumLevel', value);
    this.requestUpdate();
  }

  handleManageInventoryItemsMinimumLevelChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageInventoryItemsMinimumLevel(value);
  }

  setManageInventoryItemsStatus(value: string): void {
    this.manageInventoryItemsStatus = value;
    setState('ui.manageInventoryItems.input.manageInventoryItems.status', value);
    this.requestUpdate();
  }

  handleManageInventoryItemsStatusChange(e: Event): void {
    const value = (e.target as HTMLSelectElement).value;
    this.setManageInventoryItemsStatus(value);
  }

  // ── Command action: manageInventoryItems ───────────────────────────────────
  async manageInventoryItems(): Promise<void> {
    this.manageInventoryItemsState = 'loading';
    setState('ui.manageInventoryItems.action.manageInventoryItems.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowManageInventoryItemsInput = {
      name: this.manageInventoryItemsName,
      description: this.manageInventoryItemsDescription || undefined,
      unit: this.manageInventoryItemsUnit,
      currentQuantity: Number(this.manageInventoryItemsCurrentQuantity),
      minimumLevel: Number(this.manageInventoryItemsMinimumLevel),
      status: this.manageInventoryItemsStatus as 'active' | 'inactive',
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowManageInventoryItemsOutput>(
        'cafeFlow.manageInventoryItems.manageInventoryItems',
        params,
        options,
      );

      if (response.ok) {
        this.manageInventoryItemsState = 'success';
        setState('ui.manageInventoryItems.action.manageInventoryItems.status', 'success');
        this.status = 'success';
        setState('ui.manageInventoryItems.status', 'success');
      } else {
        this.manageInventoryItemsState = 'error';
        setState('ui.manageInventoryItems.action.manageInventoryItems.status', 'error');
        this.status = response.error?.message ?? 'error';
        setState('ui.manageInventoryItems.status', this.status);
      }
    } catch (err) {
      this.manageInventoryItemsState = 'error';
      setState('ui.manageInventoryItems.action.manageInventoryItems.status', 'error');
      this.status = err instanceof Error ? err.message : 'error';
      setState('ui.manageInventoryItems.status', this.status);
    }
    this.requestUpdate();
  }

  handleManageInventoryItemsClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async () => {
      await this.manageInventoryItems();
    });
  }
}

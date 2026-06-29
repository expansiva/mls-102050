/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageTables.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowManageTablesInput, CafeFlowManageTablesOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageTables.js';

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

const message_pt: Record<string, string> = {
  'manageTables.section.title': 'Gerenciar mesas',
  'manageTables.organism.title': 'Gerenciar mesas',
  'manageTables.form.title': 'Dados da mesa',
  'manageTables.field.tableId': 'Identificador da mesa',
  'manageTables.field.number': 'Número da mesa',
  'manageTables.field.status': 'Situação',
  'manageTables.action.submit': 'Salvar',
  'manageTables.status.title': 'Status da operação',
};

const message_en: Record<string, string> = {
  'manageTables.section.title': 'Manage tables',
  'manageTables.organism.title': 'Manage tables',
  'manageTables.form.title': 'Table data',
  'manageTables.field.tableId': 'Table identifier',
  'manageTables.field.number': 'Table number',
  'manageTables.field.status': 'Status',
  'manageTables.action.submit': 'Save',
  'manageTables.status.title': 'Operation status',
};

export class CafeFlowManageTablesBase extends CollabLitElement {
  @property() status = '';
  @property() manageTablesState: ActionStatus = 'idle';
  @property() manageTablesTableId = '';
  @property() manageTablesNumber = '';
  @property() manageTablesStatus = '';

  protected get msg(): Record<string, string> {
    const lang = (typeof document !== 'undefined' && document.documentElement?.lang) || 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState('ui.manageTables.status') ?? '';
    this.manageTablesState = getState('ui.manageTables.action.manageTables.status') ?? 'idle';
    this.manageTablesTableId = getState('ui.manageTables.input.manageTables.tableId') ?? '';
    this.manageTablesNumber = getState('ui.manageTables.input.manageTables.number') ?? '';
    this.manageTablesStatus = getState('ui.manageTables.input.manageTables.status') ?? '';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- State setters ---

  setManageTablesTableId(value: string): void {
    this.manageTablesTableId = value;
    setState('ui.manageTables.input.manageTables.tableId', value);
    this.requestUpdate();
  }

  handleManageTablesTableIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageTablesTableId(value);
  }

  setManageTablesNumber(value: string): void {
    this.manageTablesNumber = value;
    setState('ui.manageTables.input.manageTables.number', value);
    this.requestUpdate();
  }

  handleManageTablesNumberChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageTablesNumber(value);
  }

  setManageTablesStatus(value: string): void {
    this.manageTablesStatus = value;
    setState('ui.manageTables.input.manageTables.status', value);
    this.requestUpdate();
  }

  handleManageTablesStatusChange(e: Event): void {
    const value = (e.target as HTMLSelectElement).value;
    this.setManageTablesStatus(value);
  }

  // --- Command action ---

  async manageTables(): Promise<void> {
    this.manageTablesState = 'loading';
    setState('ui.manageTables.action.manageTables.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowManageTablesInput = {
      tableId: this.manageTablesTableId || undefined,
      number: this.manageTablesNumber,
      status: this.manageTablesStatus as 'available' | 'occupied' | 'disabled',
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowManageTablesOutput>(
        'cafeFlow.manageTables.manageTables',
        params,
        options,
      );

      if (response.ok) {
        this.manageTablesState = 'success';
        setState('ui.manageTables.action.manageTables.status', 'success');
      } else {
        this.manageTablesState = 'error';
        setState('ui.manageTables.action.manageTables.status', 'error');
      }
    } catch {
      this.manageTablesState = 'error';
      setState('ui.manageTables.action.manageTables.status', 'error');
    }
    this.requestUpdate();
  }

  handleManageTablesClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async () => {
      await this.manageTables();
    });
  }
}

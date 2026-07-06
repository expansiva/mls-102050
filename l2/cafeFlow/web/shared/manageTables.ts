/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageTables.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type { CafeFlowManageTablesInput, CafeFlowManageTablesOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageTables.js';

/// **collab_i18n_start**
const message_pt = {
  "manageTables.section.title": "Gerenciar mesas",
  "manageTables.organism.title": "Gerenciar mesas",
  "manageTables.form.title": "Dados da mesa",
  "manageTables.field.tableId": "ID da mesa",
  "manageTables.field.number": "Número da mesa",
  "manageTables.field.status": "Situação",
  "manageTables.action.submit": "Salvar mesas",
  "manageTables.status.title": "Status da operação"
};
const message_en = {
  "manageTables.section.title": "Manage tables",
  "manageTables.organism.title": "Manage tables",
  "manageTables.form.title": "Table data",
  "manageTables.field.tableId": "Table ID",
  "manageTables.field.number": "Table number",
  "manageTables.field.status": "Status",
  "manageTables.action.submit": "Save tables",
  "manageTables.status.title": "Operation status"
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowManageTablesBase extends CollabLitElement {
  @property()
  status: string = '';

  @property()
  manageTablesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property()
  manageTablesTableId: string = '';

  @property()
  manageTablesNumber: string = '';

  @property()
  manageTablesStatus: CafeFlowManageTablesInput['status'] | '' = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || messages['en'];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState('ui.manageTables.status') as string) ?? '';
    this.manageTablesState = (getState('ui.manageTables.action.manageTables.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.manageTablesTableId = (getState('ui.manageTables.input.manageTables.tableId') as string) ?? '';
    this.manageTablesNumber = (getState('ui.manageTables.input.manageTables.number') as string) ?? '';
    this.manageTablesStatus = (getState('ui.manageTables.input.manageTables.status') as CafeFlowManageTablesInput['status'] | '') ?? '';
    subscribe(
      [
        'ui.manageTables.status',
        'ui.manageTables.action.manageTables.status',
        'ui.manageTables.input.manageTables.tableId',
        'ui.manageTables.input.manageTables.number',
        'ui.manageTables.input.manageTables.status'
      ],
      this
    );
  }

  disconnectedCallback(): void {
    unsubscribe(
      [
        'ui.manageTables.status',
        'ui.manageTables.action.manageTables.status',
        'ui.manageTables.input.manageTables.tableId',
        'ui.manageTables.input.manageTables.number',
        'ui.manageTables.input.manageTables.status'
      ],
      this
    );
    super.disconnectedCallback();
  }

  stateChanged(stateKey: string, value: unknown): void {
    switch (stateKey) {
      case 'ui.manageTables.status':
        this.status = value as string;
        break;
      case 'ui.manageTables.action.manageTables.status':
        this.manageTablesState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.manageTables.input.manageTables.tableId':
        this.manageTablesTableId = value as string;
        break;
      case 'ui.manageTables.input.manageTables.number':
        this.manageTablesNumber = value as string;
        break;
      case 'ui.manageTables.input.manageTables.status':
        this.manageTablesStatus = value as CafeFlowManageTablesInput['status'] | '';
        break;
      default:
        break;
    }
  }

  setManageTablesTableId(value: string): void {
    this.manageTablesTableId = value;
    setState('ui.manageTables.input.manageTables.tableId', value);
    this.requestUpdate();
  }

  handleManageTablesTableIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.setManageTablesTableId(target?.value ?? '');
  }

  setManageTablesNumber(value: string): void {
    this.manageTablesNumber = value;
    setState('ui.manageTables.input.manageTables.number', value);
    this.requestUpdate();
  }

  handleManageTablesNumberChange(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.setManageTablesNumber(target?.value ?? '');
  }

  setManageTablesStatus(value: CafeFlowManageTablesInput['status'] | ''): void {
    this.manageTablesStatus = value;
    setState('ui.manageTables.input.manageTables.status', value);
    this.requestUpdate();
  }

  handleManageTablesStatusChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    this.setManageTablesStatus((target?.value as CafeFlowManageTablesInput['status'] | undefined) ?? '');
  }

  async manageTables(): Promise<void> {
    setState('ui.manageTables.action.manageTables.status', 'loading');
    const params: CafeFlowManageTablesInput = {
      tableId: this.manageTablesTableId || undefined,
      number: this.manageTablesNumber,
      status: (this.manageTablesStatus || 'available') as CafeFlowManageTablesInput['status']
    };
    const options: BffClientOptions = { mode: 'blocking' };
    try {
      const response = await execBff<CafeFlowManageTablesOutput>('cafeFlow.manageTables.manageTables', params, options);
      if (!response.ok) {
        setState('ui.manageTables.action.manageTables.status', 'error');
        return;
      }
      setState('ui.manageTables.action.manageTables.status', 'success');
    } catch (error) {
      setState('ui.manageTables.action.manageTables.status', 'error');
    }
  }

  async handleManageTablesClick(): Promise<void> {
    await runBlockingUiAction(async () => {
      await this.manageTables();
    });
  }
}

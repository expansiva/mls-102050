/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowViewKitchenTicketsInput,
  CafeFlowViewKitchenTicketsOutput,
  CafeFlowViewKitchenTicketsOutputItem,
  CafeFlowUpdateKitchenTicketStatusInput,
  CafeFlowUpdateKitchenTicketStatusOutput,
  CafeFlowUpdateOrderItemStatusInput,
  CafeFlowUpdateOrderItemStatusOutput,
} from '/_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.js';

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

const message_pt: Record<string, string> = {
  'kitchenProductionFlow.section.main.title': 'Fluxo de produção da cozinha',
  'kitchenProductionFlow.organism.viewKitchenTickets.title': 'Consultar tickets da cozinha',
  'kitchenProductionFlow.intent.viewKitchenTickets.queryList.title': 'Query List',
  'kitchenProductionFlow.field.kitchenTicketId.label': 'Kitchen Ticket Id',
  'kitchenProductionFlow.field.orderId.label': 'Order Id',
  'kitchenProductionFlow.field.status.label': 'Status',
  'kitchenProductionFlow.field.createdAt.label': 'Created At',
  'kitchenProductionFlow.field.updatedAt.label': 'Updated At',
  'kitchenProductionFlow.filter.kitchenTicketId.label': 'Kitchen Ticket Id',
  'kitchenProductionFlow.filter.orderId.label': 'Order Id',
  'kitchenProductionFlow.filter.status.label': 'Status',
  'kitchenProductionFlow.filter.createdAt.label': 'Created At',
  'kitchenProductionFlow.filter.updatedAt.label': 'Updated At',
  'kitchenProductionFlow.action.viewKitchenTickets.label': 'View Kitchen Tickets',
  'kitchenProductionFlow.organism.updateKitchenTicketStatus.title': 'Atualizar status do ticket de cozinha',
  'kitchenProductionFlow.intent.updateKitchenTicketStatus.commandForm.title': 'Command Form',
  'kitchenProductionFlow.field.kitchenTicketStatus.label': 'Status',
  'kitchenProductionFlow.action.updateKitchenTicketStatus.label': 'Update Kitchen Ticket Status',
  'kitchenProductionFlow.organism.updateOrderItemStatus.title': 'Atualizar status de item do pedido',
  'kitchenProductionFlow.intent.updateOrderItemStatus.commandForm.title': 'Command Form',
  'kitchenProductionFlow.field.orderItemStatus.label': 'Status',
  'kitchenProductionFlow.action.updateOrderItemStatus.label': 'Update Order Item Status',
};

const message_en: Record<string, string> = {
  'kitchenProductionFlow.section.main.title': 'Kitchen Production Flow',
  'kitchenProductionFlow.organism.viewKitchenTickets.title': 'Query Kitchen Tickets',
  'kitchenProductionFlow.intent.viewKitchenTickets.queryList.title': 'Query List',
  'kitchenProductionFlow.field.kitchenTicketId.label': 'Kitchen Ticket Id',
  'kitchenProductionFlow.field.orderId.label': 'Order Id',
  'kitchenProductionFlow.field.status.label': 'Status',
  'kitchenProductionFlow.field.createdAt.label': 'Created At',
  'kitchenProductionFlow.field.updatedAt.label': 'Updated At',
  'kitchenProductionFlow.filter.kitchenTicketId.label': 'Kitchen Ticket Id',
  'kitchenProductionFlow.filter.orderId.label': 'Order Id',
  'kitchenProductionFlow.filter.status.label': 'Status',
  'kitchenProductionFlow.filter.createdAt.label': 'Created At',
  'kitchenProductionFlow.filter.updatedAt.label': 'Updated At',
  'kitchenProductionFlow.action.viewKitchenTickets.label': 'View Kitchen Tickets',
  'kitchenProductionFlow.organism.updateKitchenTicketStatus.title': 'Update Kitchen Ticket Status',
  'kitchenProductionFlow.intent.updateKitchenTicketStatus.commandForm.title': 'Command Form',
  'kitchenProductionFlow.field.kitchenTicketStatus.label': 'Status',
  'kitchenProductionFlow.action.updateKitchenTicketStatus.label': 'Update Kitchen Ticket Status',
  'kitchenProductionFlow.organism.updateOrderItemStatus.title': 'Update Order Item Status',
  'kitchenProductionFlow.intent.updateOrderItemStatus.commandForm.title': 'Command Form',
  'kitchenProductionFlow.field.orderItemStatus.label': 'Status',
  'kitchenProductionFlow.action.updateOrderItemStatus.label': 'Update Order Item Status',
};

export class CafeFlowKitchenProductionFlowBase extends CollabLitElement {
  // ── Page status ──────────────────────────────────────────────
  @property({ type: String }) status = '';

  // ── Action statuses ──────────────────────────────────────────
  @property({ type: String }) viewKitchenTicketsState: ActionStatus = 'idle';
  @property({ type: String }) updateKitchenTicketStatusState: ActionStatus = 'idle';
  @property({ type: String }) updateOrderItemStatusState: ActionStatus = 'idle';

  // ── viewKitchenTickets inputs ────────────────────────────────
  @property({ type: String }) viewKitchenTicketsKitchenTicketId = '';
  @property({ type: String }) viewKitchenTicketsOrderId = '';
  @property({ type: String }) viewKitchenTicketsStatus = '';
  @property({ type: String }) viewKitchenTicketsCreatedAt = '';
  @property({ type: String }) viewKitchenTicketsUpdatedAt = '';

  // ── viewKitchenTickets data ──────────────────────────────────
  @property({ type: Array }) viewKitchenTicketsData: CafeFlowViewKitchenTicketsOutput = [];

  // ── updateKitchenTicketStatus input ──────────────────────────
  @property({ type: String }) updateKitchenTicketStatusStatus = '';

  // ── updateOrderItemStatus input ──────────────────────────────
  @property({ type: String }) updateOrderItemStatusStatus = '';

  // ── i18n ─────────────────────────────────────────────────────
  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { lang?: string }).lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  // ═══════════════════════════════════════════════════════════════
  //  Query / Command methods
  // ═══════════════════════════════════════════════════════════════

  async loadViewKitchenTickets(): Promise<void> {
    this.viewKitchenTicketsState = 'loading';
    setState('ui.kitchenProductionFlow.action.viewKitchenTickets.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowViewKitchenTicketsInput = {
      kitchenTicketId: this.viewKitchenTicketsKitchenTicketId || undefined,
      orderId: this.viewKitchenTicketsOrderId || undefined,
      status: (this.viewKitchenTicketsStatus as CafeFlowViewKitchenTicketsInput['status']) || undefined,
      createdAt: this.viewKitchenTicketsCreatedAt || undefined,
      updatedAt: this.viewKitchenTicketsUpdatedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };

    try {
      const response = await execBff<CafeFlowViewKitchenTicketsOutput>(
        'cafeFlow.kitchenProductionFlow.viewKitchenTickets',
        params,
        options,
      );

      if (response.ok) {
        this.viewKitchenTicketsData = response.data ?? [];
        setState('ui.kitchenProductionFlow.data.viewKitchenTickets', this.viewKitchenTicketsData);
        this.viewKitchenTicketsState = 'success';
        setState('ui.kitchenProductionFlow.action.viewKitchenTickets.status', 'success');
      } else {
        this.viewKitchenTicketsState = 'error';
        setState('ui.kitchenProductionFlow.action.viewKitchenTickets.status', 'error');
      }
    } catch {
      this.viewKitchenTicketsState = 'error';
      setState('ui.kitchenProductionFlow.action.viewKitchenTickets.status', 'error');
    }
    this.requestUpdate();
  }

  async updateKitchenTicketStatus(): Promise<void> {
    this.updateKitchenTicketStatusState = 'loading';
    setState('ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowUpdateKitchenTicketStatusInput = {
      status: this.updateKitchenTicketStatusStatus as CafeFlowUpdateKitchenTicketStatusInput['status'],
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowUpdateKitchenTicketStatusOutput>(
        'cafeFlow.kitchenProductionFlow.updateKitchenTicketStatus',
        params,
        options,
      );

      if (response.ok) {
        this.updateKitchenTicketStatusState = 'success';
        setState('ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status', 'success');
      } else {
        this.updateKitchenTicketStatusState = 'error';
        setState('ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status', 'error');
      }
    } catch {
      this.updateKitchenTicketStatusState = 'error';
      setState('ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status', 'error');
    }
    this.requestUpdate();
  }

  async updateOrderItemStatus(): Promise<void> {
    this.updateOrderItemStatusState = 'loading';
    setState('ui.kitchenProductionFlow.action.updateOrderItemStatus.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowUpdateOrderItemStatusInput = {
      status: this.updateOrderItemStatusStatus as CafeFlowUpdateOrderItemStatusInput['status'],
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowUpdateOrderItemStatusOutput>(
        'cafeFlow.kitchenProductionFlow.updateOrderItemStatus',
        params,
        options,
      );

      if (response.ok) {
        this.updateOrderItemStatusState = 'success';
        setState('ui.kitchenProductionFlow.action.updateOrderItemStatus.status', 'success');
      } else {
        this.updateOrderItemStatusState = 'error';
        setState('ui.kitchenProductionFlow.action.updateOrderItemStatus.status', 'error');
      }
    } catch {
      this.updateOrderItemStatusState = 'error';
      setState('ui.kitchenProductionFlow.action.updateOrderItemStatus.status', 'error');
    }
    this.requestUpdate();
  }

  // ═══════════════════════════════════════════════════════════════
  //  Event handlers for query / command actions
  // ═══════════════════════════════════════════════════════════════

  handleViewKitchenTicketsClick(): void {
    void this.loadViewKitchenTickets();
  }

  handleUpdateKitchenTicketStatusClick(): void {
    void runBlockingUiAction(() => this.updateKitchenTicketStatus());
  }

  handleUpdateOrderItemStatusClick(): void {
    void runBlockingUiAction(() => this.updateOrderItemStatus());
  }

  // ═══════════════════════════════════════════════════════════════
  //  State setter methods
  // ═══════════════════════════════════════════════════════════════

  setViewKitchenTicketsKitchenTicketId(value: string): void {
    this.viewKitchenTicketsKitchenTicketId = value;
    setState('ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId', value);
    this.requestUpdate();
  }

  setViewKitchenTicketsOrderId(value: string): void {
    this.viewKitchenTicketsOrderId = value;
    setState('ui.kitchenProductionFlow.input.viewKitchenTickets.orderId', value);
    this.requestUpdate();
  }

  setViewKitchenTicketsStatus(value: string): void {
    this.viewKitchenTicketsStatus = value;
    setState('ui.kitchenProductionFlow.input.viewKitchenTickets.status', value);
    this.requestUpdate();
  }

  setViewKitchenTicketsCreatedAt(value: string): void {
    this.viewKitchenTicketsCreatedAt = value;
    setState('ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt', value);
    this.requestUpdate();
  }

  setViewKitchenTicketsUpdatedAt(value: string): void {
    this.viewKitchenTicketsUpdatedAt = value;
    setState('ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt', value);
    this.requestUpdate();
  }

  setUpdateKitchenTicketStatusStatus(value: string): void {
    this.updateKitchenTicketStatusStatus = value;
    setState('ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status', value);
    this.requestUpdate();
  }

  setUpdateOrderItemStatusStatus(value: string): void {
    this.updateOrderItemStatusStatus = value;
    setState('ui.kitchenProductionFlow.input.updateOrderItemStatus.status', value);
    this.requestUpdate();
  }

  // ═══════════════════════════════════════════════════════════════
  //  State setter event handlers
  // ═══════════════════════════════════════════════════════════════

  handleViewKitchenTicketsKitchenTicketIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewKitchenTicketsKitchenTicketId(target.value);
  }

  handleViewKitchenTicketsOrderIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewKitchenTicketsOrderId(target.value);
  }

  handleViewKitchenTicketsStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setViewKitchenTicketsStatus(target.value);
  }

  handleViewKitchenTicketsCreatedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewKitchenTicketsCreatedAt(target.value);
  }

  handleViewKitchenTicketsUpdatedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewKitchenTicketsUpdatedAt(target.value);
  }

  handleUpdateKitchenTicketStatusStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setUpdateKitchenTicketStatusStatus(target.value);
  }

  handleUpdateOrderItemStatusStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setUpdateOrderItemStatusStatus(target.value);
  }

  // ═══════════════════════════════════════════════════════════════
  //  Lifecycle
  // ═══════════════════════════════════════════════════════════════

  connectedCallback(): void {
    super.connectedCallback();

    // Restore shared state where useful, falling back to defaults
    const savedStatus = getState('ui.kitchenProductionFlow.status');
    if (savedStatus !== undefined) {
      this.status = savedStatus;
    }

    const savedData = getState(
      'ui.kitchenProductionFlow.data.viewKitchenTickets',
    );
    if (savedData !== undefined) {
      this.viewKitchenTicketsData = savedData;
    }

    // Run initial loads
    void this.loadViewKitchenTickets();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}

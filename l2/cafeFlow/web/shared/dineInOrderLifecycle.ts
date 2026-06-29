/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowCreateOrderInput,
  CafeFlowCreateOrderOutput,
  CafeFlowAddOrderItemInput,
  CafeFlowAddOrderItemOutput,
  CafeFlowCreateKitchenTicketInput,
  CafeFlowCreateKitchenTicketOutput,
  CafeFlowUpdateOrderStatusInput,
  CafeFlowUpdateOrderStatusOutput,
  CafeFlowUpdateTableStatusInput,
  CafeFlowUpdateTableStatusOutput,
} from '/_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.js';

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

const message_pt: Record<string, string> = {
  'section.dineInOrderLifecycle.title': 'Ciclo de pedido (mesa)',
  'organism.createOrder.title': 'Criar pedido',
  'intent.createOrder.form.title': 'Novo pedido',
  'field.createOrder.orderType': 'Tipo do pedido',
  'field.createOrder.status': 'Status do pedido',
  'field.createOrder.totalAmount': 'Valor total',
  'field.createOrder.notes': 'Observações',
  'field.createOrder.customerName': 'Nome do cliente',
  'field.createOrder.customerPhone': 'Telefone do cliente',
  'field.createOrder.numberOfGuests': 'Número de pessoas',
  'field.createOrder.closedAt': 'Fechado em',
  'field.createOrder.cancelledAt': 'Cancelado em',
  'field.createOrder.cancellationReason': 'Motivo do cancelamento',
  'action.createOrder.submit': 'Criar pedido',
  'organism.addOrderItem.title': 'Adicionar item ao pedido',
  'intent.addOrderItem.form.title': 'Adicionar item',
  'field.addOrderItem.quantity': 'Quantidade',
  'field.addOrderItem.unitPrice': 'Preço unitário',
  'field.addOrderItem.totalPrice': 'Preço total',
  'field.addOrderItem.observations': 'Observações do item',
  'field.addOrderItem.status': 'Status do item',
  'action.addOrderItem.submit': 'Adicionar item',
  'organism.createKitchenTicket.title': 'Criar ticket de cozinha',
  'intent.createKitchenTicket.form.title': 'Enviar para cozinha',
  'field.createKitchenTicket.status': 'Status do ticket',
  'action.createKitchenTicket.submit': 'Criar ticket',
  'organism.updateOrderStatus.title': 'Atualizar status do pedido',
  'intent.updateOrderStatus.form.title': 'Atualizar status do pedido',
  'field.updateOrderStatus.status': 'Novo status do pedido',
  'field.updateOrderStatus.closedAt': 'Fechado em',
  'field.updateOrderStatus.cancelledAt': 'Cancelado em',
  'field.updateOrderStatus.cancellationReason': 'Motivo do cancelamento',
  'action.updateOrderStatus.submit': 'Atualizar status',
  'organism.updateTableStatus.title': 'Atualizar ocupação da mesa',
  'intent.updateTableStatus.form.title': 'Atualizar status da mesa',
  'field.updateTableStatus.status': 'Status da mesa',
  'action.updateTableStatus.submit': 'Atualizar mesa',
};

const message_en: Record<string, string> = {
  'section.dineInOrderLifecycle.title': 'Dine-in order lifecycle',
  'organism.createOrder.title': 'Create order',
  'intent.createOrder.form.title': 'New order',
  'field.createOrder.orderType': 'Order type',
  'field.createOrder.status': 'Order status',
  'field.createOrder.totalAmount': 'Total amount',
  'field.createOrder.notes': 'Notes',
  'field.createOrder.customerName': 'Customer name',
  'field.createOrder.customerPhone': 'Customer phone',
  'field.createOrder.numberOfGuests': 'Number of guests',
  'field.createOrder.closedAt': 'Closed at',
  'field.createOrder.cancelledAt': 'Cancelled at',
  'field.createOrder.cancellationReason': 'Cancellation reason',
  'action.createOrder.submit': 'Create order',
  'organism.addOrderItem.title': 'Add order item',
  'intent.addOrderItem.form.title': 'Add item',
  'field.addOrderItem.quantity': 'Quantity',
  'field.addOrderItem.unitPrice': 'Unit price',
  'field.addOrderItem.totalPrice': 'Total price',
  'field.addOrderItem.observations': 'Item observations',
  'field.addOrderItem.status': 'Item status',
  'action.addOrderItem.submit': 'Add item',
  'organism.createKitchenTicket.title': 'Create kitchen ticket',
  'intent.createKitchenTicket.form.title': 'Send to kitchen',
  'field.createKitchenTicket.status': 'Ticket status',
  'action.createKitchenTicket.submit': 'Create ticket',
  'organism.updateOrderStatus.title': 'Update order status',
  'intent.updateOrderStatus.form.title': 'Update order status',
  'field.updateOrderStatus.status': 'New order status',
  'field.updateOrderStatus.closedAt': 'Closed at',
  'field.updateOrderStatus.cancelledAt': 'Cancelled at',
  'field.updateOrderStatus.cancellationReason': 'Cancellation reason',
  'action.updateOrderStatus.submit': 'Update status',
  'organism.updateTableStatus.title': 'Update table status',
  'intent.updateTableStatus.form.title': 'Update table status',
  'field.updateTableStatus.status': 'Table status',
  'action.updateTableStatus.submit': 'Update table',
};

export class CafeFlowDineInOrderLifecycleBase extends CollabLitElement {
  // ── Page status ──────────────────────────────────────────────
  @property({ type: String }) status = '';

  // ── createOrder action + inputs ──────────────────────────────
  @property({ type: String }) createOrderState: ActionStatus = 'idle';
  @property({ type: String }) createOrderOrderType = '';
  @property({ type: String }) createOrderStatus = '';
  @property({ type: String }) createOrderTotalAmount = '';
  @property({ type: String }) createOrderNotes = '';
  @property({ type: String }) createOrderCustomerName = '';
  @property({ type: String }) createOrderCustomerPhone = '';
  @property({ type: String }) createOrderNumberOfGuests = '';
  @property({ type: String }) createOrderClosedAt = '';
  @property({ type: String }) createOrderCancelledAt = '';
  @property({ type: String }) createOrderCancellationReason = '';

  // ── addOrderItem action + inputs ─────────────────────────────
  @property({ type: String }) addOrderItemState: ActionStatus = 'idle';
  @property({ type: String }) addOrderItemQuantity = '';
  @property({ type: String }) addOrderItemUnitPrice = '';
  @property({ type: String }) addOrderItemTotalPrice = '';
  @property({ type: String }) addOrderItemObservations = '';
  @property({ type: String }) addOrderItemStatus = '';

  // ── createKitchenTicket action + inputs ──────────────────────
  @property({ type: String }) createKitchenTicketState: ActionStatus = 'idle';
  @property({ type: String }) createKitchenTicketStatus = '';

  // ── updateOrderStatus action + inputs ────────────────────────
  @property({ type: String }) updateOrderStatusState: ActionStatus = 'idle';
  @property({ type: String }) updateOrderStatusStatus = '';
  @property({ type: String }) updateOrderStatusClosedAt = '';
  @property({ type: String }) updateOrderStatusCancelledAt = '';
  @property({ type: String }) updateOrderStatusCancellationReason = '';

  // ── updateTableStatus action + inputs ────────────────────────
  @property({ type: String }) updateTableStatusState: ActionStatus = 'idle';
  @property({ type: String }) updateTableStatusStatus = '';

  // ── i18n ─────────────────────────────────────────────────────
  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { lang?: string }).lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  // ═══════════════════════════════════════════════════════════════
  //  State setters – createOrder
  // ═══════════════════════════════════════════════════════════════

  setCreateOrderOrderType(value: string): void {
    this.createOrderOrderType = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.orderType', value);
    this.requestUpdate();
  }

  handleCreateOrderOrderTypeChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCreateOrderOrderType(target.value);
  }

  setCreateOrderStatus(value: string): void {
    this.createOrderStatus = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.status', value);
    this.requestUpdate();
  }

  handleCreateOrderStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCreateOrderStatus(target.value);
  }

  setCreateOrderTotalAmount(value: string): void {
    this.createOrderTotalAmount = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.totalAmount', value);
    this.requestUpdate();
  }

  handleCreateOrderTotalAmountChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOrderTotalAmount(target.value);
  }

  setCreateOrderNotes(value: string): void {
    this.createOrderNotes = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.notes', value);
    this.requestUpdate();
  }

  handleCreateOrderNotesChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOrderNotes(target.value);
  }

  setCreateOrderCustomerName(value: string): void {
    this.createOrderCustomerName = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.customerName', value);
    this.requestUpdate();
  }

  handleCreateOrderCustomerNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOrderCustomerName(target.value);
  }

  setCreateOrderCustomerPhone(value: string): void {
    this.createOrderCustomerPhone = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.customerPhone', value);
    this.requestUpdate();
  }

  handleCreateOrderCustomerPhoneChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOrderCustomerPhone(target.value);
  }

  setCreateOrderNumberOfGuests(value: string): void {
    this.createOrderNumberOfGuests = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.numberOfGuests', value);
    this.requestUpdate();
  }

  handleCreateOrderNumberOfGuestsChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOrderNumberOfGuests(target.value);
  }

  setCreateOrderClosedAt(value: string): void {
    this.createOrderClosedAt = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.closedAt', value);
    this.requestUpdate();
  }

  handleCreateOrderClosedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOrderClosedAt(target.value);
  }

  setCreateOrderCancelledAt(value: string): void {
    this.createOrderCancelledAt = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.cancelledAt', value);
    this.requestUpdate();
  }

  handleCreateOrderCancelledAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOrderCancelledAt(target.value);
  }

  setCreateOrderCancellationReason(value: string): void {
    this.createOrderCancellationReason = value;
    setState('ui.dineInOrderLifecycle.input.createOrder.cancellationReason', value);
    this.requestUpdate();
  }

  handleCreateOrderCancellationReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOrderCancellationReason(target.value);
  }

  // ═══════════════════════════════════════════════════════════════
  //  State setters – addOrderItem
  // ═══════════════════════════════════════════════════════════════

  setAddOrderItemQuantity(value: string): void {
    this.addOrderItemQuantity = value;
    setState('ui.dineInOrderLifecycle.input.addOrderItem.quantity', value);
    this.requestUpdate();
  }

  handleAddOrderItemQuantityChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAddOrderItemQuantity(target.value);
  }

  setAddOrderItemUnitPrice(value: string): void {
    this.addOrderItemUnitPrice = value;
    setState('ui.dineInOrderLifecycle.input.addOrderItem.unitPrice', value);
    this.requestUpdate();
  }

  handleAddOrderItemUnitPriceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAddOrderItemUnitPrice(target.value);
  }

  setAddOrderItemTotalPrice(value: string): void {
    this.addOrderItemTotalPrice = value;
    setState('ui.dineInOrderLifecycle.input.addOrderItem.totalPrice', value);
    this.requestUpdate();
  }

  handleAddOrderItemTotalPriceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAddOrderItemTotalPrice(target.value);
  }

  setAddOrderItemObservations(value: string): void {
    this.addOrderItemObservations = value;
    setState('ui.dineInOrderLifecycle.input.addOrderItem.observations', value);
    this.requestUpdate();
  }

  handleAddOrderItemObservationsChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAddOrderItemObservations(target.value);
  }

  setAddOrderItemStatus(value: string): void {
    this.addOrderItemStatus = value;
    setState('ui.dineInOrderLifecycle.input.addOrderItem.status', value);
    this.requestUpdate();
  }

  handleAddOrderItemStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setAddOrderItemStatus(target.value);
  }

  // ═══════════════════════════════════════════════════════════════
  //  State setters – createKitchenTicket
  // ═══════════════════════════════════════════════════════════════

  setCreateKitchenTicketStatus(value: string): void {
    this.createKitchenTicketStatus = value;
    setState('ui.dineInOrderLifecycle.input.createKitchenTicket.status', value);
    this.requestUpdate();
  }

  handleCreateKitchenTicketStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCreateKitchenTicketStatus(target.value);
  }

  // ═══════════════════════════════════════════════════════════════
  //  State setters – updateOrderStatus
  // ═══════════════════════════════════════════════════════════════

  setUpdateOrderStatusStatus(value: string): void {
    this.updateOrderStatusStatus = value;
    setState('ui.dineInOrderLifecycle.input.updateOrderStatus.status', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setUpdateOrderStatusStatus(target.value);
  }

  setUpdateOrderStatusClosedAt(value: string): void {
    this.updateOrderStatusClosedAt = value;
    setState('ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusClosedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOrderStatusClosedAt(target.value);
  }

  setUpdateOrderStatusCancelledAt(value: string): void {
    this.updateOrderStatusCancelledAt = value;
    setState('ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusCancelledAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOrderStatusCancelledAt(target.value);
  }

  setUpdateOrderStatusCancellationReason(value: string): void {
    this.updateOrderStatusCancellationReason = value;
    setState('ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusCancellationReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOrderStatusCancellationReason(target.value);
  }

  // ═══════════════════════════════════════════════════════════════
  //  State setters – updateTableStatus
  // ═══════════════════════════════════════════════════════════════

  setUpdateTableStatusStatus(value: string): void {
    this.updateTableStatusStatus = value;
    setState('ui.dineInOrderLifecycle.input.updateTableStatus.status', value);
    this.requestUpdate();
  }

  handleUpdateTableStatusStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setUpdateTableStatusStatus(target.value);
  }

  // ═══════════════════════════════════════════════════════════════
  //  Command actions
  // ═══════════════════════════════════════════════════════════════

  async createOrder(options?: BffClientOptions): Promise<void> {
    this.createOrderState = 'loading';
    setState('ui.dineInOrderLifecycle.action.createOrder.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowCreateOrderInput = {
      orderType: this.createOrderOrderType as CafeFlowCreateOrderInput['orderType'],
      status: this.createOrderStatus as CafeFlowCreateOrderInput['status'],
      totalAmount: Number(this.createOrderTotalAmount) || 0,
      notes: this.createOrderNotes || undefined,
      customerName: this.createOrderCustomerName || undefined,
      customerPhone: this.createOrderCustomerPhone || undefined,
      numberOfGuests: this.createOrderNumberOfGuests ? Number(this.createOrderNumberOfGuests) : undefined,
      closedAt: this.createOrderClosedAt || undefined,
      cancelledAt: this.createOrderCancelledAt || undefined,
      cancellationReason: this.createOrderCancellationReason || undefined,
    };

    const response = await execBff<CafeFlowCreateOrderOutput>(
      'cafeFlow.dineInOrderLifecycle.createOrder',
      params,
      options ?? {},
    );

    if (response.ok) {
      this.createOrderState = 'success';
      setState('ui.dineInOrderLifecycle.action.createOrder.status', 'success');
    } else {
      this.createOrderState = 'error';
      setState('ui.dineInOrderLifecycle.action.createOrder.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateOrderClick(e: Event): void {
    e.preventDefault();
    void runBlockingUiAction(() => this.createOrder());
  }

  async addOrderItem(options?: BffClientOptions): Promise<void> {
    this.addOrderItemState = 'loading';
    setState('ui.dineInOrderLifecycle.action.addOrderItem.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowAddOrderItemInput = {
      quantity: Number(this.addOrderItemQuantity) || 0,
      unitPrice: Number(this.addOrderItemUnitPrice) || 0,
      totalPrice: Number(this.addOrderItemTotalPrice) || 0,
      observations: this.addOrderItemObservations || undefined,
      status: this.addOrderItemStatus as CafeFlowAddOrderItemInput['status'],
    };

    const response = await execBff<CafeFlowAddOrderItemOutput>(
      'cafeFlow.dineInOrderLifecycle.addOrderItem',
      params,
      options ?? {},
    );

    if (response.ok) {
      this.addOrderItemState = 'success';
      setState('ui.dineInOrderLifecycle.action.addOrderItem.status', 'success');
    } else {
      this.addOrderItemState = 'error';
      setState('ui.dineInOrderLifecycle.action.addOrderItem.status', 'error');
    }
    this.requestUpdate();
  }

  handleAddOrderItemClick(e: Event): void {
    e.preventDefault();
    void runBlockingUiAction(() => this.addOrderItem());
  }

  async createKitchenTicket(options?: BffClientOptions): Promise<void> {
    this.createKitchenTicketState = 'loading';
    setState('ui.dineInOrderLifecycle.action.createKitchenTicket.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowCreateKitchenTicketInput = {
      status: this.createKitchenTicketStatus as CafeFlowCreateKitchenTicketInput['status'],
    };

    const response = await execBff<CafeFlowCreateKitchenTicketOutput>(
      'cafeFlow.dineInOrderLifecycle.createKitchenTicket',
      params,
      options ?? {},
    );

    if (response.ok) {
      this.createKitchenTicketState = 'success';
      setState('ui.dineInOrderLifecycle.action.createKitchenTicket.status', 'success');
    } else {
      this.createKitchenTicketState = 'error';
      setState('ui.dineInOrderLifecycle.action.createKitchenTicket.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateKitchenTicketClick(e: Event): void {
    e.preventDefault();
    void runBlockingUiAction(() => this.createKitchenTicket());
  }

  async updateOrderStatus(options?: BffClientOptions): Promise<void> {
    this.updateOrderStatusState = 'loading';
    setState('ui.dineInOrderLifecycle.action.updateOrderStatus.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowUpdateOrderStatusInput = {
      status: this.updateOrderStatusStatus as CafeFlowUpdateOrderStatusInput['status'],
      closedAt: this.updateOrderStatusClosedAt || undefined,
      cancelledAt: this.updateOrderStatusCancelledAt || undefined,
      cancellationReason: this.updateOrderStatusCancellationReason || undefined,
    };

    const response = await execBff<CafeFlowUpdateOrderStatusOutput>(
      'cafeFlow.dineInOrderLifecycle.updateOrderStatus',
      params,
      options ?? {},
    );

    if (response.ok) {
      this.updateOrderStatusState = 'success';
      setState('ui.dineInOrderLifecycle.action.updateOrderStatus.status', 'success');
    } else {
      this.updateOrderStatusState = 'error';
      setState('ui.dineInOrderLifecycle.action.updateOrderStatus.status', 'error');
    }
    this.requestUpdate();
  }

  handleUpdateOrderStatusClick(e: Event): void {
    e.preventDefault();
    void runBlockingUiAction(() => this.updateOrderStatus());
  }

  async updateTableStatus(options?: BffClientOptions): Promise<void> {
    this.updateTableStatusState = 'loading';
    setState('ui.dineInOrderLifecycle.action.updateTableStatus.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowUpdateTableStatusInput = {
      status: this.updateTableStatusStatus as CafeFlowUpdateTableStatusInput['status'],
    };

    const response = await execBff<CafeFlowUpdateTableStatusOutput>(
      'cafeFlow.dineInOrderLifecycle.updateTableStatus',
      params,
      options ?? {},
    );

    if (response.ok) {
      this.updateTableStatusState = 'success';
      setState('ui.dineInOrderLifecycle.action.updateTableStatus.status', 'success');
    } else {
      this.updateTableStatusState = 'error';
      setState('ui.dineInOrderLifecycle.action.updateTableStatus.status', 'error');
    }
    this.requestUpdate();
  }

  handleUpdateTableStatusClick(e: Event): void {
    e.preventDefault();
    void runBlockingUiAction(() => this.updateTableStatus());
  }

  // ═══════════════════════════════════════════════════════════════
  //  Lifecycle
  // ═══════════════════════════════════════════════════════════════

  override connectedCallback(): void {
    super.connectedCallback();

    // Restore shared state if available, falling back to defaults
    this.status = (getState('ui.dineInOrderLifecycle.status') as string) ?? '';
    this.createOrderState = (getState('ui.dineInOrderLifecycle.action.createOrder.status') as ActionStatus) ?? 'idle';
    this.createOrderOrderType = (getState('ui.dineInOrderLifecycle.input.createOrder.orderType') as string) ?? '';
    this.createOrderStatus = (getState('ui.dineInOrderLifecycle.input.createOrder.status') as string) ?? '';
    this.createOrderTotalAmount = (getState('ui.dineInOrderLifecycle.input.createOrder.totalAmount') as string) ?? '';
    this.createOrderNotes = (getState('ui.dineInOrderLifecycle.input.createOrder.notes') as string) ?? '';
    this.createOrderCustomerName = (getState('ui.dineInOrderLifecycle.input.createOrder.customerName') as string) ?? '';
    this.createOrderCustomerPhone = (getState('ui.dineInOrderLifecycle.input.createOrder.customerPhone') as string) ?? '';
    this.createOrderNumberOfGuests = (getState('ui.dineInOrderLifecycle.input.createOrder.numberOfGuests') as string) ?? '';
    this.createOrderClosedAt = (getState('ui.dineInOrderLifecycle.input.createOrder.closedAt') as string) ?? '';
    this.createOrderCancelledAt = (getState('ui.dineInOrderLifecycle.input.createOrder.cancelledAt') as string) ?? '';
    this.createOrderCancellationReason = (getState('ui.dineInOrderLifecycle.input.createOrder.cancellationReason') as string) ?? '';
    this.addOrderItemState = (getState('ui.dineInOrderLifecycle.action.addOrderItem.status') as ActionStatus) ?? 'idle';
    this.addOrderItemQuantity = (getState('ui.dineInOrderLifecycle.input.addOrderItem.quantity') as string) ?? '';
    this.addOrderItemUnitPrice = (getState('ui.dineInOrderLifecycle.input.addOrderItem.unitPrice') as string) ?? '';
    this.addOrderItemTotalPrice = (getState('ui.dineInOrderLifecycle.input.addOrderItem.totalPrice') as string) ?? '';
    this.addOrderItemObservations = (getState('ui.dineInOrderLifecycle.input.addOrderItem.observations') as string) ?? '';
    this.addOrderItemStatus = (getState('ui.dineInOrderLifecycle.input.addOrderItem.status') as string) ?? '';
    this.createKitchenTicketState = (getState('ui.dineInOrderLifecycle.action.createKitchenTicket.status') as ActionStatus) ?? 'idle';
    this.createKitchenTicketStatus = (getState('ui.dineInOrderLifecycle.input.createKitchenTicket.status') as string) ?? '';
    this.updateOrderStatusState = (getState('ui.dineInOrderLifecycle.action.updateOrderStatus.status') as ActionStatus) ?? 'idle';
    this.updateOrderStatusStatus = (getState('ui.dineInOrderLifecycle.input.updateOrderStatus.status') as string) ?? '';
    this.updateOrderStatusClosedAt = (getState('ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt') as string) ?? '';
    this.updateOrderStatusCancelledAt = (getState('ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt') as string) ?? '';
    this.updateOrderStatusCancellationReason = (getState('ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason') as string) ?? '';
    this.updateTableStatusState = (getState('ui.dineInOrderLifecycle.action.updateTableStatus.status') as ActionStatus) ?? 'idle';
    this.updateTableStatusStatus = (getState('ui.dineInOrderLifecycle.input.updateTableStatus.status') as string) ?? '';

    // No initial loads defined for this page
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}

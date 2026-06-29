/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.ts" enhancement="_blank"/>

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
} from '/_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.js';

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

const message_pt: Record<string, string> = {
  'takeoutOrderLifecycle.section.main.title': 'Ciclo de pedido (takeout)',
  'takeoutOrderLifecycle.createOrder.title': 'Criar pedido',
  'takeoutOrderLifecycle.createOrder.form.title': 'Command Form',
  'takeoutOrderLifecycle.createOrder.orderType.label': 'Order Type',
  'takeoutOrderLifecycle.createOrder.status.label': 'Status',
  'takeoutOrderLifecycle.createOrder.totalAmount.label': 'Total Amount',
  'takeoutOrderLifecycle.createOrder.notes.label': 'Notes',
  'takeoutOrderLifecycle.createOrder.customerName.label': 'Customer Name',
  'takeoutOrderLifecycle.createOrder.customerPhone.label': 'Customer Phone',
  'takeoutOrderLifecycle.createOrder.numberOfGuests.label': 'Number Of Guests',
  'takeoutOrderLifecycle.createOrder.closedAt.label': 'Closed At',
  'takeoutOrderLifecycle.createOrder.cancelledAt.label': 'Cancelled At',
  'takeoutOrderLifecycle.createOrder.cancellationReason.label': 'Cancellation Reason',
  'takeoutOrderLifecycle.createOrder.submit': 'Create Order',
  'takeoutOrderLifecycle.addOrderItem.title': 'Adicionar item ao pedido',
  'takeoutOrderLifecycle.addOrderItem.form.title': 'Command Form',
  'takeoutOrderLifecycle.addOrderItem.quantity.label': 'Quantity',
  'takeoutOrderLifecycle.addOrderItem.unitPrice.label': 'Unit Price',
  'takeoutOrderLifecycle.addOrderItem.totalPrice.label': 'Total Price',
  'takeoutOrderLifecycle.addOrderItem.observations.label': 'Observations',
  'takeoutOrderLifecycle.addOrderItem.status.label': 'Status',
  'takeoutOrderLifecycle.addOrderItem.submit': 'Add Order Item',
  'takeoutOrderLifecycle.createKitchenTicket.title': 'Criar ticket de cozinha',
  'takeoutOrderLifecycle.createKitchenTicket.form.title': 'Command Form',
  'takeoutOrderLifecycle.createKitchenTicket.status.label': 'Status',
  'takeoutOrderLifecycle.createKitchenTicket.submit': 'Create Kitchen Ticket',
  'takeoutOrderLifecycle.updateOrderStatus.title': 'Atualizar status do pedido',
  'takeoutOrderLifecycle.updateOrderStatus.form.title': 'Command Form',
  'takeoutOrderLifecycle.updateOrderStatus.status.label': 'Status',
  'takeoutOrderLifecycle.updateOrderStatus.closedAt.label': 'Closed At',
  'takeoutOrderLifecycle.updateOrderStatus.cancelledAt.label': 'Cancelled At',
  'takeoutOrderLifecycle.updateOrderStatus.cancellationReason.label': 'Cancellation Reason',
  'takeoutOrderLifecycle.updateOrderStatus.submit': 'Update Order Status',
};

const message_en: Record<string, string> = {
  'takeoutOrderLifecycle.section.main.title': 'Takeout Order Lifecycle',
  'takeoutOrderLifecycle.createOrder.title': 'Create Order',
  'takeoutOrderLifecycle.createOrder.form.title': 'Command Form',
  'takeoutOrderLifecycle.createOrder.orderType.label': 'Order Type',
  'takeoutOrderLifecycle.createOrder.status.label': 'Status',
  'takeoutOrderLifecycle.createOrder.totalAmount.label': 'Total Amount',
  'takeoutOrderLifecycle.createOrder.notes.label': 'Notes',
  'takeoutOrderLifecycle.createOrder.customerName.label': 'Customer Name',
  'takeoutOrderLifecycle.createOrder.customerPhone.label': 'Customer Phone',
  'takeoutOrderLifecycle.createOrder.numberOfGuests.label': 'Number Of Guests',
  'takeoutOrderLifecycle.createOrder.closedAt.label': 'Closed At',
  'takeoutOrderLifecycle.createOrder.cancelledAt.label': 'Cancelled At',
  'takeoutOrderLifecycle.createOrder.cancellationReason.label': 'Cancellation Reason',
  'takeoutOrderLifecycle.createOrder.submit': 'Create Order',
  'takeoutOrderLifecycle.addOrderItem.title': 'Add Order Item',
  'takeoutOrderLifecycle.addOrderItem.form.title': 'Command Form',
  'takeoutOrderLifecycle.addOrderItem.quantity.label': 'Quantity',
  'takeoutOrderLifecycle.addOrderItem.unitPrice.label': 'Unit Price',
  'takeoutOrderLifecycle.addOrderItem.totalPrice.label': 'Total Price',
  'takeoutOrderLifecycle.addOrderItem.observations.label': 'Observations',
  'takeoutOrderLifecycle.addOrderItem.status.label': 'Status',
  'takeoutOrderLifecycle.addOrderItem.submit': 'Add Order Item',
  'takeoutOrderLifecycle.createKitchenTicket.title': 'Create Kitchen Ticket',
  'takeoutOrderLifecycle.createKitchenTicket.form.title': 'Command Form',
  'takeoutOrderLifecycle.createKitchenTicket.status.label': 'Status',
  'takeoutOrderLifecycle.createKitchenTicket.submit': 'Create Kitchen Ticket',
  'takeoutOrderLifecycle.updateOrderStatus.title': 'Update Order Status',
  'takeoutOrderLifecycle.updateOrderStatus.form.title': 'Command Form',
  'takeoutOrderLifecycle.updateOrderStatus.status.label': 'Status',
  'takeoutOrderLifecycle.updateOrderStatus.closedAt.label': 'Closed At',
  'takeoutOrderLifecycle.updateOrderStatus.cancelledAt.label': 'Cancelled At',
  'takeoutOrderLifecycle.updateOrderStatus.cancellationReason.label': 'Cancellation Reason',
  'takeoutOrderLifecycle.updateOrderStatus.submit': 'Update Order Status',
};

export class CafeFlowTakeoutOrderLifecycleBase extends CollabLitElement {
  // ── pageStatus ──
  @property({ type: String }) status = '';

  // ── actionStatus ──
  @property({ type: String }) createOrderState: ActionStatus = 'idle';
  @property({ type: String }) addOrderItemState: ActionStatus = 'idle';
  @property({ type: String }) createKitchenTicketState: ActionStatus = 'idle';
  @property({ type: String }) updateOrderStatusState: ActionStatus = 'idle';

  // ── createOrder inputs ──
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

  // ── addOrderItem inputs ──
  @property({ type: String }) addOrderItemQuantity = '';
  @property({ type: String }) addOrderItemUnitPrice = '';
  @property({ type: String }) addOrderItemTotalPrice = '';
  @property({ type: String }) addOrderItemObservations = '';
  @property({ type: String }) addOrderItemStatus = '';

  // ── createKitchenTicket inputs ──
  @property({ type: String }) createKitchenTicketStatus = '';

  // ── updateOrderStatus inputs ──
  @property({ type: String }) updateOrderStatusStatus = '';
  @property({ type: String }) updateOrderStatusClosedAt = '';
  @property({ type: String }) updateOrderStatusCancelledAt = '';
  @property({ type: String }) updateOrderStatusCancellationReason = '';

  // ── i18n ──
  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { lang?: string }).lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  // ──────────────────────────────────────
  //  State setters – createOrder
  // ──────────────────────────────────────

  setCreateOrderOrderType(value: string): void {
    this.createOrderOrderType = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.orderType', value);
    this.requestUpdate();
  }

  handleCreateOrderOrderTypeChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderOrderType(value);
  }

  setCreateOrderStatus(value: string): void {
    this.createOrderStatus = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.status', value);
    this.requestUpdate();
  }

  handleCreateOrderStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderStatus(value);
  }

  setCreateOrderTotalAmount(value: string): void {
    this.createOrderTotalAmount = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.totalAmount', value);
    this.requestUpdate();
  }

  handleCreateOrderTotalAmountChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderTotalAmount(value);
  }

  setCreateOrderNotes(value: string): void {
    this.createOrderNotes = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.notes', value);
    this.requestUpdate();
  }

  handleCreateOrderNotesChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.setCreateOrderNotes(value);
  }

  setCreateOrderCustomerName(value: string): void {
    this.createOrderCustomerName = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.customerName', value);
    this.requestUpdate();
  }

  handleCreateOrderCustomerNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateOrderCustomerName(value);
  }

  setCreateOrderCustomerPhone(value: string): void {
    this.createOrderCustomerPhone = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.customerPhone', value);
    this.requestUpdate();
  }

  handleCreateOrderCustomerPhoneChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateOrderCustomerPhone(value);
  }

  setCreateOrderNumberOfGuests(value: string): void {
    this.createOrderNumberOfGuests = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests', value);
    this.requestUpdate();
  }

  handleCreateOrderNumberOfGuestsChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateOrderNumberOfGuests(value);
  }

  setCreateOrderClosedAt(value: string): void {
    this.createOrderClosedAt = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.closedAt', value);
    this.requestUpdate();
  }

  handleCreateOrderClosedAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateOrderClosedAt(value);
  }

  setCreateOrderCancelledAt(value: string): void {
    this.createOrderCancelledAt = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.cancelledAt', value);
    this.requestUpdate();
  }

  handleCreateOrderCancelledAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateOrderCancelledAt(value);
  }

  setCreateOrderCancellationReason(value: string): void {
    this.createOrderCancellationReason = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.cancellationReason', value);
    this.requestUpdate();
  }

  handleCreateOrderCancellationReasonChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.setCreateOrderCancellationReason(value);
  }

  // ──────────────────────────────────────
  //  State setters – addOrderItem
  // ──────────────────────────────────────

  setAddOrderItemQuantity(value: string): void {
    this.addOrderItemQuantity = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.quantity', value);
    this.requestUpdate();
  }

  handleAddOrderItemQuantityChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setAddOrderItemQuantity(value);
  }

  setAddOrderItemUnitPrice(value: string): void {
    this.addOrderItemUnitPrice = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice', value);
    this.requestUpdate();
  }

  handleAddOrderItemUnitPriceChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setAddOrderItemUnitPrice(value);
  }

  setAddOrderItemTotalPrice(value: string): void {
    this.addOrderItemTotalPrice = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice', value);
    this.requestUpdate();
  }

  handleAddOrderItemTotalPriceChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setAddOrderItemTotalPrice(value);
  }

  setAddOrderItemObservations(value: string): void {
    this.addOrderItemObservations = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.observations', value);
    this.requestUpdate();
  }

  handleAddOrderItemObservationsChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.setAddOrderItemObservations(value);
  }

  setAddOrderItemStatus(value: string): void {
    this.addOrderItemStatus = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.status', value);
    this.requestUpdate();
  }

  handleAddOrderItemStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setAddOrderItemStatus(value);
  }

  // ──────────────────────────────────────
  //  State setters – createKitchenTicket
  // ──────────────────────────────────────

  setCreateKitchenTicketStatus(value: string): void {
    this.createKitchenTicketStatus = value;
    setState('ui.takeoutOrderLifecycle.input.createKitchenTicket.status', value);
    this.requestUpdate();
  }

  handleCreateKitchenTicketStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateKitchenTicketStatus(value);
  }

  // ──────────────────────────────────────
  //  State setters – updateOrderStatus
  // ──────────────────────────────────────

  setUpdateOrderStatusStatus(value: string): void {
    this.updateOrderStatusStatus = value;
    setState('ui.takeoutOrderLifecycle.input.updateOrderStatus.status', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateOrderStatusStatus(value);
  }

  setUpdateOrderStatusClosedAt(value: string): void {
    this.updateOrderStatusClosedAt = value;
    setState('ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusClosedAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateOrderStatusClosedAt(value);
  }

  setUpdateOrderStatusCancelledAt(value: string): void {
    this.updateOrderStatusCancelledAt = value;
    setState('ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusCancelledAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateOrderStatusCancelledAt(value);
  }

  setUpdateOrderStatusCancellationReason(value: string): void {
    this.updateOrderStatusCancellationReason = value;
    setState('ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason', value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusCancellationReasonChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLTextAreaElement).value;
    this.setUpdateOrderStatusCancellationReason(value);
  }

  // ──────────────────────────────────────
  //  Commands
  // ──────────────────────────────────────

  async createOrder(): Promise<void> {
    this.createOrderState = 'loading';
    setState('ui.takeoutOrderLifecycle.action.createOrder.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowCreateOrderInput = {
      orderType: this.createOrderOrderType as CafeFlowCreateOrderInput['orderType'],
      status: this.createOrderStatus as CafeFlowCreateOrderInput['status'],
      totalAmount: Number(this.createOrderTotalAmount) || 0,
      ...(this.createOrderNotes ? { notes: this.createOrderNotes } : {}),
      ...(this.createOrderCustomerName ? { customerName: this.createOrderCustomerName } : {}),
      ...(this.createOrderCustomerPhone ? { customerPhone: this.createOrderCustomerPhone } : {}),
      ...(this.createOrderNumberOfGuests ? { numberOfGuests: Number(this.createOrderNumberOfGuests) || 0 } : {}),
      ...(this.createOrderClosedAt ? { closedAt: this.createOrderClosedAt } : {}),
      ...(this.createOrderCancelledAt ? { cancelledAt: this.createOrderCancelledAt } : {}),
      ...(this.createOrderCancellationReason ? { cancellationReason: this.createOrderCancellationReason } : {}),
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CafeFlowCreateOrderOutput>(
      'cafeFlow.takeoutOrderLifecycle.createOrder',
      params,
      options,
    );

    if (response.ok) {
      this.createOrderState = 'success';
      setState('ui.takeoutOrderLifecycle.action.createOrder.status', 'success');
    } else {
      this.createOrderState = 'error';
      setState('ui.takeoutOrderLifecycle.action.createOrder.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateOrderClick(): void {
    runBlockingUiAction(async () => {
      await this.createOrder();
    });
  }

  async addOrderItem(): Promise<void> {
    this.addOrderItemState = 'loading';
    setState('ui.takeoutOrderLifecycle.action.addOrderItem.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowAddOrderItemInput = {
      quantity: Number(this.addOrderItemQuantity) || 0,
      unitPrice: Number(this.addOrderItemUnitPrice) || 0,
      totalPrice: Number(this.addOrderItemTotalPrice) || 0,
      ...(this.addOrderItemObservations ? { observations: this.addOrderItemObservations } : {}),
      status: this.addOrderItemStatus as CafeFlowAddOrderItemInput['status'],
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CafeFlowAddOrderItemOutput>(
      'cafeFlow.takeoutOrderLifecycle.addOrderItem',
      params,
      options,
    );

    if (response.ok) {
      this.addOrderItemState = 'success';
      setState('ui.takeoutOrderLifecycle.action.addOrderItem.status', 'success');
    } else {
      this.addOrderItemState = 'error';
      setState('ui.takeoutOrderLifecycle.action.addOrderItem.status', 'error');
    }
    this.requestUpdate();
  }

  handleAddOrderItemClick(): void {
    runBlockingUiAction(async () => {
      await this.addOrderItem();
    });
  }

  async createKitchenTicket(): Promise<void> {
    this.createKitchenTicketState = 'loading';
    setState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowCreateKitchenTicketInput = {
      status: this.createKitchenTicketStatus as CafeFlowCreateKitchenTicketInput['status'],
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CafeFlowCreateKitchenTicketOutput>(
      'cafeFlow.takeoutOrderLifecycle.createKitchenTicket',
      params,
      options,
    );

    if (response.ok) {
      this.createKitchenTicketState = 'success';
      setState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status', 'success');
    } else {
      this.createKitchenTicketState = 'error';
      setState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateKitchenTicketClick(): void {
    runBlockingUiAction(async () => {
      await this.createKitchenTicket();
    });
  }

  async updateOrderStatus(): Promise<void> {
    this.updateOrderStatusState = 'loading';
    setState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowUpdateOrderStatusInput = {
      status: this.updateOrderStatusStatus as CafeFlowUpdateOrderStatusInput['status'],
      ...(this.updateOrderStatusClosedAt ? { closedAt: this.updateOrderStatusClosedAt } : {}),
      ...(this.updateOrderStatusCancelledAt ? { cancelledAt: this.updateOrderStatusCancelledAt } : {}),
      ...(this.updateOrderStatusCancellationReason ? { cancellationReason: this.updateOrderStatusCancellationReason } : {}),
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CafeFlowUpdateOrderStatusOutput>(
      'cafeFlow.takeoutOrderLifecycle.updateOrderStatus',
      params,
      options,
    );

    if (response.ok) {
      this.updateOrderStatusState = 'success';
      setState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status', 'success');
    } else {
      this.updateOrderStatusState = 'error';
      setState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status', 'error');
    }
    this.requestUpdate();
  }

  handleUpdateOrderStatusClick(): void {
    runBlockingUiAction(async () => {
      await this.updateOrderStatus();
    });
  }

  // ──────────────────────────────────────
  //  Lifecycle
  // ──────────────────────────────────────

  connectedCallback(): void {
    super.connectedCallback();

    // Restore shared state if available, falling back to defaults
    const savedStatus = getState('ui.takeoutOrderLifecycle.status');
    if (savedStatus !== undefined) {
      this.status = savedStatus;
    }

    const savedCreateOrderState = getState('ui.takeoutOrderLifecycle.action.createOrder.status');
    if (savedCreateOrderState !== undefined) {
      this.createOrderState = savedCreateOrderState;
    }

    const savedAddOrderItemState = getState('ui.takeoutOrderLifecycle.action.addOrderItem.status');
    if (savedAddOrderItemState !== undefined) {
      this.addOrderItemState = savedAddOrderItemState;
    }

    const savedCreateKitchenTicketState = getState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status');
    if (savedCreateKitchenTicketState !== undefined) {
      this.createKitchenTicketState = savedCreateKitchenTicketState;
    }

    const savedUpdateOrderStatusState = getState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status');
    if (savedUpdateOrderStatusState !== undefined) {
      this.updateOrderStatusState = savedUpdateOrderStatusState;
    }

    // No initialLoads defined – nothing to run on connect
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}

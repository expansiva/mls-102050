/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.ts" enhancement="_102020_/l2/enhancementAura"/>

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

/// **collab_i18n_start**
const message_pt = {
  'takeoutOrderLifecycle.section.main.title': 'Ciclo de pedido (takeout)',
  'takeoutOrderLifecycle.organism.createOrder.title': 'Criar pedido',
  'takeoutOrderLifecycle.organism.addOrderItem.title': 'Adicionar item ao pedido',
  'takeoutOrderLifecycle.organism.createKitchenTicket.title': 'Criar ticket de cozinha',
  'takeoutOrderLifecycle.organism.updateOrderStatus.title': 'Atualizar status do pedido',
  'takeoutOrderLifecycle.organism.review.title': 'Revisão',
  'takeoutOrderLifecycle.intention.createOrder.title': 'Criar pedido',
  'takeoutOrderLifecycle.intention.addOrderItem.title': 'Adicionar item ao pedido',
  'takeoutOrderLifecycle.intention.createKitchenTicket.title': 'Criar ticket de cozinha',
  'takeoutOrderLifecycle.intention.updateOrderStatus.title': 'Atualizar status do pedido',
  'takeoutOrderLifecycle.intention.review.title': 'Resumo do ciclo do pedido',
  'takeoutOrderLifecycle.field.createOrder.orderType': 'Tipo do pedido',
  'takeoutOrderLifecycle.field.createOrder.status': 'Status do pedido',
  'takeoutOrderLifecycle.field.createOrder.totalAmount': 'Valor total',
  'takeoutOrderLifecycle.field.createOrder.notes': 'Observações',
  'takeoutOrderLifecycle.field.createOrder.customerName': 'Nome do cliente',
  'takeoutOrderLifecycle.field.createOrder.customerPhone': 'Telefone do cliente',
  'takeoutOrderLifecycle.field.createOrder.numberOfGuests': 'Número de pessoas',
  'takeoutOrderLifecycle.field.createOrder.closedAt': 'Fechado em',
  'takeoutOrderLifecycle.field.createOrder.cancelledAt': 'Cancelado em',
  'takeoutOrderLifecycle.field.createOrder.cancellationReason': 'Motivo do cancelamento',
  'takeoutOrderLifecycle.action.createOrder.submit': 'Criar pedido',
  'takeoutOrderLifecycle.field.addOrderItem.quantity': 'Quantidade',
  'takeoutOrderLifecycle.field.addOrderItem.unitPrice': 'Preço unitário',
  'takeoutOrderLifecycle.field.addOrderItem.totalPrice': 'Preço total',
  'takeoutOrderLifecycle.field.addOrderItem.observations': 'Observações do item',
  'takeoutOrderLifecycle.field.addOrderItem.status': 'Status do item',
  'takeoutOrderLifecycle.action.addOrderItem.submit': 'Adicionar item',
  'takeoutOrderLifecycle.field.createKitchenTicket.status': 'Status do ticket',
  'takeoutOrderLifecycle.action.createKitchenTicket.submit': 'Criar ticket',
  'takeoutOrderLifecycle.field.updateOrderStatus.status': 'Status do pedido',
  'takeoutOrderLifecycle.field.updateOrderStatus.closedAt': 'Fechado em',
  'takeoutOrderLifecycle.field.updateOrderStatus.cancelledAt': 'Cancelado em',
  'takeoutOrderLifecycle.field.updateOrderStatus.cancellationReason': 'Motivo do cancelamento',
  'takeoutOrderLifecycle.action.updateOrderStatus.submit': 'Atualizar status',
};
const message_en = {
  'takeoutOrderLifecycle.section.main.title': 'Takeout order lifecycle',
  'takeoutOrderLifecycle.organism.createOrder.title': 'Create order',
  'takeoutOrderLifecycle.organism.addOrderItem.title': 'Add order item',
  'takeoutOrderLifecycle.organism.createKitchenTicket.title': 'Create kitchen ticket',
  'takeoutOrderLifecycle.organism.updateOrderStatus.title': 'Update order status',
  'takeoutOrderLifecycle.organism.review.title': 'Review',
  'takeoutOrderLifecycle.intention.createOrder.title': 'Create order',
  'takeoutOrderLifecycle.intention.addOrderItem.title': 'Add order item',
  'takeoutOrderLifecycle.intention.createKitchenTicket.title': 'Create kitchen ticket',
  'takeoutOrderLifecycle.intention.updateOrderStatus.title': 'Update order status',
  'takeoutOrderLifecycle.intention.review.title': 'Order lifecycle summary',
  'takeoutOrderLifecycle.field.createOrder.orderType': 'Order type',
  'takeoutOrderLifecycle.field.createOrder.status': 'Order status',
  'takeoutOrderLifecycle.field.createOrder.totalAmount': 'Total amount',
  'takeoutOrderLifecycle.field.createOrder.notes': 'Notes',
  'takeoutOrderLifecycle.field.createOrder.customerName': 'Customer name',
  'takeoutOrderLifecycle.field.createOrder.customerPhone': 'Customer phone',
  'takeoutOrderLifecycle.field.createOrder.numberOfGuests': 'Number of guests',
  'takeoutOrderLifecycle.field.createOrder.closedAt': 'Closed at',
  'takeoutOrderLifecycle.field.createOrder.cancelledAt': 'Cancelled at',
  'takeoutOrderLifecycle.field.createOrder.cancellationReason': 'Cancellation reason',
  'takeoutOrderLifecycle.action.createOrder.submit': 'Create order',
  'takeoutOrderLifecycle.field.addOrderItem.quantity': 'Quantity',
  'takeoutOrderLifecycle.field.addOrderItem.unitPrice': 'Unit price',
  'takeoutOrderLifecycle.field.addOrderItem.totalPrice': 'Total price',
  'takeoutOrderLifecycle.field.addOrderItem.observations': 'Item notes',
  'takeoutOrderLifecycle.field.addOrderItem.status': 'Item status',
  'takeoutOrderLifecycle.action.addOrderItem.submit': 'Add item',
  'takeoutOrderLifecycle.field.createKitchenTicket.status': 'Ticket status',
  'takeoutOrderLifecycle.action.createKitchenTicket.submit': 'Create ticket',
  'takeoutOrderLifecycle.field.updateOrderStatus.status': 'Order status',
  'takeoutOrderLifecycle.field.updateOrderStatus.closedAt': 'Closed at',
  'takeoutOrderLifecycle.field.updateOrderStatus.cancelledAt': 'Cancelled at',
  'takeoutOrderLifecycle.field.updateOrderStatus.cancellationReason': 'Cancellation reason',
  'takeoutOrderLifecycle.action.updateOrderStatus.submit': 'Update status',
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowTakeoutOrderLifecycleBase extends CollabLitElement {
  @property()
  public status: string = '';

  @property()
  public createOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property()
  public createOrderOrderType: CafeFlowCreateOrderInput['orderType'] =
    '' as unknown as CafeFlowCreateOrderInput['orderType'];

  @property()
  public createOrderStatus: CafeFlowCreateOrderInput['status'] =
    '' as unknown as CafeFlowCreateOrderInput['status'];

  @property()
  public createOrderTotalAmount: number = '' as unknown as number;

  @property()
  public createOrderNotes: string = '';

  @property()
  public createOrderCustomerName: string = '';

  @property()
  public createOrderCustomerPhone: string = '';

  @property()
  public createOrderNumberOfGuests: number = '' as unknown as number;

  @property()
  public createOrderClosedAt: string = '';

  @property()
  public createOrderCancelledAt: string = '';

  @property()
  public createOrderCancellationReason: string = '';

  @property()
  public addOrderItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property()
  public addOrderItemQuantity: number = '' as unknown as number;

  @property()
  public addOrderItemUnitPrice: number = '' as unknown as number;

  @property()
  public addOrderItemTotalPrice: number = '' as unknown as number;

  @property()
  public addOrderItemObservations: string = '';

  @property()
  public addOrderItemStatus: CafeFlowAddOrderItemInput['status'] =
    '' as unknown as CafeFlowAddOrderItemInput['status'];

  @property()
  public createKitchenTicketState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property()
  public createKitchenTicketStatus: CafeFlowCreateKitchenTicketInput['status'] =
    '' as unknown as CafeFlowCreateKitchenTicketInput['status'];

  @property()
  public updateOrderStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property()
  public updateOrderStatusStatus: CafeFlowUpdateOrderStatusInput['status'] =
    '' as unknown as CafeFlowUpdateOrderStatusInput['status'];

  @property()
  public updateOrderStatusClosedAt: string = '';

  @property()
  public updateOrderStatusCancelledAt: string = '';

  @property()
  public updateOrderStatusCancellationReason: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || messages['en'];
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    const status = getState('ui.takeoutOrderLifecycle.status');
    this.status = (status !== undefined ? status : '') as string;

    const createOrderState = getState('ui.takeoutOrderLifecycle.action.createOrder.status');
    this.createOrderState =
      (createOrderState !== undefined
        ? createOrderState
        : 'idle') as 'idle' | 'loading' | 'success' | 'error';

    const createOrderOrderType = getState('ui.takeoutOrderLifecycle.input.createOrder.orderType');
    this.createOrderOrderType = (createOrderOrderType !== undefined
      ? createOrderOrderType
      : ('' as unknown as CafeFlowCreateOrderInput['orderType'])) as CafeFlowCreateOrderInput['orderType'];

    const createOrderStatus = getState('ui.takeoutOrderLifecycle.input.createOrder.status');
    this.createOrderStatus = (createOrderStatus !== undefined
      ? createOrderStatus
      : ('' as unknown as CafeFlowCreateOrderInput['status'])) as CafeFlowCreateOrderInput['status'];

    const createOrderTotalAmount = getState('ui.takeoutOrderLifecycle.input.createOrder.totalAmount');
    this.createOrderTotalAmount =
      (createOrderTotalAmount !== undefined
        ? createOrderTotalAmount
        : ('' as unknown as number)) as number;

    const createOrderNotes = getState('ui.takeoutOrderLifecycle.input.createOrder.notes');
    this.createOrderNotes = (createOrderNotes !== undefined ? createOrderNotes : '') as string;

    const createOrderCustomerName = getState('ui.takeoutOrderLifecycle.input.createOrder.customerName');
    this.createOrderCustomerName =
      (createOrderCustomerName !== undefined ? createOrderCustomerName : '') as string;

    const createOrderCustomerPhone = getState('ui.takeoutOrderLifecycle.input.createOrder.customerPhone');
    this.createOrderCustomerPhone =
      (createOrderCustomerPhone !== undefined ? createOrderCustomerPhone : '') as string;

    const createOrderNumberOfGuests = getState('ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests');
    this.createOrderNumberOfGuests =
      (createOrderNumberOfGuests !== undefined
        ? createOrderNumberOfGuests
        : ('' as unknown as number)) as number;

    const createOrderClosedAt = getState('ui.takeoutOrderLifecycle.input.createOrder.closedAt');
    this.createOrderClosedAt = (createOrderClosedAt !== undefined ? createOrderClosedAt : '') as string;

    const createOrderCancelledAt = getState('ui.takeoutOrderLifecycle.input.createOrder.cancelledAt');
    this.createOrderCancelledAt =
      (createOrderCancelledAt !== undefined ? createOrderCancelledAt : '') as string;

    const createOrderCancellationReason = getState(
      'ui.takeoutOrderLifecycle.input.createOrder.cancellationReason',
    );
    this.createOrderCancellationReason =
      (createOrderCancellationReason !== undefined ? createOrderCancellationReason : '') as string;

    const addOrderItemState = getState('ui.takeoutOrderLifecycle.action.addOrderItem.status');
    this.addOrderItemState =
      (addOrderItemState !== undefined
        ? addOrderItemState
        : 'idle') as 'idle' | 'loading' | 'success' | 'error';

    const addOrderItemQuantity = getState('ui.takeoutOrderLifecycle.input.addOrderItem.quantity');
    this.addOrderItemQuantity =
      (addOrderItemQuantity !== undefined
        ? addOrderItemQuantity
        : ('' as unknown as number)) as number;

    const addOrderItemUnitPrice = getState('ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice');
    this.addOrderItemUnitPrice =
      (addOrderItemUnitPrice !== undefined
        ? addOrderItemUnitPrice
        : ('' as unknown as number)) as number;

    const addOrderItemTotalPrice = getState('ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice');
    this.addOrderItemTotalPrice =
      (addOrderItemTotalPrice !== undefined
        ? addOrderItemTotalPrice
        : ('' as unknown as number)) as number;

    const addOrderItemObservations = getState('ui.takeoutOrderLifecycle.input.addOrderItem.observations');
    this.addOrderItemObservations =
      (addOrderItemObservations !== undefined ? addOrderItemObservations : '') as string;

    const addOrderItemStatus = getState('ui.takeoutOrderLifecycle.input.addOrderItem.status');
    this.addOrderItemStatus = (addOrderItemStatus !== undefined
      ? addOrderItemStatus
      : ('' as unknown as CafeFlowAddOrderItemInput['status'])) as CafeFlowAddOrderItemInput['status'];

    const createKitchenTicketState = getState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status');
    this.createKitchenTicketState =
      (createKitchenTicketState !== undefined
        ? createKitchenTicketState
        : 'idle') as 'idle' | 'loading' | 'success' | 'error';

    const createKitchenTicketStatus = getState('ui.takeoutOrderLifecycle.input.createKitchenTicket.status');
    this.createKitchenTicketStatus = (createKitchenTicketStatus !== undefined
      ? createKitchenTicketStatus
      : ('' as unknown as CafeFlowCreateKitchenTicketInput['status'])) as CafeFlowCreateKitchenTicketInput['status'];

    const updateOrderStatusState = getState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status');
    this.updateOrderStatusState =
      (updateOrderStatusState !== undefined
        ? updateOrderStatusState
        : 'idle') as 'idle' | 'loading' | 'success' | 'error';

    const updateOrderStatusStatus = getState('ui.takeoutOrderLifecycle.input.updateOrderStatus.status');
    this.updateOrderStatusStatus = (updateOrderStatusStatus !== undefined
      ? updateOrderStatusStatus
      : ('' as unknown as CafeFlowUpdateOrderStatusInput['status'])) as CafeFlowUpdateOrderStatusInput['status'];

    const updateOrderStatusClosedAt = getState('ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt');
    this.updateOrderStatusClosedAt =
      (updateOrderStatusClosedAt !== undefined ? updateOrderStatusClosedAt : '') as string;

    const updateOrderStatusCancelledAt = getState('ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt');
    this.updateOrderStatusCancelledAt =
      (updateOrderStatusCancelledAt !== undefined ? updateOrderStatusCancelledAt : '') as string;

    const updateOrderStatusCancellationReason = getState(
      'ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason',
    );
    this.updateOrderStatusCancellationReason =
      (updateOrderStatusCancellationReason !== undefined
        ? updateOrderStatusCancellationReason
        : '') as string;
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  public setCreateOrderOrderType(value: CafeFlowCreateOrderInput['orderType']): void {
    this.createOrderOrderType = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.orderType', value);
    this.requestUpdate();
  }

  public handleCreateOrderOrderTypeChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value as CafeFlowCreateOrderInput['orderType'];
    this.setCreateOrderOrderType(value);
  }

  public setCreateOrderStatus(value: CafeFlowCreateOrderInput['status']): void {
    this.createOrderStatus = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.status', value);
    this.requestUpdate();
  }

  public handleCreateOrderStatusChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value as CafeFlowCreateOrderInput['status'];
    this.setCreateOrderStatus(value);
  }

  public setCreateOrderTotalAmount(value: number): void {
    this.createOrderTotalAmount = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.totalAmount', value);
    this.requestUpdate();
  }

  public handleCreateOrderTotalAmountChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.setCreateOrderTotalAmount(value);
  }

  public setCreateOrderNotes(value: string): void {
    this.createOrderNotes = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.notes', value);
    this.requestUpdate();
  }

  public handleCreateOrderNotesChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setCreateOrderNotes(value);
  }

  public setCreateOrderCustomerName(value: string): void {
    this.createOrderCustomerName = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.customerName', value);
    this.requestUpdate();
  }

  public handleCreateOrderCustomerNameChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setCreateOrderCustomerName(value);
  }

  public setCreateOrderCustomerPhone(value: string): void {
    this.createOrderCustomerPhone = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.customerPhone', value);
    this.requestUpdate();
  }

  public handleCreateOrderCustomerPhoneChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setCreateOrderCustomerPhone(value);
  }

  public setCreateOrderNumberOfGuests(value: number): void {
    this.createOrderNumberOfGuests = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests', value);
    this.requestUpdate();
  }

  public handleCreateOrderNumberOfGuestsChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.setCreateOrderNumberOfGuests(value);
  }

  public setCreateOrderClosedAt(value: string): void {
    this.createOrderClosedAt = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.closedAt', value);
    this.requestUpdate();
  }

  public handleCreateOrderClosedAtChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setCreateOrderClosedAt(value);
  }

  public setCreateOrderCancelledAt(value: string): void {
    this.createOrderCancelledAt = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.cancelledAt', value);
    this.requestUpdate();
  }

  public handleCreateOrderCancelledAtChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setCreateOrderCancelledAt(value);
  }

  public setCreateOrderCancellationReason(value: string): void {
    this.createOrderCancellationReason = value;
    setState('ui.takeoutOrderLifecycle.input.createOrder.cancellationReason', value);
    this.requestUpdate();
  }

  public handleCreateOrderCancellationReasonChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setCreateOrderCancellationReason(value);
  }

  public setAddOrderItemQuantity(value: number): void {
    this.addOrderItemQuantity = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.quantity', value);
    this.requestUpdate();
  }

  public handleAddOrderItemQuantityChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.setAddOrderItemQuantity(value);
  }

  public setAddOrderItemUnitPrice(value: number): void {
    this.addOrderItemUnitPrice = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice', value);
    this.requestUpdate();
  }

  public handleAddOrderItemUnitPriceChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.setAddOrderItemUnitPrice(value);
  }

  public setAddOrderItemTotalPrice(value: number): void {
    this.addOrderItemTotalPrice = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice', value);
    this.requestUpdate();
  }

  public handleAddOrderItemTotalPriceChange(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.setAddOrderItemTotalPrice(value);
  }

  public setAddOrderItemObservations(value: string): void {
    this.addOrderItemObservations = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.observations', value);
    this.requestUpdate();
  }

  public handleAddOrderItemObservationsChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setAddOrderItemObservations(value);
  }

  public setAddOrderItemStatus(value: CafeFlowAddOrderItemInput['status']): void {
    this.addOrderItemStatus = value;
    setState('ui.takeoutOrderLifecycle.input.addOrderItem.status', value);
    this.requestUpdate();
  }

  public handleAddOrderItemStatusChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value as CafeFlowAddOrderItemInput['status'];
    this.setAddOrderItemStatus(value);
  }

  public setCreateKitchenTicketStatus(value: CafeFlowCreateKitchenTicketInput['status']): void {
    this.createKitchenTicketStatus = value;
    setState('ui.takeoutOrderLifecycle.input.createKitchenTicket.status', value);
    this.requestUpdate();
  }

  public handleCreateKitchenTicketStatusChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value as CafeFlowCreateKitchenTicketInput['status'];
    this.setCreateKitchenTicketStatus(value);
  }

  public setUpdateOrderStatusStatus(value: CafeFlowUpdateOrderStatusInput['status']): void {
    this.updateOrderStatusStatus = value;
    setState('ui.takeoutOrderLifecycle.input.updateOrderStatus.status', value);
    this.requestUpdate();
  }

  public handleUpdateOrderStatusStatusChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value as CafeFlowUpdateOrderStatusInput['status'];
    this.setUpdateOrderStatusStatus(value);
  }

  public setUpdateOrderStatusClosedAt(value: string): void {
    this.updateOrderStatusClosedAt = value;
    setState('ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt', value);
    this.requestUpdate();
  }

  public handleUpdateOrderStatusClosedAtChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setUpdateOrderStatusClosedAt(value);
  }

  public setUpdateOrderStatusCancelledAt(value: string): void {
    this.updateOrderStatusCancelledAt = value;
    setState('ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt', value);
    this.requestUpdate();
  }

  public handleUpdateOrderStatusCancelledAtChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setUpdateOrderStatusCancelledAt(value);
  }

  public setUpdateOrderStatusCancellationReason(value: string): void {
    this.updateOrderStatusCancellationReason = value;
    setState('ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason', value);
    this.requestUpdate();
  }

  public handleUpdateOrderStatusCancellationReasonChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.setUpdateOrderStatusCancellationReason(value);
  }

  public async createOrder(): Promise<void> {
    this.createOrderState = 'loading';
    setState('ui.takeoutOrderLifecycle.action.createOrder.status', 'loading');

    const params: CafeFlowCreateOrderInput = {
      orderType: this.createOrderOrderType,
      status: this.createOrderStatus,
      totalAmount: this.createOrderTotalAmount,
      notes: this.createOrderNotes,
      customerName: this.createOrderCustomerName,
      customerPhone: this.createOrderCustomerPhone,
      numberOfGuests: this.createOrderNumberOfGuests,
      closedAt: this.createOrderClosedAt,
      cancelledAt: this.createOrderCancelledAt,
      cancellationReason: this.createOrderCancellationReason,
    };

    try {
      const options: BffClientOptions = { mode: 'blocking' };
      const response = await execBff<CafeFlowCreateOrderOutput>(
        'cafeFlow.takeoutOrderLifecycle.createOrder',
        params,
        options,
      );
      if (response.ok) {
        this.createOrderState = 'success';
        setState('ui.takeoutOrderLifecycle.action.createOrder.status', 'success');
        return;
      }
      this.createOrderState = 'error';
      setState('ui.takeoutOrderLifecycle.action.createOrder.status', 'error');
      throw new Error(response.error?.message || 'Failed to create order');
    } catch (error) {
      this.createOrderState = 'error';
      setState('ui.takeoutOrderLifecycle.action.createOrder.status', 'error');
      throw error;
    }
  }

  public async handleCreateOrderClick(): Promise<void> {
    await runBlockingUiAction(async () => {
      await this.createOrder();
    });
  }

  public async addOrderItem(): Promise<void> {
    this.addOrderItemState = 'loading';
    setState('ui.takeoutOrderLifecycle.action.addOrderItem.status', 'loading');

    const params: CafeFlowAddOrderItemInput = {
      quantity: this.addOrderItemQuantity,
      unitPrice: this.addOrderItemUnitPrice,
      totalPrice: this.addOrderItemTotalPrice,
      observations: this.addOrderItemObservations,
      status: this.addOrderItemStatus,
    };

    try {
      const options: BffClientOptions = { mode: 'blocking' };
      const response = await execBff<CafeFlowAddOrderItemOutput>(
        'cafeFlow.takeoutOrderLifecycle.addOrderItem',
        params,
        options,
      );
      if (response.ok) {
        this.addOrderItemState = 'success';
        setState('ui.takeoutOrderLifecycle.action.addOrderItem.status', 'success');
        return;
      }
      this.addOrderItemState = 'error';
      setState('ui.takeoutOrderLifecycle.action.addOrderItem.status', 'error');
      throw new Error(response.error?.message || 'Failed to add order item');
    } catch (error) {
      this.addOrderItemState = 'error';
      setState('ui.takeoutOrderLifecycle.action.addOrderItem.status', 'error');
      throw error;
    }
  }

  public async handleAddOrderItemClick(): Promise<void> {
    await runBlockingUiAction(async () => {
      await this.addOrderItem();
    });
  }

  public async createKitchenTicket(): Promise<void> {
    this.createKitchenTicketState = 'loading';
    setState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status', 'loading');

    const params: CafeFlowCreateKitchenTicketInput = {
      status: this.createKitchenTicketStatus,
    };

    try {
      const options: BffClientOptions = { mode: 'blocking' };
      const response = await execBff<CafeFlowCreateKitchenTicketOutput>(
        'cafeFlow.takeoutOrderLifecycle.createKitchenTicket',
        params,
        options,
      );
      if (response.ok) {
        this.createKitchenTicketState = 'success';
        setState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status', 'success');
        return;
      }
      this.createKitchenTicketState = 'error';
      setState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status', 'error');
      throw new Error(response.error?.message || 'Failed to create kitchen ticket');
    } catch (error) {
      this.createKitchenTicketState = 'error';
      setState('ui.takeoutOrderLifecycle.action.createKitchenTicket.status', 'error');
      throw error;
    }
  }

  public async handleCreateKitchenTicketClick(): Promise<void> {
    await runBlockingUiAction(async () => {
      await this.createKitchenTicket();
    });
  }

  public async updateOrderStatus(): Promise<void> {
    this.updateOrderStatusState = 'loading';
    setState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status', 'loading');

    const params: CafeFlowUpdateOrderStatusInput = {
      status: this.updateOrderStatusStatus,
      closedAt: this.updateOrderStatusClosedAt,
      cancelledAt: this.updateOrderStatusCancelledAt,
      cancellationReason: this.updateOrderStatusCancellationReason,
    };

    try {
      const options: BffClientOptions = { mode: 'blocking' };
      const response = await execBff<CafeFlowUpdateOrderStatusOutput>(
        'cafeFlow.takeoutOrderLifecycle.updateOrderStatus',
        params,
        options,
      );
      if (response.ok) {
        this.updateOrderStatusState = 'success';
        setState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status', 'success');
        return;
      }
      this.updateOrderStatusState = 'error';
      setState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status', 'error');
      throw new Error(response.error?.message || 'Failed to update order status');
    } catch (error) {
      this.updateOrderStatusState = 'error';
      setState('ui.takeoutOrderLifecycle.action.updateOrderStatus.status', 'error');
      throw error;
    }
  }

  public async handleUpdateOrderStatusClick(): Promise<void> {
    await runBlockingUiAction(async () => {
      await this.updateOrderStatus();
    });
  }
}

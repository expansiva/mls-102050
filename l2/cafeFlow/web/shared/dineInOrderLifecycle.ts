/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.ts" enhancement="_102020_/l2/enhancementAura"/>

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

/// **collab_i18n_start**
const message_pt = {
  "dineInOrderLifecycle.section.main.title": "Ciclo de pedido (mesa)",
  "dineInOrderLifecycle.organism.createOrder.title": "Criar pedido",
  "dineInOrderLifecycle.stage.createOrder.title": "Command Form",
  "dineInOrderLifecycle.field.orderType.label": "Order Type",
  "dineInOrderLifecycle.field.status.label": "Status",
  "dineInOrderLifecycle.field.totalAmount.label": "Total Amount",
  "dineInOrderLifecycle.field.notes.label": "Notes",
  "dineInOrderLifecycle.field.customerName.label": "Customer Name",
  "dineInOrderLifecycle.field.customerPhone.label": "Customer Phone",
  "dineInOrderLifecycle.field.numberOfGuests.label": "Number Of Guests",
  "dineInOrderLifecycle.field.closedAt.label": "Closed At",
  "dineInOrderLifecycle.field.cancelledAt.label": "Cancelled At",
  "dineInOrderLifecycle.field.cancellationReason.label": "Cancellation Reason",
  "dineInOrderLifecycle.action.createOrder.label": "Create Order",
  "dineInOrderLifecycle.organism.addOrderItem.title": "Adicionar item ao pedido",
  "dineInOrderLifecycle.stage.addOrderItem.title": "Command Form",
  "dineInOrderLifecycle.field.quantity.label": "Quantity",
  "dineInOrderLifecycle.field.unitPrice.label": "Unit Price",
  "dineInOrderLifecycle.field.totalPrice.label": "Total Price",
  "dineInOrderLifecycle.field.observations.label": "Observations",
  "dineInOrderLifecycle.field.itemStatus.label": "Status",
  "dineInOrderLifecycle.action.addOrderItem.label": "Add Order Item",
  "dineInOrderLifecycle.organism.createKitchenTicket.title": "Criar ticket de cozinha",
  "dineInOrderLifecycle.stage.createKitchenTicket.title": "Command Form",
  "dineInOrderLifecycle.field.kitchenTicketStatus.label": "Status",
  "dineInOrderLifecycle.action.createKitchenTicket.label": "Create Kitchen Ticket",
  "dineInOrderLifecycle.organism.updateOrderStatus.title": "Atualizar status do pedido",
  "dineInOrderLifecycle.stage.updateOrderStatus.title": "Command Form",
  "dineInOrderLifecycle.action.updateOrderStatus.label": "Update Order Status",
  "dineInOrderLifecycle.organism.updateTableStatus.title": "Atualizar ocupação da mesa",
  "dineInOrderLifecycle.stage.updateTableStatus.title": "Command Form",
  "dineInOrderLifecycle.field.tableStatus.label": "Status",
  "dineInOrderLifecycle.field.currentChargesTotal.label": "Current Charges Total",
  "dineInOrderLifecycle.field.openedAt.label": "Opened At",
  "dineInOrderLifecycle.action.updateTableStatus.label": "Update Table Status",
  "dineInOrderLifecycle.organism.review.title": "Revisar o contexto e o resultado das ações principais da página",
  "dineInOrderLifecycle.stage.review.title": "Summary"
};
const message_en = {
  "dineInOrderLifecycle.section.main.title": "Dine-in Order Lifecycle",
  "dineInOrderLifecycle.organism.createOrder.title": "Create Order",
  "dineInOrderLifecycle.stage.createOrder.title": "Command Form",
  "dineInOrderLifecycle.field.orderType.label": "Order Type",
  "dineInOrderLifecycle.field.status.label": "Status",
  "dineInOrderLifecycle.field.totalAmount.label": "Total Amount",
  "dineInOrderLifecycle.field.notes.label": "Notes",
  "dineInOrderLifecycle.field.customerName.label": "Customer Name",
  "dineInOrderLifecycle.field.customerPhone.label": "Customer Phone",
  "dineInOrderLifecycle.field.numberOfGuests.label": "Number Of Guests",
  "dineInOrderLifecycle.field.closedAt.label": "Closed At",
  "dineInOrderLifecycle.field.cancelledAt.label": "Cancelled At",
  "dineInOrderLifecycle.field.cancellationReason.label": "Cancellation Reason",
  "dineInOrderLifecycle.action.createOrder.label": "Create Order",
  "dineInOrderLifecycle.organism.addOrderItem.title": "Add Order Item",
  "dineInOrderLifecycle.stage.addOrderItem.title": "Command Form",
  "dineInOrderLifecycle.field.quantity.label": "Quantity",
  "dineInOrderLifecycle.field.unitPrice.label": "Unit Price",
  "dineInOrderLifecycle.field.totalPrice.label": "Total Price",
  "dineInOrderLifecycle.field.observations.label": "Observations",
  "dineInOrderLifecycle.field.itemStatus.label": "Status",
  "dineInOrderLifecycle.action.addOrderItem.label": "Add Order Item",
  "dineInOrderLifecycle.organism.createKitchenTicket.title": "Create Kitchen Ticket",
  "dineInOrderLifecycle.stage.createKitchenTicket.title": "Command Form",
  "dineInOrderLifecycle.field.kitchenTicketStatus.label": "Status",
  "dineInOrderLifecycle.action.createKitchenTicket.label": "Create Kitchen Ticket",
  "dineInOrderLifecycle.organism.updateOrderStatus.title": "Update Order Status",
  "dineInOrderLifecycle.stage.updateOrderStatus.title": "Command Form",
  "dineInOrderLifecycle.action.updateOrderStatus.label": "Update Order Status",
  "dineInOrderLifecycle.organism.updateTableStatus.title": "Update Table Status",
  "dineInOrderLifecycle.stage.updateTableStatus.title": "Command Form",
  "dineInOrderLifecycle.field.tableStatus.label": "Status",
  "dineInOrderLifecycle.field.currentChargesTotal.label": "Current Charges Total",
  "dineInOrderLifecycle.field.openedAt.label": "Opened At",
  "dineInOrderLifecycle.action.updateTableStatus.label": "Update Table Status",
  "dineInOrderLifecycle.organism.review.title": "Review the context and result of the main page actions",
  "dineInOrderLifecycle.stage.review.title": "Summary"
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowDineInOrderLifecycleBase extends CollabLitElement {
  @property() status = "";

  @property() createOrderState: "idle" | "loading" | "success" | "error" = "idle";
  @property() createOrderOrderType = "";
  @property() createOrderStatus = "";
  @property() createOrderTotalAmount = "";
  @property() createOrderNotes = "";
  @property() createOrderCustomerName = "";
  @property() createOrderCustomerPhone = "";
  @property() createOrderNumberOfGuests = "";
  @property() createOrderClosedAt = "";
  @property() createOrderCancelledAt = "";
  @property() createOrderCancellationReason = "";

  @property() addOrderItemState: "idle" | "loading" | "success" | "error" = "idle";
  @property() addOrderItemQuantity = "";
  @property() addOrderItemUnitPrice = "";
  @property() addOrderItemTotalPrice = "";
  @property() addOrderItemObservations = "";
  @property() addOrderItemStatus = "";

  @property() createKitchenTicketState: "idle" | "loading" | "success" | "error" = "idle";
  @property() createKitchenTicketStatus = "";

  @property() updateOrderStatusState: "idle" | "loading" | "success" | "error" = "idle";
  @property() updateOrderStatusStatus = "";
  @property() updateOrderStatusClosedAt = "";
  @property() updateOrderStatusCancelledAt = "";
  @property() updateOrderStatusCancellationReason = "";

  @property() updateTableStatusState: "idle" | "loading" | "success" | "error" = "idle";
  @property() updateTableStatusStatus = "";
  @property() updateTableStatusCurrentChargesTotal = "";
  @property() updateTableStatusOpenedAt = "";
  @property() updateTableStatusClosedAt = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || messages['en'];
  }

  // ── State setters: createOrder ──

  setCreateOrderOrderType(value: string): void {
    this.createOrderOrderType = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.orderType", value);
    this.requestUpdate();
  }

  handleCreateOrderOrderTypeChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderOrderType(value);
  }

  setCreateOrderStatus(value: string): void {
    this.createOrderStatus = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.status", value);
    this.requestUpdate();
  }

  handleCreateOrderStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderStatus(value);
  }

  setCreateOrderTotalAmount(value: string): void {
    this.createOrderTotalAmount = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.totalAmount", value);
    this.requestUpdate();
  }

  handleCreateOrderTotalAmountChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderTotalAmount(value);
  }

  setCreateOrderNotes(value: string): void {
    this.createOrderNotes = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.notes", value);
    this.requestUpdate();
  }

  handleCreateOrderNotesChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderNotes(value);
  }

  setCreateOrderCustomerName(value: string): void {
    this.createOrderCustomerName = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.customerName", value);
    this.requestUpdate();
  }

  handleCreateOrderCustomerNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderCustomerName(value);
  }

  setCreateOrderCustomerPhone(value: string): void {
    this.createOrderCustomerPhone = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.customerPhone", value);
    this.requestUpdate();
  }

  handleCreateOrderCustomerPhoneChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderCustomerPhone(value);
  }

  setCreateOrderNumberOfGuests(value: string): void {
    this.createOrderNumberOfGuests = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.numberOfGuests", value);
    this.requestUpdate();
  }

  handleCreateOrderNumberOfGuestsChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderNumberOfGuests(value);
  }

  setCreateOrderClosedAt(value: string): void {
    this.createOrderClosedAt = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.closedAt", value);
    this.requestUpdate();
  }

  handleCreateOrderClosedAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderClosedAt(value);
  }

  setCreateOrderCancelledAt(value: string): void {
    this.createOrderCancelledAt = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.cancelledAt", value);
    this.requestUpdate();
  }

  handleCreateOrderCancelledAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderCancelledAt(value);
  }

  setCreateOrderCancellationReason(value: string): void {
    this.createOrderCancellationReason = value;
    setState("ui.dineInOrderLifecycle.input.createOrder.cancellationReason", value);
    this.requestUpdate();
  }

  handleCreateOrderCancellationReasonChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateOrderCancellationReason(value);
  }

  // ── State setters: addOrderItem ──

  setAddOrderItemQuantity(value: string): void {
    this.addOrderItemQuantity = value;
    setState("ui.dineInOrderLifecycle.input.addOrderItem.quantity", value);
    this.requestUpdate();
  }

  handleAddOrderItemQuantityChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setAddOrderItemQuantity(value);
  }

  setAddOrderItemUnitPrice(value: string): void {
    this.addOrderItemUnitPrice = value;
    setState("ui.dineInOrderLifecycle.input.addOrderItem.unitPrice", value);
    this.requestUpdate();
  }

  handleAddOrderItemUnitPriceChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setAddOrderItemUnitPrice(value);
  }

  setAddOrderItemTotalPrice(value: string): void {
    this.addOrderItemTotalPrice = value;
    setState("ui.dineInOrderLifecycle.input.addOrderItem.totalPrice", value);
    this.requestUpdate();
  }

  handleAddOrderItemTotalPriceChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setAddOrderItemTotalPrice(value);
  }

  setAddOrderItemObservations(value: string): void {
    this.addOrderItemObservations = value;
    setState("ui.dineInOrderLifecycle.input.addOrderItem.observations", value);
    this.requestUpdate();
  }

  handleAddOrderItemObservationsChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setAddOrderItemObservations(value);
  }

  setAddOrderItemStatus(value: string): void {
    this.addOrderItemStatus = value;
    setState("ui.dineInOrderLifecycle.input.addOrderItem.status", value);
    this.requestUpdate();
  }

  handleAddOrderItemStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setAddOrderItemStatus(value);
  }

  // ── State setters: createKitchenTicket ──

  setCreateKitchenTicketStatus(value: string): void {
    this.createKitchenTicketStatus = value;
    setState("ui.dineInOrderLifecycle.input.createKitchenTicket.status", value);
    this.requestUpdate();
  }

  handleCreateKitchenTicketStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setCreateKitchenTicketStatus(value);
  }

  // ── State setters: updateOrderStatus ──

  setUpdateOrderStatusStatus(value: string): void {
    this.updateOrderStatusStatus = value;
    setState("ui.dineInOrderLifecycle.input.updateOrderStatus.status", value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateOrderStatusStatus(value);
  }

  setUpdateOrderStatusClosedAt(value: string): void {
    this.updateOrderStatusClosedAt = value;
    setState("ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt", value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusClosedAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateOrderStatusClosedAt(value);
  }

  setUpdateOrderStatusCancelledAt(value: string): void {
    this.updateOrderStatusCancelledAt = value;
    setState("ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt", value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusCancelledAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateOrderStatusCancelledAt(value);
  }

  setUpdateOrderStatusCancellationReason(value: string): void {
    this.updateOrderStatusCancellationReason = value;
    setState("ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason", value);
    this.requestUpdate();
  }

  handleUpdateOrderStatusCancellationReasonChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateOrderStatusCancellationReason(value);
  }

  // ── State setters: updateTableStatus ──

  setUpdateTableStatusStatus(value: string): void {
    this.updateTableStatusStatus = value;
    setState("ui.dineInOrderLifecycle.input.updateTableStatus.status", value);
    this.requestUpdate();
  }

  handleUpdateTableStatusStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateTableStatusStatus(value);
  }

  setUpdateTableStatusCurrentChargesTotal(value: string): void {
    this.updateTableStatusCurrentChargesTotal = value;
    setState("ui.dineInOrderLifecycle.input.updateTableStatus.currentChargesTotal", value);
    this.requestUpdate();
  }

  handleUpdateTableStatusCurrentChargesTotalChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateTableStatusCurrentChargesTotal(value);
  }

  setUpdateTableStatusOpenedAt(value: string): void {
    this.updateTableStatusOpenedAt = value;
    setState("ui.dineInOrderLifecycle.input.updateTableStatus.openedAt", value);
    this.requestUpdate();
  }

  handleUpdateTableStatusOpenedAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateTableStatusOpenedAt(value);
  }

  setUpdateTableStatusClosedAt(value: string): void {
    this.updateTableStatusClosedAt = value;
    setState("ui.dineInOrderLifecycle.input.updateTableStatus.closedAt", value);
    this.requestUpdate();
  }

  handleUpdateTableStatusClosedAtChange(e: Event): void {
    const value = (e.target as HTMLInputElement | HTMLSelectElement).value;
    this.setUpdateTableStatusClosedAt(value);
  }

  // ── Command actions ──

  async createOrder(): Promise<void> {
    this.createOrderState = "loading";
    setState("ui.dineInOrderLifecycle.action.createOrder.status", "loading");
    this.requestUpdate();

    const params: CafeFlowCreateOrderInput = {
      orderType: this.createOrderOrderType as CafeFlowCreateOrderInput["orderType"],
      status: this.createOrderStatus as CafeFlowCreateOrderInput["status"],
      totalAmount: Number(this.createOrderTotalAmount),
      notes: this.createOrderNotes || undefined,
      customerName: this.createOrderCustomerName || undefined,
      customerPhone: this.createOrderCustomerPhone || undefined,
      numberOfGuests: this.createOrderNumberOfGuests ? Number(this.createOrderNumberOfGuests) : undefined,
      closedAt: this.createOrderClosedAt || undefined,
      cancelledAt: this.createOrderCancelledAt || undefined,
      cancellationReason: this.createOrderCancellationReason || undefined,
    };

    const options: BffClientOptions = { mode: "blocking" };
    const response = await execBff<CafeFlowCreateOrderOutput>("cafeFlow.dineInOrderLifecycle.createOrder", params, options);

    if (response.ok) {
      this.createOrderState = "success";
      setState("ui.dineInOrderLifecycle.action.createOrder.status", "success");
    } else {
      this.createOrderState = "error";
      setState("ui.dineInOrderLifecycle.action.createOrder.status", "error");
    }
    this.requestUpdate();
  }

  handleCreateOrderClick(): void {
    runBlockingUiAction(async () => {
      await this.createOrder();
    });
  }

  async addOrderItem(): Promise<void> {
    this.addOrderItemState = "loading";
    setState("ui.dineInOrderLifecycle.action.addOrderItem.status", "loading");
    this.requestUpdate();

    const params: CafeFlowAddOrderItemInput = {
      quantity: Number(this.addOrderItemQuantity),
      unitPrice: Number(this.addOrderItemUnitPrice),
      totalPrice: Number(this.addOrderItemTotalPrice),
      observations: this.addOrderItemObservations || undefined,
      status: this.addOrderItemStatus as CafeFlowAddOrderItemInput["status"],
    };

    const options: BffClientOptions = { mode: "blocking" };
    const response = await execBff<CafeFlowAddOrderItemOutput>("cafeFlow.dineInOrderLifecycle.addOrderItem", params, options);

    if (response.ok) {
      this.addOrderItemState = "success";
      setState("ui.dineInOrderLifecycle.action.addOrderItem.status", "success");
    } else {
      this.addOrderItemState = "error";
      setState("ui.dineInOrderLifecycle.action.addOrderItem.status", "error");
    }
    this.requestUpdate();
  }

  handleAddOrderItemClick(): void {
    runBlockingUiAction(async () => {
      await this.addOrderItem();
    });
  }

  async createKitchenTicket(): Promise<void> {
    this.createKitchenTicketState = "loading";
    setState("ui.dineInOrderLifecycle.action.createKitchenTicket.status", "loading");
    this.requestUpdate();

    const params: CafeFlowCreateKitchenTicketInput = {
      status: this.createKitchenTicketStatus as CafeFlowCreateKitchenTicketInput["status"],
    };

    const options: BffClientOptions = { mode: "blocking" };
    const response = await execBff<CafeFlowCreateKitchenTicketOutput>("cafeFlow.dineInOrderLifecycle.createKitchenTicket", params, options);

    if (response.ok) {
      this.createKitchenTicketState = "success";
      setState("ui.dineInOrderLifecycle.action.createKitchenTicket.status", "success");
    } else {
      this.createKitchenTicketState = "error";
      setState("ui.dineInOrderLifecycle.action.createKitchenTicket.status", "error");
    }
    this.requestUpdate();
  }

  handleCreateKitchenTicketClick(): void {
    runBlockingUiAction(async () => {
      await this.createKitchenTicket();
    });
  }

  async updateOrderStatus(): Promise<void> {
    this.updateOrderStatusState = "loading";
    setState("ui.dineInOrderLifecycle.action.updateOrderStatus.status", "loading");
    this.requestUpdate();

    const params: CafeFlowUpdateOrderStatusInput = {
      status: this.updateOrderStatusStatus as CafeFlowUpdateOrderStatusInput["status"],
      closedAt: this.updateOrderStatusClosedAt || undefined,
      cancelledAt: this.updateOrderStatusCancelledAt || undefined,
      cancellationReason: this.updateOrderStatusCancellationReason || undefined,
    };

    const options: BffClientOptions = { mode: "blocking" };
    const response = await execBff<CafeFlowUpdateOrderStatusOutput>("cafeFlow.dineInOrderLifecycle.updateOrderStatus", params, options);

    if (response.ok) {
      this.updateOrderStatusState = "success";
      setState("ui.dineInOrderLifecycle.action.updateOrderStatus.status", "success");
    } else {
      this.updateOrderStatusState = "error";
      setState("ui.dineInOrderLifecycle.action.updateOrderStatus.status", "error");
    }
    this.requestUpdate();
  }

  handleUpdateOrderStatusClick(): void {
    runBlockingUiAction(async () => {
      await this.updateOrderStatus();
    });
  }

  async updateTableStatus(): Promise<void> {
    this.updateTableStatusState = "loading";
    setState("ui.dineInOrderLifecycle.action.updateTableStatus.status", "loading");
    this.requestUpdate();

    const params: CafeFlowUpdateTableStatusInput = {
      status: this.updateTableStatusStatus as CafeFlowUpdateTableStatusInput["status"],
      currentChargesTotal: Number(this.updateTableStatusCurrentChargesTotal),
      openedAt: this.updateTableStatusOpenedAt || undefined,
      closedAt: this.updateTableStatusClosedAt || undefined,
    };

    const options: BffClientOptions = { mode: "blocking" };
    const response = await execBff<CafeFlowUpdateTableStatusOutput>("cafeFlow.dineInOrderLifecycle.updateTableStatus", params, options);

    if (response.ok) {
      this.updateTableStatusState = "success";
      setState("ui.dineInOrderLifecycle.action.updateTableStatus.status", "success");
    } else {
      this.updateTableStatusState = "error";
      setState("ui.dineInOrderLifecycle.action.updateTableStatus.status", "error");
    }
    this.requestUpdate();
  }

  handleUpdateTableStatusClick(): void {
    runBlockingUiAction(async () => {
      await this.updateTableStatus();
    });
  }

  // ── Lifecycle ──

  connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState("ui.dineInOrderLifecycle.status") as string) ?? "";
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}

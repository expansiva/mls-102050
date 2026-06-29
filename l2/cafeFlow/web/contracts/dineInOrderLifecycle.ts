/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.ts" enhancement="_blank"/>

export interface CafeFlowCreateOrderInput {
  orderType: "mesa" | "takeout";
  status: "draft" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "closed" | "cancelled";
  totalAmount: number;
  notes?: string;
  customerName?: string;
  customerPhone?: string;
  numberOfGuests?: number;
  closedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
}

export interface CafeFlowCreateOrderOutput {
  orderId: string;
}

export interface CafeFlowAddOrderItemInput {
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  observations?: string;
  status: "new" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "cancelled";
}

export interface CafeFlowAddOrderItemOutput {
  id: string;
}

export interface CafeFlowCreateKitchenTicketInput {
  status: "open" | "inProgress" | "done" | "void";
}

export interface CafeFlowCreateKitchenTicketOutput {
  kitchenTicketId: string;
}

export interface CafeFlowUpdateOrderStatusInput {
  status: "draft" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "closed" | "cancelled";
  closedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
}

export interface CafeFlowUpdateOrderStatusOutput {
  orderId: string;
}

export interface CafeFlowUpdateTableStatusInput {
  status: "available" | "occupied" | "disabled";
}

export interface CafeFlowUpdateTableStatusOutput {
  tableId: string;
}

/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts" enhancement="_blank"/>

export interface CafeFlowViewKitchenTicketsInput {
  kitchenTicketId?: string;
  orderId?: string;
  status?: "open" | "inProgress" | "done" | "void";
  createdAt?: string;
  updatedAt?: string;
}

export interface CafeFlowViewKitchenTicketsOutputItem {
  kitchenTicketId: string;
  orderId: string;
  status: "open" | "inProgress" | "done" | "void";
  createdAt: string;
  updatedAt: string;
}

export type CafeFlowViewKitchenTicketsOutput = CafeFlowViewKitchenTicketsOutputItem[];

export interface CafeFlowUpdateKitchenTicketStatusInput {
  status: "open" | "inProgress" | "done" | "void";
}

export interface CafeFlowUpdateKitchenTicketStatusOutput {
  kitchenTicketId: string;
}

export interface CafeFlowUpdateOrderItemStatusInput {
  status: "new" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "cancelled";
}

export interface CafeFlowUpdateOrderItemStatusOutput {
  id: string;
}

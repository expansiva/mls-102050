/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.test.ts" enhancement="_blank"/>

import type { CafeFlowAddOrderItemInput, CafeFlowAddOrderItemOutput, CafeFlowCreateKitchenTicketInput, CafeFlowCreateKitchenTicketOutput, CafeFlowCreateOrderInput, CafeFlowCreateOrderOutput, CafeFlowUpdateOrderStatusInput, CafeFlowUpdateOrderStatusOutput } from './takeoutOrderLifecycle.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowCreateOrderInput = {
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
};
type ExpectedCafeFlowCreateOrderOutput = {
  orderId: string;
};
type ExpectedCafeFlowAddOrderItemInput = {
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  observations?: string;
  status: "new" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "cancelled";
};
type ExpectedCafeFlowAddOrderItemOutput = {
  id: string;
};
type ExpectedCafeFlowCreateKitchenTicketInput = {
  status: "open" | "inProgress" | "done" | "void";
};
type ExpectedCafeFlowCreateKitchenTicketOutput = {
  kitchenTicketId: string;
};
type ExpectedCafeFlowUpdateOrderStatusInput = {
  status: "draft" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "closed" | "cancelled";
  closedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
};
type ExpectedCafeFlowUpdateOrderStatusOutput = {
  orderId: string;
};

type _CafeFlowCreateOrderInput = Assert<Equal<CafeFlowCreateOrderInput, ExpectedCafeFlowCreateOrderInput>>;
type _CafeFlowCreateOrderOutput = Assert<Equal<CafeFlowCreateOrderOutput, ExpectedCafeFlowCreateOrderOutput>>;
type _CafeFlowAddOrderItemInput = Assert<Equal<CafeFlowAddOrderItemInput, ExpectedCafeFlowAddOrderItemInput>>;
type _CafeFlowAddOrderItemOutput = Assert<Equal<CafeFlowAddOrderItemOutput, ExpectedCafeFlowAddOrderItemOutput>>;
type _CafeFlowCreateKitchenTicketInput = Assert<Equal<CafeFlowCreateKitchenTicketInput, ExpectedCafeFlowCreateKitchenTicketInput>>;
type _CafeFlowCreateKitchenTicketOutput = Assert<Equal<CafeFlowCreateKitchenTicketOutput, ExpectedCafeFlowCreateKitchenTicketOutput>>;
type _CafeFlowUpdateOrderStatusInput = Assert<Equal<CafeFlowUpdateOrderStatusInput, ExpectedCafeFlowUpdateOrderStatusInput>>;
type _CafeFlowUpdateOrderStatusOutput = Assert<Equal<CafeFlowUpdateOrderStatusOutput, ExpectedCafeFlowUpdateOrderStatusOutput>>;

export {};
/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.test.ts" enhancement="_blank"/>

import type { CafeFlowUpdateKitchenTicketStatusInput, CafeFlowUpdateKitchenTicketStatusOutput, CafeFlowUpdateOrderItemStatusInput, CafeFlowUpdateOrderItemStatusOutput, CafeFlowViewKitchenTicketsInput, CafeFlowViewKitchenTicketsOutput, CafeFlowViewKitchenTicketsOutputItem } from './kitchenProductionFlow.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedCafeFlowViewKitchenTicketsInput = {
  kitchenTicketId?: string;
  orderId?: string;
  status?: "open" | "inProgress" | "done" | "void";
  createdAt?: string;
  updatedAt?: string;
};
type ExpectedCafeFlowViewKitchenTicketsOutputItem = {
  kitchenTicketId: string;
  orderId: string;
  status: "open" | "inProgress" | "done" | "void";
  createdAt: string;
  updatedAt: string;
};
type ExpectedCafeFlowViewKitchenTicketsOutput = ExpectedCafeFlowViewKitchenTicketsOutputItem[];
type ExpectedCafeFlowUpdateKitchenTicketStatusInput = {
  status: "open" | "inProgress" | "done" | "void";
};
type ExpectedCafeFlowUpdateKitchenTicketStatusOutput = {
  kitchenTicketId: string;
};
type ExpectedCafeFlowUpdateOrderItemStatusInput = {
  status: "new" | "sentToKitchen" | "inPreparation" | "ready" | "served" | "cancelled";
};
type ExpectedCafeFlowUpdateOrderItemStatusOutput = {
  id: string;
};

type _CafeFlowViewKitchenTicketsInput = Assert<Equal<CafeFlowViewKitchenTicketsInput, ExpectedCafeFlowViewKitchenTicketsInput>>;
type _CafeFlowViewKitchenTicketsOutputItem = Assert<Equal<CafeFlowViewKitchenTicketsOutputItem, ExpectedCafeFlowViewKitchenTicketsOutputItem>>;
type _CafeFlowViewKitchenTicketsOutput = Assert<Equal<CafeFlowViewKitchenTicketsOutput, ExpectedCafeFlowViewKitchenTicketsOutput>>;
type _CafeFlowUpdateKitchenTicketStatusInput = Assert<Equal<CafeFlowUpdateKitchenTicketStatusInput, ExpectedCafeFlowUpdateKitchenTicketStatusInput>>;
type _CafeFlowUpdateKitchenTicketStatusOutput = Assert<Equal<CafeFlowUpdateKitchenTicketStatusOutput, ExpectedCafeFlowUpdateKitchenTicketStatusOutput>>;
type _CafeFlowUpdateOrderItemStatusInput = Assert<Equal<CafeFlowUpdateOrderItemStatusInput, ExpectedCafeFlowUpdateOrderItemStatusInput>>;
type _CafeFlowUpdateOrderItemStatusOutput = Assert<Equal<CafeFlowUpdateOrderItemStatusOutput, ExpectedCafeFlowUpdateOrderItemStatusOutput>>;

export {};
/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.defs.ts" enhancement="_blank"/>

export const createKitchenTicketUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createKitchenTicket",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createKitchenTicket",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "createKitchenTicket",
        "inputTypeName": "CreateKitchenTicketInput",
        "outputTypeName": "CreateKitchenTicketOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "ID of the Order for which a kitchen ticket is created"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Generated ID of the new KitchenTicket"
          },
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "ID of the parent Order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Initial status of the KitchenTicket (open)"
          },
          {
            "name": "orderStatus",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Updated status of the Order after kitchen ticket creation (sentToKitchen)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "orderStatusTransitions"
        ],
        "transactional": true,
        "steps": [
          "Load the Order aggregate by orderId via OrderPort.findById",
          "Validate that the Order exists and its current status allows transition to 'sentToKitchen' per orderStatusTransitions rule (e.g. from 'draft')",
          "Validate that the Order does not already have a kitchenTicketId assigned",
          "Create a new KitchenTicket embedded in the Order aggregate: generate kitchenTicketId, set status to 'open', set createdAt and updatedAt to current timestamp",
          "Set order.kitchenTicketId to the new kitchen ticket id",
          "Transition Order.status to 'sentToKitchen' per orderStatusTransitions rule",
          "Update Order.updatedAt to current timestamp",
          "Save the Order aggregate via OrderPort.save",
          "Return kitchenTicketId, orderId, kitchen ticket status, and updated order status"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createKitchenTicketUsecase;

export const pipeline = [
  {
    "id": "createKitchenTicket__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;

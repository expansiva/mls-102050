/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.defs.ts" enhancement="_blank"/>

export const viewKitchenTicketsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewKitchenTickets",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewKitchenTickets",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "viewKitchenTickets",
        "inputTypeName": "ViewKitchenTicketsInput",
        "outputTypeName": "ViewKitchenTicketsOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Filter kitchen tickets by parent order id"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": false,
            "ofEntity": "KitchenTicket",
            "description": "Filter by a specific kitchen ticket id"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "KitchenTicket",
            "description": "Filter by kitchen ticket status (open, inProgress, done, void)"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Unique identifier of the kitchen ticket"
          },
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Parent order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Current status of the kitchen ticket"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Creation timestamp"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Last update timestamp"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "If orderId is provided, load the Order aggregate via OrderPort.findById(orderId)",
          "If kitchenTicketId is provided without orderId, load all candidate Orders via OrderPort and locate the one containing the matching KitchenTicket",
          "Extract KitchenTicket entries from the loaded Order aggregate(s)",
          "If status filter is provided, filter the extracted tickets by status",
          "Project and return the matching KitchenTicket fields: kitchenTicketId, orderId, status, createdAt, updatedAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewKitchenTicketsUsecase;

export const pipeline = [
  {
    "id": "viewKitchenTickets__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.defs.ts",
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

/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const kitchenProductionFlowUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "kitchenProductionFlow",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "kitchenProductionFlow",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "sendToKitchen",
        "inputTypeName": "SendToKitchenInput",
        "outputTypeName": "SendToKitchenOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order whose items are to be sent to the kitchen"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The newly created kitchen ticket id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "The kitchen ticket status after creation (open)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Only order items with status 'new' are eligible to be sent to kitchen",
          "A kitchen ticket is created with status 'open' and linked to the order",
          "Eligible order items are linked to the kitchen ticket and transitioned to 'sentToKitchen'",
          "At least one eligible order item must exist to create a kitchen ticket"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Validate that at least one OrderItem has status 'new'",
          "Create a KitchenTicket with status 'open' and generate kitchenTicketId",
          "Link eligible OrderItems (status 'new') to the kitchenTicketId and set their status to 'sentToKitchen'",
          "Save Order aggregate via Order port",
          "Return kitchenTicketId and status"
        ]
      },
      {
        "functionName": "startPreparation",
        "inputTypeName": "StartPreparationInput",
        "outputTypeName": "StartPreparationOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order containing the kitchen ticket"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The kitchen ticket to start preparing"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The kitchen ticket id that was updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "The kitchen ticket status after update (inProgress)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Kitchen ticket must be in status 'open' to start preparation",
          "Kitchen ticket status transitions from 'open' to 'inProgress'",
          "All OrderItems linked to the kitchen ticket with status 'sentToKitchen' transition to 'inPreparation'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Find KitchenTicket by kitchenTicketId within the Order",
          "Validate kitchen ticket status is 'open'",
          "Transition kitchen ticket status to 'inProgress'",
          "Transition all linked OrderItems from 'sentToKitchen' to 'inPreparation'",
          "Save Order aggregate via Order port",
          "Return kitchenTicketId and status"
        ]
      },
      {
        "functionName": "markReady",
        "inputTypeName": "MarkReadyInput",
        "outputTypeName": "MarkReadyOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order containing the kitchen ticket"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The kitchen ticket to mark as ready"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The kitchen ticket id that was updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "The kitchen ticket status after update (done)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Kitchen ticket must be in status 'inProgress' to mark as ready",
          "Kitchen ticket status transitions from 'inProgress' to 'done'",
          "All OrderItems linked to the kitchen ticket with status 'inPreparation' transition to 'ready'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Find KitchenTicket by kitchenTicketId within the Order",
          "Validate kitchen ticket status is 'inProgress'",
          "Transition kitchen ticket status to 'done'",
          "Transition all linked OrderItems from 'inPreparation' to 'ready'",
          "Save Order aggregate via Order port",
          "Return kitchenTicketId and status"
        ]
      },
      {
        "functionName": "voidKitchenTicket",
        "inputTypeName": "VoidKitchenTicketInput",
        "outputTypeName": "VoidKitchenTicketOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order containing the kitchen ticket"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The kitchen ticket to void"
          },
          {
            "name": "reason",
            "type": "string",
            "required": false,
            "description": "Optional reason for voiding the kitchen ticket"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The voided kitchen ticket id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "The kitchen ticket status after void (void)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Kitchen ticket must not already be in status 'done' or 'void' to be voided",
          "Kitchen ticket status transitions to 'void'",
          "All OrderItems linked to the kitchen ticket that are not yet 'served' or 'cancelled' are transitioned to 'cancelled'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Find KitchenTicket by kitchenTicketId within the Order",
          "Validate kitchen ticket status is not 'done' or 'void'",
          "Transition kitchen ticket status to 'void'",
          "Transition all linked OrderItems that are not 'served' or 'cancelled' to 'cancelled'",
          "Save Order aggregate via Order port",
          "Return kitchenTicketId and status"
        ]
      },
      {
        "functionName": "queryKitchenTicketsByOrder",
        "inputTypeName": "QueryKitchenTicketsByOrderInput",
        "outputTypeName": "QueryKitchenTicketsByOrderOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order to query kitchen tickets for"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Optional filter by kitchen ticket status"
          }
        ],
        "output": [
          {
            "name": "kitchenTickets",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "List of kitchen ticket ids matching the filter"
          },
          {
            "name": "statuses",
            "type": "string",
            "required": true,
            "description": "Corresponding statuses for each kitchen ticket"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Kitchen tickets are read from the Order aggregate",
          "Optional status filter narrows the result set"
        ],
        "transactional": false,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Extract all KitchenTickets from the Order",
          "If status filter is provided, filter tickets by that status",
          "Return list of kitchenTicketIds and their statuses"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default kitchenProductionFlowUsecase;

export const pipeline = [
  {
    "id": "kitchenProductionFlow__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.defs.ts",
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

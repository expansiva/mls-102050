/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const takeoutOrderLifecycleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "takeoutOrderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "takeoutOrderLifecycle",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "createTakeoutOrder",
        "inputTypeName": "CreateTakeoutOrderInput",
        "outputTypeName": "CreateTakeoutOrderOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "uuid",
            "required": true,
            "description": "Daily shift the order belongs to"
          },
          {
            "name": "customerName",
            "type": "string",
            "required": false,
            "description": "Name of the takeout customer"
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": false,
            "description": "Phone of the takeout customer"
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "Order-level notes"
          },
          {
            "name": "items",
            "type": "OrderItem[]",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "List of order items with menuItemId, quantity, unitPrice, observations"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the created order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Initial status (draft)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "orderType-must-be-takeout",
          "order-starts-in-draft",
          "totalAmount-computed-from-items"
        ],
        "transactional": true,
        "steps": [
          "Load dailyShift via Order port to validate shift is open",
          "Create Order with orderType=takeout, status=draft",
          "Compute totalAmount from items (quantity * unitPrice)",
          "Embed OrderItem children with status=new",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "sendOrderToKitchen",
        "inputTypeName": "SendOrderToKitchenInput",
        "outputTypeName": "SendOrderToKitchenOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the order to send to kitchen"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the order"
          },
          {
            "name": "kitchenTicketId",
            "type": "uuid",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Id of the created kitchen ticket"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (sentToKitchen)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-must-be-draft-to-send",
          "kitchen-ticket-created-on-send",
          "items-transition-to-sentToKitchen"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate order.status === draft",
          "Create KitchenTicket with status=open, link to orderId",
          "Set order.kitchenTicketId",
          "Transition order.status to sentToKitchen",
          "Transition all OrderItem.status to sentToKitchen",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "markOrderReady",
        "inputTypeName": "MarkOrderReadyInput",
        "outputTypeName": "MarkOrderReadyOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the order to mark ready"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (ready)"
          },
          {
            "name": "kitchenTicketStatus",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "New kitchen ticket status (done)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-must-be-inPreparation-to-mark-ready",
          "kitchen-ticket-transitions-to-done",
          "all-items-must-be-ready"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate order.status === inPreparation",
          "Transition KitchenTicket.status to done",
          "Transition order.status to ready",
          "Ensure all OrderItem.status are ready",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "startPreparation",
        "inputTypeName": "StartPreparationInput",
        "outputTypeName": "StartPreparationOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the order to start preparing"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (inPreparation)"
          },
          {
            "name": "kitchenTicketStatus",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "New kitchen ticket status (inProgress)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-must-be-sentToKitchen-to-start",
          "kitchen-ticket-transitions-to-inProgress",
          "items-transition-to-inPreparation"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate order.status === sentToKitchen",
          "Transition KitchenTicket.status to inProgress",
          "Transition order.status to inPreparation",
          "Transition all OrderItem.status to inPreparation",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "closeOrder",
        "inputTypeName": "CloseOrderInput",
        "outputTypeName": "CloseOrderOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the order to close"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the closed order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (closed)"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Timestamp when the order was closed"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-must-be-ready-or-served-to-close",
          "closedAt-set-on-close",
          "kitchen-ticket-must-be-done"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate order.status === ready or served",
          "Validate KitchenTicket.status === done",
          "Set order.status to closed",
          "Set order.closedAt to current timestamp",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "cancelOrder",
        "inputTypeName": "CancelOrderInput",
        "outputTypeName": "CancelOrderOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the order to cancel"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "description": "Reason for cancellation"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the cancelled order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (cancelled)"
          },
          {
            "name": "cancelledAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Timestamp when the order was cancelled"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-must-not-be-closed-or-cancelled",
          "cancelledAt-set-on-cancel",
          "items-transition-to-cancelled",
          "kitchen-ticket-transitions-to-void-if-exists"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate order.status is not closed or cancelled",
          "Set order.status to cancelled",
          "Set order.cancelledAt to current timestamp",
          "Set order.cancellationReason if provided",
          "Transition all OrderItem.status to cancelled",
          "If KitchenTicket exists, transition to void",
          "Save Order aggregate via Order port"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default takeoutOrderLifecycleUsecase;

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.defs.ts",
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

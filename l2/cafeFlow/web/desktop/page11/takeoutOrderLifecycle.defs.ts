/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "takeoutOrderLifecycle",
  "pageName": "Ciclo de pedido (takeout)",
  "actor": "attendant",
  "purpose": "Executar Ciclo de pedido (takeout).",
  "capabilities": [
    "takeoutOrderLifecycle"
  ],
  "flowRefs": {
    "experienceFlows": [
      "takeoutOrderLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "takeoutOrderLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-takeout-order-lifecycle-10",
      "type": "section",
      "sectionName": "Ciclo de pedido (takeout)",
      "titleKey": "takeoutOrderLifecycle.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-create-order-10",
          "type": "organism",
          "organismName": "CreateOrder",
          "titleKey": "takeoutOrderLifecycle.organism.createOrder.title",
          "purpose": "Criar pedido",
          "userActions": [
            "createOrder"
          ],
          "requiredEntities": [
            "Order",
            "DailyShift",
            "Table",
            "TableOccupancy"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "orderStatusTransitions",
            "paymentTimingByOrderType",
            "ingredientConsumptionTrigger",
            "aiOutputLanguageSelection",
            "tableOccupancyConsistency"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-create-order-form-10",
              "intent": "commandForm",
              "submitAction": "createOrder",
              "order": 10
            }
          ]
        },
        {
          "id": "org-add-order-item-20",
          "type": "organism",
          "organismName": "AddOrderItem",
          "titleKey": "takeoutOrderLifecycle.organism.addOrderItem.title",
          "purpose": "Adicionar item ao pedido",
          "userActions": [
            "addOrderItem"
          ],
          "requiredEntities": [
            "OrderItem",
            "MenuItem",
            "Order",
            "StockConsumption"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "orderStatusTransitions",
            "ingredientConsumptionTrigger"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent-add-order-item-form-20",
              "intent": "commandForm",
              "submitAction": "addOrderItem",
              "order": 10
            }
          ]
        },
        {
          "id": "org-create-kitchen-ticket-30",
          "type": "organism",
          "organismName": "CreateKitchenTicket",
          "titleKey": "takeoutOrderLifecycle.organism.createKitchenTicket.title",
          "purpose": "Criar ticket de cozinha",
          "userActions": [
            "createKitchenTicket"
          ],
          "requiredEntities": [
            "KitchenTicket",
            "Order",
            "OrderItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "orderStatusTransitions"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent-create-kitchen-ticket-form-30",
              "intent": "commandForm",
              "submitAction": "createKitchenTicket",
              "order": 10
            }
          ]
        },
        {
          "id": "org-update-order-status-40",
          "type": "organism",
          "organismName": "UpdateOrderStatus",
          "titleKey": "takeoutOrderLifecycle.organism.updateOrderStatus.title",
          "purpose": "Atualizar status do pedido",
          "userActions": [
            "updateOrderStatus"
          ],
          "requiredEntities": [
            "Order",
            "OrderItem",
            "KitchenTicket",
            "Table",
            "TableOccupancy",
            "Payment",
            "InventoryItem",
            "RecipeComponent",
            "StockConsumption"
          ],
          "readsFields": [
            "Order.status",
            "Order.orderType",
            "Order.tableId"
          ],
          "writesFields": [
            "Order.status",
            "Order.updatedAt",
            "Order.closedAt",
            "Order.cancelledAt",
            "Order.cancellationReason"
          ],
          "rulesApplied": [
            "orderStatusTransitions",
            "paymentTimingByOrderType",
            "ingredientConsumptionTrigger",
            "aiOutputLanguageSelection",
            "tableOccupancyConsistency"
          ],
          "order": 40,
          "intentionRefs": [
            {
              "id": "intent-update-order-status-form-40",
              "intent": "commandForm",
              "submitAction": "updateOrderStatus",
              "order": 10
            }
          ]
        },
        {
          "id": "org-review-summary-50",
          "type": "organism",
          "organismName": "ReviewSummary",
          "titleKey": "takeoutOrderLifecycle.organism.reviewSummary.title",
          "purpose": "Revisar o contexto e o resultado das ações principais da página.",
          "userActions": [],
          "requiredEntities": [
            "Order",
            "OrderItem",
            "KitchenTicket"
          ],
          "readsFields": [
            "Order.orderId",
            "Order.status",
            "Order.totalAmount",
            "Order.customerName",
            "Order.customerPhone"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 50,
          "intentionRefs": [
            {
              "id": "intent-review-summary-50",
              "intent": "summary",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "takeoutOrderLifecycle.main",
    "type": "page",
    "sections": [
      {
        "id": "sec-takeout-order-lifecycle-10",
        "type": "section",
        "sectionName": "Ciclo de pedido (takeout)",
        "titleKey": "takeoutOrderLifecycle.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-create-order-10",
            "type": "organism",
            "organismName": "CreateOrder",
            "titleKey": "takeoutOrderLifecycle.organism.createOrder.title",
            "purpose": "Criar pedido",
            "userActions": [
              "createOrder"
            ],
            "requiredEntities": [
              "Order",
              "DailyShift",
              "Table",
              "TableOccupancy"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "orderStatusTransitions",
              "paymentTimingByOrderType",
              "ingredientConsumptionTrigger",
              "aiOutputLanguageSelection",
              "tableOccupancyConsistency"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent-create-order-form-10",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.intent.createOrderForm.title",
                "submitAction": "createOrder",
                "fields": [
                  {
                    "id": "field-create-order-orderType",
                    "field": "orderType",
                    "labelKey": "takeoutOrderLifecycle.field.orderType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.orderType"
                  },
                  {
                    "id": "field-create-order-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.field.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.status"
                  },
                  {
                    "id": "field-create-order-totalAmount",
                    "field": "totalAmount",
                    "labelKey": "takeoutOrderLifecycle.field.totalAmount.label",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.totalAmount"
                  },
                  {
                    "id": "field-create-order-notes",
                    "field": "notes",
                    "labelKey": "takeoutOrderLifecycle.field.notes.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.notes"
                  },
                  {
                    "id": "field-create-order-customerName",
                    "field": "customerName",
                    "labelKey": "takeoutOrderLifecycle.field.customerName.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerName"
                  },
                  {
                    "id": "field-create-order-customerPhone",
                    "field": "customerPhone",
                    "labelKey": "takeoutOrderLifecycle.field.customerPhone.label",
                    "order": 60,
                    "required": false,
                    "inputType": "tel",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerPhone"
                  },
                  {
                    "id": "field-create-order-numberOfGuests",
                    "field": "numberOfGuests",
                    "labelKey": "takeoutOrderLifecycle.field.numberOfGuests.label",
                    "order": 70,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests"
                  },
                  {
                    "id": "field-create-order-closedAt",
                    "field": "closedAt",
                    "labelKey": "takeoutOrderLifecycle.field.closedAt.label",
                    "order": 80,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.closedAt"
                  },
                  {
                    "id": "field-create-order-cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "takeoutOrderLifecycle.field.cancelledAt.label",
                    "order": 90,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancelledAt"
                  },
                  {
                    "id": "field-create-order-cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "takeoutOrderLifecycle.field.cancellationReason.label",
                    "order": 100,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-create-order-submit",
                    "action": "createOrder",
                    "labelKey": "takeoutOrderLifecycle.action.createOrder.label",
                    "order": 10,
                    "actionKey": "createOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-add-order-item-20",
            "type": "organism",
            "organismName": "AddOrderItem",
            "titleKey": "takeoutOrderLifecycle.organism.addOrderItem.title",
            "purpose": "Adicionar item ao pedido",
            "userActions": [
              "addOrderItem"
            ],
            "requiredEntities": [
              "OrderItem",
              "MenuItem",
              "Order",
              "StockConsumption"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "orderStatusTransitions",
              "ingredientConsumptionTrigger"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent-add-order-item-form-20",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.intent.addOrderItemForm.title",
                "submitAction": "addOrderItem",
                "fields": [
                  {
                    "id": "field-add-order-item-quantity",
                    "field": "quantity",
                    "labelKey": "takeoutOrderLifecycle.field.quantity.label",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.quantity"
                  },
                  {
                    "id": "field-add-order-item-unitPrice",
                    "field": "unitPrice",
                    "labelKey": "takeoutOrderLifecycle.field.unitPrice.label",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice"
                  },
                  {
                    "id": "field-add-order-item-totalPrice",
                    "field": "totalPrice",
                    "labelKey": "takeoutOrderLifecycle.field.totalPrice.label",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice"
                  },
                  {
                    "id": "field-add-order-item-observations",
                    "field": "observations",
                    "labelKey": "takeoutOrderLifecycle.field.observations.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.observations"
                  },
                  {
                    "id": "field-add-order-item-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.field.itemStatus.label",
                    "order": 50,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-add-order-item-submit",
                    "action": "addOrderItem",
                    "labelKey": "takeoutOrderLifecycle.action.addOrderItem.label",
                    "order": 10,
                    "actionKey": "addOrderItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-create-kitchen-ticket-30",
            "type": "organism",
            "organismName": "CreateKitchenTicket",
            "titleKey": "takeoutOrderLifecycle.organism.createKitchenTicket.title",
            "purpose": "Criar ticket de cozinha",
            "userActions": [
              "createKitchenTicket"
            ],
            "requiredEntities": [
              "KitchenTicket",
              "Order",
              "OrderItem"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "orderStatusTransitions"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent-create-kitchen-ticket-form-30",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.intent.createKitchenTicketForm.title",
                "submitAction": "createKitchenTicket",
                "fields": [
                  {
                    "id": "field-create-kitchen-ticket-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.field.kitchenTicketStatus.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createKitchenTicket.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-create-kitchen-ticket-submit",
                    "action": "createKitchenTicket",
                    "labelKey": "takeoutOrderLifecycle.action.createKitchenTicket.label",
                    "order": 10,
                    "actionKey": "createKitchenTicket"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-update-order-status-40",
            "type": "organism",
            "organismName": "UpdateOrderStatus",
            "titleKey": "takeoutOrderLifecycle.organism.updateOrderStatus.title",
            "purpose": "Atualizar status do pedido",
            "userActions": [
              "updateOrderStatus"
            ],
            "requiredEntities": [
              "Order",
              "OrderItem",
              "KitchenTicket",
              "Table",
              "TableOccupancy",
              "Payment",
              "InventoryItem",
              "RecipeComponent",
              "StockConsumption"
            ],
            "readsFields": [
              "Order.status",
              "Order.orderType",
              "Order.tableId"
            ],
            "writesFields": [
              "Order.status",
              "Order.updatedAt",
              "Order.closedAt",
              "Order.cancelledAt",
              "Order.cancellationReason"
            ],
            "rulesApplied": [
              "orderStatusTransitions",
              "paymentTimingByOrderType",
              "ingredientConsumptionTrigger",
              "aiOutputLanguageSelection",
              "tableOccupancyConsistency"
            ],
            "order": 40,
            "intentions": [
              {
                "id": "intent-update-order-status-form-40",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.intent.updateOrderStatusForm.title",
                "submitAction": "updateOrderStatus",
                "fields": [
                  {
                    "id": "field-update-order-status-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.field.status.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.status"
                  },
                  {
                    "id": "field-update-order-status-closedAt",
                    "field": "closedAt",
                    "labelKey": "takeoutOrderLifecycle.field.closedAt.label",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt"
                  },
                  {
                    "id": "field-update-order-status-cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "takeoutOrderLifecycle.field.cancelledAt.label",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt"
                  },
                  {
                    "id": "field-update-order-status-cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "takeoutOrderLifecycle.field.cancellationReason.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-update-order-status-submit",
                    "action": "updateOrderStatus",
                    "labelKey": "takeoutOrderLifecycle.action.updateOrderStatus.label",
                    "order": 10,
                    "actionKey": "updateOrderStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-review-summary-50",
            "type": "organism",
            "organismName": "ReviewSummary",
            "titleKey": "takeoutOrderLifecycle.organism.reviewSummary.title",
            "purpose": "Revisar o contexto e o resultado das ações principais da página.",
            "userActions": [],
            "requiredEntities": [
              "Order",
              "OrderItem",
              "KitchenTicket"
            ],
            "readsFields": [
              "Order.orderId",
              "Order.status",
              "Order.totalAmount",
              "Order.customerName",
              "Order.customerPhone"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 50,
            "intentions": [
              {
                "id": "intent-review-summary-50",
                "intent": "summary",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.intent.reviewSummary.title",
                "fields": [
                  {
                    "id": "field-review-orderId",
                    "field": "orderId",
                    "labelKey": "takeoutOrderLifecycle.field.orderId.label",
                    "order": 10,
                    "required": false
                  },
                  {
                    "id": "field-review-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.field.status.label",
                    "order": 20,
                    "required": false
                  },
                  {
                    "id": "field-review-totalAmount",
                    "field": "totalAmount",
                    "labelKey": "takeoutOrderLifecycle.field.totalAmount.label",
                    "order": 30,
                    "required": false
                  },
                  {
                    "id": "field-review-customerName",
                    "field": "customerName",
                    "labelKey": "takeoutOrderLifecycle.field.customerName.label",
                    "order": 40,
                    "required": false
                  },
                  {
                    "id": "field-review-customerPhone",
                    "field": "customerPhone",
                    "labelKey": "takeoutOrderLifecycle.field.customerPhone.label",
                    "order": 50,
                    "required": false
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.ts",
      "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.ts"
    ],
    "dependsOn": [
      "takeoutOrderLifecycle__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "POS-first, high-contrast, touch-friendly, low-latency, status-driven UI"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;

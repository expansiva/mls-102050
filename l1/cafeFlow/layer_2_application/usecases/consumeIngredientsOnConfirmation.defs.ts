/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const consumeIngredientsOnConfirmationUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "consumeIngredientsOnConfirmation",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "consumeIngredientsOnConfirmation",
    "ports": [
      "Order",
      "InventoryItem",
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "consumeIngredientsOnConfirmation",
        "inputTypeName": "ConsumeIngredientsOnConfirmationInput",
        "outputTypeName": "ConsumeIngredientsOnConfirmationOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "The order whose ingredients should be consumed upon confirmation"
          },
          {
            "name": "confirmedAt",
            "type": "string",
            "required": true,
            "description": "Timestamp at which the confirmation/consumption occurs"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "The confirmed order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Result status of the consumption operation"
          },
          {
            "name": "stockConsumptionIds",
            "type": "string",
            "required": true,
            "ofEntity": "StockConsumption",
            "description": "Ids of the StockConsumption records created"
          },
          {
            "name": "updatedInventoryItemIds",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Ids of InventoryItems whose quantity was decremented"
          },
          {
            "name": "consumedAt",
            "type": "string",
            "required": true,
            "description": "Timestamp when consumption was posted"
          },
          {
            "name": "belowMinimumInventoryItemIds",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Inventory item ids that fell below their minimum level after consumption"
          }
        ],
        "ports": [
          "Order",
          "InventoryItem",
          "MenuItem"
        ],
        "rulesApplied": [
          "order-must-exist",
          "order-items-must-be-in-confirmable-status",
          "recipe-components-resolved-per-menu-item",
          "required-quantity-equals-recipe-component-quantity-times-order-item-quantity",
          "inventory-must-have-sufficient-stock",
          "stock-consumption-created-per-component-per-order-item",
          "inventory-quantity-decremented-by-consumed-amount",
          "flag-inventory-below-minimum-level"
        ],
        "transactional": true,
        "steps": [
          "Load the Order aggregate by orderId via Order port; validate it exists and its order items are in a confirmable status (sentToKitchen, inPreparation, or ready)",
          "For each OrderItem in the order, load the MenuItem aggregate by menuItemId via MenuItem port to retrieve its RecipeComponent collection",
          "For each RecipeComponent, compute requiredQuantity = recipeComponent.quantity × orderItem.quantity",
          "Load the InventoryItem by recipeComponent.inventoryItemId via InventoryItem port; validate currentQuantity >= requiredQuantity; collect any that would fall below minimumLevel",
          "Create a StockConsumption record (status=posted, consumedAt=confirmedAt) for each component-orderItem pair and embed it in the Order aggregate",
          "Decrement each InventoryItem.currentQuantity by the consumed amount and save via InventoryItem port",
          "Save the Order aggregate (with new StockConsumption records and updated OrderItem statuses) via Order port",
          "Return orderId, status, stockConsumptionIds, updatedInventoryItemIds, consumedAt, and belowMinimumInventoryItemIds"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default consumeIngredientsOnConfirmationUsecase;

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
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

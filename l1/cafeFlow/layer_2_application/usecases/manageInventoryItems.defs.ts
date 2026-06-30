/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const manageInventoryItemsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "manageInventoryItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "manageInventoryItems",
    "ports": [
      "InventoryItem"
    ],
    "functions": [
      {
        "functionName": "updateInventoryItem",
        "inputTypeName": "UpdateInventoryItemInput",
        "outputTypeName": "UpdateInventoryItemOutput",
        "input": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Identifier of the inventory item to update"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated name of the inventory item"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated description"
          },
          {
            "name": "unit",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated unit of measure"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated current quantity on hand"
          },
          {
            "name": "minimumLevel",
            "type": "number",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated minimum stock threshold level"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated status (active or inactive)"
          }
        ],
        "output": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Identifier of the updated inventory item"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Name of the updated inventory item"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Current quantity after update"
          },
          {
            "name": "minimumLevel",
            "type": "number",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Minimum level after update"
          },
          {
            "name": "isLowStock",
            "type": "boolean",
            "required": true,
            "description": "Whether the item is below minimum stock threshold"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Status of the inventory item after update"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [
          "InventoryItem"
        ],
        "rulesApplied": [
          "inventoryLowStockThreshold"
        ],
        "transactional": true,
        "steps": [
          "Load InventoryItem by inventoryItemId via InventoryItem port",
          "Validate that the item exists and is not in a terminal state",
          "Apply provided field changes (name, description, unit, currentQuantity, minimumLevel, status) to the loaded aggregate",
          "Evaluate inventoryLowStockThreshold rule: if currentQuantity <= minimumLevel mark isLowStock true",
          "Save the updated InventoryItem aggregate via InventoryItem port",
          "Return updated item id, key fields, isLowStock flag, and updatedAt timestamp"
        ]
      },
      {
        "functionName": "adjustInventoryQuantity",
        "inputTypeName": "AdjustInventoryQuantityInput",
        "outputTypeName": "AdjustInventoryQuantityOutput",
        "input": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Identifier of the inventory item to adjust"
          },
          {
            "name": "quantityDelta",
            "type": "number",
            "required": true,
            "description": "Positive or negative quantity adjustment to apply"
          }
        ],
        "output": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Identifier of the adjusted inventory item"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Name of the adjusted inventory item"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Resulting quantity after adjustment"
          },
          {
            "name": "minimumLevel",
            "type": "number",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Minimum stock threshold level"
          },
          {
            "name": "isLowStock",
            "type": "boolean",
            "required": true,
            "description": "Whether the item fell below minimum stock threshold"
          },
          {
            "name": "consumptionTriggered",
            "type": "boolean",
            "required": true,
            "description": "Whether ingredient consumption was triggered by this adjustment"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Status of the inventory item after adjustment"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Timestamp of the adjustment"
          }
        ],
        "ports": [
          "InventoryItem"
        ],
        "rulesApplied": [
          "inventoryLowStockThreshold",
          "ingredientConsumptionTrigger"
        ],
        "transactional": true,
        "steps": [
          "Load InventoryItem by inventoryItemId via InventoryItem port",
          "Validate that the item exists and status is active",
          "Compute new currentQuantity = currentQuantity + quantityDelta; reject if result is negative",
          "Apply ingredientConsumptionTrigger rule: if quantityDelta is negative (consumption), trigger ingredient consumption event",
          "Apply inventoryLowStockThreshold rule: if new currentQuantity <= minimumLevel mark isLowStock true",
          "Save the updated InventoryItem aggregate via InventoryItem port",
          "Return adjusted item id, name, new quantity, minimumLevel, isLowStock, consumptionTriggered, status, and updatedAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default manageInventoryItemsUsecase;

export const pipeline = [
  {
    "id": "manageInventoryItems__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts"
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

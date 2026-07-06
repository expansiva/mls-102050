/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.defs.ts" enhancement="_blank"/>

export const updateOrderItemStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateOrderItemStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateOrderItemStatus",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "updateOrderItemStatus",
        "inputTypeName": "UpdateOrderItemStatusInput",
        "outputTypeName": "UpdateOrderItemStatusOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Parent aggregate id to load the order containing the item"
          },
          {
            "name": "orderItemId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "Id of the order item whose status will be updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "New status for the order item; must follow allowed transitions: new -> sentToKitchen -> inPreparation -> ready -> served, or any -> cancelled"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Id of the parent order aggregate"
          },
          {
            "name": "orderItemId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "Id of the updated order item"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "The new status applied to the order item"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "Timestamp of the status update"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "orderStatusTransitions",
          "ingredientConsumptionTrigger"
        ],
        "transactional": true,
        "steps": [
          "Load the Order aggregate via OrderPort.findById(orderId); throw NotFound if absent",
          "Locate the OrderItem by orderItemId within the order's item collection; throw NotFound if absent",
          "Validate the requested status transition against orderStatusTransitions rule (new->sentToKitchen->inPreparation->ready->served; any->cancelled); throw InvalidTransition if not allowed",
          "Apply the new status to the OrderItem and update its updatedAt timestamp",
          "If status transitions to 'inPreparation', trigger ingredientConsumptionTrigger rule to decrement stock for the menuItemId ingredients",
          "Save the Order aggregate via OrderPort.save(order)",
          "Return orderId, orderItemId, status, and updatedAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateOrderItemStatusUsecase;

export const pipeline = [
  {
    "id": "updateOrderItemStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.defs.ts",
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

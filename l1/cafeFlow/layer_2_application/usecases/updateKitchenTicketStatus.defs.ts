/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.defs.ts" enhancement="_blank"/>

export const updateKitchenTicketStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateKitchenTicketStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateKitchenTicketStatus",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "updateKitchenTicketStatus",
        "inputTypeName": "UpdateKitchenTicketStatusInput",
        "outputTypeName": "UpdateKitchenTicketStatusOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Identifier of the parent Order aggregate to load"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Identifier of the KitchenTicket whose status will be updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "New status for the kitchen ticket: open | inProgress | done | void"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Identifier of the updated KitchenTicket"
          },
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Identifier of the parent Order aggregate"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The new status applied to the KitchenTicket"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Timestamp of the status update"
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
          "Load the Order aggregate via OrderPort.findById(orderId); throw NotFound if missing",
          "Locate the KitchenTicket with kitchenTicketId inside the Order's kitchenTickets collection; throw NotFound if missing",
          "Validate the requested status transition against the orderStatusTransitions rule (e.g. open->inProgress, inProgress->done, open->void, etc.); throw InvalidTransition if not allowed",
          "Apply the new status to the KitchenTicket and set updatedAt to the current timestamp",
          "Save the Order aggregate via OrderPort.save(order)",
          "Return kitchenTicketId, orderId, status, and updatedAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateKitchenTicketStatusUsecase;

export const pipeline = [
  {
    "id": "updateKitchenTicketStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.defs.ts",
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

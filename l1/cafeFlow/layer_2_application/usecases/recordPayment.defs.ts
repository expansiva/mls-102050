/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/recordPayment.defs.ts" enhancement="_blank"/>

export const recordPaymentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "recordPayment",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "recordPayment",
    "ports": [
      "Payment",
      "Order",
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "recordPayment",
        "inputTypeName": "RecordPaymentInput",
        "outputTypeName": "RecordPaymentOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Reference to the order being paid"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Reference to the daily shift in which the payment is recorded"
          },
          {
            "name": "method",
            "type": "string",
            "required": true,
            "description": "Payment method (e.g. cash, card, pix)"
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "description": "Payment amount"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Initial payment status: authorized | captured | voided | refunded"
          }
        ],
        "output": [
          {
            "name": "paymentId",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "description": "Generated payment identifier"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Final payment status after rule validation"
          }
        ],
        "ports": [
          "Payment",
          "Order",
          "DailyShift"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType"
        ],
        "transactional": true,
        "steps": [
          "Load DailyShift by dailyShiftId via DailyShift port and verify its status is 'open'; reject if closed",
          "Load Order by orderId via Order port and verify order.dailyShiftId matches the provided dailyShiftId",
          "Apply rule paymentTimingByOrderType: if order.orderType is 'mesa', require order.status to be at least 'served' before accepting payment; if order.orderType is 'takeout', allow payment when order.status is 'sentToKitchen' or later",
          "Validate that amount is positive and does not exceed order.totalAmount minus already-recorded payments",
          "Create Payment entity with generated paymentId, provided orderId, dailyShiftId, method, amount, and status; set createdAt and updatedAt to current timestamp",
          "Save Payment via Payment port",
          "Return paymentId and final status"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default recordPaymentUsecase;

export const pipeline = [
  {
    "id": "recordPayment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/recordPayment.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
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

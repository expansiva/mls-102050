/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const viewOperationalDashboardUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewOperationalDashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewOperationalDashboard",
    "ports": [
      "DailyShift",
      "Order",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "viewOperationalDashboard",
        "inputTypeName": "ViewOperationalDashboardInput",
        "outputTypeName": "ViewOperationalDashboardOutput",
        "input": [
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "description": "Date of the shift to display on the operational dashboard (YYYY-MM-DD)"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": false,
            "description": "Optional specific shift ID; if omitted the shift for shiftDate is resolved"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Identifier of the resolved daily shift"
          },
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Date of the shift"
          },
          {
            "name": "shiftStatus",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Current status of the shift (open or closed)"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Timestamp when the shift was opened"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Timestamp when the shift was closed, if applicable"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Cash balance at shift opening"
          },
          {
            "name": "closingCashBalance",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Cash balance at shift closing, if closed"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Total sales recorded for the shift"
          },
          {
            "name": "totalPayments",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Total payments captured for the shift"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "required": true,
            "description": "Total number of orders in the shift"
          },
          {
            "name": "openOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders not yet closed or cancelled"
          },
          {
            "name": "closedOrders",
            "type": "number",
            "required": true,
            "description": "Count of closed orders"
          },
          {
            "name": "cancelledOrders",
            "type": "number",
            "required": true,
            "description": "Count of cancelled orders"
          },
          {
            "name": "totalOrderAmount",
            "type": "number",
            "required": true,
            "description": "Sum of totalAmount across all non-cancelled orders"
          },
          {
            "name": "totalCapturedPayments",
            "type": "number",
            "required": true,
            "description": "Sum of captured payment amounts"
          },
          {
            "name": "totalAuthorizedPayments",
            "type": "number",
            "required": true,
            "description": "Sum of authorized (not yet captured) payment amounts"
          },
          {
            "name": "totalRefundedPayments",
            "type": "number",
            "required": true,
            "description": "Sum of refunded payment amounts"
          },
          {
            "name": "totalCashIn",
            "type": "number",
            "required": true,
            "description": "Sum of entrada cash movements for the shift"
          },
          {
            "name": "totalCashOut",
            "type": "number",
            "required": true,
            "description": "Sum of saída cash movements for the shift"
          },
          {
            "name": "expectedCashBalance",
            "type": "number",
            "required": true,
            "description": "Computed expected cash: openingCashBalance + totalCashIn - totalCashOut + captured cash payments"
          }
        ],
        "ports": [
          "DailyShift",
          "Order",
          "Payment"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType",
          "aiOutputLanguageSelection"
        ],
        "transactional": false,
        "steps": [
          "Resolve the DailyShift by dailyShiftId or by shiftDate via DailyShift port",
          "Load all Orders for the resolved dailyShiftId via Order port",
          "Load all Payments for the resolved dailyShiftId via Payment port",
          "Apply paymentTimingByOrderType rule to classify payment timing expectations per order type (mesa vs takeout)",
          "Aggregate order counts by status (open, closed, cancelled) and sum totalAmount for non-cancelled orders",
          "Aggregate payment amounts by status (captured, authorized, refunded)",
          "Read CashMovement entries embedded in the DailyShift aggregate to compute totalCashIn and totalCashOut",
          "Compute expectedCashBalance = openingCashBalance + totalCashIn - totalCashOut + capturedCashPayments",
          "Apply aiOutputLanguageSelection rule to determine dashboard label language for the response",
          "Assemble and return the dashboard projection"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewOperationalDashboardUsecase;

export const pipeline = [
  {
    "id": "viewOperationalDashboard__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts"
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

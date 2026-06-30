/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.defs.ts" enhancement="_blank"/>

export const generateShiftCloseReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "generateShiftCloseReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "generateShiftCloseReport",
    "ports": [
      "DailyShift",
      "Payment",
      "Order"
    ],
    "functions": [
      {
        "functionName": "generateShiftCloseReport",
        "inputTypeName": "GenerateShiftCloseReportInput",
        "outputTypeName": "ShiftCloseReportOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "ID of the daily shift to generate the close report for"
          },
          {
            "name": "outputLanguage",
            "type": "string",
            "required": false,
            "description": "Preferred language for AI-generated report narrative (applies aiOutputLanguageSelection rule)"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "ID of the reported daily shift"
          },
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Date of the shift"
          },
          {
            "name": "status",
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
            "description": "Cash balance at shift closing"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Total sales amount for the shift"
          },
          {
            "name": "totalPayments",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Total payments captured for the shift"
          },
          {
            "name": "closingNotes",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Notes recorded at shift closing"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "required": true,
            "description": "Count of all orders in the shift"
          },
          {
            "name": "ordersByType",
            "type": "string",
            "required": true,
            "description": "JSON breakdown of order counts and totals by orderType (mesa/takeout), applying paymentTimingByOrderType rule"
          },
          {
            "name": "paymentsByMethod",
            "type": "string",
            "required": true,
            "description": "JSON breakdown of captured payments grouped by payment method with totals"
          },
          {
            "name": "paymentsByOrderType",
            "type": "string",
            "required": true,
            "description": "JSON breakdown of payments categorized by associated order type, applying paymentTimingByOrderType rule"
          },
          {
            "name": "cashMovementsSummary",
            "type": "string",
            "required": true,
            "description": "JSON summary of cash movements (entrada/saída) with totals, read via DailyShift aggregate children"
          },
          {
            "name": "orderItemsSummary",
            "type": "string",
            "required": true,
            "description": "JSON summary of order items (top items, quantities, revenue) read via Order aggregate children"
          },
          {
            "name": "reportLanguage",
            "type": "string",
            "required": true,
            "description": "Language selected for the report narrative, applying aiOutputLanguageSelection rule"
          },
          {
            "name": "reportNarrative",
            "type": "string",
            "required": false,
            "description": "AI-generated narrative summary of the shift in the selected language"
          }
        ],
        "ports": [
          "DailyShift",
          "Payment",
          "Order"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType",
          "aiOutputLanguageSelection"
        ],
        "transactional": false,
        "steps": [
          "1. Load DailyShift by dailyShiftId via DailyShift port (including embedded CashMovement children)",
          "2. Validate that the DailyShift exists; if status is 'open', include a warning in the report that the shift is not yet closed",
          "3. Load all Orders for the shift via Order port filtered by dailyShiftId (including embedded OrderItem children)",
          "4. Load all Payments for the shift via Payment port filtered by dailyShiftId",
          "5. Apply paymentTimingByOrderType rule: categorize each payment by the orderType of its associated Order (mesa vs takeout) and compute timing metrics (when payment was captured relative to order lifecycle)",
          "6. Aggregate payments by method (cash, card, etc.) with captured amounts only (exclude voided/refunded)",
          "7. Aggregate orders by type (mesa/takeout) with counts and total amounts",
          "8. Summarize cash movements (entrada/saída) from the DailyShift aggregate children",
          "9. Summarize order items from Order aggregate children (top-selling items, total quantities, revenue)",
          "10. Apply aiOutputLanguageSelection rule: determine the output language from the input preference or default, and generate a narrative summary of the shift in that language",
          "11. Assemble and return the complete ShiftCloseReportOutput with all aggregated sections"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default generateShiftCloseReportUsecase;

export const pipeline = [
  {
    "id": "generateShiftCloseReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts",
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

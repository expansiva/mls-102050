/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.defs.ts" enhancement="_blank"/>

export const openDailyShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "openDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "openDailyShift",
    "ports": [
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "openDailyShift",
        "inputTypeName": "OpenDailyShiftInput",
        "outputTypeName": "OpenDailyShiftOutput",
        "input": [
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "description": "Date of the shift to open (ISO date)"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": true,
            "description": "Initial cash balance at shift open"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "description": "Generated id of the newly opened DailyShift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status of the shift (always 'open' on creation)"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": true,
            "description": "Timestamp when the shift was opened"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "SHIFT-001: No duplicate open shift for the same shiftDate",
          "SHIFT-002: Opening cash balance must be >= 0",
          "SHIFT-003: Initial CashMovement of type 'entrada' recorded on shift open with reason 'Abertura de caixa'"
        ],
        "transactional": true,
        "steps": [
          "Query DailyShift port for any existing shift with status='open' for the given shiftDate; reject if found (SHIFT-001)",
          "Validate openingCashBalance >= 0 (SHIFT-002)",
          "Create DailyShift aggregate: status='open', openedAt=now, openingCashBalance, createdAt=now, updatedAt=now",
          "Create embedded CashMovement: movementType='entrada', amount=openingCashBalance, reason='Abertura de caixa', createdAt=now, updatedAt=now (SHIFT-003)",
          "Save DailyShift aggregate (with embedded CashMovement) via DailyShift port",
          "Return dailyShiftId, status, openedAt"
        ]
      },
      {
        "functionName": "findOpenShiftByDate",
        "inputTypeName": "FindOpenShiftByDateInput",
        "outputTypeName": "FindOpenShiftByDateOutput",
        "input": [
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "description": "Date to search for an open shift"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": false,
            "description": "Id of the open shift if found"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Status of the found shift"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": false,
            "description": "Timestamp when the shift was opened"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": false,
            "description": "Opening cash balance of the found shift"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "SHIFT-001: No duplicate open shift for the same shiftDate"
        ],
        "transactional": false,
        "steps": [
          "Query DailyShift port for a shift with status='open' matching the given shiftDate",
          "Return shift details if found, empty result otherwise"
        ]
      }
    ],
    "rulesApplied": [
      "SHIFT-001: No duplicate open shift for the same shiftDate",
      "SHIFT-002: Opening cash balance must be >= 0",
      "SHIFT-003: Initial CashMovement of type 'entrada' recorded on shift open with reason 'Abertura de caixa'"
    ],
    "mdmRefs": []
  }
} as const;

export default openDailyShiftUsecase;

export const pipeline = [
  {
    "id": "openDailyShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "SHIFT-001: No duplicate open shift for the same shiftDate",
      "SHIFT-002: Opening cash balance must be >= 0",
      "SHIFT-003: Initial CashMovement of type 'entrada' recorded on shift open with reason 'Abertura de caixa'"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;

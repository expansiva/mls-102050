/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.defs.ts" enhancement="_blank"/>

export const recordOpeningCashMovementUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "recordOpeningCashMovement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "recordOpeningCashMovement",
    "ports": [
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "recordOpeningCashMovement",
        "inputTypeName": "RecordOpeningCashMovementInput",
        "outputTypeName": "RecordOpeningCashMovementOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "ID of the DailyShift to record the opening cash movement on"
          },
          {
            "name": "movementType",
            "type": "string",
            "required": true,
            "ofEntity": "CashMovement",
            "description": "Type of cash movement: 'entrada' or 'saída'"
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "ofEntity": "CashMovement",
            "description": "Monetary amount of the cash movement"
          },
          {
            "name": "reason",
            "type": "string",
            "required": true,
            "ofEntity": "CashMovement",
            "description": "Reason for the cash movement"
          }
        ],
        "output": [
          {
            "name": "cashMovementId",
            "type": "string",
            "required": true,
            "ofEntity": "CashMovement",
            "description": "ID of the newly created cash movement"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "ID of the parent DailyShift aggregate"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Result status of the operation"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "DailyShift must be in 'open' status to record a cash movement",
          "CashMovement is created and embedded in the DailyShift aggregate; no separate repository",
          "cashMovementId, createdAt and updatedAt are server-generated",
          "Opening cash movement sets or updates DailyShift.openingCashBalance"
        ],
        "transactional": true,
        "steps": [
          "Load DailyShift by dailyShiftId via DailyShift port",
          "Validate DailyShift.status is 'open'; reject if closed",
          "Create a new CashMovement with provided movementType, amount, reason; generate cashMovementId, createdAt, updatedAt",
          "Add the CashMovement to the DailyShift's cash movements collection",
          "If movementType is 'entrada', set DailyShift.openingCashBalance to the movement amount (if not already set) or accumulate",
          "Save the DailyShift aggregate via DailyShift port",
          "Return cashMovementId, dailyShiftId and status"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default recordOpeningCashMovementUsecase;

export const pipeline = [
  {
    "id": "recordOpeningCashMovement__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.defs.ts",
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
    "agent": "agentCbMaterialize"
  }
] as const;

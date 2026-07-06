/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.defs.ts" enhancement="_blank"/>

export const createDailyShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createDailyShift",
    "ports": [
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "createDailyShift",
        "inputTypeName": "CreateDailyShiftInput",
        "outputTypeName": "CreateDailyShiftOutput",
        "input": [
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "description": "The calendar date the shift belongs to (ISO date)"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Initial shift status: 'open' or 'closed'"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": true,
            "description": "Timestamp when the shift was opened (ISO datetime)"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": false,
            "description": "Timestamp when the shift was closed (ISO datetime)"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": false,
            "description": "Cash float counted at shift opening"
          },
          {
            "name": "closingCashBalance",
            "type": "number",
            "required": false,
            "description": "Cash float counted at shift closing"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": false,
            "description": "Accumulated sales total for the shift"
          },
          {
            "name": "totalPayments",
            "type": "number",
            "required": false,
            "description": "Accumulated payments total for the shift"
          },
          {
            "name": "closingNotes",
            "type": "string",
            "required": false,
            "description": "Free-text notes recorded at closing"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "description": "The id of the newly created daily shift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "The status of the created shift ('open' or 'closed')"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType",
          "aiOutputLanguageSelection"
        ],
        "transactional": true,
        "steps": [
          "1. Load existing DailyShift records for the given shiftDate via DailyShift port to check for duplicates",
          "2. Validate that no open shift already exists for the same shiftDate — reject if a shift with status 'open' is found",
          "3. Apply paymentTimingByOrderType rule to set default payment timing expectations on the new shift",
          "4. Apply aiOutputLanguageSelection rule to determine the language for any AI-generated shift summaries",
          "5. Create a new DailyShift aggregate with the provided fields, generating dailyShiftId, createdAt, and updatedAt server-side",
          "6. Set initial status to 'open' unless 'closed' is explicitly provided with a valid closedAt timestamp",
          "7. Save the DailyShift aggregate via the DailyShift port",
          "8. Return the dailyShiftId and status of the created shift"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createDailyShiftUsecase;

export const pipeline = [
  {
    "id": "createDailyShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.defs.ts",
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

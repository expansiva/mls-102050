/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.defs.ts" enhancement="_blank"/>

export const manageTablesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "manageTables",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "manageTables",
    "ports": [],
    "functions": [
      {
        "functionName": "updateTable",
        "inputTypeName": "UpdateTableInput",
        "outputTypeName": "UpdateTableOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identifier of the table to update"
          },
          {
            "name": "number",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Table number label"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Table status: active or inactive"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identifier of the updated table"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Timestamp of the last update"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "table-must-exist",
          "at-least-one-field-must-be-provided",
          "status-must-be-valid-enum"
        ],
        "transactional": true,
        "steps": [
          "Load Table aggregate by tableId via TablePort",
          "Validate that at least one writable field (number or status) is provided",
          "If status is provided, validate it is one of: active, inactive",
          "Apply field changes to the Table aggregate",
          "Set updatedAt to current timestamp",
          "Save Table aggregate via TablePort",
          "Return tableId and updatedAt"
        ]
      },
      {
        "functionName": "changeTableStatus",
        "inputTypeName": "ChangeTableStatusInput",
        "outputTypeName": "ChangeTableStatusOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identifier of the table whose status will change"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "New status: active or inactive"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identifier of the updated table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "The new status applied"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Timestamp of the status change"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "table-must-exist",
          "status-must-be-valid-enum"
        ],
        "transactional": true,
        "steps": [
          "Load Table aggregate by tableId via TablePort",
          "Validate status is one of: active, inactive",
          "Apply new status to the Table aggregate",
          "Set updatedAt to current timestamp",
          "Save Table aggregate via TablePort",
          "Return tableId, status, and updatedAt"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default manageTablesUsecase;

export const pipeline = [
  {
    "id": "manageTables__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;

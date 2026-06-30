/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageTables.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "manageTables",
    "purpose": "Gerenciar mesas",
    "kind": "command",
    "input": [
      {
        "name": "tableId",
        "type": "string",
        "required": false,
        "description": "Identificador único da mesa."
      },
      {
        "name": "number",
        "type": "string",
        "required": true,
        "description": "Número ou identificador da mesa no salão."
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Situação cadastral da mesa (não confundir com ocupação operacional, que vive em TableOccupancy)."
      }
    ],
    "output": [
      {
        "name": "tableId",
        "type": "string",
        "description": "Identificador único da mesa."
      }
    ]
  }
];

export const pipeline = [
  {
    "id": "manageTables__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/manageTables.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageTables.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;

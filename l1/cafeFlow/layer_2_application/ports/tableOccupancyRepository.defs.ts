/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/tableOccupancyRepository.defs.ts" enhancement="_blank"/>

export const tableOccupancyRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "TableOccupancyRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "TableOccupancy",
    "interfaceName": "ITableOccupancyRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: TableOccupancyId"
        ],
        "returns": "TableOccupancy"
      },
      {
        "name": "list",
        "params": [
          "filter: TableOccupancyFilter"
        ],
        "returns": "TableOccupancy[]"
      },
      {
        "name": "save",
        "params": [
          "tableOccupancy: TableOccupancy"
        ],
        "returns": "void"
      },
      {
        "name": "findActiveByTable",
        "params": [
          "tableId: TableId"
        ],
        "returns": "TableOccupancy | null"
      },
      {
        "name": "findActive",
        "params": [],
        "returns": "TableOccupancy[]"
      }
    ]
  }
} as const;

export default tableOccupancyRepositoryPort;

export const pipeline = [
  {
    "id": "tableOccupancyRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/ports/tableOccupancyRepository.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/ports/tableOccupancyRepository.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/tableOccupancy.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;

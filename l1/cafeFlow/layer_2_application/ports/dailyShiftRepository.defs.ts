/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.defs.ts" enhancement="_blank"/>

export const dailyShiftRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "DailyShiftRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "DailyShift",
    "interfaceName": "IDailyShiftRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: DailyShiftId"
        ],
        "returns": "DailyShift"
      },
      {
        "name": "list",
        "params": [
          "filter: DailyShiftFilter"
        ],
        "returns": "DailyShift[]"
      },
      {
        "name": "save",
        "params": [
          "dailyShift: DailyShift"
        ],
        "returns": "void"
      },
      {
        "name": "findOpenShift",
        "params": [],
        "returns": "DailyShift | null"
      },
      {
        "name": "findByDate",
        "params": [
          "businessDate: LocalDate"
        ],
        "returns": "DailyShift[]"
      }
    ]
  }
} as const;

export default dailyShiftRepositoryPort;

export const pipeline = [
  {
    "id": "dailyShiftRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
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

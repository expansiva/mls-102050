/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/tableOccupancyRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const tableOccupancyRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "TableOccupancyRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "TableOccupancyRepositoryAdapter",
    "entityId": "TableOccupancy",
    "portRef": "ITableOccupancyRepository",
    "tableRef": "table_occupancies",
    "mdmReads": [
      "Table"
    ],
    "notes": [
      "Columns: table_occupancy_id, table_id, status, created_at",
      "Details JSONB: currentChargesTotal, openedAt, closedAt, updatedAt",
      "MDM ref Table resolved via 102034 runtime; ctx.data allowed"
    ]
  }
} as const;

export default tableOccupancyRepositoryAdapter;

export const pipeline = [
  {
    "id": "tableOccupancyRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/tableOccupancyRepositoryAdapter.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/tableOccupancyRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/tableOccupancyRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/tableOccupancy.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/tableOccupancy.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;

/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/tableOccupancy.defs.ts" enhancement="_blank"/>

export const tableOccupancyTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "TableOccupancy",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "TableOccupancy",
    "tableName": "table_occupancy",
    "columns": [
      {
        "name": "table_occupancy_id",
        "type": "string",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "table_id",
        "type": "string",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "status",
        "type": "string",
        "nullable": false,
        "description": "status"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "ordering"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": true,
        "description": "currentChargesTotal, openedAt, closedAt, updatedAt"
      }
    ],
    "primaryKey": [
      "table_occupancy_id"
    ],
    "indexes": [
      {
        "indexName": "idx_table_occupancy_table_id",
        "columns": [
          "table_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_table_occupancy_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_table_occupancy_created_at",
        "columns": [
          "created_at"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    }
  }
} as const;

export default tableOccupancyTableDefinition;

export const pipeline = [
  {
    "id": "tableOccupancy__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/tableOccupancy.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/tableOccupancy.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/tableOccupancy.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/persistenceTable.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;

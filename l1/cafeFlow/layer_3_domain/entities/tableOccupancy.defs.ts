/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/tableOccupancy.defs.ts" enhancement="_blank"/>

export const tableOccupancyDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "TableOccupancy",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "TableOccupancy",
    "fields": [
      {
        "fieldId": "tableOccupancyId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do registro de ocupação."
      },
      {
        "fieldId": "tableId",
        "type": "uuid",
        "required": true,
        "description": "Referência ao cadastro da mesa (Table, MDM)."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Situação operacional da mesa no atendimento.",
        "enum": [
          "available",
          "occupied",
          "disabled"
        ]
      },
      {
        "fieldId": "currentChargesTotal",
        "type": "decimal",
        "required": true,
        "description": "Consumo acumulado da mesa na ocupação atual."
      },
      {
        "fieldId": "openedAt",
        "type": "datetime",
        "required": false,
        "description": "Início da ocupação atual (null quando livre)."
      },
      {
        "fieldId": "closedAt",
        "type": "datetime",
        "required": false,
        "description": "Fim da última ocupação (null enquanto ocupada)."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do registro."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do registro."
      }
    ],
    "statusEnum": [
      "available",
      "occupied",
      "disabled"
    ],
    "invariants": [
      "currentChargesTotal must not be negative",
      "openedAt must be set when status is occupied",
      "closedAt must be set when transitioning from occupied to available",
      "openedAt must be null when status is available",
      "status can only transition: available→occupied, occupied→available, available→disabled, disabled→available"
    ],
    "valueObjects": []
  }
} as const;

export default tableOccupancyDomainEntity;

export const pipeline = [
  {
    "id": "tableOccupancy__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/tableOccupancy.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/tableOccupancy.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;

/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "openDailyShift",
  "pageName": "Abrir turno diário",
  "actor": "cashier",
  "purpose": "Executar Abrir turno diário.",
  "capabilities": [
    "openDailyShift"
  ],
  "flowRefs": {
    "experienceFlows": [
      "openDailyShift"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "openDailyShift"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.openDailyShift.main",
      "type": "section",
      "sectionName": "Abrir turno diário",
      "titleKey": "openDailyShift.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.createDailyShift",
          "type": "form",
          "organismName": "CreateDailyShift",
          "titleKey": "openDailyShift.organism.createDailyShift.title",
          "purpose": "Criar turno diário",
          "userActions": [
            "createDailyShift"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [
            "DailyShift.dailyShiftId",
            "DailyShift.shiftDate",
            "DailyShift.status",
            "DailyShift.openedAt",
            "DailyShift.openingCashBalance",
            "DailyShift.createdAt",
            "DailyShift.updatedAt"
          ],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.createDailyShift.form",
              "intent": "commandForm",
              "submitAction": "createDailyShift",
              "order": 10
            }
          ]
        },
        {
          "id": "organism.recordOpeningCashMovement",
          "type": "form",
          "organismName": "RecordOpeningCashMovement",
          "titleKey": "openDailyShift.organism.recordOpeningCashMovement.title",
          "purpose": "Registrar movimento de caixa de abertura",
          "userActions": [
            "recordOpeningCashMovement"
          ],
          "requiredEntities": [
            "CashMovement",
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [
            "CashMovement.dailyShiftId",
            "CashMovement.movementType",
            "CashMovement.amount",
            "CashMovement.reason",
            "CashMovement.createdAt",
            "CashMovement.updatedAt"
          ],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intention.recordOpeningCashMovement.form",
              "intent": "commandForm",
              "submitAction": "recordOpeningCashMovement",
              "order": 10
            },
            {
              "id": "intention.openDailyShift.summary",
              "intent": "summary",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "openDailyShift.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.openDailyShift.main",
        "type": "section",
        "sectionName": "Abrir turno diário",
        "titleKey": "openDailyShift.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.createDailyShift",
            "type": "form",
            "organismName": "CreateDailyShift",
            "titleKey": "openDailyShift.organism.createDailyShift.title",
            "purpose": "Criar turno diário",
            "userActions": [
              "createDailyShift"
            ],
            "requiredEntities": [
              "DailyShift"
            ],
            "readsFields": [],
            "writesFields": [
              "DailyShift.dailyShiftId",
              "DailyShift.shiftDate",
              "DailyShift.status",
              "DailyShift.openedAt",
              "DailyShift.openingCashBalance",
              "DailyShift.createdAt",
              "DailyShift.updatedAt"
            ],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.createDailyShift.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "openDailyShift.intention.createDailyShift.title",
                "submitAction": "createDailyShift",
                "fields": [
                  {
                    "id": "field.createDailyShift.shiftDate",
                    "field": "shiftDate",
                    "labelKey": "openDailyShift.field.shiftDate.label",
                    "order": 10,
                    "required": true,
                    "inputType": "date",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.shiftDate"
                  },
                  {
                    "id": "field.createDailyShift.status",
                    "field": "status",
                    "labelKey": "openDailyShift.field.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.status"
                  },
                  {
                    "id": "field.createDailyShift.openedAt",
                    "field": "openedAt",
                    "labelKey": "openDailyShift.field.openedAt.label",
                    "order": 30,
                    "required": true,
                    "inputType": "datetime",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.openedAt"
                  },
                  {
                    "id": "field.createDailyShift.openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "openDailyShift.field.openingCashBalance.label",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.openingCashBalance"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.createDailyShift.submit",
                    "action": "createDailyShift",
                    "labelKey": "openDailyShift.action.createDailyShift.label",
                    "order": 10,
                    "actionKey": "createDailyShift"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.recordOpeningCashMovement",
            "type": "form",
            "organismName": "RecordOpeningCashMovement",
            "titleKey": "openDailyShift.organism.recordOpeningCashMovement.title",
            "purpose": "Registrar movimento de caixa de abertura",
            "userActions": [
              "recordOpeningCashMovement"
            ],
            "requiredEntities": [
              "CashMovement",
              "DailyShift"
            ],
            "readsFields": [],
            "writesFields": [
              "CashMovement.dailyShiftId",
              "CashMovement.movementType",
              "CashMovement.amount",
              "CashMovement.reason",
              "CashMovement.createdAt",
              "CashMovement.updatedAt"
            ],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intention.recordOpeningCashMovement.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "openDailyShift.intention.recordOpeningCashMovement.title",
                "submitAction": "recordOpeningCashMovement",
                "fields": [
                  {
                    "id": "field.recordOpeningCashMovement.movementType",
                    "field": "movementType",
                    "labelKey": "openDailyShift.field.movementType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.movementType"
                  },
                  {
                    "id": "field.recordOpeningCashMovement.amount",
                    "field": "amount",
                    "labelKey": "openDailyShift.field.amount.label",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.amount"
                  },
                  {
                    "id": "field.recordOpeningCashMovement.reason",
                    "field": "reason",
                    "labelKey": "openDailyShift.field.reason.label",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.reason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.recordOpeningCashMovement.submit",
                    "action": "recordOpeningCashMovement",
                    "labelKey": "openDailyShift.action.recordOpeningCashMovement.label",
                    "order": 10,
                    "actionKey": "recordOpeningCashMovement"
                  }
                ]
              },
              {
                "id": "intention.openDailyShift.summary",
                "intent": "summary",
                "order": 20,
                "titleKey": "openDailyShift.intention.summary.title",
                "fields": [
                  {
                    "id": "field.summary.shiftDate",
                    "field": "shiftDate",
                    "labelKey": "openDailyShift.field.shiftDate.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.openDailyShift.layout.field-summary-shiftDate"
                  },
                  {
                    "id": "field.summary.status",
                    "field": "status",
                    "labelKey": "openDailyShift.field.status.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.openDailyShift.layout.field-summary-status"
                  },
                  {
                    "id": "field.summary.openedAt",
                    "field": "openedAt",
                    "labelKey": "openDailyShift.field.openedAt.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.openDailyShift.layout.field-summary-openedAt"
                  },
                  {
                    "id": "field.summary.openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "openDailyShift.field.openingCashBalance.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.openDailyShift.layout.field-summary-openingCashBalance"
                  },
                  {
                    "id": "field.summary.movementType",
                    "field": "movementType",
                    "labelKey": "openDailyShift.field.movementType.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.movementType"
                  },
                  {
                    "id": "field.summary.amount",
                    "field": "amount",
                    "labelKey": "openDailyShift.field.amount.label",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.amount"
                  },
                  {
                    "id": "field.summary.reason",
                    "field": "reason",
                    "labelKey": "openDailyShift.field.reason.label",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.reason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "openDailyShift__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/openDailyShift.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/openDailyShift.ts",
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts"
    ],
    "dependsOn": [
      "openDailyShift__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "POS-first, high-contrast, touch-friendly, low-latency, status-driven UI"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;

/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordPayment",
  "pageName": "Registrar pagamento/recebimento",
  "actor": "cashier",
  "purpose": "Executar Registrar pagamento/recebimento.",
  "capabilities": [
    "recordPayment"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.recordPayment.main",
      "type": "section",
      "sectionName": "Registrar pagamento/recebimento",
      "titleKey": "recordPayment.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.recordPayment.form",
          "type": "form",
          "organismName": "RecordPayment",
          "titleKey": "recordPayment.organism.form.title",
          "purpose": "Registrar pagamento/recebimento",
          "userActions": [
            "recordPayment"
          ],
          "requiredEntities": [
            "Payment",
            "Order",
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [
            "method",
            "amount",
            "status"
          ],
          "rulesApplied": [
            "paymentTimingByOrderType"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.recordPayment.commandForm",
              "intent": "commandForm",
              "action": "recordPayment",
              "submitAction": "recordPayment",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "recordPayment.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.recordPayment.main",
        "type": "section",
        "sectionName": "Registrar pagamento/recebimento",
        "titleKey": "recordPayment.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.recordPayment.form",
            "type": "form",
            "organismName": "RecordPayment",
            "titleKey": "recordPayment.organism.form.title",
            "purpose": "Registrar pagamento/recebimento",
            "userActions": [
              "recordPayment"
            ],
            "requiredEntities": [
              "Payment",
              "Order",
              "DailyShift"
            ],
            "readsFields": [],
            "writesFields": [
              "method",
              "amount",
              "status"
            ],
            "rulesApplied": [
              "paymentTimingByOrderType"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.recordPayment.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "recordPayment.intention.commandForm.title",
                "action": "recordPayment",
                "submitAction": "recordPayment",
                "fields": [
                  {
                    "id": "field.recordPayment.method",
                    "field": "method",
                    "labelKey": "recordPayment.field.method.label",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.recordPayment.input.recordPayment.method"
                  },
                  {
                    "id": "field.recordPayment.amount",
                    "field": "amount",
                    "labelKey": "recordPayment.field.amount.label",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "format": "currency",
                    "stateKey": "ui.recordPayment.input.recordPayment.amount"
                  },
                  {
                    "id": "field.recordPayment.status",
                    "field": "status",
                    "labelKey": "recordPayment.field.status.label",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.recordPayment.input.recordPayment.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.recordPayment.submit",
                    "action": "recordPayment",
                    "labelKey": "recordPayment.action.submit.label",
                    "order": 10,
                    "actionKey": "recordPayment"
                  }
                ]
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
    "id": "recordPayment__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/recordPayment.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/recordPayment.ts",
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts"
    ],
    "dependsOn": [
      "recordPayment__l2_shared"
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

/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "viewOperationalDashboard",
  "pageName": "Ver dashboard operacional do dia",
  "actor": "manager",
  "purpose": "Executar Ver dashboard operacional do dia.",
  "capabilities": [
    "viewOperationalDashboard"
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
      "id": "section-10",
      "type": "section",
      "sectionName": "Ver dashboard operacional do dia",
      "titleKey": "viewOperationalDashboard.section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism-10",
          "type": "panel",
          "organismName": "ViewOperationalDashboard",
          "titleKey": "viewOperationalDashboard.organism.title",
          "purpose": "Ver dashboard operacional do dia",
          "userActions": [
            "viewOperationalDashboard"
          ],
          "requiredEntities": [
            "DailyShift",
            "Order",
            "Payment",
            "CashMovement"
          ],
          "readsFields": [
            "dailyShiftId",
            "shiftDate",
            "status",
            "openedAt",
            "closedAt",
            "createdAt",
            "openingCashBalance",
            "closingCashBalance",
            "totalSales"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention-10",
              "intent": "queryList",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "action": "viewOperationalDashboard",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "viewOperationalDashboard.layout",
    "type": "page",
    "sections": [
      {
        "id": "section-10",
        "type": "section",
        "sectionName": "Ver dashboard operacional do dia",
        "titleKey": "viewOperationalDashboard.section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism-10",
            "type": "panel",
            "organismName": "ViewOperationalDashboard",
            "titleKey": "viewOperationalDashboard.organism.title",
            "purpose": "Ver dashboard operacional do dia",
            "userActions": [
              "viewOperationalDashboard"
            ],
            "requiredEntities": [
              "DailyShift",
              "Order",
              "Payment",
              "CashMovement"
            ],
            "readsFields": [
              "dailyShiftId",
              "shiftDate",
              "status",
              "openedAt",
              "closedAt",
              "createdAt",
              "openingCashBalance",
              "closingCashBalance",
              "totalSales"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention-10",
                "intent": "queryList",
                "order": 10,
                "titleKey": "viewOperationalDashboard.intention.query.title",
                "action": "viewOperationalDashboard",
                "fields": [],
                "columns": [
                  {
                    "id": "col-10",
                    "field": "dailyShiftId",
                    "labelKey": "viewOperationalDashboard.field.dailyShiftId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-20",
                    "field": "shiftDate",
                    "labelKey": "viewOperationalDashboard.field.shiftDate",
                    "order": 20,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-30",
                    "field": "status",
                    "labelKey": "viewOperationalDashboard.field.status",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-40",
                    "field": "openedAt",
                    "labelKey": "viewOperationalDashboard.field.openedAt",
                    "order": 40,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-50",
                    "field": "closedAt",
                    "labelKey": "viewOperationalDashboard.field.closedAt",
                    "order": 50,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-60",
                    "field": "openingCashBalance",
                    "labelKey": "viewOperationalDashboard.field.openingCashBalance",
                    "order": 60,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-70",
                    "field": "closingCashBalance",
                    "labelKey": "viewOperationalDashboard.field.closingCashBalance",
                    "order": 70,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-80",
                    "field": "totalSales",
                    "labelKey": "viewOperationalDashboard.field.totalSales",
                    "order": 80,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-10",
                    "field": "dailyShiftId",
                    "labelKey": "viewOperationalDashboard.filter.dailyShiftId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId"
                  },
                  {
                    "id": "filter-20",
                    "field": "shiftDate",
                    "labelKey": "viewOperationalDashboard.filter.shiftDate",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate"
                  },
                  {
                    "id": "filter-30",
                    "field": "status",
                    "labelKey": "viewOperationalDashboard.filter.status",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status"
                  },
                  {
                    "id": "filter-40",
                    "field": "openedAt",
                    "labelKey": "viewOperationalDashboard.filter.openedAt",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt"
                  },
                  {
                    "id": "filter-50",
                    "field": "closedAt",
                    "labelKey": "viewOperationalDashboard.filter.closedAt",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt"
                  },
                  {
                    "id": "filter-60",
                    "field": "createdAt",
                    "labelKey": "viewOperationalDashboard.filter.createdAt",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar-10",
                    "action": "viewOperationalDashboard",
                    "labelKey": "viewOperationalDashboard.action.refresh",
                    "order": 10,
                    "actionKey": "viewOperationalDashboard"
                  }
                ],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-10",
                    "action": "viewOperationalDashboard",
                    "labelKey": "viewOperationalDashboard.action.run",
                    "order": 10,
                    "actionKey": "viewOperationalDashboard"
                  }
                ],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
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
    "id": "viewOperationalDashboard__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.ts",
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts"
    ],
    "dependsOn": [
      "viewOperationalDashboard__l2_shared"
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

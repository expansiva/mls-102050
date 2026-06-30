/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "aiSalesSummary",
  "pageName": "Assistente IA: resumo de vendas do dia",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:aiSalesSummary"
  ],
  "operationIds": [
    "aiSalesSummary"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.defs.ts",
    "layoutId": "aiSalesSummary.layout"
  },
  "states": [
    {
      "stateKey": "ui.aiSalesSummary.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiSalesSummary.action.aiSalesSummary.status",
      "name": "aiSalesSummaryState",
      "kind": "actionStatus",
      "actionRef": "aiSalesSummary",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId",
      "name": "aiSalesSummaryDailyShiftId",
      "kind": "input",
      "contractRef": {
        "commandName": "aiSalesSummary",
        "direction": "input",
        "field": "dailyShiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.status",
      "name": "aiSalesSummaryStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "aiSalesSummary",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.closedAt",
      "name": "aiSalesSummaryClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "aiSalesSummary",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiSalesSummary.data.aiSalesSummary",
      "name": "aiSalesSummaryData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "aiSalesSummary",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "aiSalesSummary",
      "kind": "query",
      "commandRef": "aiSalesSummary",
      "routeKey": "cafeFlow.aiSalesSummary.aiSalesSummary",
      "purpose": "Assistente IA: resumo de vendas do dia",
      "methodName": "loadAiSalesSummary",
      "handlerName": "handleAiSalesSummaryClick",
      "inputStateKeys": [
        "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId",
        "ui.aiSalesSummary.input.aiSalesSummary.status",
        "ui.aiSalesSummary.input.aiSalesSummary.closedAt"
      ],
      "outputStateKeys": [
        "ui.aiSalesSummary.data.aiSalesSummary"
      ],
      "statusStateKey": "ui.aiSalesSummary.action.aiSalesSummary.status"
    },
    {
      "actionId": "set.aiSalesSummaryDailyShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId",
      "methodName": "setAiSalesSummaryDailyShiftId",
      "handlerName": "handleAiSalesSummaryDailyShiftIdChange"
    },
    {
      "actionId": "set.aiSalesSummaryStatus",
      "kind": "stateSetter",
      "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.status",
      "methodName": "setAiSalesSummaryStatus",
      "handlerName": "handleAiSalesSummaryStatusChange"
    },
    {
      "actionId": "set.aiSalesSummaryClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.closedAt",
      "methodName": "setAiSalesSummaryClosedAt",
      "handlerName": "handleAiSalesSummaryClosedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "aiSalesSummary",
      "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
    }
  ],
  "navigationRefs": [],
  "i18n": {
    "aiSalesSummary.section.main.title": "Assistente IA: resumo de vendas do dia",
    "aiSalesSummary.organism.main.title": "Assistente IA: resumo de vendas do dia",
    "aiSalesSummary.intent.query.title": "Query List",
    "aiSalesSummary.field.dailyShiftId.label": "Daily Shift Id",
    "aiSalesSummary.field.status.label": "Status",
    "aiSalesSummary.field.totalAmount.label": "Total Amount",
    "aiSalesSummary.field.closedAt.label": "Closed At",
    "aiSalesSummary.filter.dailyShiftId.label": "Daily Shift Id",
    "aiSalesSummary.filter.status.label": "Status",
    "aiSalesSummary.filter.closedAt.label": "Closed At",
    "aiSalesSummary.action.run.label": "Ai Sales Summary"
  },
  "automation": {
    "statePrefix": "ui.aiSalesSummary",
    "stateKeys": [
      "ui.aiSalesSummary.status",
      "ui.aiSalesSummary.action.aiSalesSummary.status",
      "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId",
      "ui.aiSalesSummary.input.aiSalesSummary.status",
      "ui.aiSalesSummary.input.aiSalesSummary.closedAt",
      "ui.aiSalesSummary.data.aiSalesSummary"
    ],
    "actionIds": [
      "aiSalesSummary",
      "set.aiSalesSummaryDailyShiftId",
      "set.aiSalesSummaryStatus",
      "set.aiSalesSummaryClosedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "aiSalesSummary__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/aiSalesSummary.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/aiSalesSummary.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.defs.ts"
    ],
    "dependsOn": [
      "aiSalesSummary__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;

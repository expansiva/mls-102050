/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageMenuCategories.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageMenuCategories",
  "pageName": "Gerenciar categorias do cardápio",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:manageMenuCategories"
  ],
  "operationIds": [
    "manageMenuCategories"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.defs.ts",
    "layoutId": "manageMenuCategories.layout"
  },
  "states": [
    {
      "stateKey": "ui.manageMenuCategories.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuCategories.action.manageMenuCategories.status",
      "name": "manageMenuCategoriesState",
      "kind": "actionStatus",
      "actionRef": "manageMenuCategories",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId",
      "name": "manageMenuCategoriesMenuCategoryId",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuCategories",
        "direction": "input",
        "field": "menuCategoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.name",
      "name": "manageMenuCategoriesName",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuCategories",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.description",
      "name": "manageMenuCategoriesDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuCategories",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.status",
      "name": "manageMenuCategoriesStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuCategories",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "manageMenuCategories",
      "kind": "command",
      "commandRef": "manageMenuCategories",
      "routeKey": "cafeFlow.manageMenuCategories.manageMenuCategories",
      "purpose": "Gerenciar categorias do cardápio",
      "methodName": "manageMenuCategories",
      "handlerName": "handleManageMenuCategoriesClick",
      "inputStateKeys": [
        "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId",
        "ui.manageMenuCategories.input.manageMenuCategories.name",
        "ui.manageMenuCategories.input.manageMenuCategories.description",
        "ui.manageMenuCategories.input.manageMenuCategories.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.manageMenuCategories.action.manageMenuCategories.status"
    },
    {
      "actionId": "set.manageMenuCategoriesMenuCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId",
      "methodName": "setManageMenuCategoriesMenuCategoryId",
      "handlerName": "handleManageMenuCategoriesMenuCategoryIdChange"
    },
    {
      "actionId": "set.manageMenuCategoriesName",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.name",
      "methodName": "setManageMenuCategoriesName",
      "handlerName": "handleManageMenuCategoriesNameChange"
    },
    {
      "actionId": "set.manageMenuCategoriesDescription",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.description",
      "methodName": "setManageMenuCategoriesDescription",
      "handlerName": "handleManageMenuCategoriesDescriptionChange"
    },
    {
      "actionId": "set.manageMenuCategoriesStatus",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.status",
      "methodName": "setManageMenuCategoriesStatus",
      "handlerName": "handleManageMenuCategoriesStatusChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "manageMenuCategories.section.main.title": "Gerenciar categorias do cardápio",
    "manageMenuCategories.organism.form.title": "Categorias do cardápio",
    "manageMenuCategories.intention.commandForm.title": "Atualizar categoria",
    "manageMenuCategories.field.menuCategoryId.label": "ID da categoria",
    "manageMenuCategories.field.name.label": "Nome",
    "manageMenuCategories.field.description.label": "Descrição",
    "manageMenuCategories.field.status.label": "Status",
    "manageMenuCategories.action.submit.label": "Salvar alterações"
  },
  "automation": {
    "statePrefix": "ui.manageMenuCategories",
    "stateKeys": [
      "ui.manageMenuCategories.status",
      "ui.manageMenuCategories.action.manageMenuCategories.status",
      "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId",
      "ui.manageMenuCategories.input.manageMenuCategories.name",
      "ui.manageMenuCategories.input.manageMenuCategories.description",
      "ui.manageMenuCategories.input.manageMenuCategories.status"
    ],
    "actionIds": [
      "manageMenuCategories",
      "set.manageMenuCategoriesMenuCategoryId",
      "set.manageMenuCategoriesName",
      "set.manageMenuCategoriesDescription",
      "set.manageMenuCategoriesStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "manageMenuCategories__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/manageMenuCategories.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/manageMenuCategories.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.defs.ts"
    ],
    "dependsOn": [
      "manageMenuCategories__l2_contract"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;

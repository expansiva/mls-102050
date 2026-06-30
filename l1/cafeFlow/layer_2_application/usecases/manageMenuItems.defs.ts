/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.defs.ts" enhancement="_blank"/>

export const manageMenuItemsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "manageMenuItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "manageMenuItems",
    "ports": [
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "updateMenuItem",
        "inputTypeName": "UpdateMenuItemInput",
        "outputTypeName": "UpdateMenuItemOutput",
        "input": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identifier of the menu item to update"
          },
          {
            "name": "menuCategoryId",
            "type": "string",
            "required": false,
            "ofEntity": "MenuCategory",
            "description": "Updated category reference (mdmRef) — validated against master data"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated display name of the menu item"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated description of the menu item"
          },
          {
            "name": "price",
            "type": "number",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated price of the menu item"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated lifecycle status: draft | active | inactive"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identifier of the updated menu item"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Result status of the update operation"
          }
        ],
        "ports": [
          "MenuItem"
        ],
        "rulesApplied": [
          "aiOutputLanguageSelection"
        ],
        "transactional": true,
        "steps": [
          "1. Load the MenuItem aggregate by menuItemId via MenuItemPort.findById; throw NotFound if missing.",
          "2. If menuCategoryId is provided, validate it exists in master data via ctx.data.mdmDocument.get({ mdmId: menuCategoryId }) and that the MenuCategory status is 'active'; throw InvalidMenuCategory otherwise.",
          "3. Apply the provided field changes (menuCategoryId, name, description, price, status) to the loaded MenuItem aggregate using its domain mutation methods.",
          "4. Validate the MenuItem invariants (e.g. price >= 0, status enum value) via the aggregate's validate() method.",
          "5. Persist the updated MenuItem aggregate via MenuItemPort.save.",
          "6. Return menuItemId and operation status."
        ]
      }
    ],
    "mdmRefs": [
      "MenuCategory"
    ]
  }
} as const;

export default manageMenuItemsUsecase;

export const pipeline = [
  {
    "id": "manageMenuItems__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;

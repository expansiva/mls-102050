/// <mls fileReference="_102050_/l2/controleChamados/web/desktop/page11/ticketCatalogue.defs.ts" enhancement="_blank"/>

export const definition = `page: Chamado
actor: atendente
purpose: Cadastro de Chamado.
uxExperience: entityRecordManagement
The page extends the shared base class of this workspace: the shared travels in this pipeline and already carries the states, actions and handlers the page inherits. Render the experience around that intent — do not list fields and do not list routines.`;

export const pipeline = [
  {
    "id": "ticketCatalogue__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/controleChamados/web/desktop/page11/ticketCatalogue.ts",
    "defPath": "_102050_/l2/controleChamados/web/desktop/page11/ticketCatalogue.defs.ts",
    "dependsFiles": [
      "_102050_/l2/controleChamados/web/shared/ticketCatalogueDts.txt",
      "_102050_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "ticketCatalogue__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentMaterializeL2/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {},
    "agent": "agentCfeMaterializeGen"
  }
] as const;

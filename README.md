# 102050 · petShopAgendamento + controleChamados (cópia local do 102047)

Part of **collab.codes**.

`102050` é uma **cópia integral do `102047` local**, tirada em 2026-09-21 a
partir do commit `c6a90c1` (`publish: rebuild after deps 102033 102035`), quando
o `102047` local estava 40 commits à frente e 72 atrás do seu `origin/main`.
O objetivo é preservar o estado local antes de o `102047` ser atualizado pelo
GitHub.

Todas as referências `_102047_` / `102047` (paths, tags de componente,
`defaultProjectId`, scripts de publish) foram reescritas para `102050`.

É um **client app gerado** (`projectType: "client"`, `appEnv: "presentation"`)
com **dois módulos** lado a lado, cada um com sua própria subárvore
`l1` / `l2` / `l4` / `l5`.

## Módulos

**`petShopAgendamento`** — *"Permitir que clientes agendem serviços para seus
pets e acompanhem o atendimento, enquanto a loja gerencia a agenda, confirmações
e execução dos serviços."*
Duas autoridades (admin / cliente), pets por cliente com fotos antes/depois,
horário de funcionamento com bloqueios pré-cadastrados, home institucional.

**`controleChamados`** — *"Permitir que o atendente registre, acompanhe, comente
e encerre chamados com título, descrição e status."*
Um único ator (atendente); chamado com título, descrição e status
(aberto / fechado) mais comentários.

Ambos usam o schema de módulo ns4 (`2026-08-06-ns4-module-v4`) com o modelo
completo de passos e1–e10 em `l4/<module>/`.

## Layout

`l1/<module>/` backend · `l2/<module>/` páginas frontend · `l4/<module>/` modelo
da solução (`ontology`, `journeys`, `rules`, `operations`, `workflows`,
`usecases`, `access`, `contracts`, `composition`, `workspaces`,
`siteMap.defs.ts`, `workspace-model.defs.ts`) · `l5/<module>/` process e todo
defs.

## Cuidado

`obj/compiled.zip` e `obj/source.zip` ainda são os do scaffold antigo
(`cafeFlow`); só serão substituídos no próximo build do CI.

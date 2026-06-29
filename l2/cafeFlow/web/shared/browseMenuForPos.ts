/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/browseMenuForPos.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowBrowseMenuForPosInput,
  CafeFlowBrowseMenuForPosOutput,
  CafeFlowBrowseMenuForPosOutputItem,
} from '/_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.js';

const message_pt: Record<string, string> = {
  'browseMenuForPos.page.title': 'Consultar cardápio no POS',
  'browseMenuForPos.section.menu.title': 'Consultar cardápio no POS',
  'browseMenuForPos.organism.menu.title': 'Cardápio no POS',
  'browseMenuForPos.intent.list.title': 'Itens do cardápio',
  'browseMenuForPos.filter.menuItemId.label': 'ID do item',
  'browseMenuForPos.filter.menuCategoryId.label': 'ID da categoria',
  'browseMenuForPos.filter.name.label': 'Nome do item',
  'browseMenuForPos.filter.status.label': 'Status',
  'browseMenuForPos.filter.createdAt.label': 'Criado em',
  'browseMenuForPos.filter.updatedAt.label': 'Atualizado em',
  'browseMenuForPos.column.menuItemId.label': 'ID do item',
  'browseMenuForPos.column.menuCategoryId.label': 'ID da categoria',
  'browseMenuForPos.column.name.label': 'Nome',
  'browseMenuForPos.column.description.label': 'Descrição',
  'browseMenuForPos.column.price.label': 'Preço',
  'browseMenuForPos.column.status.label': 'Status',
  'browseMenuForPos.column.createdAt.label': 'Criado em',
  'browseMenuForPos.column.updatedAt.label': 'Atualizado em',
  'browseMenuForPos.toolbar.search.label': 'Buscar',
};

const message_en: Record<string, string> = {
  'browseMenuForPos.page.title': 'Browse menu at POS',
  'browseMenuForPos.section.menu.title': 'Browse menu at POS',
  'browseMenuForPos.organism.menu.title': 'POS Menu',
  'browseMenuForPos.intent.list.title': 'Menu items',
  'browseMenuForPos.filter.menuItemId.label': 'Item ID',
  'browseMenuForPos.filter.menuCategoryId.label': 'Category ID',
  'browseMenuForPos.filter.name.label': 'Item name',
  'browseMenuForPos.filter.status.label': 'Status',
  'browseMenuForPos.filter.createdAt.label': 'Created at',
  'browseMenuForPos.filter.updatedAt.label': 'Updated at',
  'browseMenuForPos.column.menuItemId.label': 'Item ID',
  'browseMenuForPos.column.menuCategoryId.label': 'Category ID',
  'browseMenuForPos.column.name.label': 'Name',
  'browseMenuForPos.column.description.label': 'Description',
  'browseMenuForPos.column.price.label': 'Price',
  'browseMenuForPos.column.status.label': 'Status',
  'browseMenuForPos.column.createdAt.label': 'Created at',
  'browseMenuForPos.column.updatedAt.label': 'Updated at',
  'browseMenuForPos.toolbar.search.label': 'Search',
};

export class CafeFlowBrowseMenuForPosBase extends CollabLitElement {
  @property({ type: String }) status = '';

  @property({ type: String })
  browseMenuForPosState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property({ type: String }) browseMenuForPosMenuItemId = '';
  @property({ type: String }) browseMenuForPosMenuCategoryId = '';
  @property({ type: String }) browseMenuForPosName = '';
  @property({ type: String }) browseMenuForPosStatus = '';
  @property({ type: String }) browseMenuForPosCreatedAt = '';
  @property({ type: String }) browseMenuForPosUpdatedAt = '';

  @property({ type: Array })
  browseMenuForPosData: CafeFlowBrowseMenuForPosOutputItem[] = [];

  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { __lang?: string }).__lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState('ui.browseMenuForPos.status') as string) ?? '';
    this.browseMenuForPosState =
      (getState('ui.browseMenuForPos.action.browseMenuForPos.status') as 'idle' | 'loading' | 'success' | 'error') ??
      'idle';
    this.browseMenuForPosMenuItemId =
      (getState('ui.browseMenuForPos.input.browseMenuForPos.menuItemId') as string) ?? '';
    this.browseMenuForPosMenuCategoryId =
      (getState('ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId') as string) ?? '';
    this.browseMenuForPosName = (getState('ui.browseMenuForPos.input.browseMenuForPos.name') as string) ?? '';
    this.browseMenuForPosStatus = (getState('ui.browseMenuForPos.input.browseMenuForPos.status') as string) ?? '';
    this.browseMenuForPosCreatedAt =
      (getState('ui.browseMenuForPos.input.browseMenuForPos.createdAt') as string) ?? '';
    this.browseMenuForPosUpdatedAt =
      (getState('ui.browseMenuForPos.input.browseMenuForPos.updatedAt') as string) ?? '';
    this.browseMenuForPosData =
      (getState('ui.browseMenuForPos.data.browseMenuForPos') as CafeFlowBrowseMenuForPosOutputItem[]) ?? [];

    this.loadBrowseMenuForPos();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // ── Query action: browseMenuForPos ──────────────────────────────────

  async loadBrowseMenuForPos(): Promise<void> {
    this.browseMenuForPosState = 'loading';
    setState('ui.browseMenuForPos.action.browseMenuForPos.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowBrowseMenuForPosInput = {
      menuItemId: this.browseMenuForPosMenuItemId || undefined,
      menuCategoryId: this.browseMenuForPosMenuCategoryId || undefined,
      name: this.browseMenuForPosName || undefined,
      status: (this.browseMenuForPosStatus as 'draft' | 'active' | 'inactive') || undefined,
      createdAt: this.browseMenuForPosCreatedAt || undefined,
      updatedAt: this.browseMenuForPosUpdatedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };

    try {
      const response = await execBff<CafeFlowBrowseMenuForPosOutput>(
        'cafeFlow.browseMenuForPos.browseMenuForPos',
        params,
        options,
      );

      if (response.ok) {
        const data = response.data ?? [];
        this.browseMenuForPosData = data;
        setState('ui.browseMenuForPos.data.browseMenuForPos', data);
        this.browseMenuForPosState = 'success';
        setState('ui.browseMenuForPos.action.browseMenuForPos.status', 'success');
      } else {
        this.browseMenuForPosState = 'error';
        setState('ui.browseMenuForPos.action.browseMenuForPos.status', 'error');
      }
    } catch {
      this.browseMenuForPosState = 'error';
      setState('ui.browseMenuForPos.action.browseMenuForPos.status', 'error');
    }
    this.requestUpdate();
  }

  handleBrowseMenuForPosClick = (event: Event): void => {
    event.preventDefault();
    runBlockingUiAction(async () => {
      await this.loadBrowseMenuForPos();
    });
  };

  // ── State setters ───────────────────────────────────────────────────

  setBrowseMenuForPosMenuItemId(value: string): void {
    this.browseMenuForPosMenuItemId = value;
    setState('ui.browseMenuForPos.input.browseMenuForPos.menuItemId', value);
    this.requestUpdate();
  }

  handleBrowseMenuForPosMenuItemIdChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setBrowseMenuForPosMenuItemId(target.value);
  };

  setBrowseMenuForPosMenuCategoryId(value: string): void {
    this.browseMenuForPosMenuCategoryId = value;
    setState('ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId', value);
    this.requestUpdate();
  }

  handleBrowseMenuForPosMenuCategoryIdChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setBrowseMenuForPosMenuCategoryId(target.value);
  };

  setBrowseMenuForPosName(value: string): void {
    this.browseMenuForPosName = value;
    setState('ui.browseMenuForPos.input.browseMenuForPos.name', value);
    this.requestUpdate();
  }

  handleBrowseMenuForPosNameChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setBrowseMenuForPosName(target.value);
  };

  setBrowseMenuForPosStatus(value: string): void {
    this.browseMenuForPosStatus = value;
    setState('ui.browseMenuForPos.input.browseMenuForPos.status', value);
    this.requestUpdate();
  }

  handleBrowseMenuForPosStatusChange = (event: Event): void => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;
    this.setBrowseMenuForPosStatus(target.value);
  };

  setBrowseMenuForPosCreatedAt(value: string): void {
    this.browseMenuForPosCreatedAt = value;
    setState('ui.browseMenuForPos.input.browseMenuForPos.createdAt', value);
    this.requestUpdate();
  }

  handleBrowseMenuForPosCreatedAtChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setBrowseMenuForPosCreatedAt(target.value);
  };

  setBrowseMenuForPosUpdatedAt(value: string): void {
    this.browseMenuForPosUpdatedAt = value;
    setState('ui.browseMenuForPos.input.browseMenuForPos.updatedAt', value);
    this.requestUpdate();
  }

  handleBrowseMenuForPosUpdatedAtChange = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    this.setBrowseMenuForPosUpdatedAt(target.value);
  };
}

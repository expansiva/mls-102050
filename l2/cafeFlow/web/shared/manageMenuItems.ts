/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageMenuItems.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowManageMenuItemsInput, CafeFlowManageMenuItemsOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageMenuItems.js';

const message_pt: Record<string, string> = {
  'manageMenuItems.section.title': 'Gerenciar itens do cardápio',
  'manageMenuItems.organism.title': 'Gerenciar itens do cardápio',
  'manageMenuItems.form.title': 'Detalhes do item do cardápio',
  'manageMenuItems.actions.title': 'Ações',
  'manageMenuItems.field.menuItemId': 'ID do item',
  'manageMenuItems.field.menuCategoryId': 'Categoria',
  'manageMenuItems.field.name': 'Nome',
  'manageMenuItems.field.description': 'Descrição',
  'manageMenuItems.field.price': 'Preço',
  'manageMenuItems.field.status': 'Status',
  'manageMenuItems.action.submit': 'Salvar alterações',
};

const message_en: Record<string, string> = {
  'manageMenuItems.section.title': 'Manage menu items',
  'manageMenuItems.organism.title': 'Manage menu items',
  'manageMenuItems.form.title': 'Menu item details',
  'manageMenuItems.actions.title': 'Actions',
  'manageMenuItems.field.menuItemId': 'Item ID',
  'manageMenuItems.field.menuCategoryId': 'Category',
  'manageMenuItems.field.name': 'Name',
  'manageMenuItems.field.description': 'Description',
  'manageMenuItems.field.price': 'Price',
  'manageMenuItems.field.status': 'Status',
  'manageMenuItems.action.submit': 'Save changes',
};

export class CafeFlowManageMenuItemsBase extends CollabLitElement {
  @property({ type: String }) status = '';
  @property({ type: String }) manageMenuItemsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) manageMenuItemsMenuItemId = '';
  @property({ type: String }) manageMenuItemsMenuCategoryId = '';
  @property({ type: String }) manageMenuItemsName = '';
  @property({ type: String }) manageMenuItemsDescription = '';
  @property({ type: String }) manageMenuItemsPrice = '';
  @property({ type: String }) manageMenuItemsStatus = '';

  protected get msg(): Record<string, string> {
    const lang = (this as any).__lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState('ui.manageMenuItems.status') ?? '';
    this.manageMenuItemsState = getState('ui.manageMenuItems.action.manageMenuItems.status') ?? 'idle';
    this.manageMenuItemsMenuItemId = getState('ui.manageMenuItems.input.manageMenuItems.menuItemId') ?? '';
    this.manageMenuItemsMenuCategoryId = getState('ui.manageMenuItems.input.manageMenuItems.menuCategoryId') ?? '';
    this.manageMenuItemsName = getState('ui.manageMenuItems.input.manageMenuItems.name') ?? '';
    this.manageMenuItemsDescription = getState('ui.manageMenuItems.input.manageMenuItems.description') ?? '';
    this.manageMenuItemsPrice = getState('ui.manageMenuItems.input.manageMenuItems.price') ?? '';
    this.manageMenuItemsStatus = getState('ui.manageMenuItems.input.manageMenuItems.status') ?? '';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- State setters ---

  setManageMenuItemsMenuItemId(value: string): void {
    this.manageMenuItemsMenuItemId = value;
    setState('ui.manageMenuItems.input.manageMenuItems.menuItemId', value);
    this.requestUpdate();
  }

  handleManageMenuItemsMenuItemIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageMenuItemsMenuItemId(value);
  }

  setManageMenuItemsMenuCategoryId(value: string): void {
    this.manageMenuItemsMenuCategoryId = value;
    setState('ui.manageMenuItems.input.manageMenuItems.menuCategoryId', value);
    this.requestUpdate();
  }

  handleManageMenuItemsMenuCategoryIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageMenuItemsMenuCategoryId(value);
  }

  setManageMenuItemsName(value: string): void {
    this.manageMenuItemsName = value;
    setState('ui.manageMenuItems.input.manageMenuItems.name', value);
    this.requestUpdate();
  }

  handleManageMenuItemsNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageMenuItemsName(value);
  }

  setManageMenuItemsDescription(value: string): void {
    this.manageMenuItemsDescription = value;
    setState('ui.manageMenuItems.input.manageMenuItems.description', value);
    this.requestUpdate();
  }

  handleManageMenuItemsDescriptionChange(e: Event): void {
    const value = (e.target as HTMLTextAreaElement).value;
    this.setManageMenuItemsDescription(value);
  }

  setManageMenuItemsPrice(value: string): void {
    this.manageMenuItemsPrice = value;
    setState('ui.manageMenuItems.input.manageMenuItems.price', value);
    this.requestUpdate();
  }

  handleManageMenuItemsPriceChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setManageMenuItemsPrice(value);
  }

  setManageMenuItemsStatus(value: string): void {
    this.manageMenuItemsStatus = value;
    setState('ui.manageMenuItems.input.manageMenuItems.status', value);
    this.requestUpdate();
  }

  handleManageMenuItemsStatusChange(e: Event): void {
    const value = (e.target as HTMLSelectElement).value;
    this.setManageMenuItemsStatus(value);
  }

  // --- Command action ---

  async manageMenuItems(): Promise<void> {
    this.manageMenuItemsState = 'loading';
    setState('ui.manageMenuItems.action.manageMenuItems.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowManageMenuItemsInput = {
      menuItemId: this.manageMenuItemsMenuItemId || undefined,
      menuCategoryId: this.manageMenuItemsMenuCategoryId || undefined,
      name: this.manageMenuItemsName,
      description: this.manageMenuItemsDescription || undefined,
      price: Number(this.manageMenuItemsPrice),
      status: this.manageMenuItemsStatus as 'draft' | 'active' | 'inactive',
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowManageMenuItemsOutput>(
        'cafeFlow.manageMenuItems.manageMenuItems',
        params,
        options,
      );

      if (response.ok) {
        this.manageMenuItemsState = 'success';
        setState('ui.manageMenuItems.action.manageMenuItems.status', 'success');
      } else {
        this.manageMenuItemsState = 'error';
        setState('ui.manageMenuItems.action.manageMenuItems.status', 'error');
      }
    } catch {
      this.manageMenuItemsState = 'error';
      setState('ui.manageMenuItems.action.manageMenuItems.status', 'error');
    }
    this.requestUpdate();
  }

  handleManageMenuItemsClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async () => {
      await this.manageMenuItems();
    });
  }
}

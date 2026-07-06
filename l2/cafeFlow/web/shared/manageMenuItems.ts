/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageMenuItems.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type { CafeFlowManageMenuItemsInput, CafeFlowManageMenuItemsOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageMenuItems.js';

/// **collab_i18n_start**
const message_pt = {
  "manageMenuItems.section.title": "Gerenciar itens do cardápio",
  "manageMenuItems.organism.title": "Gerenciar itens do cardápio",
  "manageMenuItems.form.title": "Detalhes do item",
  "manageMenuItems.field.menuItemId": "ID do item",
  "manageMenuItems.field.menuCategoryId": "Categoria",
  "manageMenuItems.field.name": "Nome",
  "manageMenuItems.field.description": "Descrição",
  "manageMenuItems.field.price": "Preço",
  "manageMenuItems.field.status": "Status",
  "manageMenuItems.status.draft": "Rascunho",
  "manageMenuItems.status.active": "Ativo",
  "manageMenuItems.status.inactive": "Inativo",
  "manageMenuItems.action.submit": "Salvar alterações"
};
const message_en = {
  "manageMenuItems.section.title": "Manage menu items",
  "manageMenuItems.organism.title": "Manage menu items",
  "manageMenuItems.form.title": "Item details",
  "manageMenuItems.field.menuItemId": "Item ID",
  "manageMenuItems.field.menuCategoryId": "Category",
  "manageMenuItems.field.name": "Name",
  "manageMenuItems.field.description": "Description",
  "manageMenuItems.field.price": "Price",
  "manageMenuItems.field.status": "Status",
  "manageMenuItems.status.draft": "Draft",
  "manageMenuItems.status.active": "Active",
  "manageMenuItems.status.inactive": "Inactive",
  "manageMenuItems.action.submit": "Save changes"
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowManageMenuItemsBase extends CollabLitElement {
  @property()
  status = '';

  @property()
  manageMenuItemsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property()
  manageMenuItemsMenuItemId = '';

  @property()
  manageMenuItemsMenuCategoryId = '';

  @property()
  manageMenuItemsName = '';

  @property()
  manageMenuItemsDescription = '';

  @property()
  manageMenuItemsPrice: CafeFlowManageMenuItemsInput['price'] = '' as unknown as CafeFlowManageMenuItemsInput['price'];

  @property()
  manageMenuItemsStatus: CafeFlowManageMenuItemsInput['status'] = '' as CafeFlowManageMenuItemsInput['status'];

  private readonly stateKeys = [
    'ui.manageMenuItems.status',
    'ui.manageMenuItems.action.manageMenuItems.status',
    'ui.manageMenuItems.input.manageMenuItems.menuItemId',
    'ui.manageMenuItems.input.manageMenuItems.menuCategoryId',
    'ui.manageMenuItems.input.manageMenuItems.name',
    'ui.manageMenuItems.input.manageMenuItems.description',
    'ui.manageMenuItems.input.manageMenuItems.price',
    'ui.manageMenuItems.input.manageMenuItems.status'
  ];

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || messages['en'];
  }

  connectedCallback(): void {
    super.connectedCallback();

    const storedStatus = getState('ui.manageMenuItems.status');
    if (storedStatus !== undefined) {
      this.status = storedStatus as string;
    }
    const storedManageMenuItemsState = getState('ui.manageMenuItems.action.manageMenuItems.status');
    if (storedManageMenuItemsState !== undefined) {
      this.manageMenuItemsState = storedManageMenuItemsState as 'idle' | 'loading' | 'success' | 'error';
    }
    const storedMenuItemId = getState('ui.manageMenuItems.input.manageMenuItems.menuItemId');
    if (storedMenuItemId !== undefined) {
      this.manageMenuItemsMenuItemId = storedMenuItemId as string;
    }
    const storedMenuCategoryId = getState('ui.manageMenuItems.input.manageMenuItems.menuCategoryId');
    if (storedMenuCategoryId !== undefined) {
      this.manageMenuItemsMenuCategoryId = storedMenuCategoryId as string;
    }
    const storedName = getState('ui.manageMenuItems.input.manageMenuItems.name');
    if (storedName !== undefined) {
      this.manageMenuItemsName = storedName as string;
    }
    const storedDescription = getState('ui.manageMenuItems.input.manageMenuItems.description');
    if (storedDescription !== undefined) {
      this.manageMenuItemsDescription = storedDescription as string;
    }
    const storedPrice = getState('ui.manageMenuItems.input.manageMenuItems.price');
    if (storedPrice !== undefined) {
      this.manageMenuItemsPrice = storedPrice as CafeFlowManageMenuItemsInput['price'];
    }
    const storedStatusValue = getState('ui.manageMenuItems.input.manageMenuItems.status');
    if (storedStatusValue !== undefined) {
      this.manageMenuItemsStatus = storedStatusValue as CafeFlowManageMenuItemsInput['status'];
    }

    subscribe(this.stateKeys, this);
  }

  disconnectedCallback(): void {
    unsubscribe(this.stateKeys, this);
    super.disconnectedCallback();
  }

  setManageMenuItemsMenuItemId(value: string): void {
    this.manageMenuItemsMenuItemId = value;
    setState('ui.manageMenuItems.input.manageMenuItems.menuItemId', value);
    this.requestUpdate();
  }

  handleManageMenuItemsMenuItemIdChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setManageMenuItemsMenuItemId(target.value);
  }

  setManageMenuItemsMenuCategoryId(value: string): void {
    this.manageMenuItemsMenuCategoryId = value;
    setState('ui.manageMenuItems.input.manageMenuItems.menuCategoryId', value);
    this.requestUpdate();
  }

  handleManageMenuItemsMenuCategoryIdChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setManageMenuItemsMenuCategoryId(target.value);
  }

  setManageMenuItemsName(value: string): void {
    this.manageMenuItemsName = value;
    setState('ui.manageMenuItems.input.manageMenuItems.name', value);
    this.requestUpdate();
  }

  handleManageMenuItemsNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.setManageMenuItemsName(target.value);
  }

  setManageMenuItemsDescription(value: string): void {
    this.manageMenuItemsDescription = value;
    setState('ui.manageMenuItems.input.manageMenuItems.description', value);
    this.requestUpdate();
  }

  handleManageMenuItemsDescriptionChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.setManageMenuItemsDescription(target.value);
  }

  setManageMenuItemsPrice(value: CafeFlowManageMenuItemsInput['price']): void {
    this.manageMenuItemsPrice = value;
    setState('ui.manageMenuItems.input.manageMenuItems.price', value);
    this.requestUpdate();
  }

  handleManageMenuItemsPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = Number(target.value);
    this.setManageMenuItemsPrice(value);
  }

  setManageMenuItemsStatus(value: CafeFlowManageMenuItemsInput['status']): void {
    this.manageMenuItemsStatus = value;
    setState('ui.manageMenuItems.input.manageMenuItems.status', value);
    this.requestUpdate();
  }

  handleManageMenuItemsStatusChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.setManageMenuItemsStatus(target.value as CafeFlowManageMenuItemsInput['status']);
  }

  async manageMenuItems(): Promise<void> {
    this.manageMenuItemsState = 'loading';
    setState('ui.manageMenuItems.action.manageMenuItems.status', 'loading');

    const params: CafeFlowManageMenuItemsInput = {
      menuItemId: this.manageMenuItemsMenuItemId || undefined,
      menuCategoryId: this.manageMenuItemsMenuCategoryId || undefined,
      name: this.manageMenuItemsName,
      description: this.manageMenuItemsDescription || undefined,
      price: this.manageMenuItemsPrice,
      status: this.manageMenuItemsStatus
    };

    const options: BffClientOptions = { mode: 'blocking' };

    try {
      const response = await execBff<CafeFlowManageMenuItemsOutput>(
        'cafeFlow.manageMenuItems.manageMenuItems',
        params,
        options
      );
      if (!response.ok) {
        this.manageMenuItemsState = 'error';
        setState('ui.manageMenuItems.action.manageMenuItems.status', 'error');
        return;
      }
      this.manageMenuItemsState = 'success';
      setState('ui.manageMenuItems.action.manageMenuItems.status', 'success');
    } catch (error) {
      this.manageMenuItemsState = 'error';
      setState('ui.manageMenuItems.action.manageMenuItems.status', 'error');
    }
  }

  async handleManageMenuItemsClick(): Promise<void> {
    await runBlockingUiAction(async () => {
      await this.manageMenuItems();
    });
  }
}

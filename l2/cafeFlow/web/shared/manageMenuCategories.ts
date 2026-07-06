/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageMenuCategories.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';

/// **collab_i18n_start**
const message_pt = {
  "manageMenuCategories.section.main.title": "Gerenciar categorias do cardápio",
  "manageMenuCategories.organism.form.title": "Gerenciar categorias",
  "manageMenuCategories.intention.commandForm.title": "Atualizar categoria do cardápio",
  "manageMenuCategories.field.menuCategoryId.label": "ID da categoria",
  "manageMenuCategories.field.name.label": "Nome",
  "manageMenuCategories.field.description.label": "Descrição",
  "manageMenuCategories.field.status.label": "Status",
  "manageMenuCategories.action.submit.label": "Salvar alterações"
};
const message_en = {
  "manageMenuCategories.section.main.title": "Manage menu categories",
  "manageMenuCategories.organism.form.title": "Manage categories",
  "manageMenuCategories.intention.commandForm.title": "Update menu category",
  "manageMenuCategories.field.menuCategoryId.label": "Category ID",
  "manageMenuCategories.field.name.label": "Name",
  "manageMenuCategories.field.description.label": "Description",
  "manageMenuCategories.field.status.label": "Status",
  "manageMenuCategories.action.submit.label": "Save changes"
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowManageMenuCategoriesBase extends CollabLitElement {
  @property()
  status: string = '';

  @property()
  manageMenuCategoriesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property()
  manageMenuCategoriesMenuCategoryId: string = '';

  @property()
  manageMenuCategoriesName: string = '';

  @property()
  manageMenuCategoriesDescription: string = '';

  @property()
  manageMenuCategoriesStatus: 'active' | 'inactive' | '' = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || messages['en'];
  }

  connectedCallback(): void {
    super.connectedCallback();
    const statusState = getState('ui.manageMenuCategories.status');
    if (statusState !== undefined) {
      this.status = statusState as string;
    }
    const manageMenuCategoriesStateState = getState('ui.manageMenuCategories.action.manageMenuCategories.status');
    if (manageMenuCategoriesStateState !== undefined) {
      this.manageMenuCategoriesState = manageMenuCategoriesStateState as 'idle' | 'loading' | 'success' | 'error';
    }
    const manageMenuCategoriesMenuCategoryIdState = getState('ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId');
    if (manageMenuCategoriesMenuCategoryIdState !== undefined) {
      this.manageMenuCategoriesMenuCategoryId = manageMenuCategoriesMenuCategoryIdState as string;
    }
    const manageMenuCategoriesNameState = getState('ui.manageMenuCategories.input.manageMenuCategories.name');
    if (manageMenuCategoriesNameState !== undefined) {
      this.manageMenuCategoriesName = manageMenuCategoriesNameState as string;
    }
    const manageMenuCategoriesDescriptionState = getState('ui.manageMenuCategories.input.manageMenuCategories.description');
    if (manageMenuCategoriesDescriptionState !== undefined) {
      this.manageMenuCategoriesDescription = manageMenuCategoriesDescriptionState as string;
    }
    const manageMenuCategoriesStatusState = getState('ui.manageMenuCategories.input.manageMenuCategories.status');
    if (manageMenuCategoriesStatusState !== undefined) {
      this.manageMenuCategoriesStatus = manageMenuCategoriesStatusState as 'active' | 'inactive' | '';
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  setManageMenuCategoriesMenuCategoryId(value: string): void {
    this.manageMenuCategoriesMenuCategoryId = value;
    setState('ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId', value);
  }

  handleManageMenuCategoriesMenuCategoryIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setManageMenuCategoriesMenuCategoryId(value);
  }

  setManageMenuCategoriesName(value: string): void {
    this.manageMenuCategoriesName = value;
    setState('ui.manageMenuCategories.input.manageMenuCategories.name', value);
  }

  handleManageMenuCategoriesNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setManageMenuCategoriesName(value);
  }

  setManageMenuCategoriesDescription(value: string): void {
    this.manageMenuCategoriesDescription = value;
    setState('ui.manageMenuCategories.input.manageMenuCategories.description', value);
  }

  handleManageMenuCategoriesDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setManageMenuCategoriesDescription(value);
  }

  setManageMenuCategoriesStatus(value: 'active' | 'inactive' | ''): void {
    this.manageMenuCategoriesStatus = value;
    setState('ui.manageMenuCategories.input.manageMenuCategories.status', value);
  }

  handleManageMenuCategoriesStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = (target?.value ?? '') as 'active' | 'inactive' | '';
    this.setManageMenuCategoriesStatus(value);
  }

  async manageMenuCategories(): Promise<void> {
    this.manageMenuCategoriesState = 'loading';
    setState('ui.manageMenuCategories.action.manageMenuCategories.status', 'loading');
    const params = {
      menuCategoryId: this.manageMenuCategoriesMenuCategoryId,
      name: this.manageMenuCategoriesName,
      description: this.manageMenuCategoriesDescription,
      status: this.manageMenuCategoriesStatus as 'active' | 'inactive'
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<unknown>('cafeFlow.manageMenuCategories.manageMenuCategories', params, options);
    if (response.ok) {
      this.manageMenuCategoriesState = 'success';
      setState('ui.manageMenuCategories.action.manageMenuCategories.status', 'success');
      return;
    }
    this.manageMenuCategoriesState = 'error';
    setState('ui.manageMenuCategories.action.manageMenuCategories.status', 'error');
    throw new Error(response.error?.message || 'Failed to manage menu categories');
  }

  handleManageMenuCategoriesClick(event?: Event): void {
    event?.preventDefault();
    runBlockingUiAction(async () => {
      await this.manageMenuCategories();
    });
  }
}

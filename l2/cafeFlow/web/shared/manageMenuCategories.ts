/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageMenuCategories.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type { CafeFlowManageMenuCategoriesInput, CafeFlowManageMenuCategoriesOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.js';

const message_pt: Record<string, string> = {
  'manageMenuCategories.section.title': 'Gerenciar categorias do cardápio',
  'manageMenuCategories.organism.title': 'Gerenciar categorias do cardápio',
  'manageMenuCategories.form.title': 'Dados da categoria',
  'manageMenuCategories.field.menuCategoryId': 'ID da categoria',
  'manageMenuCategories.field.name': 'Nome',
  'manageMenuCategories.field.description': 'Descrição',
  'manageMenuCategories.field.status': 'Status',
  'manageMenuCategories.action.submit': 'Salvar alterações',
};

const message_en: Record<string, string> = {
  'manageMenuCategories.section.title': 'Manage menu categories',
  'manageMenuCategories.organism.title': 'Manage menu categories',
  'manageMenuCategories.form.title': 'Category data',
  'manageMenuCategories.field.menuCategoryId': 'Category ID',
  'manageMenuCategories.field.name': 'Name',
  'manageMenuCategories.field.description': 'Description',
  'manageMenuCategories.field.status': 'Status',
  'manageMenuCategories.action.submit': 'Save changes',
};

export class CafeFlowManageMenuCategoriesBase extends CollabLitElement {
  @property() status = '';

  @property() manageMenuCategoriesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property() manageMenuCategoriesMenuCategoryId = '';

  @property() manageMenuCategoriesName = '';

  @property() manageMenuCategoriesDescription = '';

  @property() manageMenuCategoriesStatus = '';

  protected get msg(): Record<string, string> {
    const lang = (this as any).__lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState('ui.manageMenuCategories.status') ?? '';
    this.manageMenuCategoriesState = getState('ui.manageMenuCategories.action.manageMenuCategories.status') ?? 'idle';
    this.manageMenuCategoriesMenuCategoryId = getState('ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId') ?? '';
    this.manageMenuCategoriesName = getState('ui.manageMenuCategories.input.manageMenuCategories.name') ?? '';
    this.manageMenuCategoriesDescription = getState('ui.manageMenuCategories.input.manageMenuCategories.description') ?? '';
    this.manageMenuCategoriesStatus = getState('ui.manageMenuCategories.input.manageMenuCategories.status') ?? '';
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // ── State setters ──────────────────────────────────────────────

  setManageMenuCategoriesMenuCategoryId(value: string): void {
    this.manageMenuCategoriesMenuCategoryId = value;
    setState('ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId', value);
    this.requestUpdate();
  }

  handleManageMenuCategoriesMenuCategoryIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setManageMenuCategoriesMenuCategoryId(target.value);
  }

  setManageMenuCategoriesName(value: string): void {
    this.manageMenuCategoriesName = value;
    setState('ui.manageMenuCategories.input.manageMenuCategories.name', value);
    this.requestUpdate();
  }

  handleManageMenuCategoriesNameChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setManageMenuCategoriesName(target.value);
  }

  setManageMenuCategoriesDescription(value: string): void {
    this.manageMenuCategoriesDescription = value;
    setState('ui.manageMenuCategories.input.manageMenuCategories.description', value);
    this.requestUpdate();
  }

  handleManageMenuCategoriesDescriptionChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setManageMenuCategoriesDescription(target.value);
  }

  setManageMenuCategoriesStatus(value: string): void {
    this.manageMenuCategoriesStatus = value;
    setState('ui.manageMenuCategories.input.manageMenuCategories.status', value);
    this.requestUpdate();
  }

  handleManageMenuCategoriesStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setManageMenuCategoriesStatus(target.value);
  }

  // ── Command action ─────────────────────────────────────────────

  async manageMenuCategories(): Promise<void> {
    this.manageMenuCategoriesState = 'loading';
    setState('ui.manageMenuCategories.action.manageMenuCategories.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowManageMenuCategoriesInput = {
      menuCategoryId: this.manageMenuCategoriesMenuCategoryId || undefined,
      name: this.manageMenuCategoriesName,
      description: this.manageMenuCategoriesDescription || undefined,
      status: this.manageMenuCategoriesStatus as 'active' | 'inactive',
    };

    const options: BffClientOptions = { mode: 'blocking', timeoutMs: 30000 };

    try {
      const response = await execBff<CafeFlowManageMenuCategoriesOutput>(
        'cafeFlow.manageMenuCategories.manageMenuCategories',
        params,
        options,
      );

      if (response.ok) {
        this.manageMenuCategoriesState = 'success';
        setState('ui.manageMenuCategories.action.manageMenuCategories.status', 'success');
      } else {
        this.manageMenuCategoriesState = 'error';
        setState('ui.manageMenuCategories.action.manageMenuCategories.status', 'error');
      }
    } catch {
      this.manageMenuCategoriesState = 'error';
      setState('ui.manageMenuCategories.action.manageMenuCategories.status', 'error');
    }

    this.requestUpdate();
  }

  handleManageMenuCategoriesClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async () => {
      await this.manageMenuCategories();
    });
  }
}

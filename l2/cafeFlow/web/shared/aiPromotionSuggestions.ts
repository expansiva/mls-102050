/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowAiPromotionSuggestionsInput,
  CafeFlowAiPromotionSuggestionsOutputItem,
} from '/_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.js';

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

export class CafeFlowAiPromotionSuggestionsBase extends CollabLitElement {
  /* ── State properties (from Definition.states[]) ── */

  @property({ type: String })
  status = '';

  @property({ type: String })
  aiPromotionSuggestionsState: ActionStatus = 'idle';

  @property({ type: String })
  aiPromotionSuggestionsId = '';

  @property({ type: String })
  aiPromotionSuggestionsOrderId = '';

  @property({ type: String })
  aiPromotionSuggestionsMenuItemId = '';

  @property({ type: String })
  aiPromotionSuggestionsKitchenTicketId = '';

  @property({ type: String })
  aiPromotionSuggestionsStatus = '';

  @property({ type: String })
  aiPromotionSuggestionsCreatedAt = '';

  @property({ type: Array })
  aiPromotionSuggestionsData: CafeFlowAiPromotionSuggestionsOutputItem[] = [];

  /* ── i18n ── */

  protected message_pt: Record<string, string> = {
    'aiPromotionSuggestions.section.main.title': 'Assistente IA: sugestões de itens para promover (últimos 7 dias)',
    'aiPromotionSuggestions.organism.main.title': 'Sugestões de promoção com IA',
    'aiPromotionSuggestions.intent.query.title': 'Sugestões (últimos 7 dias)',
    'aiPromotionSuggestions.field.id.label': 'Item do pedido',
    'aiPromotionSuggestions.field.orderId.label': 'Pedido',
    'aiPromotionSuggestions.field.menuItemId.label': 'Item do cardápio',
    'aiPromotionSuggestions.field.kitchenTicketId.label': 'Ticket de cozinha',
    'aiPromotionSuggestions.field.quantity.label': 'Quantidade',
    'aiPromotionSuggestions.field.unitPrice.label': 'Preço unitário',
    'aiPromotionSuggestions.field.totalPrice.label': 'Preço total',
    'aiPromotionSuggestions.field.observations.label': 'Observações',
    'aiPromotionSuggestions.filter.id.label': 'Item do pedido (ID)',
    'aiPromotionSuggestions.filter.orderId.label': 'Pedido (ID)',
    'aiPromotionSuggestions.filter.menuItemId.label': 'Item do cardápio (ID)',
    'aiPromotionSuggestions.filter.kitchenTicketId.label': 'Ticket de cozinha (ID)',
    'aiPromotionSuggestions.filter.status.label': 'Status do item',
    'aiPromotionSuggestions.filter.createdAt.label': 'Criado em',
    'aiPromotionSuggestions.action.run.label': 'Gerar sugestões',
  };

  protected message_en: Record<string, string> = {
    'aiPromotionSuggestions.section.main.title': 'AI Assistant: item promotion suggestions (last 7 days)',
    'aiPromotionSuggestions.organism.main.title': 'AI promotion suggestions',
    'aiPromotionSuggestions.intent.query.title': 'Suggestions (last 7 days)',
    'aiPromotionSuggestions.field.id.label': 'Order item',
    'aiPromotionSuggestions.field.orderId.label': 'Order',
    'aiPromotionSuggestions.field.menuItemId.label': 'Menu item',
    'aiPromotionSuggestions.field.kitchenTicketId.label': 'Kitchen ticket',
    'aiPromotionSuggestions.field.quantity.label': 'Quantity',
    'aiPromotionSuggestions.field.unitPrice.label': 'Unit price',
    'aiPromotionSuggestions.field.totalPrice.label': 'Total price',
    'aiPromotionSuggestions.field.observations.label': 'Observations',
    'aiPromotionSuggestions.filter.id.label': 'Order item (ID)',
    'aiPromotionSuggestions.filter.orderId.label': 'Order (ID)',
    'aiPromotionSuggestions.filter.menuItemId.label': 'Menu item (ID)',
    'aiPromotionSuggestions.filter.kitchenTicketId.label': 'Kitchen ticket (ID)',
    'aiPromotionSuggestions.filter.status.label': 'Item status',
    'aiPromotionSuggestions.filter.createdAt.label': 'Created at',
    'aiPromotionSuggestions.action.run.label': 'Generate suggestions',
  };

  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { locale?: string }).locale ?? 'pt';
    return lang === 'en' ? this.message_en : this.message_pt;
  }

  /* ── Query action: aiPromotionSuggestions ── */

  async loadAiPromotionSuggestions(): Promise<void> {
    this.aiPromotionSuggestionsState = 'loading';
    setState('ui.aiPromotionSuggestions.action.aiPromotionSuggestions.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowAiPromotionSuggestionsInput = {
      id: this.aiPromotionSuggestionsId || undefined,
      orderId: this.aiPromotionSuggestionsOrderId || undefined,
      menuItemId: this.aiPromotionSuggestionsMenuItemId || undefined,
      kitchenTicketId: this.aiPromotionSuggestionsKitchenTicketId || undefined,
      status: (this.aiPromotionSuggestionsStatus || undefined) as CafeFlowAiPromotionSuggestionsInput['status'],
      createdAt: this.aiPromotionSuggestionsCreatedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };

    try {
      const response = await execBff<CafeFlowAiPromotionSuggestionsOutputItem[]>(
        'cafeFlow.aiPromotionSuggestions.aiPromotionSuggestions',
        params,
        options,
      );

      if (response.ok) {
        this.aiPromotionSuggestionsData = response.data ?? [];
        setState('ui.aiPromotionSuggestions.data.aiPromotionSuggestions', this.aiPromotionSuggestionsData);
        this.aiPromotionSuggestionsState = 'success';
        setState('ui.aiPromotionSuggestions.action.aiPromotionSuggestions.status', 'success');
      } else {
        this.aiPromotionSuggestionsState = 'error';
        setState('ui.aiPromotionSuggestions.action.aiPromotionSuggestions.status', 'error');
      }
    } catch {
      this.aiPromotionSuggestionsState = 'error';
      setState('ui.aiPromotionSuggestions.action.aiPromotionSuggestions.status', 'error');
    }

    this.requestUpdate();
  }

  handleAiPromotionSuggestionsClick(): void {
    runBlockingUiAction(async () => {
      await this.loadAiPromotionSuggestions();
    });
  }

  /* ── State setters ── */

  setAiPromotionSuggestionsId(value: string): void {
    this.aiPromotionSuggestionsId = value;
    setState('ui.aiPromotionSuggestions.input.aiPromotionSuggestions.id', value);
    this.requestUpdate();
  }

  handleAiPromotionSuggestionsIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAiPromotionSuggestionsId(target.value);
  }

  setAiPromotionSuggestionsOrderId(value: string): void {
    this.aiPromotionSuggestionsOrderId = value;
    setState('ui.aiPromotionSuggestions.input.aiPromotionSuggestions.orderId', value);
    this.requestUpdate();
  }

  handleAiPromotionSuggestionsOrderIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAiPromotionSuggestionsOrderId(target.value);
  }

  setAiPromotionSuggestionsMenuItemId(value: string): void {
    this.aiPromotionSuggestionsMenuItemId = value;
    setState('ui.aiPromotionSuggestions.input.aiPromotionSuggestions.menuItemId', value);
    this.requestUpdate();
  }

  handleAiPromotionSuggestionsMenuItemIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAiPromotionSuggestionsMenuItemId(target.value);
  }

  setAiPromotionSuggestionsKitchenTicketId(value: string): void {
    this.aiPromotionSuggestionsKitchenTicketId = value;
    setState('ui.aiPromotionSuggestions.input.aiPromotionSuggestions.kitchenTicketId', value);
    this.requestUpdate();
  }

  handleAiPromotionSuggestionsKitchenTicketIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAiPromotionSuggestionsKitchenTicketId(target.value);
  }

  setAiPromotionSuggestionsStatus(value: string): void {
    this.aiPromotionSuggestionsStatus = value;
    setState('ui.aiPromotionSuggestions.input.aiPromotionSuggestions.status', value);
    this.requestUpdate();
  }

  handleAiPromotionSuggestionsStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setAiPromotionSuggestionsStatus(target.value);
  }

  setAiPromotionSuggestionsCreatedAt(value: string): void {
    this.aiPromotionSuggestionsCreatedAt = value;
    setState('ui.aiPromotionSuggestions.input.aiPromotionSuggestions.createdAt', value);
    this.requestUpdate();
  }

  handleAiPromotionSuggestionsCreatedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setAiPromotionSuggestionsCreatedAt(target.value);
  }

  /* ── Lifecycle ── */

  connectedCallback(): void {
    super.connectedCallback();

    // Initialize from shared state where available, falling back to defaults
    const sharedStatus = getState('ui.aiPromotionSuggestions.status');
    if (sharedStatus !== undefined) {
      this.status = sharedStatus;
    }

    const sharedActionStatus = getState('ui.aiPromotionSuggestions.action.aiPromotionSuggestions.status');
    if (sharedActionStatus !== undefined) {
      this.aiPromotionSuggestionsState = sharedActionStatus;
    }

    const sharedData = getState('ui.aiPromotionSuggestions.data.aiPromotionSuggestions');
    if (sharedData !== undefined) {
      this.aiPromotionSuggestionsData = sharedData;
    }

    // Run initial loads
    this.loadAiPromotionSuggestions();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}

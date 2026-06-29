/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/aiSalesSummary.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowAiSalesSummaryInput,
  CafeFlowAiSalesSummaryOutput,
  CafeFlowAiSalesSummaryOutputItem,
} from '/_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.js';

const message_pt: Record<string, string> = {
  'aiSalesSummary.section.main.title': 'Assistente IA: resumo de vendas do dia',
  'aiSalesSummary.organism.main.title': 'Resumo de vendas por IA',
  'aiSalesSummary.intent.filters.title': 'Filtros do resumo',
  'aiSalesSummary.intent.results.title': 'Resultados do resumo',
  'aiSalesSummary.field.dailyShiftId.label': 'Turno diário',
  'aiSalesSummary.field.status.label': 'Status do pedido',
  'aiSalesSummary.field.closedAt.label': 'Data de fechamento',
  'aiSalesSummary.action.run.label': 'Gerar resumo',
  'aiSalesSummary.col.dailyShiftId.label': 'Turno diário',
  'aiSalesSummary.col.status.label': 'Status',
  'aiSalesSummary.col.totalAmount.label': 'Total',
  'aiSalesSummary.col.closedAt.label': 'Fechado em',
};

const message_en: Record<string, string> = {
  'aiSalesSummary.section.main.title': 'AI Assistant: daily sales summary',
  'aiSalesSummary.organism.main.title': 'AI sales summary',
  'aiSalesSummary.intent.filters.title': 'Summary filters',
  'aiSalesSummary.intent.results.title': 'Summary results',
  'aiSalesSummary.field.dailyShiftId.label': 'Daily shift',
  'aiSalesSummary.field.status.label': 'Order status',
  'aiSalesSummary.field.closedAt.label': 'Closing date',
  'aiSalesSummary.action.run.label': 'Generate summary',
  'aiSalesSummary.col.dailyShiftId.label': 'Daily shift',
  'aiSalesSummary.col.status.label': 'Status',
  'aiSalesSummary.col.totalAmount.label': 'Total',
  'aiSalesSummary.col.closedAt.label': 'Closed at',
};

export class CafeFlowAiSalesSummaryBase extends CollabLitElement {
  @property() status = '';

  @property() aiSalesSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property() aiSalesSummaryDailyShiftId = '';

  @property() aiSalesSummaryStatus = '';

  @property() aiSalesSummaryClosedAt = '';

  @property() aiSalesSummaryData: CafeFlowAiSalesSummaryOutput = [];

  protected get msg(): Record<string, string> {
    const lang = (this as any).__lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.status = getState('ui.aiSalesSummary.status') ?? '';
    this.aiSalesSummaryState = getState('ui.aiSalesSummary.action.aiSalesSummary.status') ?? 'idle';
    this.aiSalesSummaryDailyShiftId = getState('ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId') ?? '';
    this.aiSalesSummaryStatus = getState('ui.aiSalesSummary.input.aiSalesSummary.status') ?? '';
    this.aiSalesSummaryClosedAt = getState('ui.aiSalesSummary.input.aiSalesSummary.closedAt') ?? '';
    this.aiSalesSummaryData = getState('ui.aiSalesSummary.data.aiSalesSummary') ?? [];

    this.loadAiSalesSummary();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // ── Query: aiSalesSummary ──────────────────────────────────────────

  async loadAiSalesSummary(): Promise<void> {
    this.aiSalesSummaryState = 'loading';
    setState('ui.aiSalesSummary.action.aiSalesSummary.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowAiSalesSummaryInput = {
      dailyShiftId: this.aiSalesSummaryDailyShiftId || undefined,
      status: (this.aiSalesSummaryStatus as CafeFlowAiSalesSummaryInput['status']) || undefined,
      closedAt: this.aiSalesSummaryClosedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };

    try {
      const response = await execBff<CafeFlowAiSalesSummaryOutput>(
        'cafeFlow.aiSalesSummary.aiSalesSummary',
        params,
        options,
      );

      if (response.ok) {
        this.aiSalesSummaryData = response.data ?? [];
        setState('ui.aiSalesSummary.data.aiSalesSummary', this.aiSalesSummaryData);
        this.aiSalesSummaryState = 'success';
        setState('ui.aiSalesSummary.action.aiSalesSummary.status', 'success');
      } else {
        this.aiSalesSummaryState = 'error';
        setState('ui.aiSalesSummary.action.aiSalesSummary.status', 'error');
      }
    } catch {
      this.aiSalesSummaryState = 'error';
      setState('ui.aiSalesSummary.action.aiSalesSummary.status', 'error');
    }

    this.requestUpdate();
  }

  handleAiSalesSummaryClick = (): void => {
    runBlockingUiAction(async () => {
      await this.loadAiSalesSummary();
    });
  };

  // ── State setters ──────────────────────────────────────────────────

  setAiSalesSummaryDailyShiftId(value: string): void {
    this.aiSalesSummaryDailyShiftId = value;
    setState('ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId', value);
    this.requestUpdate();
  }

  handleAiSalesSummaryDailyShiftIdChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.setAiSalesSummaryDailyShiftId(target.value);
  };

  setAiSalesSummaryStatus(value: string): void {
    this.aiSalesSummaryStatus = value;
    setState('ui.aiSalesSummary.input.aiSalesSummary.status', value);
    this.requestUpdate();
  }

  handleAiSalesSummaryStatusChange = (e: Event): void => {
    const target = e.target as HTMLSelectElement;
    this.setAiSalesSummaryStatus(target.value);
  };

  setAiSalesSummaryClosedAt(value: string): void {
    this.aiSalesSummaryClosedAt = value;
    setState('ui.aiSalesSummary.input.aiSalesSummary.closedAt', value);
    this.requestUpdate();
  }

  handleAiSalesSummaryClosedAtChange = (e: Event): void => {
    const target = e.target as HTMLInputElement;
    this.setAiSalesSummaryClosedAt(target.value);
  };
}

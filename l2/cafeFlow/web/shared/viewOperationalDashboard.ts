/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowViewOperationalDashboardInput,
  CafeFlowViewOperationalDashboardOutputItem,
  CafeFlowViewOperationalDashboardOutput,
} from '/_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.js';

const message_pt: Record<string, string> = {
  'viewOperationalDashboard.section.title': 'Dashboard operacional do dia',
  'viewOperationalDashboard.organism.title': 'Visão operacional',
  'viewOperationalDashboard.filters.title': 'Filtros do dashboard',
  'viewOperationalDashboard.field.dailyShiftId': 'ID do turno',
  'viewOperationalDashboard.field.shiftDate': 'Data do turno',
  'viewOperationalDashboard.field.status': 'Status do turno',
  'viewOperationalDashboard.field.openedAt': 'Abertura do turno',
  'viewOperationalDashboard.field.closedAt': 'Fechamento do turno',
  'viewOperationalDashboard.field.createdAt': 'Criado em',
  'viewOperationalDashboard.action.run': 'Atualizar dashboard',
  'viewOperationalDashboard.summary.title': 'Resumo do turno',
  'viewOperationalDashboard.summary.dailyShiftId': 'ID do turno',
  'viewOperationalDashboard.summary.shiftDate': 'Data do turno',
  'viewOperationalDashboard.summary.status': 'Status',
  'viewOperationalDashboard.summary.openedAt': 'Abertura',
  'viewOperationalDashboard.summary.closedAt': 'Fechamento',
  'viewOperationalDashboard.summary.openingCashBalance': 'Caixa inicial',
  'viewOperationalDashboard.summary.closingCashBalance': 'Caixa final',
  'viewOperationalDashboard.summary.totalSales': 'Total de vendas',
};

const message_en: Record<string, string> = {
  'viewOperationalDashboard.section.title': 'Daily Operational Dashboard',
  'viewOperationalDashboard.organism.title': 'Operational Overview',
  'viewOperationalDashboard.filters.title': 'Dashboard Filters',
  'viewOperationalDashboard.field.dailyShiftId': 'Shift ID',
  'viewOperationalDashboard.field.shiftDate': 'Shift Date',
  'viewOperationalDashboard.field.status': 'Shift Status',
  'viewOperationalDashboard.field.openedAt': 'Shift Opening',
  'viewOperationalDashboard.field.closedAt': 'Shift Closing',
  'viewOperationalDashboard.field.createdAt': 'Created At',
  'viewOperationalDashboard.action.run': 'Refresh Dashboard',
  'viewOperationalDashboard.summary.title': 'Shift Summary',
  'viewOperationalDashboard.summary.dailyShiftId': 'Shift ID',
  'viewOperationalDashboard.summary.shiftDate': 'Shift Date',
  'viewOperationalDashboard.summary.status': 'Status',
  'viewOperationalDashboard.summary.openedAt': 'Opening',
  'viewOperationalDashboard.summary.closedAt': 'Closing',
  'viewOperationalDashboard.summary.openingCashBalance': 'Opening Cash Balance',
  'viewOperationalDashboard.summary.closingCashBalance': 'Closing Cash Balance',
  'viewOperationalDashboard.summary.totalSales': 'Total Sales',
};

export class CafeFlowViewOperationalDashboardBase extends CollabLitElement {
  @property() status = '';

  @property() viewOperationalDashboardState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  @property() viewOperationalDashboardDailyShiftId = '';

  @property() viewOperationalDashboardShiftDate = '';

  @property() viewOperationalDashboardStatus = '';

  @property() viewOperationalDashboardOpenedAt = '';

  @property() viewOperationalDashboardClosedAt = '';

  @property() viewOperationalDashboardCreatedAt = '';

  @property() viewOperationalDashboardData: CafeFlowViewOperationalDashboardOutputItem[] = [];

  protected get msg(): Record<string, string> {
    const lang = (typeof document !== 'undefined' && document.documentElement?.lang) || 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.status = getState('ui.viewOperationalDashboard.status') ?? '';
    this.viewOperationalDashboardState =
      getState('ui.viewOperationalDashboard.action.viewOperationalDashboard.status') ?? 'idle';
    this.viewOperationalDashboardDailyShiftId =
      getState('ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId') ?? '';
    this.viewOperationalDashboardShiftDate =
      getState('ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate') ?? '';
    this.viewOperationalDashboardStatus =
      getState('ui.viewOperationalDashboard.input.viewOperationalDashboard.status') ?? '';
    this.viewOperationalDashboardOpenedAt =
      getState('ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt') ?? '';
    this.viewOperationalDashboardClosedAt =
      getState('ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt') ?? '';
    this.viewOperationalDashboardCreatedAt =
      getState('ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt') ?? '';
    this.viewOperationalDashboardData =
      getState('ui.viewOperationalDashboard.data.viewOperationalDashboard') ?? [];

    this.loadViewOperationalDashboard();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // ── Query action: viewOperationalDashboard ──────────────────────────

  async loadViewOperationalDashboard(): Promise<void> {
    this.viewOperationalDashboardState = 'loading';
    setState('ui.viewOperationalDashboard.action.viewOperationalDashboard.status', 'loading');
    this.requestUpdate();

    const params: CafeFlowViewOperationalDashboardInput = {
      dailyShiftId: this.viewOperationalDashboardDailyShiftId || undefined,
      shiftDate: this.viewOperationalDashboardShiftDate || undefined,
      status: (this.viewOperationalDashboardStatus as 'open' | 'closed') || undefined,
      openedAt: this.viewOperationalDashboardOpenedAt || undefined,
      closedAt: this.viewOperationalDashboardClosedAt || undefined,
      createdAt: this.viewOperationalDashboardCreatedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };

    try {
      const response = await execBff<CafeFlowViewOperationalDashboardOutput>(
        'cafeFlow.viewOperationalDashboard.viewOperationalDashboard',
        params,
        options,
      );

      if (response.ok) {
        const data = response.data ?? [];
        this.viewOperationalDashboardData = data;
        setState('ui.viewOperationalDashboard.data.viewOperationalDashboard', data);
        this.viewOperationalDashboardState = 'success';
        setState('ui.viewOperationalDashboard.action.viewOperationalDashboard.status', 'success');
      } else {
        this.viewOperationalDashboardState = 'error';
        setState('ui.viewOperationalDashboard.action.viewOperationalDashboard.status', 'error');
      }
    } catch {
      this.viewOperationalDashboardState = 'error';
      setState('ui.viewOperationalDashboard.action.viewOperationalDashboard.status', 'error');
    }

    this.requestUpdate();
  }

  handleViewOperationalDashboardClick(): void {
    runBlockingUiAction(async () => {
      await this.loadViewOperationalDashboard();
    });
  }

  // ── State setters ────────────────────────────────────────────────────

  setViewOperationalDashboardDailyShiftId(value: string): void {
    this.viewOperationalDashboardDailyShiftId = value;
    setState('ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId', value);
    this.requestUpdate();
  }

  handleViewOperationalDashboardDailyShiftIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewOperationalDashboardDailyShiftId(target.value);
  }

  setViewOperationalDashboardShiftDate(value: string): void {
    this.viewOperationalDashboardShiftDate = value;
    setState('ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate', value);
    this.requestUpdate();
  }

  handleViewOperationalDashboardShiftDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewOperationalDashboardShiftDate(target.value);
  }

  setViewOperationalDashboardStatus(value: string): void {
    this.viewOperationalDashboardStatus = value;
    setState('ui.viewOperationalDashboard.input.viewOperationalDashboard.status', value);
    this.requestUpdate();
  }

  handleViewOperationalDashboardStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setViewOperationalDashboardStatus(target.value);
  }

  setViewOperationalDashboardOpenedAt(value: string): void {
    this.viewOperationalDashboardOpenedAt = value;
    setState('ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt', value);
    this.requestUpdate();
  }

  handleViewOperationalDashboardOpenedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewOperationalDashboardOpenedAt(target.value);
  }

  setViewOperationalDashboardClosedAt(value: string): void {
    this.viewOperationalDashboardClosedAt = value;
    setState('ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt', value);
    this.requestUpdate();
  }

  handleViewOperationalDashboardClosedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewOperationalDashboardClosedAt(target.value);
  }

  setViewOperationalDashboardCreatedAt(value: string): void {
    this.viewOperationalDashboardCreatedAt = value;
    setState('ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt', value);
    this.requestUpdate();
  }

  handleViewOperationalDashboardCreatedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewOperationalDashboardCreatedAt(target.value);
  }
}

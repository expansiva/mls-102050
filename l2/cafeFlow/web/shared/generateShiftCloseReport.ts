/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.ts" enhancement="_blank"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  CafeFlowGenerateShiftCloseReportInput,
  CafeFlowGenerateShiftCloseReportOutput,
  CafeFlowGenerateShiftCloseReportOutputItem,
} from '/_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.js';

const message_pt: Record<string, string> = {
  'generateShiftCloseReport.section.title': 'Gerar relatório de fechamento de turno',
  'generateShiftCloseReport.organism.title': 'Gerar relatório de fechamento de turno',
  'generateShiftCloseReport.filters.title': 'Command Form',
  'generateShiftCloseReport.filters.status': 'Status',
  'generateShiftCloseReport.filters.openedAt': 'Opened At',
  'generateShiftCloseReport.filters.closedAt': 'Closed At',
  'generateShiftCloseReport.actions.generate': 'Generate Shift Close Report',
  'generateShiftCloseReport.summary.title': 'Summary',
  'generateShiftCloseReport.summary.status': 'Status',
  'generateShiftCloseReport.summary.openedAt': 'Opened At',
  'generateShiftCloseReport.summary.closedAt': 'Closed At',
  'generateShiftCloseReport.summary.openingCashBalance': 'Opening Cash Balance',
  'generateShiftCloseReport.summary.closingCashBalance': 'Closing Cash Balance',
  'generateShiftCloseReport.summary.totalSales': 'Total Sales',
  'generateShiftCloseReport.summary.totalPayments': 'Total Payments',
  'generateShiftCloseReport.summary.closingNotes': 'Closing Notes',
};

const message_en: Record<string, string> = {
  'generateShiftCloseReport.section.title': 'Generate Shift Close Report',
  'generateShiftCloseReport.organism.title': 'Generate Shift Close Report',
  'generateShiftCloseReport.filters.title': 'Command Form',
  'generateShiftCloseReport.filters.status': 'Status',
  'generateShiftCloseReport.filters.openedAt': 'Opened At',
  'generateShiftCloseReport.filters.closedAt': 'Closed At',
  'generateShiftCloseReport.actions.generate': 'Generate Shift Close Report',
  'generateShiftCloseReport.summary.title': 'Summary',
  'generateShiftCloseReport.summary.status': 'Status',
  'generateShiftCloseReport.summary.openedAt': 'Opened At',
  'generateShiftCloseReport.summary.closedAt': 'Closed At',
  'generateShiftCloseReport.summary.openingCashBalance': 'Opening Cash Balance',
  'generateShiftCloseReport.summary.closingCashBalance': 'Closing Cash Balance',
  'generateShiftCloseReport.summary.totalSales': 'Total Sales',
  'generateShiftCloseReport.summary.totalPayments': 'Total Payments',
  'generateShiftCloseReport.summary.closingNotes': 'Closing Notes',
};

export class CafeFlowGenerateShiftCloseReportBase extends CollabLitElement {
  @property({ type: String }) status = '';
  @property({ type: String }) generateShiftCloseReportState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) generateShiftCloseReportStatus = '';
  @property({ type: String }) generateShiftCloseReportOpenedAt = '';
  @property({ type: String }) generateShiftCloseReportClosedAt = '';
  @property({ type: Array }) generateShiftCloseReportData: CafeFlowGenerateShiftCloseReportOutput = [];

  protected get msg(): Record<string, string> {
    const lang = (this as unknown as { lang?: string }).lang ?? 'pt';
    return lang === 'en' ? message_en : message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.status = getState('ui.generateShiftCloseReport.status') ?? '';
    this.generateShiftCloseReportState = getState('ui.generateShiftCloseReport.action.generateShiftCloseReport.status') ?? 'idle';
    this.generateShiftCloseReportStatus = getState('ui.generateShiftCloseReport.input.generateShiftCloseReport.status') ?? '';
    this.generateShiftCloseReportOpenedAt = getState('ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt') ?? '';
    this.generateShiftCloseReportClosedAt = getState('ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt') ?? '';
    this.generateShiftCloseReportData = getState('ui.generateShiftCloseReport.data.generateShiftCloseReport') ?? [];

    this.loadGenerateShiftCloseReport();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- State setters ---

  setGenerateShiftCloseReportStatus(value: string): void {
    this.generateShiftCloseReportStatus = value;
    setState('ui.generateShiftCloseReport.input.generateShiftCloseReport.status', value);
    this.requestUpdate();
  }

  handleGenerateShiftCloseReportStatusChange(e: Event): void {
    const target = e.target as HTMLSelectElement;
    this.setGenerateShiftCloseReportStatus(target.value);
  }

  setGenerateShiftCloseReportOpenedAt(value: string): void {
    this.generateShiftCloseReportOpenedAt = value;
    setState('ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt', value);
    this.requestUpdate();
  }

  handleGenerateShiftCloseReportOpenedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGenerateShiftCloseReportOpenedAt(target.value);
  }

  setGenerateShiftCloseReportClosedAt(value: string): void {
    this.generateShiftCloseReportClosedAt = value;
    setState('ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt', value);
    this.requestUpdate();
  }

  handleGenerateShiftCloseReportClosedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGenerateShiftCloseReportClosedAt(target.value);
  }

  // --- Query action ---

  async loadGenerateShiftCloseReport(): Promise<void> {
    this.generateShiftCloseReportState = 'loading';
    setState('ui.generateShiftCloseReport.action.generateShiftCloseReport.status', 'loading');

    const params: CafeFlowGenerateShiftCloseReportInput = {
      status: (this.generateShiftCloseReportStatus || undefined) as CafeFlowGenerateShiftCloseReportInput['status'],
      openedAt: this.generateShiftCloseReportOpenedAt || undefined,
      closedAt: this.generateShiftCloseReportClosedAt || undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };

    try {
      const response = await execBff<CafeFlowGenerateShiftCloseReportOutput>(
        'cafeFlow.generateShiftCloseReport.generateShiftCloseReport',
        params,
        options,
      );

      if (response.ok) {
        const data = response.data ?? [];
        this.generateShiftCloseReportData = data;
        setState('ui.generateShiftCloseReport.data.generateShiftCloseReport', data);
        this.generateShiftCloseReportState = 'success';
        setState('ui.generateShiftCloseReport.action.generateShiftCloseReport.status', 'success');
      } else {
        this.generateShiftCloseReportState = 'error';
        setState('ui.generateShiftCloseReport.action.generateShiftCloseReport.status', 'error');
      }
    } catch {
      this.generateShiftCloseReportState = 'error';
      setState('ui.generateShiftCloseReport.action.generateShiftCloseReport.status', 'error');
    }
  }

  handleGenerateShiftCloseReportClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async () => {
      await this.loadGenerateShiftCloseReport();
    });
  }
}

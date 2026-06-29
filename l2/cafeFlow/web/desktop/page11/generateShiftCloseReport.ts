/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowGenerateShiftCloseReportBase } from '/_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.js';

@customElement('cafeflow--web--desktop--page11--generate-shift-close-report--102050')
export class CafeFlowDesktopPage11GenerateShiftCloseReportPage extends CafeFlowGenerateShiftCloseReportBase {
  render() {
    const m = this.msg;
    const data = this.generateShiftCloseReportData;
    const first = data && data.length > 0 ? data[0] : null;
    const loading = this.generateShiftCloseReportState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m['generateShiftCloseReport.section.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m['generateShiftCloseReport.organism.title'] ?? ''}
            </p>
          </header>

          <!-- Section: Generate Shift Close Report -->
          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                ${m['generateShiftCloseReport.section.title'] ?? ''}
              </h2>
            </div>

            <div class="p-5 space-y-6">
              <!-- Command Form Intention -->
              <div class="space-y-4">
                <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  ${m['generateShiftCloseReport.filters.title'] ?? ''}
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <!-- Status select -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                      ${m['generateShiftCloseReport.filters.status'] ?? ''}
                    </label>
                    <select
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      .value="${this.generateShiftCloseReportStatus}"
                      @change="${(e: Event) => this.handleGenerateShiftCloseReportStatusChange(e)}"
                    >
                      <option value=""></option>
                      <option value="open" ?selected="${this.generateShiftCloseReportStatus === 'open'}">open</option>
                      <option value="closed" ?selected="${this.generateShiftCloseReportStatus === 'closed'}">closed</option>
                    </select>
                  </div>

                  <!-- Opened At date -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                      ${m['generateShiftCloseReport.filters.openedAt'] ?? ''}
                    </label>
                    <input
                      type="date"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      .value="${this.generateShiftCloseReportOpenedAt}"
                      @input="${(e: Event) => this.handleGenerateShiftCloseReportOpenedAtChange(e)}"
                    />
                  </div>

                  <!-- Closed At date -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                      ${m['generateShiftCloseReport.filters.closedAt'] ?? ''}
                    </label>
                    <input
                      type="date"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      .value="${this.generateShiftCloseReportClosedAt}"
                      @input="${(e: Event) => this.handleGenerateShiftCloseReportClosedAtChange(e)}"
                    />
                  </div>
                </div>

                <!-- Action row -->
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    ?disabled="${loading}"
                    @click="${(e: Event) => this.handleGenerateShiftCloseReportClick(e)}"
                  >
                    ${loading ? '...' : (m['generateShiftCloseReport.actions.generate'] ?? '')}
                  </button>
                  ${this.generateShiftCloseReportState === 'error'
                    ? html`<span class="text-sm text-red-600 dark:text-red-400">Error</span>`
                    : ''}
                  ${this.generateShiftCloseReportState === 'success'
                    ? html`<span class="text-sm text-green-600 dark:text-green-400">OK</span>`
                    : ''}
                </div>
              </div>

              <!-- Summary Intention -->
              <div class="space-y-4">
                <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  ${m['generateShiftCloseReport.summary.title'] ?? ''}
                </h3>

                ${first
                  ? html`
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="space-y-1">
                        <span class="text-xs font-medium text-slate-400 dark:text-slate-500">
                          ${m['generateShiftCloseReport.summary.status'] ?? ''}
                        </span>
                        <p class="text-sm text-slate-700 dark:text-slate-200">${first.status}</p>
                      </div>
                      <div class="space-y-1">
                        <span class="text-xs font-medium text-slate-400 dark:text-slate-500">
                          ${m['generateShiftCloseReport.summary.openedAt'] ?? ''}
                        </span>
                        <p class="text-sm text-slate-700 dark:text-slate-200">${first.openedAt}</p>
                      </div>
                      <div class="space-y-1">
                        <span class="text-xs font-medium text-slate-400 dark:text-slate-500">
                          ${m['generateShiftCloseReport.summary.closedAt'] ?? ''}
                        </span>
                        <p class="text-sm text-slate-700 dark:text-slate-200">${first.closedAt}</p>
                      </div>
                      <div class="space-y-1">
                        <span class="text-xs font-medium text-slate-400 dark:text-slate-500">
                          ${m['generateShiftCloseReport.summary.openingCashBalance'] ?? ''}
                        </span>
                        <p class="text-sm text-slate-700 dark:text-slate-200">${first.openingCashBalance}</p>
                      </div>
                      <div class="space-y-1">
                        <span class="text-xs font-medium text-slate-400 dark:text-slate-500">
                          ${m['generateShiftCloseReport.summary.closingCashBalance'] ?? ''}
                        </span>
                        <p class="text-sm text-slate-700 dark:text-slate-200">${first.closingCashBalance}</p>
                      </div>
                      <div class="space-y-1">
                        <span class="text-xs font-medium text-slate-400 dark:text-slate-500">
                          ${m['generateShiftCloseReport.summary.totalSales'] ?? ''}
                        </span>
                        <p class="text-sm text-slate-700 dark:text-slate-200">${first.totalSales}</p>
                      </div>
                      <div class="space-y-1">
                        <span class="text-xs font-medium text-slate-400 dark:text-slate-500">
                          ${m['generateShiftCloseReport.summary.totalPayments'] ?? ''}
                        </span>
                        <p class="text-sm text-slate-700 dark:text-slate-200">${first.totalPayments}</p>
                      </div>
                      <div class="space-y-1 sm:col-span-2">
                        <span class="text-xs font-medium text-slate-400 dark:text-slate-500">
                          ${m['generateShiftCloseReport.summary.closingNotes'] ?? ''}
                        </span>
                        <textarea
                          class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200"
                          rows="3"
                          readonly
                        >${first.closingNotes}</textarea>
                      </div>
                    </div>
                  `
                  : html`
                    <p class="text-sm text-slate-400 dark:text-slate-500">—</p>
                  `}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

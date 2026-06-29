/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowAiSalesSummaryBase } from '/_102050_/l2/cafeFlow/web/shared/aiSalesSummary.js';

@customElement('cafeflow--web--desktop--page11--aisalessummary-102050')
export class CafeFlowDesktopPage11AiSalesSummaryPage extends CafeFlowAiSalesSummaryBase {
  render() {
    const m = this.msg;
    const loading = this.aiSalesSummaryState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-xl font-semibold text-slate-800 dark:text-slate-100">
              ${m['aiSalesSummary.section.main.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m['aiSalesSummary.organism.main.title'] ?? ''}
            </p>
          </header>

          <!-- Section: main -->
          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-base font-medium text-slate-700 dark:text-slate-200">
                ${m['aiSalesSummary.section.main.title'] ?? ''}
              </h2>
            </div>

            <div class="p-5 space-y-6">
              <!-- Intention: commandForm (filters) -->
              <div class="space-y-4">
                <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                  ${m['aiSalesSummary.intent.filters.title'] ?? ''}
                </h3>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <!-- dailyShiftId -->
                  <div class="space-y-1">
                    <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['aiSalesSummary.field.dailyShiftId.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      .value=${this.aiSalesSummaryDailyShiftId}
                      @input=${this.handleAiSalesSummaryDailyShiftIdChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- status -->
                  <div class="space-y-1">
                    <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['aiSalesSummary.field.status.label'] ?? ''}
                    </label>
                    <select
                      .value=${this.aiSalesSummaryStatus}
                      @change=${this.handleAiSalesSummaryStatusChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value=""></option>
                      <option value="draft" ?selected=${this.aiSalesSummaryStatus === 'draft'}>draft</option>
                      <option value="sentToKitchen" ?selected=${this.aiSalesSummaryStatus === 'sentToKitchen'}>sentToKitchen</option>
                      <option value="inPreparation" ?selected=${this.aiSalesSummaryStatus === 'inPreparation'}>inPreparation</option>
                      <option value="ready" ?selected=${this.aiSalesSummaryStatus === 'ready'}>ready</option>
                      <option value="served" ?selected=${this.aiSalesSummaryStatus === 'served'}>served</option>
                      <option value="closed" ?selected=${this.aiSalesSummaryStatus === 'closed'}>closed</option>
                      <option value="cancelled" ?selected=${this.aiSalesSummaryStatus === 'cancelled'}>cancelled</option>
                    </select>
                  </div>

                  <!-- closedAt -->
                  <div class="space-y-1">
                    <label class="block text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['aiSalesSummary.field.closedAt.label'] ?? ''}
                    </label>
                    <input
                      type="date"
                      .value=${this.aiSalesSummaryClosedAt}
                      @input=${this.handleAiSalesSummaryClosedAtChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <!-- Action row -->
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    ?disabled=${loading}
                    @click=${this.handleAiSalesSummaryClick}
                    class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ${loading ? '…' : (m['aiSalesSummary.action.run.label'] ?? '')}
                  </button>
                  ${this.aiSalesSummaryState === 'error'
                    ? html`<span class="text-sm text-red-600 dark:text-red-400">Error</span>`
                    : ''}
                </div>
              </div>

              <!-- Intention: queryList (results) -->
              <div class="space-y-3">
                <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                  ${m['aiSalesSummary.intent.results.title'] ?? ''}
                </h3>

                <div class="overflow-x-auto rounded-md border border-slate-200 dark:border-slate-800">
                  <table class="w-full text-sm">
                    <thead class="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      <tr>
                        <th class="px-4 py-2 text-left font-medium">${m['aiSalesSummary.col.dailyShiftId.label'] ?? ''}</th>
                        <th class="px-4 py-2 text-left font-medium">${m['aiSalesSummary.col.status.label'] ?? ''}</th>
                        <th class="px-4 py-2 text-right font-medium">${m['aiSalesSummary.col.totalAmount.label'] ?? ''}</th>
                        <th class="px-4 py-2 text-left font-medium">${m['aiSalesSummary.col.closedAt.label'] ?? ''}</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                      ${this.aiSalesSummaryData && this.aiSalesSummaryData.length > 0
                        ? this.aiSalesSummaryData.map(
                            (row) => html`
                              <tr class="text-slate-700 dark:text-slate-200">
                                <td class="px-4 py-2">${row.dailyShiftId ?? ''}</td>
                                <td class="px-4 py-2">${row.status ?? ''}</td>
                                <td class="px-4 py-2 text-right">${row.totalAmount ?? ''}</td>
                                <td class="px-4 py-2">${row.closedAt ?? ''}</td>
                              </tr>
                            `,
                          )
                        : html`
                            <tr>
                              <td colspan="4" class="px-4 py-6 text-center text-slate-400 dark:text-slate-500">
                                —
                              </td>
                            </tr>
                          `}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

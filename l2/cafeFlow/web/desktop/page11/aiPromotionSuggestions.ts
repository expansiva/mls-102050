/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowAiPromotionSuggestionsBase } from '/_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.js';

@customElement('cafeflow--web--desktop--page11--ai-promotion-suggestions-102050')
export class CafeFlowDesktopPage11AiPromotionSuggestionsPage extends CafeFlowAiPromotionSuggestionsBase {
  render() {
    const m = this.msg;
    const data = this.aiPromotionSuggestionsData ?? [];
    const loading = this.aiPromotionSuggestionsState === 'loading';

    const statusOptions: Array<{ value: string; key: string }> = [
      { value: '', key: '' },
      { value: 'new', key: 'new' },
      { value: 'sentToKitchen', key: 'sentToKitchen' },
      { value: 'inPreparation', key: 'inPreparation' },
      { value: 'ready', key: 'ready' },
      { value: 'served', key: 'served' },
      { value: 'cancelled', key: 'cancelled' },
    ];

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-xl font-semibold text-slate-800 dark:text-slate-100">
              ${m['aiPromotionSuggestions.section.main.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m['aiPromotionSuggestions.organism.main.title'] ?? ''}
            </p>
          </header>

          <!-- Main section card -->
          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-base font-medium text-slate-700 dark:text-slate-200">
                ${m['aiPromotionSuggestions.organism.main.title'] ?? ''}
              </h2>
            </div>

            <div class="p-5 space-y-5">
              <!-- Intention title -->
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                ${m['aiPromotionSuggestions.intent.query.title'] ?? ''}
              </h3>

              <!-- Filters -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['aiPromotionSuggestions.filter.id.label'] ?? ''}</span>
                  <input
                    type="text"
                    .value="${this.aiPromotionSuggestionsId}"
                    @input="${this.handleAiPromotionSuggestionsIdChange}"
                    class="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['aiPromotionSuggestions.filter.orderId.label'] ?? ''}</span>
                  <input
                    type="text"
                    .value="${this.aiPromotionSuggestionsOrderId}"
                    @input="${this.handleAiPromotionSuggestionsOrderIdChange}"
                    class="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['aiPromotionSuggestions.filter.menuItemId.label'] ?? ''}</span>
                  <input
                    type="text"
                    .value="${this.aiPromotionSuggestionsMenuItemId}"
                    @input="${this.handleAiPromotionSuggestionsMenuItemIdChange}"
                    class="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['aiPromotionSuggestions.filter.kitchenTicketId.label'] ?? ''}</span>
                  <input
                    type="text"
                    .value="${this.aiPromotionSuggestionsKitchenTicketId}"
                    @input="${this.handleAiPromotionSuggestionsKitchenTicketIdChange}"
                    class="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['aiPromotionSuggestions.filter.status.label'] ?? ''}</span>
                  <select
                    .value="${this.aiPromotionSuggestionsStatus}"
                    @change="${this.handleAiPromotionSuggestionsStatusChange}"
                    class="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    ${statusOptions.map(
                      (opt) => html`
                        <option value="${opt.value}" ?selected="${this.aiPromotionSuggestionsStatus === opt.value}">
                          ${opt.value === '' ? '—' : opt.key}
                        </option>
                      `,
                    )}
                  </select>
                </label>

                <label class="block">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">${m['aiPromotionSuggestions.filter.createdAt.label'] ?? ''}</span>
                  <input
                    type="date"
                    .value="${this.aiPromotionSuggestionsCreatedAt}"
                    @input="${this.handleAiPromotionSuggestionsCreatedAtChange}"
                    class="mt-1 block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </label>
              </div>

              <!-- Toolbar -->
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  ?disabled="${loading}"
                  @click="${this.handleAiPromotionSuggestionsClick}"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ${loading ? '…' : (m['aiPromotionSuggestions.action.run.label'] ?? '')}
                </button>
                ${this.aiPromotionSuggestionsState === 'error'
                  ? html`<span class="text-sm text-red-600 dark:text-red-400">Error</span>`
                  : ''}
                ${this.aiPromotionSuggestionsState === 'success'
                  ? html`<span class="text-sm text-green-600 dark:text-green-400">OK</span>`
                  : ''}
              </div>

              <!-- Results table -->
              <div class="overflow-x-auto rounded-md border border-slate-200 dark:border-slate-800">
                <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                  <thead class="bg-slate-50 dark:bg-slate-800">
                    <tr>
                      <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">${m['aiPromotionSuggestions.field.id.label'] ?? ''}</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">${m['aiPromotionSuggestions.field.orderId.label'] ?? ''}</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">${m['aiPromotionSuggestions.field.menuItemId.label'] ?? ''}</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">${m['aiPromotionSuggestions.field.kitchenTicketId.label'] ?? ''}</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">${m['aiPromotionSuggestions.field.quantity.label'] ?? ''}</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">${m['aiPromotionSuggestions.field.unitPrice.label'] ?? ''}</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">${m['aiPromotionSuggestions.field.totalPrice.label'] ?? ''}</th>
                      <th class="px-3 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">${m['aiPromotionSuggestions.field.observations.label'] ?? ''}</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-800">
                    ${data.length === 0
                      ? html`
                        <tr>
                          <td colspan="8" class="px-3 py-6 text-center text-sm text-slate-400 dark:text-slate-500">—</td>
                        </tr>
                      `
                      : data.map(
                          (row) => html`
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800">
                              <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${row.id}</td>
                              <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${row.orderId}</td>
                              <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${row.menuItemId}</td>
                              <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${row.kitchenTicketId}</td>
                              <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${row.quantity}</td>
                              <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${row.unitPrice}</td>
                              <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${row.totalPrice}</td>
                              <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${row.observations}</td>
                            </tr>
                          `,
                        )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowConsumeIngredientsOnConfirmationBase } from '/_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.js';

@customElement('cafe-flow--web--desktop--page11--consume-ingredients-on-confirmation-102050')
export class CafeFlowDesktopPage11ConsumeIngredientsOnConfirmationPage extends CafeFlowConsumeIngredientsOnConfirmationBase {
  render() {
    const sectionTitle = this.msg['consumeIngredientsOnConfirmation.section.main.title'] ?? '';
    const organismTitle = this.msg['consumeIngredientsOnConfirmation.organism.createStockConsumption.title'] ?? '';
    const formTitle = this.msg['consumeIngredientsOnConfirmation.intent.createStockConsumption.form.title'] ?? '';
    const quantityLabel = this.msg['consumeIngredientsOnConfirmation.field.quantity.label'] ?? '';
    const statusLabel = this.msg['consumeIngredientsOnConfirmation.field.status.label'] ?? '';
    const consumedAtLabel = this.msg['consumeIngredientsOnConfirmation.field.consumedAt.label'] ?? '';
    const submitLabel = this.msg['consumeIngredientsOnConfirmation.action.createStockConsumption.label'] ?? '';
    const summaryTitle = this.msg['consumeIngredientsOnConfirmation.intention.review.summary.title'] ?? '';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">${sectionTitle}</h1>
          </header>

          <section class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-6">
            <div class="space-y-1">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">${organismTitle}</h2>
            </div>

            <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-4">
              <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">${formTitle}</h3>
              <form class="space-y-4">
                <label class="block space-y-1">
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">${quantityLabel}</span>
                  <input
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100"
                    type="number"
                    .value=${String(this.createStockConsumptionQuantity ?? '')}
                    @input=${this.handleCreateStockConsumptionQuantityChange}
                  />
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">${statusLabel}</span>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100"
                    .value=${this.createStockConsumptionStatus ?? ''}
                    @change=${this.handleCreateStockConsumptionStatusChange}
                  >
                    <option value=""></option>
                    <option value="posted">posted</option>
                    <option value="voided">voided</option>
                  </select>
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium text-slate-700 dark:text-slate-200">${consumedAtLabel}</span>
                  <input
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100"
                    type="datetime-local"
                    .value=${this.createStockConsumptionConsumedAt ?? ''}
                    @change=${this.handleCreateStockConsumptionConsumedAtChange}
                  />
                </label>

                <div class="flex justify-end">
                  <button
                    class="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-60"
                    type="button"
                    @click=${this.handleCreateStockConsumptionClick}
                  >
                    ${submitLabel}
                  </button>
                </div>
              </form>
            </div>

            <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">${summaryTitle}</h3>
              <div class="mt-2 text-sm text-slate-500 dark:text-slate-400"></div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

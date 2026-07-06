/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageTables.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowManageTablesBase } from '/_102050_/l2/cafeFlow/web/shared/manageTables.js';

@customElement('cafe-flow--web--desktop--page11--manage-tables-102050')
export class CafeFlowDesktopPage11ManageTablesPage extends CafeFlowManageTablesBase {
  render() {
    const sectionTitle = this.msg['manageTables.section.title'] || '';
    const organismTitle = this.msg['manageTables.organism.title'] || '';
    const formTitle = this.msg['manageTables.form.title'] || '';
    const tableIdLabel = this.msg['manageTables.field.tableId'] || '';
    const numberLabel = this.msg['manageTables.field.number'] || '';
    const statusLabel = this.msg['manageTables.field.status'] || '';
    const submitLabel = this.msg['manageTables.action.submit'] || '';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              ${sectionTitle}
            </h1>
          </header>

          <section class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-5">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ${organismTitle}
              </h2>
            </div>

            <div class="rounded-md border border-slate-200 dark:border-slate-800 p-4 space-y-4">
              <div class="text-sm font-medium text-slate-700 dark:text-slate-300">
                ${formTitle}
              </div>

              <form class="space-y-4" @submit=${this.handleManageTablesClick}>
                <div class="grid gap-4 sm:grid-cols-2">
                  <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-300">
                    <span>${tableIdLabel}</span>
                    <input
                      class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                      type="text"
                      .value=${this.manageTablesTableId}
                      @input=${this.handleManageTablesTableIdChange}
                    />
                  </label>

                  <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-300">
                    <span>${numberLabel}</span>
                    <input
                      class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                      type="text"
                      .value=${this.manageTablesNumber}
                      @input=${this.handleManageTablesNumberChange}
                      required
                    />
                  </label>

                  <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-300">
                    <span>${statusLabel}</span>
                    <select
                      class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                      .value=${this.manageTablesStatus}
                      @change=${this.handleManageTablesStatusChange}
                      required
                    >
                      <option value=""></option>
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </label>
                </div>

                <div class="flex items-center gap-3">
                  <button
                    class="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
                    type="submit"
                    ?disabled=${this.manageTablesState === 'loading'}
                  >
                    ${submitLabel}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

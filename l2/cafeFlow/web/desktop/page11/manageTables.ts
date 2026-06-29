/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageTables.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowManageTablesBase } from '/_102050_/l2/cafeFlow/web/shared/manageTables.js';

@customElement('cafeflow--web--desktop--page11--manage-tables-102050')
export class CafeFlowDesktopPage11ManageTablesPage extends CafeFlowManageTablesBase {
  render() {
    const m = this.msg;
    const statusBadge = this.manageTablesState === 'loading'
      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
      : this.manageTablesState === 'success'
        ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
        : this.manageTablesState === 'error'
          ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400';

    const statusLabel = this.manageTablesState === 'loading'
      ? 'Loading…'
      : this.manageTablesState === 'success'
        ? 'Success'
        : this.manageTablesState === 'error'
          ? 'Error'
          : 'Idle';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m['manageTables.section.title'] ?? ''}
            </h1>
          </header>

          <!-- Section: Gerenciar mesas -->
          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-6">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${m['manageTables.organism.title'] ?? ''}
            </h2>

            <!-- Intention: commandForm -->
            <div class="space-y-4">
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                ${m['manageTables.form.title'] ?? ''}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- tableId -->
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${m['manageTables.field.tableId'] ?? ''}
                  </span>
                  <input
                    type="text"
                    .value="${this.manageTablesTableId}"
                    @input="${this.handleManageTablesTableIdChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <!-- number -->
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${m['manageTables.field.number'] ?? ''}<span class="text-red-500">*</span>
                  </span>
                  <input
                    type="text"
                    .value="${this.manageTablesNumber}"
                    @input="${this.handleManageTablesNumberChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </label>

                <!-- status -->
                <label class="block">
                  <span class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    ${m['manageTables.field.status'] ?? ''}<span class="text-red-500">*</span>
                  </span>
                  <select
                    .value="${this.manageTablesStatus}"
                    @change="${this.handleManageTablesStatusChange}"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" ?selected="${this.manageTablesStatus === ''}"></option>
                    <option value="available" ?selected="${this.manageTablesStatus === 'available'}">available</option>
                    <option value="occupied" ?selected="${this.manageTablesStatus === 'occupied'}">occupied</option>
                    <option value="disabled" ?selected="${this.manageTablesStatus === 'disabled'}">disabled</option>
                  </select>
                </label>
              </div>

              <!-- Actions -->
              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  ?disabled="${this.manageTablesState === 'loading'}"
                  @click="${this.handleManageTablesClick}"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  ${m['manageTables.action.submit'] ?? ''}
                </button>
              </div>
            </div>

            <!-- Intention: workflowStatus -->
            <div class="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300">
                ${m['manageTables.status.title'] ?? ''}
              </h3>
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge}">
                  ${statusLabel}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

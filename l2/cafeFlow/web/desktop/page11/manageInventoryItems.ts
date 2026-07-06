/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowManageInventoryItemsBase } from '/_102050_/l2/cafeFlow/web/shared/manageInventoryItems.js';

@customElement('cafeflow--web--desktop--page11--manageinventoryitems-102050')
export class CafeFlowDesktopPage11ManageInventoryItemsPage extends CafeFlowManageInventoryItemsBase {
  render() {
    const m = this.msg;
    const loading = this.manageInventoryItemsState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m['manageInventoryItems.section.main.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m['manageInventoryItems.organism.form.title'] ?? ''}
            </p>
          </header>

          <!-- Section card -->
          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="p-5 space-y-6">
              <!-- Workflow status intention -->
              <div class="space-y-2">
                <h2 class="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                  ${m['manageInventoryItems.intention.status.title'] ?? ''}
                </h2>
                <div class="flex items-center gap-2 text-sm">
                  ${this.manageInventoryItemsState === 'loading'
                    ? html`<span class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                        ...
                      </span>`
                    : this.manageInventoryItemsState === 'success'
                    ? html`<span class="text-green-600 dark:text-green-400">✓</span>`
                    : this.manageInventoryItemsState === 'error'
                    ? html`<span class="text-red-600 dark:text-red-400">✗</span>`
                    : html`<span class="text-slate-400 dark:text-slate-500">—</span>`}
                  <span class="text-slate-600 dark:text-slate-400">
                    ${this.status ?? ''}
                  </span>
                </div>
              </div>

              <!-- Command form intention -->
              <div class="space-y-4">
                <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  ${m['manageInventoryItems.intention.form.title'] ?? ''}
                </h2>

                <form class="space-y-4" @submit=${(e: Event) => this.handleManageInventoryItemsClick(e)}>
                  <!-- Name -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="manageInventoryItems-name">
                      ${m['manageInventoryItems.field.name.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="manageInventoryItems-name"
                      type="text"
                      .value=${this.manageInventoryItemsName}
                      @input=${(e: Event) => this.handleManageInventoryItemsNameChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${loading}
                    />
                  </div>

                  <!-- Description -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="manageInventoryItems-description">
                      ${m['manageInventoryItems.field.description.label'] ?? ''}
                    </label>
                    <textarea
                      id="manageInventoryItems-description"
                      .value=${this.manageInventoryItemsDescription}
                      @input=${(e: Event) => this.handleManageInventoryItemsDescriptionChange(e)}
                      rows="3"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${loading}
                    ></textarea>
                  </div>

                  <!-- Unit -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="manageInventoryItems-unit">
                      ${m['manageInventoryItems.field.unit.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="manageInventoryItems-unit"
                      type="text"
                      .value=${this.manageInventoryItemsUnit}
                      @input=${(e: Event) => this.handleManageInventoryItemsUnitChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${loading}
                    />
                  </div>

                  <!-- Current Quantity -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="manageInventoryItems-currentQuantity">
                      ${m['manageInventoryItems.field.currentQuantity.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="manageInventoryItems-currentQuantity"
                      type="number"
                      .value=${this.manageInventoryItemsCurrentQuantity}
                      @input=${(e: Event) => this.handleManageInventoryItemsCurrentQuantityChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${loading}
                    />
                  </div>

                  <!-- Minimum Level -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="manageInventoryItems-minimumLevel">
                      ${m['manageInventoryItems.field.minimumLevel.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="manageInventoryItems-minimumLevel"
                      type="number"
                      .value=${this.manageInventoryItemsMinimumLevel}
                      @input=${(e: Event) => this.handleManageInventoryItemsMinimumLevelChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${loading}
                    />
                  </div>

                  <!-- Status -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="manageInventoryItems-status">
                      ${m['manageInventoryItems.field.status.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      id="manageInventoryItems-status"
                      .value=${this.manageInventoryItemsStatus}
                      @change=${(e: Event) => this.handleManageInventoryItemsStatusChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${loading}
                    >
                      <option value="" ?selected=${this.manageInventoryItemsStatus === ''}></option>
                      <option value="active" ?selected=${this.manageInventoryItemsStatus === 'active'}>active</option>
                      <option value="inactive" ?selected=${this.manageInventoryItemsStatus === 'inactive'}>inactive</option>
                    </select>
                  </div>

                  <!-- Submit action -->
                  <div class="flex justify-end pt-2">
                    <button
                      type="submit"
                      class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                      ?disabled=${loading}
                    >
                      ${loading
                        ? html`<svg class="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                          </svg>`
                        : ''}
                      ${m['manageInventoryItems.action.submit.label'] ?? ''}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

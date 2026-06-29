/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowManageMenuItemsBase } from '/_102050_/l2/cafeFlow/web/shared/manageMenuItems.js';

@customElement('cafeflow--web--desktop--page11--manage-menu-items--102050')
export class CafeFlowDesktopPage11ManageMenuItemsPage extends CafeFlowManageMenuItemsBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${this.msg['manageMenuItems.section.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${this.msg['manageMenuItems.organism.title'] ?? ''}
            </p>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-6">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${this.msg['manageMenuItems.organism.title'] ?? ''}
            </h2>

            <!-- commandForm intention -->
            <div class="space-y-4">
              <h3 class="text-base font-medium text-slate-600 dark:text-slate-300">
                ${this.msg['manageMenuItems.form.title'] ?? ''}
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    ${this.msg['manageMenuItems.field.menuItemId'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value=${this.manageMenuItemsMenuItemId}
                    @input=${(e: Event) => this.handleManageMenuItemsMenuItemIdChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    ${this.msg['manageMenuItems.field.menuCategoryId'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value=${this.manageMenuItemsMenuCategoryId}
                    @input=${(e: Event) => this.handleManageMenuItemsMenuCategoryIdChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    ${this.msg['manageMenuItems.field.name'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    .value=${this.manageMenuItemsName}
                    @input=${(e: Event) => this.handleManageMenuItemsNameChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    ${this.msg['manageMenuItems.field.price'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    .value=${this.manageMenuItemsPrice}
                    @input=${(e: Event) => this.handleManageMenuItemsPriceChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div class="space-y-1 sm:col-span-2">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    ${this.msg['manageMenuItems.field.description'] ?? ''}
                  </label>
                  <textarea
                    .value=${this.manageMenuItemsDescription}
                    @input=${(e: Event) => this.handleManageMenuItemsDescriptionChange(e)}
                    rows="3"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    ${this.msg['manageMenuItems.field.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    .value=${this.manageMenuItemsStatus}
                    @change=${(e: Event) => this.handleManageMenuItemsStatusChange(e)}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" ?selected=${this.manageMenuItemsStatus === ''}></option>
                    <option value="draft" ?selected=${this.manageMenuItemsStatus === 'draft'}>draft</option>
                    <option value="active" ?selected=${this.manageMenuItemsStatus === 'active'}>active</option>
                    <option value="inactive" ?selected=${this.manageMenuItemsStatus === 'inactive'}>inactive</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- actionList intention -->
            <div class="space-y-3 border-t border-slate-200 dark:border-slate-800 pt-4">
              <h3 class="text-base font-medium text-slate-600 dark:text-slate-300">
                ${this.msg['manageMenuItems.actions.title'] ?? ''}
              </h3>
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  ?disabled=${this.manageMenuItemsState === 'loading'}
                  @click=${(e: Event) => this.handleManageMenuItemsClick(e)}
                  class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ${this.manageMenuItemsState === 'loading' ? '...' : (this.msg['manageMenuItems.action.submit'] ?? '')}
                </button>
                ${this.manageMenuItemsState === 'success' ? html`
                  <span class="text-sm text-green-600 dark:text-green-400">✓</span>
                ` : ''}
                ${this.manageMenuItemsState === 'error' ? html`
                  <span class="text-sm text-red-600 dark:text-red-400">!</span>
                ` : ''}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowManageMenuCategoriesBase } from '/_102050_/l2/cafeFlow/web/shared/manageMenuCategories.js';

@customElement('cafeflow--web--desktop--page11--manage-menu-categories-102050')
export class CafeFlowDesktopPage11ManageMenuCategoriesPage extends CafeFlowManageMenuCategoriesBase {
  render() {
    const m = this.msg;
    const loading = this.manageMenuCategoriesState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m['manageMenuCategories.section.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m['manageMenuCategories.organism.title'] ?? ''}
            </p>
          </header>

          <!-- Section card -->
          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-6">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${m['manageMenuCategories.organism.title'] ?? ''}
            </h2>

            <!-- Command form -->
            <div class="space-y-4">
              <h3 class="text-base font-medium text-slate-600 dark:text-slate-300">
                ${m['manageMenuCategories.form.title'] ?? ''}
              </h3>

              <!-- menuCategoryId -->
              <div class="space-y-1">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="fld_menuCategoryId">
                  ${m['manageMenuCategories.field.menuCategoryId'] ?? ''}
                </label>
                <input
                  id="fld_menuCategoryId"
                  type="text"
                  .value="${this.manageMenuCategoriesMenuCategoryId}"
                  @input="${this.handleManageMenuCategoriesMenuCategoryIdChange}"
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <!-- name -->
              <div class="space-y-1">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="fld_name">
                  ${m['manageMenuCategories.field.name'] ?? ''}<span class="text-red-500">*</span>
                </label>
                <input
                  id="fld_name"
                  type="text"
                  .value="${this.manageMenuCategoriesName}"
                  @input="${this.handleManageMenuCategoriesNameChange}"
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <!-- description -->
              <div class="space-y-1">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="fld_description">
                  ${m['manageMenuCategories.field.description'] ?? ''}
                </label>
                <textarea
                  id="fld_description"
                  .value="${this.manageMenuCategoriesDescription}"
                  @input="${this.handleManageMenuCategoriesDescriptionChange}"
                  rows="3"
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <!-- status -->
              <div class="space-y-1">
                <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="fld_status">
                  ${m['manageMenuCategories.field.status'] ?? ''}<span class="text-red-500">*</span>
                </label>
                <select
                  id="fld_status"
                  .value="${this.manageMenuCategoriesStatus}"
                  @change="${this.handleManageMenuCategoriesStatusChange}"
                  class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" ?selected="${this.manageMenuCategoriesStatus === ''}"></option>
                  <option value="active" ?selected="${this.manageMenuCategoriesStatus === 'active'}">active</option>
                  <option value="inactive" ?selected="${this.manageMenuCategoriesStatus === 'inactive'}">inactive</option>
                </select>
              </div>

              <!-- Action buttons -->
              <div class="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  ?disabled="${loading}"
                  @click="${this.handleManageMenuCategoriesClick}"
                  class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  ${loading ? '...' : (m['manageMenuCategories.action.submit'] ?? '')}
                </button>
                ${this.manageMenuCategoriesState === 'success' ? html`
                  <span class="text-sm text-green-600 dark:text-green-400">✓</span>
                ` : ''}
                ${this.manageMenuCategoriesState === 'error' ? html`
                  <span class="text-sm text-red-600 dark:text-red-400">✗</span>
                ` : ''}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

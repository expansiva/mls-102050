/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowBrowseMenuForPosBase } from '/_102050_/l2/cafeFlow/web/shared/browseMenuForPos.js';

@customElement('cafeflow--web--desktop--page11--browse-menu-for-pos-102050')
export class CafeFlowDesktopPage11BrowseMenuForPosPage extends CafeFlowBrowseMenuForPosBase {
  render() {
    const data = this.browseMenuForPosData ?? [];
    const loading = this.browseMenuForPosState === 'loading';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${this.msg['browseMenuForPos.page.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${this.msg['browseMenuForPos.section.menu.title'] ?? ''}
            </p>
          </header>

          <!-- Section: menu -->
          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                ${this.msg['browseMenuForPos.organism.menu.title'] ?? ''}
              </h2>
            </div>

            <!-- Filters -->
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h3 class="text-sm font-medium text-slate-600 dark:text-slate-300 mb-3">
                ${this.msg['browseMenuForPos.intent.list.title'] ?? ''}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    ${this.msg['browseMenuForPos.filter.menuItemId.label'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value=${this.browseMenuForPosMenuItemId}
                    @input=${this.handleBrowseMenuForPosMenuItemIdChange}
                    class="w-full px-3 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    ${this.msg['browseMenuForPos.filter.menuCategoryId.label'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value=${this.browseMenuForPosMenuCategoryId}
                    @input=${this.handleBrowseMenuForPosMenuCategoryIdChange}
                    class="w-full px-3 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    ${this.msg['browseMenuForPos.filter.name.label'] ?? ''}
                  </label>
                  <input
                    type="text"
                    .value=${this.browseMenuForPosName}
                    @input=${this.handleBrowseMenuForPosNameChange}
                    class="w-full px-3 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    ${this.msg['browseMenuForPos.filter.status.label'] ?? ''}
                  </label>
                  <select
                    .value=${this.browseMenuForPosStatus}
                    @change=${this.handleBrowseMenuForPosStatusChange}
                    class="w-full px-3 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value=""></option>
                    <option value="draft" ?selected=${this.browseMenuForPosStatus === 'draft'}>draft</option>
                    <option value="active" ?selected=${this.browseMenuForPosStatus === 'active'}>active</option>
                    <option value="inactive" ?selected=${this.browseMenuForPosStatus === 'inactive'}>inactive</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    ${this.msg['browseMenuForPos.filter.createdAt.label'] ?? ''}
                  </label>
                  <input
                    type="date"
                    .value=${this.browseMenuForPosCreatedAt}
                    @input=${this.handleBrowseMenuForPosCreatedAtChange}
                    class="w-full px-3 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">
                    ${this.msg['browseMenuForPos.filter.updatedAt.label'] ?? ''}
                  </label>
                  <input
                    type="date"
                    .value=${this.browseMenuForPosUpdatedAt}
                    @input=${this.handleBrowseMenuForPosUpdatedAtChange}
                    class="w-full px-3 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <!-- Toolbar -->
              <div class="mt-4 flex justify-end">
                <button
                  type="button"
                  ?disabled=${loading}
                  @click=${this.handleBrowseMenuForPosClick}
                  class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors"
                >
                  ${loading ? '...' : (this.msg['browseMenuForPos.toolbar.search.label'] ?? '')}
                </button>
              </div>
            </div>

            <!-- Data table -->
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-slate-50 dark:bg-slate-800 text-left">
                    <th class="px-4 py-3 font-medium text-slate-600 dark:text-slate-300">${this.msg['browseMenuForPos.column.menuItemId.label'] ?? ''}</th>
                    <th class="px-4 py-3 font-medium text-slate-600 dark:text-slate-300">${this.msg['browseMenuForPos.column.menuCategoryId.label'] ?? ''}</th>
                    <th class="px-4 py-3 font-medium text-slate-600 dark:text-slate-300">${this.msg['browseMenuForPos.column.name.label'] ?? ''}</th>
                    <th class="px-4 py-3 font-medium text-slate-600 dark:text-slate-300">${this.msg['browseMenuForPos.column.description.label'] ?? ''}</th>
                    <th class="px-4 py-3 font-medium text-slate-600 dark:text-slate-300">${this.msg['browseMenuForPos.column.price.label'] ?? ''}</th>
                    <th class="px-4 py-3 font-medium text-slate-600 dark:text-slate-300">${this.msg['browseMenuForPos.column.status.label'] ?? ''}</th>
                    <th class="px-4 py-3 font-medium text-slate-600 dark:text-slate-300">${this.msg['browseMenuForPos.column.createdAt.label'] ?? ''}</th>
                    <th class="px-4 py-3 font-medium text-slate-600 dark:text-slate-300">${this.msg['browseMenuForPos.column.updatedAt.label'] ?? ''}</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                  ${data.length === 0
                    ? html`<tr>
                        <td colspan="8" class="px-4 py-8 text-center text-slate-400 dark:text-slate-500">
                          ${loading ? '...' : '—'}
                        </td>
                      </tr>`
                    : data.map(
                        (item) => html`
                          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                            <td class="px-4 py-3 text-slate-700 dark:text-slate-200">${item.menuItemId}</td>
                            <td class="px-4 py-3 text-slate-700 dark:text-slate-200">${item.menuCategoryId}</td>
                            <td class="px-4 py-3 text-slate-700 dark:text-slate-200">${item.name}</td>
                            <td class="px-4 py-3 text-slate-600 dark:text-slate-300">${item.description}</td>
                            <td class="px-4 py-3 text-slate-700 dark:text-slate-200">${item.price}</td>
                            <td class="px-4 py-3">
                              <span class="inline-flex px-2 py-0.5 text-xs rounded-full ${
                                item.status === 'active'
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                  : item.status === 'inactive'
                                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                              }">${item.status}</span>
                            </td>
                            <td class="px-4 py-3 text-slate-600 dark:text-slate-300">${item.createdAt}</td>
                            <td class="px-4 py-3 text-slate-600 dark:text-slate-300">${item.updatedAt}</td>
                          </tr>
                        `
                      )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

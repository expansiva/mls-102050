/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowViewOperationalDashboardBase } from '/_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.js';

@customElement('cafeflow--web--desktop--page11--view-operational-dashboard-102050')
export class CafeFlowDesktopPage11ViewOperationalDashboardPage extends CafeFlowViewOperationalDashboardBase {
  render() {
    const m = this.msg;
    const loading = this.viewOperationalDashboardState === 'loading';
    const data = this.viewOperationalDashboardData ?? [];
    const first = data.length > 0 ? data[0] : null;

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m['viewOperationalDashboard.section.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m['viewOperationalDashboard.organism.title'] ?? ''}
            </p>
          </header>

          <!-- Section card -->
          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-5 space-y-5">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${m['viewOperationalDashboard.section.title'] ?? ''}
            </h2>

            <!-- Organism panel -->
            <div class="space-y-5">
              <h3 class="text-base font-medium text-slate-600 dark:text-slate-300">
                ${m['viewOperationalDashboard.organism.title'] ?? ''}
              </h3>

              <!-- Intention: dashboardFilters (commandForm) -->
              <div class="space-y-4">
                <h4 class="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  ${m['viewOperationalDashboard.filters.title'] ?? ''}
                </h4>
                <form class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" @submit=${(e: Event) => e.preventDefault()}>
                  <!-- dailyShiftId -->
                  <label class="block space-y-1">
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['viewOperationalDashboard.field.dailyShiftId'] ?? ''}
                    </span>
                    <input
                      type="text"
                      .value=${this.viewOperationalDashboardDailyShiftId}
                      @input=${this.handleViewOperationalDashboardDailyShiftIdChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <!-- shiftDate -->
                  <label class="block space-y-1">
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['viewOperationalDashboard.field.shiftDate'] ?? ''}
                    </span>
                    <input
                      type="date"
                      .value=${this.viewOperationalDashboardShiftDate}
                      @input=${this.handleViewOperationalDashboardShiftDateChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <!-- status -->
                  <label class="block space-y-1">
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['viewOperationalDashboard.field.status'] ?? ''}
                    </span>
                    <select
                      .value=${this.viewOperationalDashboardStatus}
                      @change=${this.handleViewOperationalDashboardStatusChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value=""></option>
                      <option value="open" ?selected=${this.viewOperationalDashboardStatus === 'open'}>open</option>
                      <option value="closed" ?selected=${this.viewOperationalDashboardStatus === 'closed'}>closed</option>
                    </select>
                  </label>

                  <!-- openedAt -->
                  <label class="block space-y-1">
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['viewOperationalDashboard.field.openedAt'] ?? ''}
                    </span>
                    <input
                      type="datetime-local"
                      .value=${this.viewOperationalDashboardOpenedAt}
                      @input=${this.handleViewOperationalDashboardOpenedAtChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <!-- closedAt -->
                  <label class="block space-y-1">
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['viewOperationalDashboard.field.closedAt'] ?? ''}
                    </span>
                    <input
                      type="datetime-local"
                      .value=${this.viewOperationalDashboardClosedAt}
                      @input=${this.handleViewOperationalDashboardClosedAtChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>

                  <!-- createdAt -->
                  <label class="block space-y-1">
                    <span class="text-xs font-medium text-slate-600 dark:text-slate-400">
                      ${m['viewOperationalDashboard.field.createdAt'] ?? ''}
                    </span>
                    <input
                      type="datetime-local"
                      .value=${this.viewOperationalDashboardCreatedAt}
                      @input=${this.handleViewOperationalDashboardCreatedAtChange}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </label>
                </form>

                <!-- Action row -->
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    ?disabled=${loading}
                    @click=${this.handleViewOperationalDashboardClick}
                    class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ${loading ? '...' : (m['viewOperationalDashboard.action.run'] ?? '')}
                  </button>
                  ${this.viewOperationalDashboardState === 'error'
                    ? html`<span class="text-sm text-red-600 dark:text-red-400">Error</span>`
                    : html``}
                </div>
              </div>

              <!-- Intention: dashboardSummary (summary) -->
              <div class="space-y-3">
                <h4 class="text-sm font-semibold text-slate-600 dark:text-slate-300">
                  ${m['viewOperationalDashboard.summary.title'] ?? ''}
                </h4>

                ${first
                  ? html`
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                        <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.dailyShiftId'] ?? ''}</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-200">${first.dailyShiftId ?? '—'}</div>
                      </div>
                      <div class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                        <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.shiftDate'] ?? ''}</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-200">${first.shiftDate ?? '—'}</div>
                      </div>
                      <div class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                        <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.status'] ?? ''}</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-200">${first.status ?? '—'}</div>
                      </div>
                      <div class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                        <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.openedAt'] ?? ''}</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-200">${first.openedAt ?? '—'}</div>
                      </div>
                      <div class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                        <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.closedAt'] ?? ''}</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-200">${first.closedAt ?? '—'}</div>
                      </div>
                      <div class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                        <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.openingCashBalance'] ?? ''}</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-200">${first.openingCashBalance ?? '—'}</div>
                      </div>
                      <div class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                        <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.closingCashBalance'] ?? ''}</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-200">${first.closingCashBalance ?? '—'}</div>
                      </div>
                      <div class="rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3">
                        <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.totalSales'] ?? ''}</div>
                        <div class="text-sm font-medium text-slate-700 dark:text-slate-200">${first.totalSales ?? '—'}</div>
                      </div>
                    </div>
                  `
                  : html`
                    <div class="text-sm text-slate-400 dark:text-slate-500 italic">
                      ${m['viewOperationalDashboard.summary.title'] ?? ''}
                    </div>
                  `}

                ${data.length > 1
                  ? html`
                    <div class="mt-4 space-y-2">
                      <div class="text-xs font-medium text-slate-500 dark:text-slate-400">
                        ${data.length} ${m['viewOperationalDashboard.summary.title'] ?? ''}
                      </div>
                      ${data.slice(1).map((item) => html`
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-2">
                          <div>
                            <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.dailyShiftId'] ?? ''}</div>
                            <div class="text-sm text-slate-700 dark:text-slate-200">${item.dailyShiftId ?? '—'}</div>
                          </div>
                          <div>
                            <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.shiftDate'] ?? ''}</div>
                            <div class="text-sm text-slate-700 dark:text-slate-200">${item.shiftDate ?? '—'}</div>
                          </div>
                          <div>
                            <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.status'] ?? ''}</div>
                            <div class="text-sm text-slate-700 dark:text-slate-200">${item.status ?? '—'}</div>
                          </div>
                          <div>
                            <div class="text-xs text-slate-500 dark:text-slate-400">${m['viewOperationalDashboard.summary.totalSales'] ?? ''}</div>
                            <div class="text-sm text-slate-700 dark:text-slate-200">${item.totalSales ?? '—'}</div>
                          </div>
                        </div>
                      `)}
                    </div>
                  `
                  : html``}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowKitchenProductionFlowBase } from '/_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.js';

@customElement('cafe-flow--web--desktop--page11--kitchen-production-flow-102050')
export class CafeFlowDesktopPage11KitchenProductionFlowPage extends CafeFlowKitchenProductionFlowBase {
  render() {
    const m = this.msg;
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m['kitchenProductionFlow.section.main.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m['kitchenProductionFlow.section.main.title'] ?? ''}
            </p>
          </header>

          <!-- Section: main -->
          <section class="space-y-6">
            <!-- Organism: ViewKitchenTickets (queryList) -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${m['kitchenProductionFlow.organism.viewKitchenTickets.title'] ?? ''}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <!-- Filters -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                      ${m['kitchenProductionFlow.filter.kitchenTicketId.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      .value=${this.viewKitchenTicketsKitchenTicketId}
                      @input=${(e: Event) => this.handleViewKitchenTicketsKitchenTicketIdChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                      ${m['kitchenProductionFlow.filter.orderId.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      .value=${this.viewKitchenTicketsOrderId}
                      @input=${(e: Event) => this.handleViewKitchenTicketsOrderIdChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                      ${m['kitchenProductionFlow.filter.status.label'] ?? ''}
                    </label>
                    <select
                      .value=${this.viewKitchenTicketsStatus}
                      @change=${(e: Event) => this.handleViewKitchenTicketsStatusChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value=""></option>
                      <option value="open" ?selected=${this.viewKitchenTicketsStatus === 'open'}>open</option>
                      <option value="inProgress" ?selected=${this.viewKitchenTicketsStatus === 'inProgress'}>inProgress</option>
                      <option value="done" ?selected=${this.viewKitchenTicketsStatus === 'done'}>done</option>
                      <option value="void" ?selected=${this.viewKitchenTicketsStatus === 'void'}>void</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                      ${m['kitchenProductionFlow.filter.createdAt.label'] ?? ''}
                    </label>
                    <input
                      type="date"
                      .value=${this.viewKitchenTicketsCreatedAt}
                      @input=${(e: Event) => this.handleViewKitchenTicketsCreatedAtChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                      ${m['kitchenProductionFlow.filter.updatedAt.label'] ?? ''}
                    </label>
                    <input
                      type="date"
                      .value=${this.viewKitchenTicketsUpdatedAt}
                      @input=${(e: Event) => this.handleViewKitchenTicketsUpdatedAtChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <!-- Toolbar -->
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    @click=${(e: Event) => this.handleViewKitchenTicketsClick()}
                    ?disabled=${this.viewKitchenTicketsState === 'loading'}
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ${this.viewKitchenTicketsState === 'loading' ? '...' : (m['kitchenProductionFlow.action.viewKitchenTickets.label'] ?? '')}
                  </button>
                  ${this.viewKitchenTicketsState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">Error</span>` : ''}
                </div>

                <!-- Table -->
                <div class="overflow-x-auto">
                  <table class="w-full text-sm border-collapse">
                    <thead>
                      <tr class="border-b border-slate-200 dark:border-slate-700 text-left">
                        <th class="px-3 py-2 font-medium text-slate-600 dark:text-slate-300">${m['kitchenProductionFlow.field.kitchenTicketId.label'] ?? ''}</th>
                        <th class="px-3 py-2 font-medium text-slate-600 dark:text-slate-300">${m['kitchenProductionFlow.field.orderId.label'] ?? ''}</th>
                        <th class="px-3 py-2 font-medium text-slate-600 dark:text-slate-300">${m['kitchenProductionFlow.field.status.label'] ?? ''}</th>
                        <th class="px-3 py-2 font-medium text-slate-600 dark:text-slate-300">${m['kitchenProductionFlow.field.createdAt.label'] ?? ''}</th>
                        <th class="px-3 py-2 font-medium text-slate-600 dark:text-slate-300">${m['kitchenProductionFlow.field.updatedAt.label'] ?? ''}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${this.viewKitchenTicketsData && this.viewKitchenTicketsData.length > 0
                        ? this.viewKitchenTicketsData.map(
                            (item) => html`
                              <tr class="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                                <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.kitchenTicketId}</td>
                                <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.orderId}</td>
                                <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.status}</td>
                                <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.createdAt}</td>
                                <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.updatedAt}</td>
                              </tr>
                            `
                          )
                        : html`<tr><td colspan="5" class="px-3 py-6 text-center text-slate-400 dark:text-slate-500">—</td></tr>`}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Organism: UpdateKitchenTicketStatus (commandForm) -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${m['kitchenProductionFlow.organism.updateKitchenTicketStatus.title'] ?? ''}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                      ${m['kitchenProductionFlow.field.kitchenTicketStatus.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      .value=${this.updateKitchenTicketStatusStatus}
                      @change=${(e: Event) => this.handleUpdateKitchenTicketStatusStatusChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value=""></option>
                      <option value="open" ?selected=${this.updateKitchenTicketStatusStatus === 'open'}>open</option>
                      <option value="inProgress" ?selected=${this.updateKitchenTicketStatusStatus === 'inProgress'}>inProgress</option>
                      <option value="done" ?selected=${this.updateKitchenTicketStatusStatus === 'done'}>done</option>
                      <option value="void" ?selected=${this.updateKitchenTicketStatusStatus === 'void'}>void</option>
                    </select>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    @click=${(e: Event) => this.handleUpdateKitchenTicketStatusClick()}
                    ?disabled=${this.updateKitchenTicketStatusState === 'loading'}
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ${this.updateKitchenTicketStatusState === 'loading' ? '...' : (m['kitchenProductionFlow.action.updateKitchenTicketStatus.label'] ?? '')}
                  </button>
                  ${this.updateKitchenTicketStatusState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">OK</span>` : ''}
                  ${this.updateKitchenTicketStatusState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">Error</span>` : ''}
                </div>
              </div>
            </div>

            <!-- Organism: UpdateOrderItemStatus (commandForm) -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${m['kitchenProductionFlow.organism.updateOrderItemStatus.title'] ?? ''}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                      ${m['kitchenProductionFlow.field.orderItemStatus.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      .value=${this.updateOrderItemStatusStatus}
                      @change=${(e: Event) => this.handleUpdateOrderItemStatusStatusChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value=""></option>
                      <option value="new" ?selected=${this.updateOrderItemStatusStatus === 'new'}>new</option>
                      <option value="sentToKitchen" ?selected=${this.updateOrderItemStatusStatus === 'sentToKitchen'}>sentToKitchen</option>
                      <option value="inPreparation" ?selected=${this.updateOrderItemStatusStatus === 'inPreparation'}>inPreparation</option>
                      <option value="ready" ?selected=${this.updateOrderItemStatusStatus === 'ready'}>ready</option>
                      <option value="served" ?selected=${this.updateOrderItemStatusStatus === 'served'}>served</option>
                      <option value="cancelled" ?selected=${this.updateOrderItemStatusStatus === 'cancelled'}>cancelled</option>
                    </select>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <button
                    type="button"
                    @click=${(e: Event) => this.handleUpdateOrderItemStatusClick()}
                    ?disabled=${this.updateOrderItemStatusState === 'loading'}
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ${this.updateOrderItemStatusState === 'loading' ? '...' : (m['kitchenProductionFlow.action.updateOrderItemStatus.label'] ?? '')}
                  </button>
                  ${this.updateOrderItemStatusState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">OK</span>` : ''}
                  ${this.updateOrderItemStatusState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">Error</span>` : ''}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

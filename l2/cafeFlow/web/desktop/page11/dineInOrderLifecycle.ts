/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/dineInOrderLifecycle.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowDineInOrderLifecycleBase } from '/_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.js';

@customElement('cafe-flow--web--desktop--page11--dine-in-order-lifecycle-102050')
export class CafeFlowDesktopPage11DineInOrderLifecyclePage extends CafeFlowDineInOrderLifecycleBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${this.msg['section.dineInOrderLifecycle.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${this.msg['section.dineInOrderLifecycle.title'] ?? ''}
            </p>
          </header>

          <!-- Section card -->
          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-6">
            <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
              ${this.msg['section.dineInOrderLifecycle.title'] ?? ''}
            </h2>

            <!-- Organism: CreateOrder -->
            <div class="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-4">
              <h3 class="text-base font-medium text-slate-700 dark:text-slate-200">
                ${this.msg['organism.createOrder.title'] ?? ''}
              </h3>
              <p class="text-xs text-slate-400 dark:text-slate-500">
                ${this.msg['intent.createOrder.form.title'] ?? ''}
              </p>
              <form class="space-y-4" @submit=${(e: Event) => this.handleCreateOrderClick(e)}>
                <!-- orderType -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.orderType'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderOrderType}
                    @change=${(e: Event) => this.handleCreateOrderOrderTypeChange(e)}
                  >
                    <option value="">—</option>
                    <option value="mesa" ?selected=${this.createOrderOrderType === 'mesa'}>mesa</option>
                    <option value="takeout" ?selected=${this.createOrderOrderType === 'takeout'}>takeout</option>
                  </select>
                </div>
                <!-- status -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderStatus}
                    @change=${(e: Event) => this.handleCreateOrderStatusChange(e)}
                  >
                    <option value="">—</option>
                    ${['draft', 'sentToKitchen', 'inPreparation', 'ready', 'served', 'closed', 'cancelled'].map(
                      (v) => html`<option value=${v} ?selected=${this.createOrderStatus === v}>${v}</option>`
                    )}
                  </select>
                </div>
                <!-- totalAmount -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.totalAmount'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderTotalAmount}
                    @input=${(e: Event) => this.handleCreateOrderTotalAmountChange(e)}
                  />
                </div>
                <!-- notes -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.notes'] ?? ''}
                  </label>
                  <textarea
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderNotes}
                    @input=${(e: Event) => this.handleCreateOrderNotesChange(e)}
                  ></textarea>
                </div>
                <!-- customerName -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.customerName'] ?? ''}
                  </label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderCustomerName}
                    @input=${(e: Event) => this.handleCreateOrderCustomerNameChange(e)}
                  />
                </div>
                <!-- customerPhone -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.customerPhone'] ?? ''}
                  </label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderCustomerPhone}
                    @input=${(e: Event) => this.handleCreateOrderCustomerPhoneChange(e)}
                  />
                </div>
                <!-- numberOfGuests -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.numberOfGuests'] ?? ''}
                  </label>
                  <input
                    type="number"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderNumberOfGuests}
                    @input=${(e: Event) => this.handleCreateOrderNumberOfGuestsChange(e)}
                  />
                </div>
                <!-- closedAt -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.closedAt'] ?? ''}
                  </label>
                  <input
                    type="datetime-local"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderClosedAt}
                    @input=${(e: Event) => this.handleCreateOrderClosedAtChange(e)}
                  />
                </div>
                <!-- cancelledAt -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.cancelledAt'] ?? ''}
                  </label>
                  <input
                    type="datetime-local"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderCancelledAt}
                    @input=${(e: Event) => this.handleCreateOrderCancelledAtChange(e)}
                  />
                </div>
                <!-- cancellationReason -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createOrder.cancellationReason'] ?? ''}
                  </label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createOrderCancellationReason}
                    @input=${(e: Event) => this.handleCreateOrderCancellationReasonChange(e)}
                  />
                </div>
                <!-- Submit -->
                <div class="flex items-center gap-3">
                  <button
                    type="submit"
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    ?disabled=${this.createOrderState === 'loading'}
                  >
                    ${this.createOrderState === 'loading' ? '…' : (this.msg['action.createOrder.submit'] ?? '')}
                  </button>
                  ${this.createOrderState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                  ${this.createOrderState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
                </div>
              </form>
            </div>

            <!-- Organism: AddOrderItem -->
            <div class="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-4">
              <h3 class="text-base font-medium text-slate-700 dark:text-slate-200">
                ${this.msg['organism.addOrderItem.title'] ?? ''}
              </h3>
              <p class="text-xs text-slate-400 dark:text-slate-500">
                ${this.msg['intent.addOrderItem.form.title'] ?? ''}
              </p>
              <form class="space-y-4" @submit=${(e: Event) => this.handleAddOrderItemClick(e)}>
                <!-- quantity -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.addOrderItem.quantity'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.addOrderItemQuantity}
                    @input=${(e: Event) => this.handleAddOrderItemQuantityChange(e)}
                  />
                </div>
                <!-- unitPrice -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.addOrderItem.unitPrice'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.addOrderItemUnitPrice}
                    @input=${(e: Event) => this.handleAddOrderItemUnitPriceChange(e)}
                  />
                </div>
                <!-- totalPrice -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.addOrderItem.totalPrice'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.addOrderItemTotalPrice}
                    @input=${(e: Event) => this.handleAddOrderItemTotalPriceChange(e)}
                  />
                </div>
                <!-- observations -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.addOrderItem.observations'] ?? ''}
                  </label>
                  <textarea
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.addOrderItemObservations}
                    @input=${(e: Event) => this.handleAddOrderItemObservationsChange(e)}
                  ></textarea>
                </div>
                <!-- status -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.addOrderItem.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.addOrderItemStatus}
                    @change=${(e: Event) => this.handleAddOrderItemStatusChange(e)}
                  >
                    <option value="">—</option>
                    ${['new', 'sentToKitchen', 'inPreparation', 'ready', 'served', 'cancelled'].map(
                      (v) => html`<option value=${v} ?selected=${this.addOrderItemStatus === v}>${v}</option>`
                    )}
                  </select>
                </div>
                <!-- Submit -->
                <div class="flex items-center gap-3">
                  <button
                    type="submit"
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    ?disabled=${this.addOrderItemState === 'loading'}
                  >
                    ${this.addOrderItemState === 'loading' ? '…' : (this.msg['action.addOrderItem.submit'] ?? '')}
                  </button>
                  ${this.addOrderItemState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                  ${this.addOrderItemState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
                </div>
              </form>
            </div>

            <!-- Organism: CreateKitchenTicket -->
            <div class="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-4">
              <h3 class="text-base font-medium text-slate-700 dark:text-slate-200">
                ${this.msg['organism.createKitchenTicket.title'] ?? ''}
              </h3>
              <p class="text-xs text-slate-400 dark:text-slate-500">
                ${this.msg['intent.createKitchenTicket.form.title'] ?? ''}
              </p>
              <form class="space-y-4" @submit=${(e: Event) => this.handleCreateKitchenTicketClick(e)}>
                <!-- status -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.createKitchenTicket.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.createKitchenTicketStatus}
                    @change=${(e: Event) => this.handleCreateKitchenTicketStatusChange(e)}
                  >
                    <option value="">—</option>
                    ${['open', 'inProgress', 'done', 'void'].map(
                      (v) => html`<option value=${v} ?selected=${this.createKitchenTicketStatus === v}>${v}</option>`
                    )}
                  </select>
                </div>
                <!-- Submit -->
                <div class="flex items-center gap-3">
                  <button
                    type="submit"
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    ?disabled=${this.createKitchenTicketState === 'loading'}
                  >
                    ${this.createKitchenTicketState === 'loading' ? '…' : (this.msg['action.createKitchenTicket.submit'] ?? '')}
                  </button>
                  ${this.createKitchenTicketState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                  ${this.createKitchenTicketState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
                </div>
              </form>
            </div>

            <!-- Organism: UpdateOrderStatus -->
            <div class="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-4">
              <h3 class="text-base font-medium text-slate-700 dark:text-slate-200">
                ${this.msg['organism.updateOrderStatus.title'] ?? ''}
              </h3>
              <p class="text-xs text-slate-400 dark:text-slate-500">
                ${this.msg['intent.updateOrderStatus.form.title'] ?? ''}
              </p>
              <form class="space-y-4" @submit=${(e: Event) => this.handleUpdateOrderStatusClick(e)}>
                <!-- status -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.updateOrderStatus.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.updateOrderStatusStatus}
                    @change=${(e: Event) => this.handleUpdateOrderStatusStatusChange(e)}
                  >
                    <option value="">—</option>
                    ${['draft', 'sentToKitchen', 'inPreparation', 'ready', 'served', 'closed', 'cancelled'].map(
                      (v) => html`<option value=${v} ?selected=${this.updateOrderStatusStatus === v}>${v}</option>`
                    )}
                  </select>
                </div>
                <!-- closedAt -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.updateOrderStatus.closedAt'] ?? ''}
                  </label>
                  <input
                    type="datetime-local"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.updateOrderStatusClosedAt}
                    @input=${(e: Event) => this.handleUpdateOrderStatusClosedAtChange(e)}
                  />
                </div>
                <!-- cancelledAt -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.updateOrderStatus.cancelledAt'] ?? ''}
                  </label>
                  <input
                    type="datetime-local"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.updateOrderStatusCancelledAt}
                    @input=${(e: Event) => this.handleUpdateOrderStatusCancelledAtChange(e)}
                  />
                </div>
                <!-- cancellationReason -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.updateOrderStatus.cancellationReason'] ?? ''}
                  </label>
                  <input
                    type="text"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.updateOrderStatusCancellationReason}
                    @input=${(e: Event) => this.handleUpdateOrderStatusCancellationReasonChange(e)}
                  />
                </div>
                <!-- Submit -->
                <div class="flex items-center gap-3">
                  <button
                    type="submit"
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    ?disabled=${this.updateOrderStatusState === 'loading'}
                  >
                    ${this.updateOrderStatusState === 'loading' ? '…' : (this.msg['action.updateOrderStatus.submit'] ?? '')}
                  </button>
                  ${this.updateOrderStatusState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                  ${this.updateOrderStatusState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
                </div>
              </form>
            </div>

            <!-- Organism: UpdateTableStatus -->
            <div class="rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-4">
              <h3 class="text-base font-medium text-slate-700 dark:text-slate-200">
                ${this.msg['organism.updateTableStatus.title'] ?? ''}
              </h3>
              <p class="text-xs text-slate-400 dark:text-slate-500">
                ${this.msg['intent.updateTableStatus.form.title'] ?? ''}
              </p>
              <form class="space-y-4" @submit=${(e: Event) => this.handleUpdateTableStatusClick(e)}>
                <!-- status -->
                <div class="space-y-1">
                  <label class="block text-sm font-medium text-slate-600 dark:text-slate-300">
                    ${this.msg['field.updateTableStatus.status'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    .value=${this.updateTableStatusStatus}
                    @change=${(e: Event) => this.handleUpdateTableStatusStatusChange(e)}
                  >
                    <option value="">—</option>
                    ${['available', 'occupied', 'disabled'].map(
                      (v) => html`<option value=${v} ?selected=${this.updateTableStatusStatus === v}>${v}</option>`
                    )}
                  </select>
                </div>
                <!-- Submit -->
                <div class="flex items-center gap-3">
                  <button
                    type="submit"
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    ?disabled=${this.updateTableStatusState === 'loading'}
                  >
                    ${this.updateTableStatusState === 'loading' ? '…' : (this.msg['action.updateTableStatus.submit'] ?? '')}
                  </button>
                  ${this.updateTableStatusState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : null}
                  ${this.updateTableStatusState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : null}
                </div>
              </form>
            </div>

          </section>
        </div>
      </div>
    `;
  }
}

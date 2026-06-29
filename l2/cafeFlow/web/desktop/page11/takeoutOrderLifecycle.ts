/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowTakeoutOrderLifecycleBase } from '/_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.js';

@customElement('cafeflow--web--desktop--page11--takeout-order-lifecycle-102050')
export class CafeFlowDesktopPage11TakeoutOrderLifecyclePage extends CafeFlowTakeoutOrderLifecycleBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${this.msg['takeoutOrderLifecycle.section.main.title'] ?? ''}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${this.msg['takeoutOrderLifecycle.section.main.title'] ?? ''}
            </p>
          </header>

          <!-- Section: main -->
          <section class="space-y-6">
            <!-- Organism: createOrder -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${this.msg['takeoutOrderLifecycle.createOrder.title'] ?? ''}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                  <!-- orderType -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.orderType.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderOrderType}
                      @change=${(e: Event) => this.handleCreateOrderOrderTypeChange(e)}
                    >
                      <option value="" ?selected=${this.createOrderOrderType === ''}></option>
                      <option value="mesa" ?selected=${this.createOrderOrderType === 'mesa'}>mesa</option>
                      <option value="takeout" ?selected=${this.createOrderOrderType === 'takeout'}>takeout</option>
                    </select>
                  </div>

                  <!-- status -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.status.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderStatus}
                      @change=${(e: Event) => this.handleCreateOrderStatusChange(e)}
                    >
                      <option value="" ?selected=${this.createOrderStatus === ''}></option>
                      <option value="draft" ?selected=${this.createOrderStatus === 'draft'}>draft</option>
                      <option value="sentToKitchen" ?selected=${this.createOrderStatus === 'sentToKitchen'}>sentToKitchen</option>
                      <option value="inPreparation" ?selected=${this.createOrderStatus === 'inPreparation'}>inPreparation</option>
                      <option value="ready" ?selected=${this.createOrderStatus === 'ready'}>ready</option>
                      <option value="served" ?selected=${this.createOrderStatus === 'served'}>served</option>
                      <option value="closed" ?selected=${this.createOrderStatus === 'closed'}>closed</option>
                      <option value="cancelled" ?selected=${this.createOrderStatus === 'cancelled'}>cancelled</option>
                    </select>
                  </div>

                  <!-- totalAmount -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.totalAmount.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderTotalAmount}
                      @input=${(e: Event) => this.handleCreateOrderTotalAmountChange(e)}
                    />
                  </div>

                  <!-- notes -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.notes.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderNotes}
                      @input=${(e: Event) => this.handleCreateOrderNotesChange(e)}
                    />
                  </div>

                  <!-- customerName -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.customerName.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderCustomerName}
                      @input=${(e: Event) => this.handleCreateOrderCustomerNameChange(e)}
                    />
                  </div>

                  <!-- customerPhone -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.customerPhone.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderCustomerPhone}
                      @input=${(e: Event) => this.handleCreateOrderCustomerPhoneChange(e)}
                    />
                  </div>

                  <!-- numberOfGuests -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.numberOfGuests.label'] ?? ''}
                    </label>
                    <input
                      type="number"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderNumberOfGuests}
                      @input=${(e: Event) => this.handleCreateOrderNumberOfGuestsChange(e)}
                    />
                  </div>

                  <!-- closedAt -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.closedAt.label'] ?? ''}
                    </label>
                    <input
                      type="datetime-local"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderClosedAt}
                      @input=${(e: Event) => this.handleCreateOrderClosedAtChange(e)}
                    />
                  </div>

                  <!-- cancelledAt -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.cancelledAt.label'] ?? ''}
                    </label>
                    <input
                      type="datetime-local"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderCancelledAt}
                      @input=${(e: Event) => this.handleCreateOrderCancelledAtChange(e)}
                    />
                  </div>

                  <!-- cancellationReason -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createOrder.cancellationReason.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createOrderCancellationReason}
                      @input=${(e: Event) => this.handleCreateOrderCancellationReasonChange(e)}
                    />
                  </div>

                  <!-- Submit -->
                  <div class="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      ?disabled=${this.createOrderState === 'loading'}
                      @click=${() => this.handleCreateOrderClick()}
                    >
                      ${this.createOrderState === 'loading' ? '...' : (this.msg['takeoutOrderLifecycle.createOrder.submit'] ?? '')}
                    </button>
                    ${this.createOrderState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : ''}
                    ${this.createOrderState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : ''}
                  </div>
                </form>
              </div>
            </div>

            <!-- Organism: addOrderItem -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${this.msg['takeoutOrderLifecycle.addOrderItem.title'] ?? ''}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                  <!-- quantity -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.addOrderItem.quantity.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.addOrderItemQuantity}
                      @input=${(e: Event) => this.handleAddOrderItemQuantityChange(e)}
                    />
                  </div>

                  <!-- unitPrice -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.addOrderItem.unitPrice.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.addOrderItemUnitPrice}
                      @input=${(e: Event) => this.handleAddOrderItemUnitPriceChange(e)}
                    />
                  </div>

                  <!-- totalPrice -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.addOrderItem.totalPrice.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.addOrderItemTotalPrice}
                      @input=${(e: Event) => this.handleAddOrderItemTotalPriceChange(e)}
                    />
                  </div>

                  <!-- observations -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.addOrderItem.observations.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.addOrderItemObservations}
                      @input=${(e: Event) => this.handleAddOrderItemObservationsChange(e)}
                    />
                  </div>

                  <!-- status -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.addOrderItem.status.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.addOrderItemStatus}
                      @change=${(e: Event) => this.handleAddOrderItemStatusChange(e)}
                    >
                      <option value="" ?selected=${this.addOrderItemStatus === ''}></option>
                      <option value="new" ?selected=${this.addOrderItemStatus === 'new'}>new</option>
                      <option value="sentToKitchen" ?selected=${this.addOrderItemStatus === 'sentToKitchen'}>sentToKitchen</option>
                      <option value="inPreparation" ?selected=${this.addOrderItemStatus === 'inPreparation'}>inPreparation</option>
                      <option value="ready" ?selected=${this.addOrderItemStatus === 'ready'}>ready</option>
                      <option value="served" ?selected=${this.addOrderItemStatus === 'served'}>served</option>
                      <option value="cancelled" ?selected=${this.addOrderItemStatus === 'cancelled'}>cancelled</option>
                    </select>
                  </div>

                  <!-- Submit -->
                  <div class="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      ?disabled=${this.addOrderItemState === 'loading'}
                      @click=${() => this.handleAddOrderItemClick()}
                    >
                      ${this.addOrderItemState === 'loading' ? '...' : (this.msg['takeoutOrderLifecycle.addOrderItem.submit'] ?? '')}
                    </button>
                    ${this.addOrderItemState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : ''}
                    ${this.addOrderItemState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : ''}
                  </div>
                </form>
              </div>
            </div>

            <!-- Organism: createKitchenTicket -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${this.msg['takeoutOrderLifecycle.createKitchenTicket.title'] ?? ''}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                  <!-- status -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.createKitchenTicket.status.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.createKitchenTicketStatus}
                      @change=${(e: Event) => this.handleCreateKitchenTicketStatusChange(e)}
                    >
                      <option value="" ?selected=${this.createKitchenTicketStatus === ''}></option>
                      <option value="open" ?selected=${this.createKitchenTicketStatus === 'open'}>open</option>
                      <option value="inProgress" ?selected=${this.createKitchenTicketStatus === 'inProgress'}>inProgress</option>
                      <option value="done" ?selected=${this.createKitchenTicketStatus === 'done'}>done</option>
                      <option value="void" ?selected=${this.createKitchenTicketStatus === 'void'}>void</option>
                    </select>
                  </div>

                  <!-- Submit -->
                  <div class="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      ?disabled=${this.createKitchenTicketState === 'loading'}
                      @click=${() => this.handleCreateKitchenTicketClick()}
                    >
                      ${this.createKitchenTicketState === 'loading' ? '...' : (this.msg['takeoutOrderLifecycle.createKitchenTicket.submit'] ?? '')}
                    </button>
                    ${this.createKitchenTicketState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : ''}
                    ${this.createKitchenTicketState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : ''}
                  </div>
                </form>
              </div>
            </div>

            <!-- Organism: updateOrderStatus -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${this.msg['takeoutOrderLifecycle.updateOrderStatus.title'] ?? ''}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                  <!-- status -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.updateOrderStatus.status.label'] ?? ''}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.updateOrderStatusStatus}
                      @change=${(e: Event) => this.handleUpdateOrderStatusStatusChange(e)}
                    >
                      <option value="" ?selected=${this.updateOrderStatusStatus === ''}></option>
                      <option value="draft" ?selected=${this.updateOrderStatusStatus === 'draft'}>draft</option>
                      <option value="sentToKitchen" ?selected=${this.updateOrderStatusStatus === 'sentToKitchen'}>sentToKitchen</option>
                      <option value="inPreparation" ?selected=${this.updateOrderStatusStatus === 'inPreparation'}>inPreparation</option>
                      <option value="ready" ?selected=${this.updateOrderStatusStatus === 'ready'}>ready</option>
                      <option value="served" ?selected=${this.updateOrderStatusStatus === 'served'}>served</option>
                      <option value="closed" ?selected=${this.updateOrderStatusStatus === 'closed'}>closed</option>
                      <option value="cancelled" ?selected=${this.updateOrderStatusStatus === 'cancelled'}>cancelled</option>
                    </select>
                  </div>

                  <!-- closedAt -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.updateOrderStatus.closedAt.label'] ?? ''}
                    </label>
                    <input
                      type="datetime-local"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.updateOrderStatusClosedAt}
                      @input=${(e: Event) => this.handleUpdateOrderStatusClosedAtChange(e)}
                    />
                  </div>

                  <!-- cancelledAt -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.updateOrderStatus.cancelledAt.label'] ?? ''}
                    </label>
                    <input
                      type="datetime-local"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.updateOrderStatusCancelledAt}
                      @input=${(e: Event) => this.handleUpdateOrderStatusCancelledAtChange(e)}
                    />
                  </div>

                  <!-- cancellationReason -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${this.msg['takeoutOrderLifecycle.updateOrderStatus.cancellationReason.label'] ?? ''}
                    </label>
                    <input
                      type="text"
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
                      .value=${this.updateOrderStatusCancellationReason}
                      @input=${(e: Event) => this.handleUpdateOrderStatusCancellationReasonChange(e)}
                    />
                  </div>

                  <!-- Submit -->
                  <div class="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      ?disabled=${this.updateOrderStatusState === 'loading'}
                      @click=${() => this.handleUpdateOrderStatusClick()}
                    >
                      ${this.updateOrderStatusState === 'loading' ? '...' : (this.msg['takeoutOrderLifecycle.updateOrderStatus.submit'] ?? '')}
                    </button>
                    ${this.updateOrderStatusState === 'success' ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>` : ''}
                    ${this.updateOrderStatusState === 'error' ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>` : ''}
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

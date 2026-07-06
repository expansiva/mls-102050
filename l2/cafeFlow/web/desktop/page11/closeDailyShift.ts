/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/closeDailyShift.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowCloseDailyShiftBase } from '/_102050_/l2/cafeFlow/web/shared/closeDailyShift.js';

@customElement('cafe-flow--web--desktop--page11--close-daily-shift--102050')
export class CafeFlowDesktopPage11CloseDailyShiftPage extends CafeFlowCloseDailyShiftBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <div>
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${this.msg['closeDailyShift.section.main.title'] ?? ''}
            </h1>
            <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
              ${this.msg['closeDailyShift.section.main.title'] ?? ''}
            </p>
          </div>

          <!-- Section: Fechar turno diário -->
          <section class="space-y-6">
            <!-- Organism: UpdateDailyShiftStatus -->
            <div class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6">
              <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">
                ${this.msg['closeDailyShift.organism.updateDailyShiftStatus.title'] ?? ''}
              </h2>

              <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  ${this.msg['closeDailyShift.intent.updateDailyShiftStatus.title'] ?? ''}
                </p>

                <!-- dailyShiftId -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-daily-shift-id">
                    ${this.msg['closeDailyShift.field.dailyShiftId.label'] ?? ''}
                  </label>
                  <input
                    id="field-update-daily-shift-id"
                    type="text"
                    .value=${this.updateDailyShiftStatusDailyShiftId}
                    @input=${this.handleUpdateDailyShiftStatusDailyShiftIdChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- shiftDate -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-shift-date">
                    ${this.msg['closeDailyShift.field.shiftDate.label'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="field-update-shift-date"
                    type="date"
                    .value=${this.updateDailyShiftStatusShiftDate}
                    @input=${this.handleUpdateDailyShiftStatusShiftDateChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- status -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-status">
                    ${this.msg['closeDailyShift.field.status.label'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="field-update-status"
                    .value=${this.updateDailyShiftStatusStatus}
                    @change=${this.handleUpdateDailyShiftStatusStatusChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">—</option>
                    <option value="open" ?selected=${this.updateDailyShiftStatusStatus === 'open'}>open</option>
                    <option value="closed" ?selected=${this.updateDailyShiftStatusStatus === 'closed'}>closed</option>
                  </select>
                </div>

                <!-- openedAt -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-opened-at">
                    ${this.msg['closeDailyShift.field.openedAt.label'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="field-update-opened-at"
                    type="datetime-local"
                    .value=${this.updateDailyShiftStatusOpenedAt}
                    @input=${this.handleUpdateDailyShiftStatusOpenedAtChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- closedAt -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-closed-at">
                    ${this.msg['closeDailyShift.field.closedAt.label'] ?? ''}
                  </label>
                  <input
                    id="field-update-closed-at"
                    type="datetime-local"
                    .value=${this.updateDailyShiftStatusClosedAt}
                    @input=${this.handleUpdateDailyShiftStatusClosedAtChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- openingCashBalance -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-opening-cash-balance">
                    ${this.msg['closeDailyShift.field.openingCashBalance.label'] ?? ''}
                  </label>
                  <input
                    id="field-update-opening-cash-balance"
                    type="number"
                    step="0.01"
                    .value=${this.updateDailyShiftStatusOpeningCashBalance}
                    @input=${this.handleUpdateDailyShiftStatusOpeningCashBalanceChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- closingCashBalance -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-closing-cash-balance">
                    ${this.msg['closeDailyShift.field.closingCashBalance.label'] ?? ''}
                  </label>
                  <input
                    id="field-update-closing-cash-balance"
                    type="number"
                    step="0.01"
                    .value=${this.updateDailyShiftStatusClosingCashBalance}
                    @input=${this.handleUpdateDailyShiftStatusClosingCashBalanceChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- totalSales -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-total-sales">
                    ${this.msg['closeDailyShift.field.totalSales.label'] ?? ''}
                  </label>
                  <input
                    id="field-update-total-sales"
                    type="number"
                    step="0.01"
                    .value=${this.updateDailyShiftStatusTotalSales}
                    @input=${this.handleUpdateDailyShiftStatusTotalSalesChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- totalPayments -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-total-payments">
                    ${this.msg['closeDailyShift.field.totalPayments.label'] ?? ''}
                  </label>
                  <input
                    id="field-update-total-payments"
                    type="number"
                    step="0.01"
                    .value=${this.updateDailyShiftStatusTotalPayments}
                    @input=${this.handleUpdateDailyShiftStatusTotalPaymentsChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- closingNotes -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-update-closing-notes">
                    ${this.msg['closeDailyShift.field.closingNotes.label'] ?? ''}
                  </label>
                  <textarea
                    id="field-update-closing-notes"
                    .value=${this.updateDailyShiftStatusClosingNotes}
                    @input=${this.handleUpdateDailyShiftStatusClosingNotesChange}
                    rows="3"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <!-- Action row -->
                <div class="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    ?disabled=${this.updateDailyShiftStatusState === 'loading'}
                    @click=${this.handleUpdateDailyShiftStatusClick}
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ${this.updateDailyShiftStatusState === 'loading'
                      ? '…'
                      : (this.msg['closeDailyShift.action.updateDailyShiftStatus.label'] ?? '')}
                  </button>
                  ${this.updateDailyShiftStatusState === 'success'
                    ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>`
                    : ''}
                  ${this.updateDailyShiftStatusState === 'error'
                    ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>`
                    : ''}
                </div>
              </form>
            </div>

            <!-- Organism: RecordClosingCashMovement -->
            <div class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-6">
              <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">
                ${this.msg['closeDailyShift.organism.recordClosingCashMovement.title'] ?? ''}
              </h2>

              <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  ${this.msg['closeDailyShift.intent.recordClosingCashMovement.title'] ?? ''}
                </p>

                <!-- shiftDate -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-shift-date">
                    ${this.msg['closeDailyShift.field.shiftDate.label'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="field-record-shift-date"
                    type="date"
                    .value=${this.recordClosingCashMovementShiftDate}
                    @input=${this.handleRecordClosingCashMovementShiftDateChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- status -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-status">
                    ${this.msg['closeDailyShift.field.status.label'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <select
                    id="field-record-status"
                    .value=${this.recordClosingCashMovementStatus}
                    @change=${this.handleRecordClosingCashMovementStatusChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">—</option>
                    <option value="open" ?selected=${this.recordClosingCashMovementStatus === 'open'}>open</option>
                    <option value="closed" ?selected=${this.recordClosingCashMovementStatus === 'closed'}>closed</option>
                  </select>
                </div>

                <!-- openedAt -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-opened-at">
                    ${this.msg['closeDailyShift.field.openedAt.label'] ?? ''}
                    <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="field-record-opened-at"
                    type="datetime-local"
                    .value=${this.recordClosingCashMovementOpenedAt}
                    @input=${this.handleRecordClosingCashMovementOpenedAtChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- closedAt -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-closed-at">
                    ${this.msg['closeDailyShift.field.closedAt.label'] ?? ''}
                  </label>
                  <input
                    id="field-record-closed-at"
                    type="datetime-local"
                    .value=${this.recordClosingCashMovementClosedAt}
                    @input=${this.handleRecordClosingCashMovementClosedAtChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- openingCashBalance -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-opening-cash-balance">
                    ${this.msg['closeDailyShift.field.openingCashBalance.label'] ?? ''}
                  </label>
                  <input
                    id="field-record-opening-cash-balance"
                    type="number"
                    step="0.01"
                    .value=${this.recordClosingCashMovementOpeningCashBalance}
                    @input=${this.handleRecordClosingCashMovementOpeningCashBalanceChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- closingCashBalance -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-closing-cash-balance">
                    ${this.msg['closeDailyShift.field.closingCashBalance.label'] ?? ''}
                  </label>
                  <input
                    id="field-record-closing-cash-balance"
                    type="number"
                    step="0.01"
                    .value=${this.recordClosingCashMovementClosingCashBalance}
                    @input=${this.handleRecordClosingCashMovementClosingCashBalanceChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- totalSales -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-total-sales">
                    ${this.msg['closeDailyShift.field.totalSales.label'] ?? ''}
                  </label>
                  <input
                    id="field-record-total-sales"
                    type="number"
                    step="0.01"
                    .value=${this.recordClosingCashMovementTotalSales}
                    @input=${this.handleRecordClosingCashMovementTotalSalesChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- totalPayments -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-total-payments">
                    ${this.msg['closeDailyShift.field.totalPayments.label'] ?? ''}
                  </label>
                  <input
                    id="field-record-total-payments"
                    type="number"
                    step="0.01"
                    .value=${this.recordClosingCashMovementTotalPayments}
                    @input=${this.handleRecordClosingCashMovementTotalPaymentsChange}
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <!-- closingNotes -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    for="field-record-closing-notes">
                    ${this.msg['closeDailyShift.field.closingNotes.label'] ?? ''}
                  </label>
                  <textarea
                    id="field-record-closing-notes"
                    .value=${this.recordClosingCashMovementClosingNotes}
                    @input=${this.handleRecordClosingCashMovementClosingNotesChange}
                    rows="3"
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                <!-- Action row -->
                <div class="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    ?disabled=${this.recordClosingCashMovementState === 'loading'}
                    @click=${this.handleRecordClosingCashMovementClick}
                    class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    ${this.recordClosingCashMovementState === 'loading'
                      ? '…'
                      : (this.msg['closeDailyShift.action.recordClosingCashMovement.label'] ?? '')}
                  </button>
                  ${this.recordClosingCashMovementState === 'success'
                    ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>`
                    : ''}
                  ${this.recordClosingCashMovementState === 'error'
                    ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>`
                    : ''}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}

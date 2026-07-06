/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.ts" enhancement="_blank"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowRecordPaymentBase } from '/_102050_/l2/cafeFlow/web/shared/recordPayment.js';

@customElement('cafeflow--web--desktop--page11--record-payment-102050')
export class CafeFlowDesktopPage11RecordPaymentPage extends CafeFlowRecordPaymentBase {
  render() {
    const sectionTitle = this.msg['recordPayment.section.title'] ?? '';
    const organismTitle = this.msg['recordPayment.organism.title'] ?? '';
    const formTitle = this.msg['recordPayment.form.title'] ?? '';
    const methodLabel = this.msg['recordPayment.field.method'] ?? '';
    const amountLabel = this.msg['recordPayment.field.amount'] ?? '';
    const statusLabel = this.msg['recordPayment.field.status'] ?? '';
    const submitLabel = this.msg['recordPayment.action.submit'] ?? '';

    const isLoading = this.recordPaymentState === 'loading';

    const statusOptions: Array<{ value: string; label: string }> = [
      { value: 'authorized', label: 'authorized' },
      { value: 'captured', label: 'captured' },
      { value: 'voided', label: 'voided' },
      { value: 'refunded', label: 'refunded' },
    ];

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-slate-800 dark:text-slate-100">
              ${sectionTitle}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${this.msg['recordPayment.organism.title'] ?? ''}
            </p>
          </header>

          <!-- Section: recordPayment -->
          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-medium text-slate-700 dark:text-slate-200">
                ${organismTitle}
              </h2>
            </div>

            <div class="p-5 space-y-6">
              <!-- Organism: RecordPayment -->
              <div class="space-y-4">
                <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  ${formTitle}
                </h3>

                <!-- Command Form -->
                <form class="space-y-4" @submit=${(e: Event) => this.handleRecordPaymentClick(e)}>
                  <!-- Method -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="recordPayment-method">
                      ${methodLabel}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="recordPayment-method"
                      type="text"
                      .value=${this.recordPaymentMethod}
                      @input=${(e: Event) => this.handleRecordPaymentMethodChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${isLoading}
                    />
                  </div>

                  <!-- Amount -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="recordPayment-amount">
                      ${amountLabel}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="recordPayment-amount"
                      type="number"
                      step="0.01"
                      min="0"
                      .value=${this.recordPaymentAmount}
                      @input=${(e: Event) => this.handleRecordPaymentAmountChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${isLoading}
                    />
                  </div>

                  <!-- Status -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300" for="recordPayment-status">
                      ${statusLabel}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      id="recordPayment-status"
                      .value=${this.recordPaymentStatus}
                      @change=${(e: Event) => this.handleRecordPaymentStatusChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ?disabled=${isLoading}
                    >
                      <option value="" ?selected=${this.recordPaymentStatus === ''}></option>
                      ${statusOptions.map(
                        (opt) => html`
                          <option value=${opt.value} ?selected=${this.recordPaymentStatus === opt.value}>
                            ${opt.label}
                          </option>
                        `,
                      )}
                    </select>
                  </div>

                  <!-- Action status feedback -->
                  ${this.recordPaymentState === 'loading'
                    ? html`<p class="text-sm text-blue-600 dark:text-blue-400">Loading…</p>`
                    : null}
                  ${this.recordPaymentState === 'success'
                    ? html`<p class="text-sm text-green-600 dark:text-green-400">✓ ${submitLabel}</p>`
                    : null}
                  ${this.recordPaymentState === 'error'
                    ? html`<p class="text-sm text-red-600 dark:text-red-400">Error</p>`
                    : null}

                  <!-- Submit -->
                  <div class="pt-2">
                    <button
                      type="submit"
                      class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                      ?disabled=${isLoading}
                    >
                      ${submitLabel}
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

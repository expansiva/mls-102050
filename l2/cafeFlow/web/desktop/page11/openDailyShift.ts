/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.ts" enhancement="_blank"/>

import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { CafeFlowOpenDailyShiftBase } from "/_102050_/l2/cafeFlow/web/shared/openDailyShift.js";

@customElement("cafeflow--web--desktop--page11--open-daily-shift-102050")
export class CafeFlowDesktopPage11OpenDailyShiftPage extends CafeFlowOpenDailyShiftBase {
  render() {
    const m = this.msg;
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Page header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m["openDailyShift.section.main.title"] ?? ""}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m["openDailyShift.section.main.title"] ?? ""}
            </p>
          </header>

          <!-- Section: main -->
          <section class="space-y-6">
            <!-- Organism: CreateDailyShift -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${m["openDailyShift.organism.createDailyShift.title"] ?? ""}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                  <!-- shiftDate -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${m["openDailyShift.field.createDailyShift.shiftDate.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      .value=${this.createDailyShiftShiftDate}
                      @input=${(e: Event) => this.handleCreateDailyShiftShiftDateChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- status -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${m["openDailyShift.field.createDailyShift.status.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      .value=${this.createDailyShiftStatus}
                      @change=${(e: Event) => this.handleCreateDailyShiftStatusChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" ?selected=${this.createDailyShiftStatus === ""}></option>
                      <option value="open" ?selected=${this.createDailyShiftStatus === "open"}>open</option>
                      <option value="closed" ?selected=${this.createDailyShiftStatus === "closed"}>closed</option>
                    </select>
                  </div>

                  <!-- openedAt -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${m["openDailyShift.field.createDailyShift.openedAt.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      .value=${this.createDailyShiftOpenedAt}
                      @input=${(e: Event) => this.handleCreateDailyShiftOpenedAtChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- openingCashBalance -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${m["openDailyShift.field.createDailyShift.openingCashBalance.label"] ?? ""}
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      .value=${this.createDailyShiftOpeningCashBalance}
                      @input=${(e: Event) => this.handleCreateDailyShiftOpeningCashBalanceChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- Action row -->
                  <div class="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      ?disabled=${this.createDailyShiftState === "loading"}
                      @click=${(e: Event) => this.handleCreateDailyShiftClick()}
                      class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ${this.createDailyShiftState === "loading"
                        ? "..."
                        : m["openDailyShift.action.createDailyShift.submit.label"] ?? ""}
                    </button>
                    ${this.createDailyShiftState === "success"
                      ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>`
                      : ""}
                    ${this.createDailyShiftState === "error"
                      ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>`
                      : ""}
                  </div>
                </form>
              </div>
            </div>

            <!-- Organism: RecordOpeningCashMovement -->
            <div class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
              <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                  ${m["openDailyShift.organism.recordOpeningCashMovement.title"] ?? ""}
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                  <!-- movementType -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${m["openDailyShift.field.recordOpeningCashMovement.movementType.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      .value=${this.recordOpeningCashMovementMovementType}
                      @change=${(e: Event) => this.handleRecordOpeningCashMovementMovementTypeChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" ?selected=${this.recordOpeningCashMovementMovementType === ""}></option>
                      <option value="entrada" ?selected=${this.recordOpeningCashMovementMovementType === "entrada"}>entrada</option>
                      <option value="saída" ?selected=${this.recordOpeningCashMovementMovementType === "saída"}>saída</option>
                    </select>
                  </div>

                  <!-- amount -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${m["openDailyShift.field.recordOpeningCashMovement.amount.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      .value=${this.recordOpeningCashMovementAmount}
                      @input=${(e: Event) => this.handleRecordOpeningCashMovementAmountChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- reason -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      ${m["openDailyShift.field.recordOpeningCashMovement.reason.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      .value=${this.recordOpeningCashMovementReason}
                      @input=${(e: Event) => this.handleRecordOpeningCashMovementReasonChange(e)}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <!-- Action row -->
                  <div class="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      ?disabled=${this.recordOpeningCashMovementState === "loading"}
                      @click=${(e: Event) => this.handleRecordOpeningCashMovementClick()}
                      class="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ${this.recordOpeningCashMovementState === "loading"
                        ? "..."
                        : m["openDailyShift.action.recordOpeningCashMovement.submit.label"] ?? ""}
                    </button>
                    ${this.recordOpeningCashMovementState === "success"
                      ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>`
                      : ""}
                    ${this.recordOpeningCashMovementState === "error"
                      ? html`<span class="text-sm text-red-600 dark:text-red-400">✗</span>`
                      : ""}
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

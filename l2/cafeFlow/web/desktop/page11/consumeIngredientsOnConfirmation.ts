/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.ts" enhancement="_blank"/>

import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { CafeFlowConsumeIngredientsOnConfirmationBase } from "/_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.js";

@customElement("cafeflow--web--desktop--page11--consume-ingredients-on-confirmation-102050")
export class CafeFlowDesktopPage11ConsumeIngredientsOnConfirmationPage extends CafeFlowConsumeIngredientsOnConfirmationBase {
  render() {
    const m = this.msg;
    const isLoading = this.createStockConsumptionState === "loading";

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
              ${m["consumeIngredientsOnConfirmation.section.main.title"] ?? ""}
            </h1>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              ${m["consumeIngredientsOnConfirmation.organism.createStockConsumption.title"] ?? ""}
            </p>
          </header>

          <!-- Section: Baixar estoque por consumo de ingredientes -->
          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-200">
                ${m["consumeIngredientsOnConfirmation.section.main.title"] ?? ""}
              </h2>
            </div>

            <div class="p-5 space-y-6">
              <!-- Organism: CreateStockConsumption -->
              <div class="space-y-4">
                <h3 class="text-base font-medium text-slate-600 dark:text-slate-300">
                  ${m["consumeIngredientsOnConfirmation.organism.createStockConsumption.title"] ?? ""}
                </h3>

                <!-- Intention: commandForm -->
                <form class="space-y-4" @submit=${(e: Event) => e.preventDefault()}>
                  <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400">
                    ${m["consumeIngredientsOnConfirmation.intent.createStockConsumption.form.title"] ?? ""}
                  </h4>

                  <!-- Field: quantity -->
                  <div class="space-y-1">
                    <label
                      class="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      for="fld-quantity"
                    >
                      ${m["consumeIngredientsOnConfirmation.field.quantity.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="fld-quantity"
                      type="number"
                      .value=${String(this.createStockConsumptionQuantity ?? "")}
                      @input=${this.handleCreateStockConsumptionQuantityChange}
                      ?disabled=${isLoading}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    />
                  </div>

                  <!-- Field: status -->
                  <div class="space-y-1">
                    <label
                      class="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      for="fld-status"
                    >
                      ${m["consumeIngredientsOnConfirmation.field.status.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <select
                      id="fld-status"
                      .value=${this.createStockConsumptionStatus ?? ""}
                      @change=${this.handleCreateStockConsumptionStatusChange}
                      ?disabled=${isLoading}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                      <option value="" ?selected=${!this.createStockConsumptionStatus}></option>
                      <option value="posted" ?selected=${this.createStockConsumptionStatus === "posted"}>posted</option>
                      <option value="voided" ?selected=${this.createStockConsumptionStatus === "voided"}>voided</option>
                    </select>
                  </div>

                  <!-- Field: consumedAt -->
                  <div class="space-y-1">
                    <label
                      class="block text-sm font-medium text-slate-700 dark:text-slate-300"
                      for="fld-consumedAt"
                    >
                      ${m["consumeIngredientsOnConfirmation.field.consumedAt.label"] ?? ""}
                      <span class="text-red-500">*</span>
                    </label>
                    <input
                      id="fld-consumedAt"
                      type="datetime-local"
                      .value=${this.createStockConsumptionConsumedAt ?? ""}
                      @input=${this.handleCreateStockConsumptionConsumedAtChange}
                      ?disabled=${isLoading}
                      class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                    />
                  </div>

                  <!-- Action: createStockConsumption -->
                  <div class="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      @click=${this.handleCreateStockConsumptionClick}
                      ?disabled=${isLoading}
                      class="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ${isLoading ? "..." : (m["consumeIngredientsOnConfirmation.action.createStockConsumption.label"] ?? "")}
                    </button>

                    ${this.createStockConsumptionState === "success"
                      ? html`<span class="text-sm text-green-600 dark:text-green-400">✓</span>`
                      : null}
                    ${this.createStockConsumptionState === "error"
                      ? html`<span class="text-sm text-red-600 dark:text-red-400">✕</span>`
                      : null}
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

/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
CafeFlowViewKitchenTicketsInput,
CafeFlowViewKitchenTicketsOutput,
CafeFlowUpdateKitchenTicketStatusInput,
CafeFlowUpdateKitchenTicketStatusOutput,
CafeFlowUpdateOrderItemStatusInput,
CafeFlowUpdateOrderItemStatusOutput
} from '/_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.js';

/// **collab_i18n_start**
const message_pt = {
"kitchenProductionFlow.section.main.title": "Fluxo de produção da cozinha",
"kitchenProductionFlow.organism.viewKitchenTickets.title": "Consultar tickets da cozinha",
"kitchenProductionFlow.intention.viewKitchenTickets.list.title": "Query List",
"kitchenProductionFlow.field.kitchenTicketId": "Kitchen Ticket Id",
"kitchenProductionFlow.field.orderId": "Order Id",
"kitchenProductionFlow.field.status": "Status",
"kitchenProductionFlow.field.createdAt": "Created At",
"kitchenProductionFlow.field.updatedAt": "Updated At",
"kitchenProductionFlow.filter.kitchenTicketId": "Kitchen Ticket Id",
"kitchenProductionFlow.filter.orderId": "Order Id",
"kitchenProductionFlow.filter.status": "Status",
"kitchenProductionFlow.filter.createdAt": "Created At",
"kitchenProductionFlow.filter.updatedAt": "Updated At",
"kitchenProductionFlow.action.viewKitchenTickets": "View Kitchen Tickets",
"kitchenProductionFlow.organism.updateKitchenTicketStatus.title": "Atualizar status do ticket de cozinha",
"kitchenProductionFlow.intention.updateKitchenTicketStatus.form.title": "Command Form",
"kitchenProductionFlow.field.kitchenTicket.status": "Status",
"kitchenProductionFlow.action.updateKitchenTicketStatus": "Update Kitchen Ticket Status",
"kitchenProductionFlow.organism.updateOrderItemStatus.title": "Atualizar status de item do pedido",
"kitchenProductionFlow.intention.updateOrderItemStatus.form.title": "Command Form",
"kitchenProductionFlow.field.orderItem.status": "Status",
"kitchenProductionFlow.action.updateOrderItemStatus": "Update Order Item Status",
"kitchenProductionFlow.organism.summary.title": "Revisar o contexto e o resultado das ações principais da página",
"kitchenProductionFlow.intention.summary.title": "Summary"
};
const message_en = {
"kitchenProductionFlow.section.main.title": "Kitchen production flow",
"kitchenProductionFlow.organism.viewKitchenTickets.title": "View kitchen tickets",
"kitchenProductionFlow.intention.viewKitchenTickets.list.title": "Query List",
"kitchenProductionFlow.field.kitchenTicketId": "Kitchen Ticket Id",
"kitchenProductionFlow.field.orderId": "Order Id",
"kitchenProductionFlow.field.status": "Status",
"kitchenProductionFlow.field.createdAt": "Created At",
"kitchenProductionFlow.field.updatedAt": "Updated At",
"kitchenProductionFlow.filter.kitchenTicketId": "Kitchen Ticket Id",
"kitchenProductionFlow.filter.orderId": "Order Id",
"kitchenProductionFlow.filter.status": "Status",
"kitchenProductionFlow.filter.createdAt": "Created At",
"kitchenProductionFlow.filter.updatedAt": "Updated At",
"kitchenProductionFlow.action.viewKitchenTickets": "View Kitchen Tickets",
"kitchenProductionFlow.organism.updateKitchenTicketStatus.title": "Update kitchen ticket status",
"kitchenProductionFlow.intention.updateKitchenTicketStatus.form.title": "Command Form",
"kitchenProductionFlow.field.kitchenTicket.status": "Status",
"kitchenProductionFlow.action.updateKitchenTicketStatus": "Update Kitchen Ticket Status",
"kitchenProductionFlow.organism.updateOrderItemStatus.title": "Update order item status",
"kitchenProductionFlow.intention.updateOrderItemStatus.form.title": "Command Form",
"kitchenProductionFlow.field.orderItem.status": "Status",
"kitchenProductionFlow.action.updateOrderItemStatus": "Update Order Item Status",
"kitchenProductionFlow.organism.summary.title": "Review the context and the result of the page main actions",
"kitchenProductionFlow.intention.summary.title": "Summary"
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowKitchenProductionFlowBase extends CollabLitElement {
@property({ type: String })
public status: string = '';

@property({ type: String })
public viewKitchenTicketsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property({ type: String })
public viewKitchenTicketsKitchenTicketId: string = '';

@property({ type: String })
public viewKitchenTicketsOrderId: string = '';

@property({ type: String })
public viewKitchenTicketsStatus: 'open' | 'inProgress' | 'done' | 'void' | '' = '';

@property({ type: String })
public viewKitchenTicketsCreatedAt: string = '';

@property({ type: String })
public viewKitchenTicketsUpdatedAt: string = '';

@property({ type: Array })
public viewKitchenTicketsData: CafeFlowViewKitchenTicketsOutput = [];

@property({ type: String })
public updateKitchenTicketStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property({ type: String })
public updateKitchenTicketStatusStatus: 'open' | 'inProgress' | 'done' | 'void' | '' = '';

@property({ type: String })
public updateOrderItemStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property({ type: String })
public updateOrderItemStatusStatus:
| 'new'
| 'sentToKitchen'
| 'inPreparation'
| 'ready'
| 'served'
| 'cancelled'
| '' = '';

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || messages['en'];
}

public connectedCallback(): void {
super.connectedCallback();
const storedStatus = getState('ui.kitchenProductionFlow.status') as string | undefined;
this.status = storedStatus ?? '';
const storedViewKitchenTicketsState = getState('ui.kitchenProductionFlow.action.viewKitchenTickets.status') as
| 'idle'
| 'loading'
| 'success'
| 'error'
| undefined;
this.viewKitchenTicketsState = storedViewKitchenTicketsState ?? 'idle';
const storedViewKitchenTicketsKitchenTicketId = getState('ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId') as string | undefined;
this.viewKitchenTicketsKitchenTicketId = storedViewKitchenTicketsKitchenTicketId ?? '';
const storedViewKitchenTicketsOrderId = getState('ui.kitchenProductionFlow.input.viewKitchenTickets.orderId') as string | undefined;
this.viewKitchenTicketsOrderId = storedViewKitchenTicketsOrderId ?? '';
const storedViewKitchenTicketsStatus = getState('ui.kitchenProductionFlow.input.viewKitchenTickets.status') as
| 'open'
| 'inProgress'
| 'done'
| 'void'
| ''
| undefined;
this.viewKitchenTicketsStatus = storedViewKitchenTicketsStatus ?? '';
const storedViewKitchenTicketsCreatedAt = getState('ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt') as string | undefined;
this.viewKitchenTicketsCreatedAt = storedViewKitchenTicketsCreatedAt ?? '';
const storedViewKitchenTicketsUpdatedAt = getState('ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt') as string | undefined;
this.viewKitchenTicketsUpdatedAt = storedViewKitchenTicketsUpdatedAt ?? '';
const storedViewKitchenTicketsData = getState('ui.kitchenProductionFlow.data.viewKitchenTickets') as CafeFlowViewKitchenTicketsOutput | undefined;
this.viewKitchenTicketsData = storedViewKitchenTicketsData ?? [];
const storedUpdateKitchenTicketStatusState = getState('ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status') as
| 'idle'
| 'loading'
| 'success'
| 'error'
| undefined;
this.updateKitchenTicketStatusState = storedUpdateKitchenTicketStatusState ?? 'idle';
const storedUpdateKitchenTicketStatusStatus = getState('ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status') as
| 'open'
| 'inProgress'
| 'done'
| 'void'
| ''
| undefined;
this.updateKitchenTicketStatusStatus = storedUpdateKitchenTicketStatusStatus ?? '';
const storedUpdateOrderItemStatusState = getState('ui.kitchenProductionFlow.action.updateOrderItemStatus.status') as
| 'idle'
| 'loading'
| 'success'
| 'error'
| undefined;
this.updateOrderItemStatusState = storedUpdateOrderItemStatusState ?? 'idle';
const storedUpdateOrderItemStatusStatus = getState('ui.kitchenProductionFlow.input.updateOrderItemStatus.status') as
| 'new'
| 'sentToKitchen'
| 'inPreparation'
| 'ready'
| 'served'
| 'cancelled'
| ''
| undefined;
this.updateOrderItemStatusStatus = storedUpdateOrderItemStatusStatus ?? '';
void this.loadViewKitchenTickets();
}

public disconnectedCallback(): void {
super.disconnectedCallback();
}

public setViewKitchenTicketsKitchenTicketId(value: string): void {
this.viewKitchenTicketsKitchenTicketId = value;
setState('ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId', value);
this.requestUpdate();
}

public handleViewKitchenTicketsKitchenTicketIdChange(event: Event): void {
const target = event.target as HTMLInputElement | null;
this.setViewKitchenTicketsKitchenTicketId(target?.value ?? '');
}

public setViewKitchenTicketsOrderId(value: string): void {
this.viewKitchenTicketsOrderId = value;
setState('ui.kitchenProductionFlow.input.viewKitchenTickets.orderId', value);
this.requestUpdate();
}

public handleViewKitchenTicketsOrderIdChange(event: Event): void {
const target = event.target as HTMLInputElement | null;
this.setViewKitchenTicketsOrderId(target?.value ?? '');
}

public setViewKitchenTicketsStatus(value: 'open' | 'inProgress' | 'done' | 'void' | ''): void {
this.viewKitchenTicketsStatus = value;
setState('ui.kitchenProductionFlow.input.viewKitchenTickets.status', value);
this.requestUpdate();
}

public handleViewKitchenTicketsStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | null;
this.setViewKitchenTicketsStatus((target?.value ?? '') as 'open' | 'inProgress' | 'done' | 'void' | '');
}

public setViewKitchenTicketsCreatedAt(value: string): void {
this.viewKitchenTicketsCreatedAt = value;
setState('ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt', value);
this.requestUpdate();
}

public handleViewKitchenTicketsCreatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | null;
this.setViewKitchenTicketsCreatedAt(target?.value ?? '');
}

public setViewKitchenTicketsUpdatedAt(value: string): void {
this.viewKitchenTicketsUpdatedAt = value;
setState('ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt', value);
this.requestUpdate();
}

public handleViewKitchenTicketsUpdatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | null;
this.setViewKitchenTicketsUpdatedAt(target?.value ?? '');
}

public setUpdateKitchenTicketStatusStatus(value: 'open' | 'inProgress' | 'done' | 'void' | ''): void {
this.updateKitchenTicketStatusStatus = value;
setState('ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status', value);
this.requestUpdate();
}

public handleUpdateKitchenTicketStatusStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | null;
this.setUpdateKitchenTicketStatusStatus((target?.value ?? '') as 'open' | 'inProgress' | 'done' | 'void' | '');
}

public setUpdateOrderItemStatusStatus(
value:
| 'new'
| 'sentToKitchen'
| 'inPreparation'
| 'ready'
| 'served'
| 'cancelled'
| ''
): void {
this.updateOrderItemStatusStatus = value;
setState('ui.kitchenProductionFlow.input.updateOrderItemStatus.status', value);
this.requestUpdate();
}

public handleUpdateOrderItemStatusStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | null;
this.setUpdateOrderItemStatusStatus(
(target?.value ?? '') as
| 'new'
| 'sentToKitchen'
| 'inPreparation'
| 'ready'
| 'served'
| 'cancelled'
| ''
);
}

public async loadViewKitchenTickets(): Promise<void> {
this.viewKitchenTicketsState = 'loading';
setState('ui.kitchenProductionFlow.action.viewKitchenTickets.status', 'loading');
const params: CafeFlowViewKitchenTicketsInput = {
kitchenTicketId: this.viewKitchenTicketsKitchenTicketId || undefined,
orderId: this.viewKitchenTicketsOrderId || undefined,
status: (this.viewKitchenTicketsStatus || undefined) as
| 'open'
| 'inProgress'
| 'done'
| 'void'
| undefined,
createdAt: this.viewKitchenTicketsCreatedAt || undefined,
updatedAt: this.viewKitchenTicketsUpdatedAt || undefined
};
const options: BffClientOptions = { mode: 'silent' };
const response = await execBff<CafeFlowViewKitchenTicketsOutput>(
'cafeFlow.kitchenProductionFlow.viewKitchenTickets',
params,
options
);
if (response.ok) {
const data = response.data ?? [];
this.viewKitchenTicketsData = data;
setState('ui.kitchenProductionFlow.data.viewKitchenTickets', data);
this.viewKitchenTicketsState = 'success';
setState('ui.kitchenProductionFlow.action.viewKitchenTickets.status', 'success');
} else {
this.viewKitchenTicketsState = 'error';
setState('ui.kitchenProductionFlow.action.viewKitchenTickets.status', 'error');
this.viewKitchenTicketsData = [];
setState('ui.kitchenProductionFlow.data.viewKitchenTickets', []);
}
}

public handleViewKitchenTicketsClick(): void {
void this.loadViewKitchenTickets();
}

public async updateKitchenTicketStatus(): Promise<void> {
this.updateKitchenTicketStatusState = 'loading';
setState('ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status', 'loading');
const params: CafeFlowUpdateKitchenTicketStatusInput = {
status: this.updateKitchenTicketStatusStatus as 'open' | 'inProgress' | 'done' | 'void'
};
const options: BffClientOptions = { mode: 'blocking' };
const response = await execBff<CafeFlowUpdateKitchenTicketStatusOutput>(
'cafeFlow.kitchenProductionFlow.updateKitchenTicketStatus',
params,
options
);
if (response.ok) {
this.updateKitchenTicketStatusState = 'success';
setState('ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status', 'success');
} else {
this.updateKitchenTicketStatusState = 'error';
setState('ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status', 'error');
}
}

public handleUpdateKitchenTicketStatusClick(): void {
runBlockingUiAction(async () => {
await this.updateKitchenTicketStatus();
});
}

public async updateOrderItemStatus(): Promise<void> {
this.updateOrderItemStatusState = 'loading';
setState('ui.kitchenProductionFlow.action.updateOrderItemStatus.status', 'loading');
const params: CafeFlowUpdateOrderItemStatusInput = {
status: this.updateOrderItemStatusStatus as
| 'new'
| 'sentToKitchen'
| 'inPreparation'
| 'ready'
| 'served'
| 'cancelled'
};
const options: BffClientOptions = { mode: 'blocking' };
const response = await execBff<CafeFlowUpdateOrderItemStatusOutput>(
'cafeFlow.kitchenProductionFlow.updateOrderItemStatus',
params,
options
);
if (response.ok) {
this.updateOrderItemStatusState = 'success';
setState('ui.kitchenProductionFlow.action.updateOrderItemStatus.status', 'success');
} else {
this.updateOrderItemStatusState = 'error';
setState('ui.kitchenProductionFlow.action.updateOrderItemStatus.status', 'error');
}
}

public handleUpdateOrderItemStatusClick(): void {
runBlockingUiAction(async () => {
await this.updateOrderItemStatus();
});
}
}

import { Account } from "./account";
import { Details } from "./details";

export interface Order {
    id?: number,
    serviceType?: String,
    fulfilled?: boolean,
    requestDetails?: Details[],
    accounts?: Account[] 
}
import { Account } from "./account";
import { Details } from "./details";
import { Login } from "./login";

export interface Order {
    id?: number,
    serviceType?: String,
    fulfilled?: boolean,
    requestDetails?: Details[],
    accounts?: Account[] 
}
import { Details } from "./details";

export interface Order {
    id?: number,
    serviceType?: String,
    fulfilled?: boolean,
    details?: Array<Details>
}
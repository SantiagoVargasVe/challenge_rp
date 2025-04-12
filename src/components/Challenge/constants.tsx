import { ReactNode } from "react";
import { RequestState } from "./types";

export const STATUS_MAPPER: Record<Exclude<RequestState, 'success'>, ReactNode> = {
    'idle': 'Starting',
    'loading': 'Loading...',
    'error': 'Error'
}
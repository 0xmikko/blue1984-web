/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import {STATUS} from "../../utils/status";

export interface Operation {
    id: string,
    status: STATUS,
    error?: string,
}

export const namespace = 'operations';
export const OPERATION_PREFIX = 'OPERATIONS@@';

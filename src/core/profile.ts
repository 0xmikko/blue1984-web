/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

export type ProfileStatus =  "NEW" | "READY";

export interface Profile {
    id?: string,
    status: ProfileStatus,
}




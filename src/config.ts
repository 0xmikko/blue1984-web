/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

export const BACKEND_ADDR =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000" // Local development server
    : "https://blue1984-server.herokuapp.com"; // Production server

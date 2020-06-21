/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import {Operation, OPERATION_PREFIX} from './';

import {createDataLoaderDetailsReducer} from '../dataloader/details';

export default createDataLoaderDetailsReducer<Operation>(OPERATION_PREFIX);

/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from "react";
import { Form } from "react-bootstrap";
import actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { appSelector } from "../../store/app";

export function ShowTweetsSwitch() {
  const dispatch = useDispatch();
  const { showDeletedTweets } = useSelector(appSelector);
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Show deleted tweets only"
        onChange={() =>
          dispatch(actions.app.setMessagesFilter(!showDeletedTweets))
        }
        checked={showDeletedTweets}
      />
    </Form>
  );
}

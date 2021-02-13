/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import "./JoinScreen.css";
import logo from "./1984_cover.jpg";
import actions from "../../store/actions";

const formSchema = yup.object({
  name: yup.string().required(),
});

type FormValues = yup.InferType<typeof formSchema>;

export const JoinScreen: React.FC = () => {
  const dispatch = useDispatch();

  const onStart = () => {
    dispatch(actions.app.updateStatus("READY"));
  };

  return (
    <Container className="join-screen onescreen" fluid>
      <Row>
        <Col>
          <img src={logo} />
          <h1>Welcome to BLU 1984!</h1>
          <h2>Twitter without censorship</h2>
          <Button
            type={"submit"}
            className="outline"
            style={{ marginRight: "15px" }}
            onClick={onStart}
          >
            Break the wall
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

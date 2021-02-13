/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LoadingView } from "rn-web-components";

export function SplashScreen(): React.ReactElement {
  return (
    <Container
      style={{
        width: "100vh",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Row>
        <Col>
          <LoadingView />
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            Loading, please wait...
          </p>
        </Col>
      </Row>
    </Container>
  );
}

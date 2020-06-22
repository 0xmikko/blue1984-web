/*
 * Blue1984 - Twitter without censorship
 * Copyright (c) 2020. Mikhail Lazarev
 * https://github.com/MikaelLazarev/blue1984-server
 *
 */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import addImage from "./add.png";
import selectImage from "./select.png";
import deleteImage from "./delete.png";

export const WelcomeView = () => {
  return (
    <Container style={{ padding: 0, paddingTop: 40 }}>
      <Row>
        <Col lg={12} md={12} xs={12}>
          <h3>Quick manual:</h3>
          <h4>Adding new account</h4>
          Press '+Account' in right top corner to add new account. It takes time
          to sync tweets, and they will be shown in feed tab.
          <br />
          <img src={addImage} width={"100%"} />
          <br />
          <br />
          <h4>Checking tweets of particular account</h4>
          Press on account and you'll see tweets feed of particular account. Use
          filer 'Deleted tweets' to get list of deleted tweets.
            <br />
            <img src={selectImage} width={"100%"} />
            <br />
            <br />
          <h4>Removing account</h4>
          To remove account press 'Delete button'.
            <br />
            <img src={deleteImage} width={"100%"} />
        </Col>
      </Row>
    </Container>
  );
};

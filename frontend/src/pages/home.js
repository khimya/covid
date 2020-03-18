import React from "react";
import styles from "./css/home.module.css";
import Card from "../components/card";
import {
  faProcedures,
  faFirstAid,
  faCheckCircle,
  faDizzy
} from "@fortawesome/free-solid-svg-icons";
import Phone from "../components/phone";
import Msg from "../components/msg";
import Tweet from "../components/tweet";
import { Row, Col } from "react-grid-system";

export default function Home() {
  return (
    <div className={styles.home}>
      <Row>
        <Col lg={9} md={12}>
          <div className={styles.cardContainer}>
            <Row>
              <Col lg={6} md={12}>
                <Card
                  title="الحالات المؤكدة"
                  number="54"
                  icon={faProcedures}
                  bg="#FEEBBF"
                  color="#FF9F43"
                />
              </Col>
              <Col lg={6} md={12}>
                <Card
                  title="المتعافون"
                  number="1"
                  icon={faFirstAid}
                  bg="#A2E6F4"
                  color="#2E86DE"
                />
              </Col>
              <Col lg={6} md={12}>
                <Card
                  title="الحالات المستبعدة"
                  number="263"
                  icon={faCheckCircle}
                  bg="#A9EDDB"
                  color="#32BEA6"
                />
              </Col>
              <Col lg={6} md={12}>
                <Card
                  title="الوفيات"
                  number="2"
                  icon={faDizzy}
                  bg="#BFC4CA"
                  color="#4E5366"
                />
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={3} md={12}>
          <div className={styles.tweets}>
            <Tweet />
          </div>
        </Col>
      </Row>
      <Phone />
      <Msg />
    </div>
  );
}

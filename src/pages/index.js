import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <Head>
        <title>
          Syntax Squad | Crafting Digital Excellence, One Syntax at a Time.
        </title>
        <meta
          name="description"
          content="Syntax Squad | Crafting Digital Excellence, One Syntax at a Time."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <section>
          <Container>
            <Row>
              <Col>
                <h1>Home Page</h1>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;

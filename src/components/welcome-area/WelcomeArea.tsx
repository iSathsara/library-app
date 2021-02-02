import React from 'react';
import {Col, Container, Row, Image} from "react-bootstrap";
import original_library from '../../assests/images/original_library.jpg';

const WelcomeArea:React.FC = () => {
    return(
        <Container fluid={true}>
            <Row>
                <Col className="header-title text-center p-1">
                    <h1>My Library</h1>
                </Col>
            </Row>
            <Row>
                <Image src={original_library} fluid/>
            </Row>
            <Row>
                <Col className="photo-credit text-right">
                    <span>Photo Credits <a href="https://unsplash.com/@annahunko?utm_source=unsplash&amp;
                    utm_medium=referral&amp;utm_content=creditCopyText">Anna Hunko</a> on
                        <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;
                        utm_content=creditCopyText">Unsplash</a>
                    </span>
                </Col>
            </Row>
        </Container>
    )
};
export default WelcomeArea;

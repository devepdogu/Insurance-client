import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../styles/Widget.scss';

import useData from '../hooks/useData'
import Clients from './clients'
import Search from './search'
import NotFound from './notFound'
function Widget() {
    const [search, setSearch] = React.useState("");
    const data = useData(search);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg="9" md="12">
                    <div className='filterBar'>
                        <Search search={search} setSearch={setSearch}></Search>
                        {data.length > 0 ? <Clients data={data}></Clients> : (search.length > 0 ? <NotFound></NotFound> : <></>)}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Widget
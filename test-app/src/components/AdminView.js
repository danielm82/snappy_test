import React, { Component } from 'react';
//import Input from './Input.js';
import { Container, Row, Col, Table } from 'reactstrap';

let validationFunctions = {};

class AdminView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: []
        }

    }

    componentDidMount() {
        let _this = this;
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                _this.setState({
                    data: JSON.parse(this.response)
                });
            }
        };
        xhttp.open("GET", 'http://localhost:3001/addresses', true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();

    }

    render() {

        
        let headers = [];
        let rows = [];

        this.props.columns.forEach(column => {
            headers.push(<th>{column.label}</th>);
        });

        this.state.data.forEach(data => {
            let tds = [];
            this.props.columns.forEach(column => {
                tds.push(<td>{data[column.name]}</td>);
            });

            rows.push(<tr>{tds}</tr>);
        });        



        return (
            <Container>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    {headers}
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </Table>                    
                    </Col>
                </Row>
            </Container>
            
        
        );
    }
}

export default AdminView;
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';
import { updateField } from './actions/index';
import { connect } from "react-redux";

const CentredRow = styled(Row)`
  text-align: center;
  display: block;
`;

export const SimpleForm = props => {

  const [modal, showModal] = useState(false);

  const openModal = () => {
    showModal(!modal);
  }

  const onChange = (event) => {
    const inputobject = {};
    inputobject[event.target.name] = event.target.value;
    props.updateState(inputobject);
  }

  return (
    <Container>
      <CentredRow>
        <h3>A simple form</h3>
      </CentredRow>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={onChange} value={props.email} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={onChange} value={props.password} />
        </FormGroup>
        <FormGroup>
          <Label for="countryselect">Select Your Country</Label>
          <Input type="select" name="country" id="countryselect" onChange={onChange} value={props.country}>
            <option>INDIA</option>
            <option>USA</option>
            <option>AUSTRALIA</option>
            <option>ENGLAND</option>
          </Input>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Maritial Status</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="maritialstatus" onChange={onChange} value={true} />{' '}
              Married
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="maritialstatus" onChange={onChange} value={false} />{' '}
              Single
            </Label>
          </FormGroup>
        </FormGroup>
        <Button onClick={openModal}>Submit</Button>
      </Form>
      <Modal isOpen={modal}>
        <ModalHeader>Confirmation</ModalHeader>
        <ModalBody>
          <p>
            email: {props.email}
          </p>
          <p>
            password: {props.password}
          </p>
          <p>
            country: {props.country}
          </p>
          <p>
            maritialstatus: {props.maritialstatus}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.onSubmit}>Submit</Button>{' '}
          <Button color="secondary" onClick={openModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

const mapDispatchToProps = {
  updateState: (paylod) => (updateField(paylod)),
}

const mapStateToProps = state => {
  return {
    email: state.form.email,
    password: state.form.password,
    country: state.form.country,
    maritialstatus: state.form.maritialstatus,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);

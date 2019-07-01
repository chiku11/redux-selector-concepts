import React from 'react';
import {Container, Row} from 'reactstrap';
import styled from 'styled-components';

const CentredRow = styled(Row)`
  margin-top: 5%;
  text-align: center;
  display: block;
`

export const ThankYou = () => (
    <Container>
        <CentredRow>
            <h3> Thanks for Submission</h3>
        </CentredRow>
    </Container>
);

export default ThankYou;
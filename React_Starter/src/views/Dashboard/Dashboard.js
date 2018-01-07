import React, { Component } from 'react';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table,
  FormGroup
} from 'reactstrap';
import { css } from 'glamor';
import Step from '../../components/Step/Step';

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card className="card-accent-primary">
              <CardHeader className="text-center">
                <h4>Journey Title</h4>
              </CardHeader>
              <CardBody>
                <Row className="journey-goal">
                  <Col sm="1" {...css({ paddingRight: '0' })}>
                    <i className="fa fa-bullseye" />
                  </Col>
                  <Col sm="8" {...css({ paddingLeft: '0' })}>
                    <h3>Journey Goal:</h3>
                    <div>Here we write the goal</div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6" lg="3">
                    <div className="callout callout-info">
                      <small className="text-muted">Total Steps</small>
                      <br />
                      <strong className="h4">9,123</strong>
                    </div>
                  </Col>
                  <Col sm="6" lg="3">
                    <div className="callout callout-danger">
                      <small className="text-muted">Total Results</small>
                      <br />
                      <strong className="h4">9,123</strong>
                    </div>
                  </Col>
                  <Col sm="6" lg="3">
                    <div className="callout callout-warning">
                      <small className="text-muted">Total Tasks</small>
                      <br />
                      <strong className="h4">9,123</strong>
                    </div>
                  </Col>
                  <Col sm="6" lg="3">
                    <div className="callout callout-success">
                      <small className="text-muted">Stakehoders</small>
                      <br />
                      <strong className="h4">9,123</strong>
                    </div>
                  </Col>
                </Row>
                <Row {...css({ marginBottom: '20px' })}>
                  <Col>
                    <ul className="horizontal-bars type-2">
                      <li>
                        <i className="fa fa-line-chart" />
                        <span className="title">Progress</span>
                        <span className="value">
                          10-01-2018/01-01-2019{' '}
                          <span className="text-muted small">(56%)</span>
                        </span>
                        <div className="bars">
                          <Progress
                            className="progress-xs"
                            color="success"
                            value="56"
                          />
                        </div>
                      </li>
                    </ul>
                  </Col>
                </Row>

                <Row className="step-section">
                  <Col sm="12">
                    <FormGroup>
                      <Row>
                        <Col sm="6">
                          <Input
                            type="text"
                            className="form-control-success"
                            id="inputSuccess2i"
                            bsSize="lg"
                            placeholder="Type Step Title"
                          />
                        </Col>
                        <Col sm="3">
                          <FormGroup
                            className="align-middle"
                            {...css({ marginTop: '8px' })}
                          >
                            <Label
                              htmlFor="company"
                              {...css({
                                color: '#424242',
                                marginRight: '5px',
                                fontWeight: '600'
                              })}
                            >
                              Sub-Journey
                            </Label>
                            <Label className="switch switch-text switch-primary">
                              <Input
                                type="checkbox"
                                className="switch-input"
                                defaultChecked
                                id="company"
                              />
                              <span
                                className="switch-label"
                                data-on="on"
                                data-off="Off"
                              />
                              <span className="switch-handle" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Step />
                  <Step />
                  <Step />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;

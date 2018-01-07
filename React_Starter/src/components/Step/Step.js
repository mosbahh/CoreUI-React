import React, { Component } from 'react';
import { css } from 'glamor';
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
  Table
} from 'reactstrap';
import Result from '../Result';

const stepIconStyle = {
  display: 'block',
  float: 'left',
  width: '35px !important',
  height: '35px !important',
  margin: '2px',
  lineHeight: '35px !important',
  textAlign: 'center'
};
const noPaddingLeft = {
  paddingLeft: 0
};

const actionIconStyle = {
  ':hover': {
    color: '#2CA9D6'
  }
};

const border = {
  borderWidth: '0 0 1px 0'
};

export default class Step extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  renderResults = () => {
    if (this.state.open) {
      return (
        <Row>
          <Col sm={{ size: 11, offset: 1 }}>
            <Row className="mt-1">
              <Col sm="12">
                <h5 {...css({ color: '#81c784' })}>Results</h5>
              </Col>
            </Row>
            <Row>
              <Col sm="6">
                <Input
                  type="text"
                  className="form-control-success"
                  id="inputSuccess2i"
                  bsSize="lg"
                  placeholder="Type a Result"
                />
              </Col>
              <Col sm="6">
                <p {...css({ color: 'red' })}>
                  A result must be specified with metrics, like time, numbers,
                  etc..
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Result />
              </Col>
              <Col sm="12">
                <Result />
              </Col>
            </Row>
          </Col>
        </Row>
      );
    }
  };
  render() {
    return (
      <Col sm="12">
        <Card {...css(border)}>
          <Row>
            <Col xs="8" {...css(noPaddingLeft)}>
              <i {...css(stepIconStyle)} className="fa fa-map-marker bg-info" />
              <strong {...css({ paddingLeft: '5px' })}>Step Title</strong>
              <br />
              <strong {...css({ color: '#616161', paddingLeft: '5px' })}>
                Objective:{' '}
              </strong>{' '}
              <span>Write down Your Objective</span>
            </Col>
            <Col xs="4">
              <Button
                style={{ float: 'right' }}
                color="link"
                className="text-muted"
                {...css(noPaddingLeft)}
              >
                <i className="icon-settings" {...css(actionIconStyle)} />
              </Button>
              <Button
                style={{ float: 'right' }}
                color="link"
                className="text-muted"
                {...css(noPaddingLeft)}
              >
                <i className="fa fa-trash" {...css(actionIconStyle)} />
              </Button>
              <Button
                style={{ float: 'right' }}
                color="link"
                className="text-muted"
                onClick={this.toggleOpen}
              >
                <i className="fa fa-bars" {...css(actionIconStyle)} />
              </Button>
            </Col>
          </Row>
          {this.renderResults()}
        </Card>
      </Col>
    );
  }
}

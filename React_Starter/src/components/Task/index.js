import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  UncontrolledTooltip,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { css } from 'glamor';

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

export default class Task extends Component {
  render() {
    return (
      <Col sm="12">
        <Card {...css(border)}>
          <Row {...css({ padding: '10px 0' })}>
            <Col xs="8" {...css(noPaddingLeft)}>
              <i {...css(stepIconStyle)} className="fa fa-tasks bg-secondary" />
              <span className="text-mute">
                Task Description laldsalkdj asdj lkajsd lkjsa ddsklfj adlfjas
                ldfklasjdf lkasjf skldfj sdlfjsldkafj ldsfj{' '}
              </span>
              <br />
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
                {...css(noPaddingLeft)}
              >
                <i className="fa fa-square-o" {...css(actionIconStyle)} />
              </Button>
              <Button
                style={{ float: 'right' }}
                color="link"
                className="text-muted"
              >
                <i
                  className="fa fa-check-square-o text-success"
                  {...css(actionIconStyle)}
                />
              </Button>
            </Col>
          </Row>
          <Row {...css({ padding: '10px 0' })}>
            <Col sm="6">
              <span class="badge badge-pill badge-light">
                <div className="avatar avatar-sm">
                  <img
                    id="image3"
                    src={'img/avatars/4.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                Name
                <a href="#" class="badge badge-light">
                  <i className="fa fa-close" />
                </a>
              </span>
              <span class="badge badge-pill badge-light">
                <div className="avatar avatar-sm">
                  <img
                    id="image3"
                    src={'img/avatars/4.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                Name
                <a href="#" class="badge badge-light">
                  <i className="fa fa-close" />
                </a>
              </span>
              <span class="badge badge-pill badge-light">
                <div className="avatar avatar-sm">
                  <img
                    id="image3"
                    src={'img/avatars/4.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                Name
                <a href="#" class="badge badge-light">
                  <i className="fa fa-close" />
                </a>
              </span>
              <span class="badge badge-pill badge-light">
                <div className="avatar avatar-sm">
                  <img
                    id="image3"
                    src={'img/avatars/4.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                Name
                <a href="#" class="badge badge-light">
                  <i className="fa fa-close" />
                </a>
              </span>
              <span class="badge badge-pill badge-light">
                <div className="avatar avatar-sm">
                  <img
                    id="image3"
                    src={'img/avatars/4.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                Name
                <a href="#" class="badge badge-light">
                  <i className="fa fa-close" />
                </a>
              </span>
              <span class="badge badge-pill badge-light">
                <div className="avatar avatar-sm">
                  <img
                    id="image3"
                    src={'img/avatars/4.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                Mosbah AL Habbal
                <a href="#" class="badge badge-light">
                  <i className="fa fa-close" />
                </a>
              </span>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label htmlFor="assignee">Assign To</Label>
                <Input
                  type="text"
                  id="assignee"
                  placeholder="Enter name of the person"
                />
              </FormGroup>
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }
}

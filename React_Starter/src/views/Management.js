import React, { Component } from "react";
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
} from "reactstrap";
import { css } from "glamor";

export default class ManagementView extends Component {
  componentDidMount() {
    if (!document.body.classList.contains("aside-menu-hidden")) {
      document.body.classList.add("aside-menu-hidden");
    }
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="4" sm="4" lg="4">
            <Row>
              <Col sm="12">
                <div className="social-box facebook">
                  <i className="fa fa-hourglass-1" />
                  <h4 {...css({ verticalAlign: "center", paddingTop: "20px" })}>
                    <strong>New</strong>
                  </h4>
                </div>
              </Col>
              <Col sm="8 offset-sm-2">
                <Card className="border-primary">
                  <CardHeader className="text-center">
                    Card outline primary
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Col>
              <Col sm="8 offset-sm-2">
                <Card className="border-primary">
                  <CardHeader className="text-center">
                    Card outline primary
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.das
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xs="4" sm="4" lg="4">
            <Row>
              <Col sm="12">
                <div className="social-box secondary">
                  <i className="fa fa-hourglass-2" />
                  <h4 {...css({ verticalAlign: "center", paddingTop: "20px" })}>
                    <strong>In Progress</strong>
                  </h4>
                </div>
              </Col>
              <Col sm="8 offset-sm-2">
                <Card className="border-secondary">
                  <CardHeader className="text-center">
                    Card outline primary
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Col>
              <Col sm="8 offset-sm-2">
                <Card className="border-secondary">
                  <CardHeader className="text-center">
                    Card outline primary
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Col>
              <Col sm="8 offset-sm-2">
                <Card className="border-secondary">
                  <CardHeader className="text-center">
                    Card outline primary
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.das
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xs="4" sm="4" lg="4">
            <Row>
              <Col sm="12">
                <div className="social-box vine">
                  <i className="fa fa-hourglass-3" />
                  <h4 {...css({ verticalAlign: "center", paddingTop: "20px" })}>
                    <strong>Finished</strong>
                  </h4>
                </div>
              </Col>
              <Col sm="8 offset-sm-2">
                <Card className="border-success">
                  <CardHeader className="text-center">
                    Card outline primary
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Col>
              <Col sm="8 offset-sm-2">
                <Card className="border-success">
                  <CardHeader className="text-center">
                    Card outline primary
                  </CardHeader>
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat.das
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

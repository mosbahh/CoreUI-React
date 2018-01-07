import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Label,
  Input,
  UncontrolledTooltip
} from 'reactstrap';
import classnames from 'classnames';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from 'react-dates';
import { css } from 'glamor';

class Aside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <aside className="aside-menu">
        <Nav tabs>
          <NavItem>
            <NavLink
              id="first_tab"
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              <i className="icon-settings" />
            </NavLink>
            <UncontrolledTooltip
              placement="bottom"
              target="first_tab"
              delay={{ hide: 0, show: 0 }}
            >
              Details
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <NavLink
              id="second_tab"
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              <i className="icon-speech" />
            </NavLink>
            <UncontrolledTooltip
              placement="bottom"
              target="second_tab"
              delay={{ hide: 0, show: 0 }}
            >
              Comments
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              <i className="icon-settings" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small>
                <b>
                  <i className="icon-calendar" /> Dates
                </b>
              </small>
            </div>
            <hr className="transparent mx-3 my-0" />
            <div className="callout callout-warning m-0 py-3">
              {/* <div className="avatar float-right">
                <img
                  src={'img/avatars/7.jpg'}
                  className="img-avatar"
                  alt="admin@bootstrapmaster.com"
                />
              </div> */}
              <div>
                <strong>Duration:</strong>
              </div>
              <small className="text-muted mr-3">
                <i className="fa fa-hourglass-start" />&nbsp; 3 Weeks
              </small>
              {/* <small className="text-muted">
                <i className="icon-location-pin" />&nbsp; Palo Alto, CA
              </small> */}
            </div>
            <hr className="transparent mx-3 my-0" />
            <div className="callout callout-danger m-0 py-3">
              <div>
                <strong>Start- and EndDates:</strong>
              </div>
              <DateRangePicker
                small
                showClearDates
                required={false}
                withPortal
                startDate={this.state.startDate || null}
                endDate={this.state.endDate || null}
                onDatesChange={({ startDate, endDate }) => {
                  this.setState({ startDate, endDate });
                  console.log('Dates:', startDate, endDate);
                }}
                firstDayOfWeek={1}
                isDayBlocked={day =>
                  day._d.getDay() == 6 || day._d.getDay() == 0
                }
                focusedInput={this.state.focusedInput || null}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
              />

              <br />
              <small className="text-muted">
                <i className="icon-home" />&nbsp; 45 Days
              </small>
            </div>
            <hr className="transparent mx-3 my-0" />
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small>
                <b>
                  {' '}
                  <i className="fa fa-tags" />Tags
                </b>
              </small>
            </div>
            <hr className="transparent mx-3 my-0" />
            <div className="callout callout-info m-0 py-3">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" class="badge badge-pill badge-secondary">
                    Tag 1
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" class="badge badge-pill badge-secondary">
                    Tag 2
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" class="badge badge-pill badge-secondary">
                    Tag 3
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" class="badge badge-pill badge-secondary">
                    Tag 4
                  </a>
                </li>
              </ul>
              <small className="text-muted mr-3">
                <Input
                  type="text"
                  className="form-control-success"
                  id="inputSuccess2i"
                  bsSize="sm"
                  placeholder="Type a Tag Name"
                />
              </small>
            </div>
            <hr className="mx-3 my-0" />
            <div className="callout callout-success m-0 py-3">
              <div>
                <strong>#10 Startups.Garden</strong> Meetup
              </div>
              <small className="text-muted mr-3">
                <i className="icon-calendar" />&nbsp; 1 - 3pm
              </small>
              <small className="text-muted">
                <i className="icon-location-pin" />&nbsp; Palo Alto, CA
              </small>
            </div>
            <hr className="mx-3 my-0" />
            <div className="callout callout-primary m-0 py-3">
              <div>
                <strong>Team meeting</strong>
              </div>
              <small className="text-muted mr-3">
                <i className="icon-calendar" />&nbsp; 4 - 6pm
              </small>
              <small className="text-muted">
                <i className="icon-home" />&nbsp; creativeLabs HQ
              </small>
              <div className="avatars-stack mt-2">
                <div className="avatar avatar-xs">
                  <img
                    src={'img/avatars/2.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div className="avatar avatar-xs">
                  <img
                    src={'img/avatars/3.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div className="avatar avatar-xs">
                  <img
                    src={'img/avatars/4.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div className="avatar avatar-xs">
                  <img
                    src={'img/avatars/5.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div className="avatar avatar-xs">
                  <img
                    src={'img/avatars/6.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div className="avatar avatar-xs">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div className="avatar avatar-xs">
                  <img
                    src={'img/avatars/8.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
              </div>
            </div>
            <hr className="mx-3 my-0" />
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={'img/avatars/7.jpg'}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Option 1</b>
                </small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input
                    type="checkbox"
                    className="switch-input"
                    defaultChecked
                  />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </Label>
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 2</b>
                </small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </Label>
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 3</b>
                </small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </Label>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 4</b>
                </small>
                <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
                  <Input
                    type="checkbox"
                    className="switch-input"
                    defaultChecked
                  />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </Label>
              </div>
            </div>

            <hr />
            <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small>
                <b>CPU Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>Memory Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 1 Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 2 Usage</b>
              </small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">25GB/256GB</small>
          </TabPane>
        </TabContent>
      </aside>
    );
  }
}

export default Aside;

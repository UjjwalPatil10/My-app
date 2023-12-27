import { Component } from "react";
import SimpleEvent from "./SimpleEvent";
import SyntheticEventObj from "./SyntheticEventObj";
import BGChange from "./BGChange";
import Toggle from "./Toggle";

class EventHandling extends Component {
  render() {
    return (
      <div>
        <h2> Event Handling</h2>
        <SimpleEvent />
        <SyntheticEventObj />
        <Toggle />
        <BGChange />
      </div>
    );
  }
}
export default EventHandling;

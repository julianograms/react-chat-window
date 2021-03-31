import React, { Component } from "react";
import { MessageList as MessageListElements } from "@julianograms/react-chat-elements";
import "@julianograms/react-chat-elements/dist/main.css";

class MessageList extends Component {
  componentDidUpdate(_prevProps, _prevState) {
    this.scrollList.scrollTop = this.scrollList.scrollHeight;
  }

  render() {
    return (
      <div
        className="sc-message-list"
        ref={(el) => {
          this.scrollList = el;
        }}
      >
        <MessageListElements
          lang="pt_BR"
          className="message-list"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={this.props.messages.map((message) => {
            return {
              position: message.author === "me" ? "right" : "left",
              type: "text",
              text: message.data.text,
              date: message.time,
            };
          })}
        />
      </div>
    );
  }
}

export default MessageList;

const Notification = (props) => {
  const { imgSrc, paraCls, content, conCls } = props;
  return (
    <div id={conCls} className="message-container">
      <img src={imgSrc} className="icon-img" />
      <p className="paracls">{content}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1 className="heading">Notification</h1>
    <Notification
      imgSrc="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      conCls="primary-background"
      content="Information Message"
    />
    <Notification
      imgSrc="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      conCls="success-background"
      content="Information Message"
    />
    <Notification
      imgSrc="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      conCls="warning-background"
      content="Information Message"
    />
    <Notification
      imgSrc="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      conCls="danger-background"
      content="Information Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

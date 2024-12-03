const Button = (props) => {
  const { cls, content } = props;
  return <button className={cls}>{content}</button>;
};

const element = (
  <div className="social-btn-bg">
    <h1 className="heading">Social Buttons</h1>

    <div className="inside_container">
      <Button cls="social-btn-like" content="Like" />
      <Button cls="social-btn-comment" content="Comment" />
      <Button cls="social-btn-share" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

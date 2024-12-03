const element = (
  <div className="divContiner">
    <h1 className="heading">Super Over League</h1>
    <div className="imgContiner">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        alt="csk"
      />
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        alt="rcb"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

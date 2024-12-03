const element = (
  <div className="mainContainer">
    <h1>Congratulations</h1>
    <div className="InnerContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="userDp"
      />
      <p className="username">Kiran V</p>
      <p className="para">
        Vishu have the great company at a great place,that become the number one
        company.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="product"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

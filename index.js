const element = (
  // Write your code here.
  <div class="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div class="card-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="head">Kiran V</h1>
      <p className="para">
        Vishnu Institute of Computer Education and Technology.
      </p>
      <p className="para">Bhimavaram</p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

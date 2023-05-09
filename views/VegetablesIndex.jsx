const React = require("react");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <div>
        <h1>Vegetables Index Page</h1>
        <ul>
          {vegetables.map((vegetbale, i) => {
            return (
              <li>
                The <a href={`/vegetables/${i}`}>{vegetbale.name}</a> is {vegetbale.color}{" "}
                <br></br>
                {vegetbale.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;

import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      homeLink: "Changed Link",
      status: 0
    };

    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange() {
    this.setState({
      homeLink: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>
              Hello {this.props.name} you are {this.state.age}
            </h1>
            <p>Status: {this.state.status}</p>
            <button
              className="btn btn-primary"
              onClick={() => this.onMakeOlder()}
            >
              Make me older!
            </button>
          </div>
        </div>
        <hr />
        <button className="btn btn-primary" onClick={this.props.greet}>
          Greet
        </button>
        <hr />
        <input
          type="text"
          value={this.state.homeLink}
          onChange={event => this.onHandleChange(event)}
        />
        <button onClick={() => this.onChangeLink} className="btn btn-primary">
          Change Header Link
        </button>
      </div>
    );
  }
}

//Used to decalare what type the prop is
// Home.propTypes = {
//     name: React.PropTypes.string,
//     age: React.PropTypes.number,
//      greet: React.PropTypes.func
//     };

/* <div>
<h4>Hobbies</h4>
<ul>
   /*loop through array with map()*/
//   {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
//</ul>
//</div>

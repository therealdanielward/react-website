import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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

  onChangeLink(newName) {
    this.setState({
      homeLink: newName
    });
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
            <h1 className="mdc-typography--headline1">
              Hello {this.props.name} you are {this.state.age}
            </h1>
            <p>Status: {this.state.status}</p>
            <Button
              variant="raised"
              color="primary"
              onClick={() => this.onMakeOlder()}
            >
              Make me older!
            </Button>
          </div>
        </div>
        <hr />
        <Button variant="raised" color="primary" onClick={this.props.greet}>
          Greet
        </Button>
        <hr />
        <TextField
          type="text"
          value={this.state.onChangeLink}
          onChange={event => this.onHandleChange(event)}
        />
        <Button
          onClick={event => this.onChangeLink(event.homeLink)}
          variant="raised"
          color="primary"
        >
          Change Header Link
        </Button>
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

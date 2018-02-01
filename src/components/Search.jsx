class Search extends React.Component { 
  constructor (props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.search(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="search-bar form-inline" onSubmit={this.handleSubmit}>
        <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button className="btn hidden-sm-down" value="Submit">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// onClick={() => {this.props.search('string')}}
window.Search = Search;

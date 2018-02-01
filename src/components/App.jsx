class App extends React.Component { 
  constructor(props) {
    super(props);
    
    this.state = {videos: window.exampleVideoData, currentVideo: window.exampleVideoData[0]};
    this.props.searchYouTube({}, (videos)=>{
      this.setState({videos: videos});
      this.setState({currentVideo: this.state.videos[0]});
    });
    
  }
  select(video) {
    (() => {
      this.setState({currentVideo: video});
    }) (); // instant invocation
  }
  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search><h5><em>search</em> view goes here</h5></Search>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}><h5><em>videoPlayer</em> view goes here</h5></VideoPlayer>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} select={this.select.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

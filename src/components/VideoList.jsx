class VideoList extends React.Component {
  constructor (props) {
    super(props)
    // this.props.callback = (title) => {console.log('title')}
  }
  render() {

    return (
      <div className="video-list"> 
        {console.log(this.props)}
        {this.props.videos.map(video => (<VideoListEntry video={video} key={video.id.videoId} select={this.props.select.bind(this)}/>))}
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

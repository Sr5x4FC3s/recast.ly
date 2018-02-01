// TODO: Render the `App` component to the DOM

window.videos = window.searchYouTube({}, (videos) => {
  ReactDOM.render(<App videos={videos}/>, document.getElementById('app'));
});


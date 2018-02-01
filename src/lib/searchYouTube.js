var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    data: {
      q: '',
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      maxResults: 5
    }, 
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: (data) => {
      console.log('success', data);
      callback(data.items);
    },
    error: function(data) {
      console.log('failed to get message: ', data);
    }
  });
};

window.searchYouTube = searchYouTube;

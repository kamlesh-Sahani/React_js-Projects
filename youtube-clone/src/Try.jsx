import React from 'react'

const Try = () => {
  // Load the Google API JavaScript library
gapi.load('client', init);

function init() {
  gapi.client.init({
    apiKey: 'AIzaSyBuF5fiKCYmLjA6NVbz4O4La8kCWgLAq6A',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
  }).then(function() {
    // API is ready for use
    fetchChannelData();
  });
}

function fetchChannelData() {
  gapi.client.youtube.channels.list({
    part: 'snippet',
    id: 'YOUR_CHANNEL_ID'
  }).then(function(response) {
    var channel = response.result.items[0];
    console.log('Channel Title: ' + channel.snippet.title);
    console.log('Description: ' + channel.snippet.description);
  }, function(error) {
    console.error('Error fetching channel data: ' + error);
  });
}

  return (
    <div>Try</div>
  )
}

export default Try
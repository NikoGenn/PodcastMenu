var timeElapsedElement = document.querySelector('#timeelapsed');
var timeRemainingElement = document.querySelector('#timeremaining');
var audioElement = document.querySelector('audio');
var titleElement = document.querySelector('div.titlestack div.title');
var shareContainer = document.querySelector('div.centertext.lighttext.margintop1');
var shareLinks = shareContainer.querySelectorAll('a');
var shareLinkElement = shareLinks[1];
var shareLinkWithTimestampElement = shareLinks[2];

var playbackInfo = {
	"title": titleElement.innerText,
	"time_elapsed": timeElapsedElement.innerText,
	"time_remaining": timeRemainingElement.innerText,
	"share_link": shareLinkElement.getAttribute('href'),
	"share_link_timestamp": shareLinkWithTimestampElement.getAttribute('href'),
	"audio_source": audioElement.currentSrc
};

JSON.stringify(playbackInfo);
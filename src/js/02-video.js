import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

console.log(player);

// const onPlay = {
//     player.getCurrentTime().then(function(seconds) {
//         // seconds = the current playback position
//         console.log(seconds)
//     }).catch(function(error) {
//         // an error occurred
//     });
// }; 

const onPlay = function(data) {
    // console.log(player.getCurrentTime().then(function(seconds) {
    //     // seconds = the current playback position
    // }).catch(function(error) {
    //     // an error occurred
    // })
    // )
    localStorage.setItem(CURRENT_TIME, data.seconds)
    console.log(localStorage.getItem(CURRENT_TIME));
};




player.on('timeupdate', onPlay);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});





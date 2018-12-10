// Hide the top bar and menu
document.getElementById('top').style.display = 'none';

// Hide the chat room and player names
document.getElementsByClassName('board_left')[0].style.display = 'none';

// Hide the Cross table with previous match stat with same user
document.getElementsByClassName('crosstable')[0].style.display = 'none';

// Hide the friend's Online box
document.getElementById('friend_box').style.display = 'none';

// Zoom in to 110%
document.body.style.zoom = "110%";

//Make me the king
if (document.getElementsByClassName('orientation-black manipulable')[0]) {
  document.getElementsByClassName('black king')[0].style.backgroundImage = "url('chrome-extension://cpllnmoalbiegmjbfkeoeneaglldeipb/images/meTheKing.png')";
} else if (document.getElementsByClassName('orientation-white manipulable')[0]){
  document.getElementsByClassName('white king')[0].style.backgroundImage = "url('chrome-extension://cpllnmoalbiegmjbfkeoeneaglldeipb/images/meTheKing.png')";
}

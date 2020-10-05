const gameid = +location.pathname.substring(1) || 1818
fetch('https://cors-anywhere.herokuapp.com/https://altgen.club/send.php').then(res => res.text()).then(token => {
  var time = Math.round(+new Date())
  location.replace("roblox-player:1+launchmode:play+gameinfo:" + token + "+launchtime:" + time + "+placelauncherurl:https://assetgame.roblox.com/game/PlaceLauncher.ashx?request=RequestGame&browserTrackerId=60604189768&placeId=" + gameid + "&isPlayTogetherGame=true+browsertrackerid:60604189768+robloxLocale:en_us+gameLocale:en_us")
})

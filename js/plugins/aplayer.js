<<<<<<< HEAD
const audioList = [];
const isFixed = theme.plugins.aplayer.type == "fixed";
const isMini = theme.plugins.aplayer.type == "mini";

for (const audio of theme.plugins.aplayer.audios) {
  const a = {
    name: audio.name,
    artist: audio.artist,
    url: audio.url,
    cover: audio.cover,
    lrc: audio.lrc,
    theme: audio.theme,
  };
  audioList.push(a);
}

if (isMini) {
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    mini: true,
    audio: audioList,
  });
} else if (isFixed) {
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    lrcType: 3,
    audio: audioList,
  });
  document.querySelector(".aplayer-icon-lrc").click();
}
=======
(function() {
  const audioList = [];
  const isFixed = theme.plugins.aplayer.type === "fixed";
  const isMini = theme.plugins.aplayer.type === "mini";

  for (const audio of theme.plugins.aplayer.audios) {
    const audioObj = {
      name: audio.name,
      artist: audio.artist,
      url: audio.url,
      cover: audio.cover,
      lrc: audio.lrc,
      theme: audio.theme,
    };
    audioList.push(audioObj);
  }

  if (isMini) {
    new APlayer({
      container: document.getElementById("aplayer"),
      mini: true,
      audio: audioList,
    });
  } else if (isFixed) {
    const player = new APlayer({
      container: document.getElementById("aplayer"),
      fixed: true,
      lrcType: 3,
      audio: audioList,
    });
    document.querySelector(".aplayer-icon-lrc").click();
  }
})();
>>>>>>> 54b89c90b5e37ed2788d4f4801fdecc795f77e08

var text;
var uid;

var OsuBBcodeUid = '1';

var bitfield = "////+A==";

function extraEscapes(text) {
    var result = text;
    var before_str = ['[', ']', '.', ':', "\n"];
    var after_str = ['&#91;', '&#93;', '&#46;', '&#58;', '&#10;'];
    for (var i in before_str){
        var before = before_str[i];
        var after = after_str[i];
        result = result.replace(before, after);
    }
    return result;
}

function __construct(text = '') {
    text = text;
    uid = OsuBBcodeUid;
}

function parseAudio(text) {
    var audio = [];
    audio = text.match("#\[audio\](?<url>.*?)\[/audio\]#");

    for (a in audio) {
        var a = audio[a];
        var escapedUrl = extraEscapes(a['url']);
        var audioTag = "[audio:" + uid + "]" + escapedUrl + "[/audio" + uid + "]";
        text = text.replace(a[0], audioTag);
    }
    return text;
}
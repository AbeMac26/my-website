import $ from "jquery";
// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: http://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
$(function ($) {
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = '../../assets/images/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "No more Questions - Eazy-E",
                "length":"03:55",
                "file": "noMore"
            }, {
                "track": 2,
                "name": "On The Radio - Eazy-E",
                "length": "08:30",
                "file": "523700242782870005"
            }/*, {
                "track": 3,
                "name": "U Dont Hear Me Tho - Rodney-O and Joe Cooley",
                "length": "03:39",
                "file": "-2646588980717243904"
            }, {
                "track": 4,
                "name": "Very Special - Big Daddy Kane w/ Spinderella",
                "length": "08:32",
                "file": "-6753450319694756202"
            }, {
                "track": 5,
                "name": "All The King's Men - Broadwing Studio (First Mix)",
                "length": "05:05",
                "file": "BSFM_ATKM"
            }, {
                "track": 6,
                "name": "All This Is - Alternate Cuts",
                "length": "02:49",
                "file": "AC_ATI"
            }, {
                "track": 7,
                "name": "All The King's Men (Take 1) - Alternate Cuts",
                "length": "05:44",
                "file": "AC_ATKMTake_1"
            }, {
                "track": 8,
                "name": "All The King's Men (Take 2) - Alternate Cuts",
                "length": "05:27",
                "file": "AC_ATKMTake_2"
            }, {
                "track": 9,
                "name": "Magus - Alternate Cuts",
                "length": "05:46",
                "file": "AC_M"
            }, {
                "track": 10,
                "name": "The State Of Wearing Address (fucked up) - Alternate Cuts",
                "length": "05:25",
                "file": "AC_TSOWAfucked_up"
            }, {
                "track": 11,
                "name": "Magus - Popeye's (New Years '04 - '05)",
                "length": "05:53",
                "file": "PNY04-05_M"
            }, {
                "track": 12,
                "name": "On The Waterfront - Popeye's (New Years '04 - '05)",
                "length": "04:41",
                "file": "PNY04-05_OTW"
            }, {
                "track": 13,
                "name": "Trance - Popeye's (New Years '04 - '05)",
                "length": "13:16",
                "file": "PNY04-05_T"
            }, {
                "track": 14,
                "name": "The Forsaken - Popeye's (New Years '04 - '05)",
                "length": "08:13",
                "file": "PNY04-05_TF"
            }, {
                "track": 15,
                "name": "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
                "length": "07:02",
                "file": "PNY04-05_TSOWA"
            }, {
                "track": 16,
                "name": "Magus - Popeye's (Valentine's Day '05)",
                "length": "05:44",
                "file": "PVD_M"
            }, {
                "track": 17,
                "name": "Trance - Popeye's (Valentine's Day '05)",
                "length": "10:45",
                "file": "PVD_T"
            }, {
                "track": 18,
                "name": "The State Of Wearing Address - Popeye's (Valentine's Day '05)",
                "length": "05:36",
                "file": "PVD_TSOWA"
            }, {
                "track": 19,
                "name": "All This Is - Smith St. Basement (01/08/04)",
                "length": "02:49",
                "file": "SSB01_08_04_ATI"
            }, {
                "track": 20,
                "name": "Magus - Smith St. Basement (01/08/04)",
                "length": "05:46",
                "file": "SSB01_08_04_M"
            }, {
                "track": 21,
                "name": "Beneath The Painted Eye - Smith St. Basement (06/06/03)",
                "length": "13:07",
                "file": "SSB06_06_03_BTPE"
            }, {
                "track": 22,
                "name": "Innocence - Smith St. Basement (06/06/03)",
                "length": "05:16",
                "file": "SSB06_06_03_I"
            }, {
                "track": 23,
                "name": "Magus - Smith St. Basement (06/06/03)",
                "length": "05:47",
                "file": "SSB06_06_03_M"
            }, {
                "track": 24,
                "name": "Madness Explored - Smith St. Basement (06/06/03)",
                "length": "04:52",
                "file": "SSB06_06_03_ME"
            }, {
                "track": 25,
                "name": "The Forsaken - Smith St. Basement (06/06/03)",
                "length": "08:43",
                "file": "SSB06_06_03_TF"
            }, {
                "track": 26,
                "name": "All This Is - Smith St. Basement (12/28/03)",
                "length": "03:00",
                "file": "SSB12_28_03_ATI"
            }, {
                "track": 27,
                "name": "Magus - Smith St. Basement (12/28/03)",
                "length": "06:09",
                "file": "SSB12_28_03_M"
            }, {
                "track": 28,
                "name": "Madness Explored - Smith St. Basement (12/28/03)",
                "length": "05:06",
                "file": "SSB12_28_03_ME"
            }, {
                "track": 29,
                "name": "Trance - Smith St. Basement (12/28/03)",
                "length": "12:33",
                "file": "SSB12_28_03_T"
            }, {
                "track": 30,
                "name": "The Forsaken - Smith St. Basement (12/28/03)",
                "length": "08:57",
                "file": "SSB12_28_03_TF"
            }, {
                "track": 31,
                "name": "All This Is (Take 1) - Smith St. Basement (Nov. '03)",
                "length": "04:55",
                "file": "SSB___11_03_ATITake_1"
            }, {
                "track": 32,
                "name": "All This Is (Take 2) - Smith St. Basement (Nov. '03)",
                "length": "05:45",
                "file": "SSB___11_03_ATITake_2"
            }, {
                "track": 33,
                "name": "Beneath The Painted Eye (Take 1) - Smith St. Basement (Nov. '03)",
                "length": "14:05",
                "file": "SSB___11_03_BTPETake_1"
            }, {
                "track": 34,
                "name": "Beneath The Painted Eye (Take 2) - Smith St. Basement (Nov. '03)",
                "length": "13:26",
                "file": "SSB___11_03_BTPETake_2"
            }, {
                "track": 35,
                "name": "The Forsaken (Take 1) - Smith St. Basement (Nov. '03)",
                "length": "08:37",
                "file": "SSB___11_03_TFTake_1"
            }, {
                "track": 36,
                "name": "The Forsaken (Take 2) - Smith St. Basement (Nov. '03)",
                "length": "08:36",
                "file": "SSB___11_03_TFTake_2"
            }*/],
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).off('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).off('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on("click",function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on("click",function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on("click",function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});

/*function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    displayContents(contents);
  };
  reader.readAsText(file);
}

function displayContents(contents) {
  var element = document.getElementById('file-content');
  element.innerHTML = contents;
}


 function getFiles(dir, fileList){
    fileList = fileList || [];
 
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, fileList);
        } 
        else {
            fileList.push(name);
        }
    }
    return fileList;
}

//document.getElementById('file-input').addEventListener('change', readSingleFile, false);*/

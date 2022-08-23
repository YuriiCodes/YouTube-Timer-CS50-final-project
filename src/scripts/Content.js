const timeToIso = (timeString) => {
    const HOURSINDAY = 24;
    // 1 hour is 60 minutes, 1 minute is 60 seconds, 1 seconds is 60 milliseconds.
    const TIMECONST = 60;
    let dateArr = timeString.split(':');
    switch (dateArr.length) {
        // Includes minutes -> seconds, or in case of shorts - seconds and milliseconds
        case 2:
            // Summary time in seconds in case of video, or milliseconds in case of shorts
            return (parseInt(dateArr[0]) * TIMECONST + parseInt(dateArr[1]))

        // Includes hours -> minutes -> seconds
        case 3:
            return ((parseInt(dateArr[0]) * TIMECONST * TIMECONST) + (parseInt(dateArr[1]) * TIMECONST) + parseInt(dateArr[2]))

        // Includes days -> hours -> minutes -> seconds
        case 4:
            return ((parseInt(dateArr[0]) * HOURSINDAY * TIMECONST * TIMECONST) + (parseInt(dateArr[1]) * TIMECONST * TIMECONST) + parseInt(dateArr[2]) * TIMECONST + parseInt(dateArr[3]))

        default:
            break;
    }
};

// Transforms time in seconds to HH-MM-SS string
const secondsToIso = (seconds, minutesOrHours = 'hours') => {
    let date = new Date(null);
    date.setSeconds(seconds);
    if (minutesOrHours === 'minutes') {
        return date.toISOString().slice(14, 19);
    }
    if (minutesOrHours === 'hours') {
        return date.toISOString().slice(11, 19);
    }
}


// Main function
const init = function () {
    try {
        // let timeArea = document.querySelector('.ytp-time-display .ytp-time-current').parentElement
        let rightControls = document.querySelector('.ytp-right-controls')
        let video = document.querySelector('.video-stream.html5-main-video');

        // We declare a function inside init, because it will be used only here
        const getRemainingTime = (videoSummaryTime, alreadyWatchedTime) => {
            // Here we pick prefered output format based on video duration. If the duration is > 1 hour, output format would be HH:MM:SS, otherwise just MM:SS
            let minutesOrHours;
            if (videoSummaryTime.split(':')[0] == '00') {
                minutesOrHours = 'minutes'
            } else {
                minutesOrHours = 'hours'
            }
            return secondsToIso(timeToIso(videoSummaryTime) - timeToIso(alreadyWatchedTime), minutesOrHours)
        }

        let timeSpan = document.createElement('span');
        timeSpan.id = 'youtubeTimerDivider'
        timeSpan.classList.add('ytp-button')
        timeSpan.style.paddingRight = '1em'
        // timeSpan.style.fontSize = "11px";
        rightControls.prepend(timeSpan);

        video.ontimeupdate = function (event) {
            // Get already watched time
            let alreadyWatchedTime = secondsToIso(document.querySelector('.video-stream.html5-main-video').currentTime)

            // Get all video time
            let videoSummaryTime = secondsToIso(document.querySelector('.video-stream.html5-main-video').duration)
            timeSpan.textContent = getRemainingTime(videoSummaryTime, alreadyWatchedTime)
        };
    }
        // We don't wanna log errors in console, because it will look like a spam, therefore we just pass empty catch statement
    catch (err) {
    }
};
if (document.querySelector('#youtubeTimerDivider') == null) {
    init();
}



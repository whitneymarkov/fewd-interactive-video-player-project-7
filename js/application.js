document.addEventListener('DOMContentLoaded', () => {

    // ======================================
    //  Variables
    // ======================================

    //variable to hold a reference to the video player
    const player = document.getElementById('player');
    //variable to hold a reference to the caption text in all of the span elements
    const caption = document.querySelectorAll('.captions span');
    //variable to hold a reference to the parent node of the captions
    const captionsContainer = document.querySelector('.captions');

    // ======================================
    //  Caption highlighter
    // ======================================

    //timeupdate event handler to be fired when the time indicated by the currentTime attribute has been updated
    player.addEventListener('timeupdate', () => {
        //loop through each caption span
        for (let i = 0; i < caption.length; i += 1) {
            //get current time of the player
            let time = player.getCurrentTime();
            //reference start time of each caption span
            let start = caption[i].getAttribute('data-start');
            //reference end time of each caption span
            let end = caption[i].getAttribute('data-end');
            //set class name of caption to 'highlight' by comparing start and end times of the captions with the current time. Remove any class names if not
            if (time >= start && time <= end) {
                caption[i].className = 'highlight';
            } else {
                caption[i].className = '';
            }
        }
    });

    // ======================================
    //  Click jump
    // ======================================

    //click event handler on the parentnode of the captions to change the currentTime according to the clicked caption time
    captionsContainer.addEventListener('click', (e) => {
        //reference the start time value of the clicked caption
        let  clickedTimeValue = e.target.getAttribute('data-start');
        //update the currentTime with the clicked caption start value
        if (clickedTimeValue) {
            player.setCurrentTime(clickedTimeValue);
            //start player at clickedValue time if hasn't been started already
            player.play();
        }
    });

});

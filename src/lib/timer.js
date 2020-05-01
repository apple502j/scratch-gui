class Timer {
    constructor (callback, duration) {
        this.callback = callback;
        this.duration = duration;
        this.timeoutID = null;
        this.start = 0;
        this.resumeTimer();
    }

    resumeTimer () {
        this.start = Date.now();
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(this.callback, this.duration);
    }

    pauseTimer () {
        if (this.timeoutID) clearTimeout(this.timeoutID);
        this.duration -= Date.now() - this.start;
    }
}

export default Timer;

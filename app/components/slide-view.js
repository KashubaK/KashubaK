import Component from '@ember/component';

export default Component.extend({
    classNames: ["slide-view flex-100"],

    slide: {},
    slideIndex: 0,

    slideClass: "animate", 

    loop: {},

    timeToLoopFromPause: 0,
    lastTick: 0,

    percentToNextSlide: 0,
    timeToNextSlide: 4900,

    playing: true,
    toggledPause: false,

    willDestroyElement() {
        this.pauseSlidesLoop();
    },

    actions: {
        toggleSlidePlayback() {
            if (this.get('playing')) {
                this.set('toggledPause', true);
                this.pauseSlidesLoop();
            } else {
                this.set('toggledPause', false);
                this.resumeSlidesLoop();
            }
        },

        nextSlide() {
            this.pauseSlidesLoop();            
            this.set('slideIndex', this.get('slideIndex') + 1 === this.get('slides.length') ? 0 : this.get('slideIndex') + 1);
            this.resumeSlidesLoop();
        },
    
        prevSlide() {
            this.pauseSlidesLoop();
            this.set('slideIndex', this.get('slideIndex') - 1 < 0 ? this.get('slides.length') - 1 : this.get('slideIndex') - 1);
            this.resumeSlidesLoop();
        }
    },

    pauseSlidesLoop() {
        clearInterval(this.get('loop'));
        clearInterval(this.get('nextLoopTickInterval'));

        this.set('playing', false);

        this.set('timeToLoopFromPause', Date.now() - this.get('lastTick')); // should always be less than 5000
    },

    resumeSlidesLoop() {
        this.set('playing', true);

        this.loopSlides();
        this.trackNextLoopTick();

        this.set('loop', setInterval(() => {
            this.detectDesync();
            this.set('slideIndex', this.get('slideIndex') + 1 === this.get('slides.length') ? 0 : this.get('slideIndex') + 1);
            this.loopSlides();
        }, 5000));
    },

    loopSlides() {
        this.set('lastTick', Date.now());
        this.set('slideClass', "");

        setTimeout(() => {
            this.set('slideClass', "animate");
    
            this.set("slide", this.get('slides').objectAt(this.get("slideIndex")));
        }, 17);
    },

    detectDesync() {
        if (this.get('timeToNextSlide') !== 4900) { // Discrepencies occur when the tab is inactive,
            this.set('timeToNextSlide', 4900); // So let's catch them and fix.

            const newPercent = Math.abs(100 - this.get('timeToNextSlide') / 5000 * 100);
    
            this.set('percentToNextSlide', newPercent);
        }
    },

    trackNextLoopTick() {
        this.set('timeToNextSlide', 4900);
        this.set('percentToNextSlide', 0);

        this.set('nextLoopTickInterval',
            setInterval(() => {
                var timeToNextSlide = this.get('timeToNextSlide');
        
                if (timeToNextSlide === 0) {
                    timeToNextSlide = 4900;
                } else {
                    timeToNextSlide -= 100;
                }

                this.set('timeToNextSlide', timeToNextSlide);
        
                const newPercent = Math.abs(100 - timeToNextSlide / 5000 * 100);
        
                this.set('percentToNextSlide', newPercent);
            }, 100)
        )
    },
    init() {
        this._super(...arguments);

        this.loopSlides();
        this.resumeSlidesLoop();

        // TODO: This will keep adding event listeners, decreasing performance in long sessions
        $('.projects').on('resize scroll', () => {
            if (!this.$().isInViewport()) {
                if (this.get('playing') === true) {
                    this.pauseSlidesLoop();
                }
            } else if (this.get('toggledPause') === false && this.get('playing') === false) {
                this.resumeSlidesLoop();
            }
        });
    }
});

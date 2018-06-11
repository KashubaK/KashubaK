import Route from '@ember/routing/route';

export default Route.extend({
    livelySlides: [
        {
            "title": "Simplified Back-end Communication",
            "body": "Lively has a simple goal: to mitigate the sophistication of front to back-end communications, allowing more time for innovation and getting stuff done.",
            "image": "https://gravityjack.com/wp-content/uploads/2016/08/mobile-app-communication.jpg"
        },
        {
            "title": "Pre-built Architecture",
            "body": "Lively takes care of the tedious back-end architecture, providing a simple interface for useful APIs for real-time event handling, and Web API building.",
            "image": "https://cdn-images-1.medium.com/max/1250/1*GrhjqPL9B8kK9837TRFv8Q.png"
        },
        {
            "title": "Subscribable Documents",
            "body": "Using Lively's simple one liner to subscribe to events that take place on a set of data, one can quickly handle reflection of data updating without the need for recurring API calls, or worst-case: refreshing.",
            "image": "http://techzulu.com/wp-content/uploads/2015/08/big-data.jpg"
        }
    ],

    model() {
        return {
            livelySlides: this.get('livelySlides')
        }
    }
});

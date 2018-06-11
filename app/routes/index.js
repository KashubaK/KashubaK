import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            {
                "title": '<img class="logo" src="/logo_transparent.png">',
                "body": "Utilizing the latest tools for web development, I take pride in my ability to produce quality solutions on your schedule. Whether it's a script to automate functionality, or a full-blown app - I can spearhead any project, with the intent to over-deliver to ensure client satisfaction.",
                "image": "https://www.elegantthemes.com/blog/wp-content/uploads/2018/01/web-design-trends-2018.jpg"
            },
            {
                "title": "Ember: Your Project's Savior",
                "body": "Ember.js is an MVC front-end framework, packed full of features. A command line interface to automate boilerplate code generation, saving time and money. Built-in functionality to handle in-app routing, easy component-to-component interaction, allowing for a swift and powerful development process.",
                "image": "/ember.jpg"
            }
        ]
    }
});

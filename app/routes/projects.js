import Route from '@ember/routing/route';

export default Route.extend({
    sitStaySlides: [
        {
            "title": "User Account System",
            "body": "Comprehensive registration forms to collect all the data SitStay needs. Local authentication and Bearer token strategies are quick and easy to set up, ensuring a quick login process and session reauthentication.",
            "image": "/projects/sitstay/login.png"
        },
        {
            "title": "Elegantly Styled Profiles",
            "body": "User data presented in a pleasing and productive manner. Pet Owners are able to assess a Vet Nurse's abilities effectively, without sacrificing design.",
            "image": "/projects/sitstay/profile.png"
        },
        {
            "title": "Matching Nurses to Owners",
            "body": "Using a point-based matching algorithm, we can automatically assess suitability of a Vet Nurse based on the needs of a Pet Owner.",
            "image": "/projects/sitstay/vnmap.png"
        }
    ],

    blufishSlides: [
        {
            "title": "Profile Editing",
            "body": "Before, the app had a dedicated full page route that required you to stop what you were doing in order to edit your user data. Replaced by a friendly modal built by myself, you can now do that from anywhere in the app.",
            "image": "/projects/blufish/profile.png"
        },
        {
            "title": "Program Layout",
            "body": "Everything you see in this screenshot (minus the first column of each session) was designed and built by myself.",
            "image": "/projects/blufish/sessions.png"
        },
        {
            "title": "Sponsor Design",
            "body": "Sponsors are very important to the organization - this required a robust, tasteful layout to effectively display a sponsor.",
            "image": "/projects/blufish/sponsor.png"
        },
        {
            "title": "Rich Messaging",
            "body": "One of my major contributions to this project was a Rich Messaging System. With the ability to add users or a group of users, and send email notifications - I'm proud of this powerful module.",
            "image": "/projects/blufish/messaging.png"
        }
    ],

    agilestimateSlides: [
        {
            "title": "Before my Work",
            "body": "Agilestimate was a fork of another app that didn't satisfy my client's needs. The design was clunky, not the most intuitive, and certainly didn't meet my design standards.",
            "image": "/projects/agilestimate/before.png"
        },
        {
            "title": "Redesigned for a Modern Experience",
            "body": "My client wanted to offer a modern, intuitive experience, so that's what I delivered. Powered by Materialize, an ease-to-use CSS framework, the app was re-imagined to serve a wider audience, without sacrificing features.",
            "image": "/projects/agilestimate/app.png"
        }
    ],


    model() {
        return {
            sitStaySlides: this.get('sitStaySlides'),
            agilestimateSlides: this.get('agilestimateSlides'),
            blufishSlides: this.get('blufishSlides'),
        }
    }

});

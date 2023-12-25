const {Subscription,subscriptionType} = require('./Subscription');

class Team {
    constructor(teamUsername,name,traiding_types,traiding_time_frames,education,languageOfEducationalContent,subscriptionType,pricing) {
        this.id = id_creator();
        this.teamUsername = teamUsername;
        this.name = name;
        this.traiding_types = traiding_types;
        this.traiding_time_frames = traiding_time_frames;
        this.education = education;
        this.profit_per_month = 0;
        this.number_of_traiding_teammates = 1;
        this.number_of_members = 0;
        this.languageOfEducationalContent = languageOfEducationalContent;
        this.verify_state = false;
        this.construction_time = Date.now;
        this.subscription = new Subscription(subscriptionType,pricing);
    }
}

function teamIdCreator() {

    return 'id'
}
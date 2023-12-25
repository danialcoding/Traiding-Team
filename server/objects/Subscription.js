class Subscription {
    
    constructor(subscriptionType,pricing) {
        this.type = subscriptionType;
        this.pricing;
        if(subscriptionType == adminPayment) {
            pricing = new Map([
                [100,100],
                [1000,700],
                [5000,2600],
                [10000,4700]
              ]);
        }
        else {
            pricing = new Map([
                [1,pricing[0]],
                [3,pricing[1]],
                [6,pricing[2]],
                [12,pricing[3]]
              ]);
        }
    }
}

const subscriptionType = {
    adminPayment: 'admin payment',
    membersPayment: 'members payment'
}

module.exports = {
    Subscription,
    subscriptionType,
}
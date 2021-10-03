const events = {};

module.exports = {
    // Publish, emit, trigger
    publish(eventName, param) {
        if (events[eventName]) {
            events[eventName].forEach(callback => {
                callback(param);
            });
        }
    },
    
    // Subscribe on 
    subscribe(eventName, callback) {
        events[eventName] = events[eventName] || [];

        // if (!events[eventName]) {
        //     events[eventName] = [];
        // }

        events[eventName].push(callback);
    },

    // off
    unsubscribe(eventName, callback) {

    } 
};
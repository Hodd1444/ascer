const fetch = require('node-fetch');

/**
 * This function gets user data and if provided with a custom gender
 * 
 * @param {gender} options The options to the function
 * @returns {Object} The randomly generated user object
 * 
 */
async function getRandomUser(options) {
    const dataFetched = await fetchData();
    const data = dataFetched.results[0];


    if(!options) {
        return data;
    } else if(options.gender){
        switch(options.gender) {
            case 'male':
                if(data.gender === 'male') {
                    return data;
                } else {
                    var newDatafetched = dataFetched;
                    while (data.gender != 'male' && newDatafetched.results[0].gender != 'male') {
                        newDatafetched = await fetchData();
                    }
                    var newData = newDatafetched.results[0];
                    return newData;
                }
            case 'female':
                if(data.gender === 'female') {
                    return data;
                } else {
                    var newDatafetched = dataFetched;
                    while (data.gender != 'female' && newDatafetched.results[0].gender != 'female') {
                        newDatafetched = await fetchData();
                    }
                    var newData = newDatafetched.results[0];
                    return newData;
                }
        }
    }
}

class gender {
    /**
     * @param {Object} parsed User Data
     */
    constructor(parsed) {
        /**
         * @type {string} Gender
         */
        if(parsed.gender) this.gender = parsed.gender;
    }
}

async function fetchData() {
    const fetch = require('node-fetch');
    try {
        return (await fetch('https://randomuser.me/api/').then(response => response.json()));;
    } catch(err) {
        return undefined;
    }
};

module.exports.getRandomUser = getRandomUser;
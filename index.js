const axios = require('axios');

function Owlbot(token) {
    return {
        client: axios.create({
            baseURL: 'https://owlbot.info',
            timeout: 5000,
            headers: {'Authorization': 'Token '+token}
        }),
        data: null,
        error: null,
        define: async function(word) {
            var self = this;
            await this.client.get('/api/v3/dictionary/'+word).then(function (response) {
                self.data = response.data;
            }).catch(function(error){
                self.error = error;
            });
            return {data: self.data, error: self.error}
        }
    }
}

module.exports = Owlbot;
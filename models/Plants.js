const plantsData = require("../data/plants")


class Plants {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.genus = data.genus
    }

    static async getAll() {
        try{
            const plants = plantsData.map(data => new Plants(data))
            return plants

        }catch(err){
            throw new err(`error retrivieng plants`)

        }
    }
}

module.exports = Plants
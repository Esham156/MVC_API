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
    static async findById(id){
        try {
            const plant = plantsData.find(plant => plant.id === id)
            return new Plants(plant)
        } catch (error) {
            throw new Error("plant not found")
        }
    }
    static async create(data) {
        try {
          let nextId
          plantsData.length
            ? nextId = plantsData.reduce((plant1, plant2) => plant1.id > plant2.id ? plant1 : plant2).id + 1  
            : nextId = 1
    
     
    
          const newPlant = new Plants({ id: nextId, name: data.name, genus: data.genus })
          plantsData.push(newPlant)
          return newPlant
        } catch (error) {
          throw new Error(error)
        }
      }
}

module.exports = Plants
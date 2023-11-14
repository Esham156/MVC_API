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
    async update(data) {
        try {
          const plantData = plantsData.find(plant => plant.id === this.id)
    
          if (!plantData) {
            throw new Error('plant not found')
          }
    
          if (!data.name || !data.genus) {
            throw new Error('name and/or genus missing')
          }
    
          plantData.name = data.name
          plantData.genus = data.genus
          return new Plants(plantData)
        } catch (error) {
          throw new Error(err.message)
        }
    }
    async destroy(){
        const plant = plantsData.find(plant => plant.id === this.id)
        if (plant){
            const plantIdx = plantsData.indexOf(plant)
            plantsData.splice(plantIdx,1)
        }else{
            throw new Error("plant not found")
        }
    }
}

module.exports = Plants
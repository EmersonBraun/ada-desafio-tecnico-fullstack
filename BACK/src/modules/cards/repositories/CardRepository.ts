import MongoDBRepository from '../../../sharred/adapters/mongodb-repository-adapter'
import { CardModel } from '../model/Card'

export class CardRepository {
    private repository: any

    constructor() {
        this.repository = new MongoDBRepository(CardModel)
    }

    async list(data = {}): Promise<any> {
        return this.repository.find(data)
    }

    async create(data: any): Promise<any> {
        return this.repository.insertOne(data)
    }

    async findById(id: string): Promise<any> {
        return this.repository.findById(id)
    }

    async update(id: string, data: any): Promise<any> {
        return this.repository.findOneAndUpdate({ _id: id }, data)
    }

    async delete(id: string): Promise<any> {
        return this.repository.findOneAndDelete({ _id: id })
    }
}

import { Model } from 'mongoose'
import { MongoHelper } from '../db/mongoDb'

export default class MongoDBRepository {
    constructor(private readonly model: Model<any>) {
        this.model = model
    }

    // FIND
    async find(query: any) {
        return (await this.model.find(query).exec()).map(MongoHelper.mapper)
    }

    async findOne(query: any) {
        try {
            const document = await this.model.findOne(query).exec()
            return MongoHelper.mapper(document)
        } catch (error) {
            return null
        }
    }

    async findById(query: any) {
        try {
            return MongoHelper.mapper(await this.model.findById(query).exec())
        } catch (error) {
            return null
        }
    }

    // INSERT
    async insertOne(data: any) {
        return MongoHelper.mapper(await this.model.create(data))
    }

    async insertMany(data: any) {
        return this.model.insertMany(data)
    }

    // UPDATE
    async findAndModify(id: string, data: any) {
        return this.model.findByIdAndUpdate(id, data)
    }

    async findOneAndReplace(query: any, data: any) {
        return this.model.findOneAndReplace(query, data)
    }

    async findOneAndUpdate(query: any, data: any) {
        return MongoHelper.mapper(
            await this.model.findOneAndUpdate(query, data, { new: true }).exec()
        )
    }

    async updateMany(query: any, data: any) {
        return this.model.updateMany(query, data)
    }

    // DELETE
    async deleteOne(query: any) {
        return this.model.deleteOne(query)
    }

    async deleteMany(query: any) {
        return this.model.deleteMany(query)
    }

    async findOneAndDelete(query: any) {
        return this.model.findOneAndDelete(query).exec()
    }

    // AGGREGATE
    async aggregateOption(option: any) {
        return await this.model.aggregate(option)
    }

    // DISTINCT
    async distinct(field: string) {
        return await this.model.distinct(field)
    }
}

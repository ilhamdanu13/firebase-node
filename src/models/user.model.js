const db = require('../config/db')
const docRef = db.collection('users')
const model = {}
model.all = async () => {
    try {
        const result = []
        const data = await docRef.get()
        data.forEach((el) => {
            result.push({id: el.id, ...el.data()})
        })
        return result
    } catch (error) {
        return error
    }
}

model.detail = async (params) => {
    try {
        const result = []
        const data = await docRef.doc(params).get()
        const finalResult =  result.push(data.data())
        return finalResult
       
    } catch (error) {
        return error
    }
}

model.store = async (body) => {
    try {
        const result = await docRef.doc('123').set(body)
        return result
    } catch (error) {
        return error
    }
}

module.exports = model
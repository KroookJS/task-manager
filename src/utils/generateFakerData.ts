import {faker} from '@faker-js/faker'

export const generateFakerData = () => {
    return {
        startdate: faker.date.anytime(),
        completionDate: faker.date.anytime(),
        description: faker.lorem.text()
    }
}
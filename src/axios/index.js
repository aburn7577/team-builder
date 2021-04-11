import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of members from API
const initialMembersList = [
    {
        id: uuid(), // uuid is a lib to generate random, unique ids
        name: 'Robert',
        email: 'robert@robert.com',
        role: 'Backend enginer',
    },
    {
        id: uuid(), // uuid is a lib to generate random, unique ids
        name: 'Matt',
        email: 'matt@matt.com',
        role: 'Frontend engineer',
    },
    {
        id: uuid(), // uuid is a lib to generate random, unique ids
        name: 'Stewart',
        email: 'stewart@stewart.com',
        role: 'Designer',
    },

]

// 👉 simulating axios for [GET] and [POST]
export default {
    get() {
        return Promise.resolve({ status: 200, success: true, data: initialMembersList })
    },
    post(url, { name, email, role }) {
        const newMember = { id: uuid(), name, email, role }
        return Promise.resolve({ status: 200, success: true, data: newMember })
    }
}


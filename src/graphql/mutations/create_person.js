import PersonInput from './inputs/person_input';
import Person from './../../models/Person';
import Personobject from './../objects/person';

export default {
    type: Personobject,
    args: {
        person: { type: PersonInput }
    },
    resolve: async (source, args) => {
        const person = await Person.create({ name: args.person.name});
        return person;
    }
}
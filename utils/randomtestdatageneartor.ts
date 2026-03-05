import { faker, Faker } from "@faker-js/faker";

export class randomutility{

    static firstame()
    {
        return faker.person.firstName();
    }

    static lastname()
    {
        return faker.person.lastName();
    }

    static email()
    {
        return faker.internet.email();
    }

    static phone()
    {
        return faker.phone.number();
    }

    static password()
    {
        return faker.internet.password();
    }

}
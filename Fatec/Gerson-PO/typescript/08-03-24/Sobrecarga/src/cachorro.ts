import Animal from "./animal";

export default class Cachorro implements Animal{
    fazerBarulho(): string {
        return ("au au");
    }

    
}
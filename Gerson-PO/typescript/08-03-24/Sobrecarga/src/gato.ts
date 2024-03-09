import Animal from "./animal";

export default class Gato implements Animal{
    fazerBarulho(): string {
        return ("Mmiaaau");
    }
}
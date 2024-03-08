import Animal from "./animal";

export default class Gata implements Animal{
    fazerBarulho(): string {
        return ("Mmiaaau miaaauu");
    }
}
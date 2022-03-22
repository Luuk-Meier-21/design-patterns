// Builder pattern:

type Sauce = "Tomato" | "Cream" | "Carbonara" | null

class Spaghetti {
    public sauce: Sauce;
    public meatballs: number = 0;
    public salt: boolean = false;
    public pepper: boolean = false;
    public basil: boolean = false;

    constructor(sauce: Sauce) {
        this.sauce = sauce;
    }
}

class SpaghettiBuilder {
    private spaghetti: Spaghetti;

    constructor(sauce: Sauce) {
        this.spaghetti = new Spaghetti(sauce);
    }

    addMeatballs(meatballs: number): this {
        this.spaghetti.meatballs = meatballs;
        return this;
    }

    // Optional:
    addSalt(): this {
        this.spaghetti.salt = true;
        return this;
    }
 
    addPepper(): this {
        this.spaghetti.pepper = true;
        return this;
    }

    addBasil(): this {
        this.spaghetti.basil = true;
        return this;
    }
    
    getResult(): Spaghetti {
        return this.spaghetti;
    }
}

const spaghetti = new SpaghettiBuilder("Tomato")
    .addMeatballs(5)
    .addBasil()
    .addSalt() 
    .addPepper()
    .getResult();

console.log(spaghetti); // Spagettie object





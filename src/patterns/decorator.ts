export interface Component {
    execute: () => string;
}

export class BasicComponent implements Component {
    execute(): string {
        return "Component!"
    }
}
  
export class Decorator implements Component {
    private component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    public execute(): string {
        return this.component.execute();
    }
}

export class ExtraDecorator extends Decorator {
    public execute(): string {
        return `Wrapper(${super.execute()})`;
    }

    public toAllCaps(str: string): string {
        return str.toUpperCase();
    }
}
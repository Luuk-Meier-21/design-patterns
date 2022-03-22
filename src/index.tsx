import { BasicComponent, ExtraDecorator } from "./patterns/decorator";
const basicComponent = new BasicComponent();

console.log(basicComponent.execute());                                // log: Component!

const wrappedComponent = new ExtraDecorator(basicComponent);          // Wrap BasicComponent with ExtraDecorator

console.log(wrappedComponent.execute());                              // log: Wrapper(Component!)

console.log(wrappedComponent.toAllCaps(wrappedComponent.execute()));  // log: WRAPPER(COMPONENT!)
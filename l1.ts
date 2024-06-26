// @errors: 2345
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
  
  // This line is a shortcut to tell TypeScript there is a
  // constant called `backpack`, and to not worry about where it came from.
   const backpack: Backpack<string> = {
    add:(obj:string) => "polu",
    get:() => "polu"
   }
  
  // object is a string, because we declared it above as the variable part of Backpack.
  const object = backpack.get();
  
  // Since the backpack variable is a string, you can't pass a number to the add function.
  
  
  console.log(object)
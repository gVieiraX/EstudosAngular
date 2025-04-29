// Class decorator
function apiVersion(version: string) {
    return function (constructor: Function) {
      (constructor.prototype as any).__version = version;
      (constructor.prototype as any).__name = "Gabriel";
    };
  }
  
  // Field accessor decorator
  function minLength(length: number) {
    return function (
      target: any,
      context: ClassAccessorDecoratorContext
    ) {
      let _value: string;
  
      return {
        get() {
          return "[play]" + _value;
        },
        set(value: string) {
          if (value.length < length) {
            throw new Error(`Tamanho menor do que ${length}`);
          }
          _value = value;
        }
      };
    };
  }
  
  @apiVersion("1.0.0")
  class Api {
    @minLength(10)
    accessor name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  
  const api = new Api("Gabriel Vieira");
  console.log(api.name); 
  console.log((api as any).__version); 
  console.log((api as any).__name);    
  
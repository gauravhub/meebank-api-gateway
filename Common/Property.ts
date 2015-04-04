import Validators = require('Validators');

class Property<TType>{
    value: TType;

    constructor(jsonName: string);
    constructor(jsonName: string, defaultValue: TType);
    constructor(jsonName: string, validators: {}[]);
    constructor(jsonName: string, defaultValue: TType, validators: {}[]);
    constructor(
        public jsonName:string,
        public defaultValue: TType = undefined,
        public validators: Validators = {}) {
    }

    hasValue(): boolean{
        if(typeof this.value === undefined){
            return false;
        }
        else {
            return true;
        }
    }
}

export = Property;
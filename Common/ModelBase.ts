class ModelBase {
    validate():boolean {
        return true;
    }

    toJSON(): {} {
        return {};
    }

    fromJSON(json: {}): {} {
        return {}
    }
}

export = ModelBase;
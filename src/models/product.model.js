"use strict";

class BaseModel{
	constructor(id) {
        this.id = id;
    }

    serialize(id){
        this.id = id;
    }
    unserialize(){
        let model = {};
        model.id = this.id;
        return model;
    }
}

class UserModel extends BaseModel{
    constructor(attrs) {
        super(attrs.id);
        this.name = attrs.name;
        this.phone = attrs.phone;
    }
}

class ProductType{
    constructor(attrs) {
        super(attrs.id);
        this.name = attrs.name;
        this.code = attrs.code;
    }
}

class ProductModel extends BaseModel {
    constructor(attrs) {
        super(attrs.id);
        this.user = attrs.user;
        this.name = attrs.name;
        this.material = attrs.material;
        this.fromFactory = attrs.fromFactory;
        this.weight = attrs.weight;
        this.fromArea = attrs.fromArea;
        this.price = attrs.price;
        this.count = attrs.count;
        this.fromWeb = attrs.fromWeb;
        this.updateTime = attrs.updateTime;
        this.type = attrs.type;
        this.format1 = attrs.format1;
    }

    serialize(model){
        super.serialize(model.id);
        this.user = model.user;
        this.name = model.name;
        this.material = model.material;
        this.fromFactory = model.fromFactory;
        this.weight = model.weight;
        this.fromArea = model.fromArea;
        this.price = model.price;
        this.count = model.count;
        this.fromWeb = model.fromWeb;
        this.updateTime = model.updateTime;
        this.type = model.type;
        this.format1 = model.format1;
        return this;
    }

    unserialize(){
        let model = super.unserialize();
        model.name = this.name;
        model.material = this.material;
        model.fromFactory = this.fromFactory;
        model.weight = this.weight;
        model.fromArea = this.fromArea;
        model.price = this.price;
        model.count = this.count;
        model.fromWeb = this.fromWeb;
        model.updateTime = this.updateTime;
        model.type = this.type;
        model.format1 = this.format1;
        return model;
    }
}

export { 
    ProductModel
 };
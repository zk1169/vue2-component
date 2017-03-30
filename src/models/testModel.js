"use strict";

class Animal{
	constructor(name) {
        this.name = name;
    }

    //实例方法
    sayName() {
        this.name = 'cloud';
        console.log('My name is '+this.name);
        return 'My name is '+this.name;
    }
}

export default class Programmer extends Animal {
    constructor(name) {
    	//直接调用父类构造器进行初始化
        super(name);
    }
    program() {
        super.sayName();
        console.log("I'm coding...");
        return 'Welcome...';
    }

    get hello(){
        return 'hello';
    }
}
"use strict";

export default class BugModel {
    id = null;
    title = null;
    content = null;
    name = null;
    status = null;
    createTime = null;
    desc = null;
    images = null;

    constructor(options) {
        if (options) {
            this.id = options.id;
            this.title = options.title;
            this.content = options.content;
            this.name = options.name;
            this.status = options.status;
            this.createTime = options.createTime;
            this.desc = options.desc;
            this.images = options.images;
        }
    }

    get imageList(){
        if(this.images){
            return this.images.split(',');
        }else{
            return [];
        }
    }
}
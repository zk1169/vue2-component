"use strict";
import { imageDefault, blogImageDefault } from '../config/config';

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
      this.name = options.name|options.phone;
      this.status = options.status;
      this.createTime = options.createTime;
      this.desc = options.desc;
      this.images = options.images;
    }
  }

  // get imageList(){
  //     if(this.images){
  //         return this.images.split(',');
  //     }else{
  //         return [];
  //     }
  // }
  get firstImage() {
    if (this.images) {
      let imageArray = this.images.split(',');
      if (imageArray && imageArray.length > 0) {
        for (let index in imageArray) {
          if (this.isImage(imageArray[index])) {
            return '/api' + imageArray[index];
          }
        }
        return blogImageDefault;
      }
    } else {
      return blogImageDefault;
    }
  }

  get imageList() {
    if (this.images) {
      let fileList = this.images.split(',');
      return fileList.filter((file) => this.isImage(file));
    } else {
      return [];
    }
  }

  get bugStatusText() {
    let statusStr = '';
    switch (this.status+'') {
      default:
      case '1':
        statusStr = '待处理';
      break;
      case '2':
          statusStr = '正在解决';
        break;
      case '3':
          statusStr = '已解决';
        break;
    }
    return statusStr;
  }

  get blogStatusText() {
    let statusStr = '';
    switch (this.status) {
      case '1':
        statusStr = '正常';
        break;
      default:
      case '0':
        statusStr = '下架';
        break;
    }
    return statusStr;
  }

  isImage(file) {
    return ['jpg', 'jpeg', 'png', 'gif'].indexOf(file.split('.')[1]) > -1;
  }
}
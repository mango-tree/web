"use strict";
var __extends = (this && this.__extends) || (function () {
  var extendStatics = Object.setPrototypeOf ||
    ({__proto__: []} instanceof Array && function (d, b) {
      d.__proto__ = b;
    }) ||
    function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {value: true});
var attributes_key_decorator_1 = require("../../backbone/decorators/attributes-key.decorator");
var default_value_decorator_1 = require("../../backbone/decorators/default-value.decorator");
var base_model_1 = require("../../backbone/models/base.model");
var TracksYoutubeTopicModel = /** @class */ (function (_super) {
  __extends(TracksYoutubeTopicModel, _super);

  function TracksYoutubeTopicModel() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  __decorate([
    attributes_key_decorator_1.attributesKey('title')
  ], TracksYoutubeTopicModel.prototype, "title", void 0);
  __decorate([
    attributes_key_decorator_1.attributesKey('isParent'),
    default_value_decorator_1.defaultValue(false)
  ], TracksYoutubeTopicModel.prototype, "isParent", void 0);
  return TracksYoutubeTopicModel;
}(base_model_1.BaseModel));
exports.TracksYoutubeTopicModel = TracksYoutubeTopicModel;
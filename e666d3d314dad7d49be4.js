(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{383:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var o="https://webdev-api.loftschool.com"},395:function(e,t,r){},418:function(e,t,r){"use strict";var o=r(395);r.n(o).a},440:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-block"},[r("h2",{staticClass:"form-block__title"},[e._v(e._s(e.formTitle))]),r("form",{staticClass:"form review-form form-block__content form-block__content--review"},[r("div",{staticClass:"form__photo form__photo--review"},[r("label",{staticClass:"form__upload-photo-wrapper form__upload-photo-wrapper--review"},[r("div",{staticClass:"form__upload-photo-container--review",class:{filled:this.renderedPhotoUrl.length,error:e.validation.firstError("renderedPhotoUrl")},style:{backgroundImage:"url("+this.renderedPhotoUrl+")"}},[r("input",{staticClass:"form__upload-photo-input",attrs:{type:"file"},on:{change:e.appendFileAndRenderPhoto}}),r("div",{staticClass:"form__upload-photo-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("renderedPhotoUrl")}})],1)]),r("div",{staticClass:"btn btn--upload-review-photo"},[e._v("Добавить фото")])])]),r("div",{staticClass:"form__text form__text--review"},[r("div",{staticClass:"form__row form__row--review-author-info"},[r("div",{staticClass:"form__col form__col--review"},[r("label",{staticClass:"form__text-block",class:{error:e.validation.firstError("review.author")},attrs:{for:"name"}},[r("span",{staticClass:"form__label"},[e._v("Имя автора")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.review.author,expression:"review.author"}],staticClass:"form__input form__input--name",attrs:{id:"name",type:"text",name:"name",placeholder:"Введите имя автора"},domProps:{value:e.review.author},on:{input:function(t){t.target.composing||e.$set(e.review,"author",t.target.value)}}}),r("div",{staticClass:"form__text-block-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.author")}})],1)])]),r("div",{staticClass:"form__col form__col--review"},[r("label",{staticClass:"form__text-block",class:{error:e.validation.firstError("review.occ")},attrs:{for:"position"}},[r("span",{staticClass:"form__label"},[e._v("Титул автора")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.review.occ,expression:"review.occ"}],staticClass:"form__input form__input--position",attrs:{id:"position",type:"text",name:"position",placeholder:"Введите титул автора"},domProps:{value:e.review.occ},on:{input:function(t){t.target.composing||e.$set(e.review,"occ",t.target.value)}}}),r("div",{staticClass:"form__text-block-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.occ")}})],1)])])]),r("div",{staticClass:"form__row form__row--textarea"},[r("div",{staticClass:"form__col"},[r("label",{staticClass:"form__text-block form__text-block--textarea",class:{error:e.validation.firstError("review.text")},attrs:{for:"position"}},[r("span",{staticClass:"form__label"},[e._v("Отзыв")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review.text,expression:"review.text"}],staticClass:"form__textarea",attrs:{id:"review",name:"review",rows:"4",placeholder:"Введите отзыв"},domProps:{value:e.review.text},on:{input:function(t){t.target.composing||e.$set(e.review,"text",t.target.value)}}}),r("div",{staticClass:"form__text-block-error"},[r("error-tooltip",{attrs:{errorText:e.validation.firstError("review.text")}})],1)])])]),r("div",{staticClass:"form__row form__row--btns"},[r("div",{staticClass:"form__col"},[r("div",{staticClass:"form__btns form__btns--review"},[r("button",{staticClass:"btn btn--cancel-edit",attrs:{type:"button"},on:{click:e.CLOSE_FORM}},[e._v("Отмена")]),e.reviewForm.editMode?e._e():r("button",{staticClass:"btn btn--save-edit",attrs:{type:"button"},on:{click:e.addNewReview}},[e._v("Сохранить")]),e.reviewForm.editMode?r("button",{staticClass:"btn btn--save-edit",attrs:{type:"button"},on:{click:e.saveEditedReview}},[e._v("Сохранить")]):e._e()])])])])])])};o._withStripped=!0;var i=r(100),a=r(383),n=r(52);function s(e,t,r,o,i,a,n){try{var s=e[a](n),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(o,i)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function n(e){s(a,o,i,n,c,"next",e)}function c(e){s(a,o,i,n,c,"throw",e)}n(void 0)})}}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(t){v(e,t,r[t])})}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u={mixins:[r(52).mixin],validators:{renderedPhotoUrl:function(e){return n.Validator.value(e).required("Загрузите картинку")},"review.author":function(e){return n.Validator.value(e).required("Введите имя")},"review.occ":function(e){return n.Validator.value(e).required("Введите титул")},"review.text":function(e){return n.Validator.value(e).required("Введите отзыв")}},components:{errorTooltip:function(){return r.e(0).then(r.bind(null,429))}},data:function(){return{renderedPhotoUrl:"",review:{photo:"",author:"",occ:"",text:""}}},computed:l({},Object(i.e)("reviews",{reviewForm:function(e){return e.reviewForm},editedReview:function(e){return e.editedReview}}),{formTitle:function(){switch(this.reviewForm.editMode){case!0:return"Редактирование отзыва";case!1:return"Новый отзыв"}},remotePhotoPath:function(){return"".concat(a.a,"/").concat(this.review.photo)}}),methods:l({},Object(i.d)("reviews",["CLOSE_FORM"]),Object(i.b)("reviews",["addReview","editReview"]),Object(i.d)("tooltip",["SHOW_TOOLTIP"]),{appendFileAndRenderPhoto:function(e){var t=this,r=e.target.files[0];this.review.photo=r;var o=new FileReader;try{o.readAsDataURL(r),o.onload=function(){t.renderedPhotoUrl=o.result}}catch(e){console.error(e.message)}},createReviewFormData:function(){var e=new FormData;return e.append("author",this.review.author),e.append("occ",this.review.occ),e.append("text",this.review.text),e.append("photo",this.review.photo),e},addNewReview:function(){var e=c(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t=this.createReviewFormData(),e.next=9,this.addReview(t);case 9:this.SHOW_TOOLTIP({type:"success",text:"Отзыв добавлен"}),this.CLOSE_FORM(),e.next=17;break;case 13:e.prev=13,e.t1=e.catch(5),console.error(e.t1.message),this.SHOW_TOOLTIP({type:"error",text:"Произошла ошибка"});case 17:case"end":return e.stop()}},e,this,[[5,13]])}));return function(){return e.apply(this,arguments)}}(),setEditedReview:function(){this.review=l({},this.editedReview),this.renderedPhotoUrl=this.remotePhotoPath},saveEditedReview:function(){var e=c(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$validate();case 2:if(e.t0=e.sent,!1!==e.t0){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,t={id:this.review.id,data:this.createReviewFormData()},e.next=9,this.editReview(t);case 9:this.SHOW_TOOLTIP({type:"success",text:"Отзыв обновлен"}),this.CLOSE_FORM(),e.next=17;break;case 13:e.prev=13,e.t1=e.catch(5),console.error(e.t1.message),this.SHOW_TOOLTIP({type:"error",text:"Произошла ошибка"});case 17:case"end":return e.stop()}},e,this,[[5,13]])}));return function(){return e.apply(this,arguments)}}()}),created:function(){this.reviewForm.editMode&&this.setEditedReview()}},d=(r(418),r(99)),p=Object(d.a)(u,o,[],!1,null,"8de27280",null);p.options.__file="src/admin/components/reviews/reviewForm.vue";t.default=p.exports}}]);
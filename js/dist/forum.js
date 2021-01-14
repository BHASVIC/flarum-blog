module.exports=function(t){var e={};function a(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,a),s.l=!0,s.exports}return a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=35)}([function(t,e,a){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},,function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},,function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/CommentPost"]},function(t,e){t.exports=flarum.core.compat["components/PostStream"]},function(t,e){t.exports=flarum.core.compat["tags/components/TagDiscussionModal"]},function(t,e){t.exports=flarum.core.compat["components/EditPostComposer"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["tags/components/TagsPage"]},function(t,e){t.exports=flarum.core},,,,,function(t,e){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,e,a){"use strict";a.r(e);var o=a(0),s=a(8),r=a.n(s),i=a(1),n=a.n(i),l=a(16),u=a.n(l),c=(a(34),a(17)),p=a.n(c),d=a(2),g=a.n(d),f=a(18),h=a.n(f),v=a(13),b=a.n(v),y=a(7),N=a.n(y),B=a(10),w=a.n(B),A=a(9),F=a.n(A),x=a(4),M=a.n(x),P=a(3),_=a.n(P),C=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.init=function(){t.prototype.init.call(this),this.isNew=!this.props.article.blogMeta(),this.meta=this.props.article.blogMeta()?this.props.article.blogMeta():app.store.createRecord("blogMeta"),this.summary=m.prop(this.meta.summary()||""),this.featuredImage=m.prop(this.meta.featuredImage()||""),this.isFeatured=m.prop(this.meta.isFeatured()||!1),this.isSized=m.prop(this.meta.isSized()||!1),this.isPendingReview=m.prop(this.meta.isPendingReview()||!1)},a.className=function(){return"Modal--small Support-Modal"},a.title=function(){return"Blog post settings"},a.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fields().toArray()))},a.fields=function(){var t=this,e=new M.a;return e.add("summary",m("div",{className:"Form-group"},m("label",null,"Article summary:"),m("textarea",{className:"FormControl",style:{maxWidth:"100%",minWidth:"100%",width:"100%",minHeight:"120px"},value:this.summary(),placeholder:"Please enter a summary",oninput:m.withAttr("value",this.summary)}),m("small",null,"This summary will be visible on the blog overview page and will be used for SEO purposes.")),30),e.add("image",m("div",{className:"Form-group"},m("label",null,"Article image URL:"),m("input",{type:"text",className:"FormControl",value:this.featuredImage(),placeholder:"https://",oninput:m.withAttr("value",this.featuredImage)}),m("small",null,"Best image resolution for social media: 1200x630"),""!=this.featuredImage()&&m("img",{src:this.featuredImage(),alt:this.props.article.title(),title:"Blog post image",width:"100%",style:{marginTop:"15px"}})),30),e.add("sized",m("div",{className:"Form-group"},_.a.component({state:1==this.isSized(),onchange:function(e){t.isSized(e)},children:[m("b",null,"Highlighted post"),m("div",{className:"helpText",style:{fontWeight:500}},"Give this post a big image on the blog overview page.")]})),-10),e.add("submit",m("div",{className:"Form-group"},n.a.component({type:"submit",className:"Button Button--primary SupportModal-save",loading:this.loading,children:"Update"})),-10),e},a.submitData=function(){return{summary:this.summary(),featuredImage:this.featuredImage(),isFeatured:this.isFeatured(),isSized:this.isSized(),isPendingReview:this.isPendingReview(),relationships:this.isNew&&{discussion:this.props.article}}},a.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.meta.save(this.submitData()).then((function(){e.isNew&&e.props.article.pushData({relationships:{blogMeta:e.meta}}),e.hide(),m.redraw()}),(function(t){e.loading=!1,e.handleErrors(t)}))},e}(F.a),k=a(19),O=a.n(k),I=a(20),L=a.n(I),R=a(21),S=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.init=function(){t.prototype.init.call(this),this.article=this.props.article,this.name=m.prop(this.article.title()||""),this.slug=m.prop(this.article.slug()||""),this.redirect=this.props.redirect},a.className=function(){return"Modal--small Support-Modal"},a.title=function(){return app.translator.trans("v17development-flarum-blog.forum.tools.rename_article")},a.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.fields().toArray()))},a.fields=function(){var t=this,e=new M.a;return e.add("name",m("div",{className:"Form-group"},m("label",null,app.translator.trans("v17development-flarum-blog.forum.article.title"),":"),m("input",{className:"FormControl",placeholder:app.translator.trans("v17development-flarum-blog.forum.article.title"),value:this.name(),oninput:function(e){t.name(e.target.value),t.slug(Object(R.slug)(e.target.value))}})),50),e.add("slug",m("div",{className:"Form-group"},m("label",null,app.translator.trans("v17development-flarum-blog.forum.article.slug"),":"),m("input",{className:"FormControl",placeholder:app.translator.trans("v17development-flarum-blog.forum.article.slug"),value:this.slug(),oninput:m.withAttr("value",this.slug)})),40),e.add("submit",m("div",{className:"Form-group"},n.a.component({type:"submit",className:"Button Button--primary SupportModal-save",loading:this.loading,children:"Update"})),-10),e},a.submitData=function(){return{title:this.name(),slug:this.slug()}},a.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,this.article.save({title:this.name(),slug:this.slug()}).then((function(){if(e.hide(),e.redirect){var t="/knowledgebase/"+e.article.id()+"-"+e.slug();m.route(t,!0),window.history.replaceState(null,document.title,t)}}),(function(t){e.loading=!1,e.handleErrors(t)}))},e}(F.a),j=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.init=function(){this.loadedPost=!1},a.view=function(){var t=this,e=this.props.article,a=[],o=flarum.extensions["fof-discussion-language"]&&void 0!==flarum.extensions["fof-discussion-language"].components?flarum.extensions["fof-discussion-language"].components.LanguageDiscussionModal:null;e.canRename()&&a.push(n.a.component({className:"Button",onclick:function(){return app.modal.show(new S({article:e}))},icon:"fas fa-pencil-alt",children:app.translator.trans("v17development-flarum-blog.forum.tools.rename_article")}));var s=e.firstPost()?e.firstPost():app.store.getById("posts",e.firstPostId());return a.push(n.a.component({className:"Button",disabled:!s||!s.canEdit(),onclick:function(){app.composer.load(new O.a({post:s})),app.composer.show()},icon:"fas fa-edit",children:app.translator.trans("v17development-flarum-blog.forum.tools.edit_article")})),a.push(n.a.component({className:"Button",onclick:function(){return app.modal.show(new C({article:e}))},icon:"fas fa-cogs",children:app.translator.trans("v17development-flarum-blog.forum.tools.article_settings")})),e.canTag()&&a.push(n.a.component({className:"Button",onclick:function(){return app.modal.show(new h.a({discussion:e}))},icon:"fas fa-tag",children:app.translator.trans("v17development-flarum-blog.forum.tools.update_category")})),e.blogMeta()&&e.blogMeta().isPendingReview()&&(a.push(m("li",{className:"Dropdown-separator"})),a.push(n.a.component({className:"Button",disabled:!app.forum.attribute("canApproveBlogPosts"),onclick:function(){e.blogMeta().save({isPendingReview:!1}).then((function(){app.alerts.show(new N.a({type:"success",children:app.translator.trans("v17development-flarum-blog.forum.review_article.approve_article_approved")}))}),(function(e){t.loading=!1,t.handleErrors(e)}))},icon:"fas fa-thumbs-up",children:app.translator.trans("v17development-flarum-blog.forum.review_article.approve_article")}))),e.canChangeLanguage&&e.canChangeLanguage()&&o&&a.push(n.a.component({children:app.translator.trans("fof-discussion-language.forum.discussion_controls.change_language_button"),icon:"fas fa-globe",onclick:function(){return app.modal.show(new o({discussion:e}))}})),a.push(m("li",{className:"Dropdown-separator"})),e.canLock()&&a.push(n.a.component({className:"Button",onclick:b.a.lockAction.bind(e),icon:"fas "+(e.isLocked()?"fa-comments":"fa-comment-slash"),children:e.isLocked()?app.translator.trans("v17development-flarum-blog.forum.tools.enable_comments"):app.translator.trans("v17development-flarum-blog.forum.tools.disable_comments")})),e.canHide()&&(e.isHidden()?(a.push(n.a.component({className:"Button",onclick:b.a.restoreAction.bind(e),icon:"fas fa-eye",children:app.translator.trans("v17development-flarum-blog.forum.tools.recover_article")})),e.canDelete()&&a.push(n.a.component({className:"Button",onclick:function(){if(confirm(L()(app.translator.trans("core.forum.discussion_controls.delete_confirmation"))))return"blogArticle"===app.history.getCurrent().name&&(app.previous?app.history.back():m.route(app.route("blog"))),e.delete().then((function(){m.redraw()}))},icon:"far fa-trash-alt",children:app.translator.trans("v17development-flarum-blog.forum.tools.delete_forever")}))):a.push(n.a.component({className:"Button",onclick:b.a.hideAction.bind(e),icon:"fas fa-eye-slash",children:app.translator.trans("v17development-flarum-blog.forum.tools.hide_article")}))),m("div",{className:"FlarumBlog-Article-Content-Edit-Button"},m("div",{className:"FlarumBlog-Article-Content-Edit-Dropdown"},w.a.component({icon:"fas fa-cog",label:"Manage",buttonClassName:"Button",menuClassName:"Dropdown-menu--right",children:a,onshow:function(){!s||s.canEdit()||t.loadedPost||(t.loadedPost=!0,app.store.find("posts",e.firstPost()?e.firstPost().id():e.firstPostId()).then((function(){})).catch((function(){})).then((function(){return m.redraw()})))}})))},e}(g.a),D=a(11),T=a.n(D),E=a(22),z=a.n(E),G=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.view=function(){return m("div",{className:"FlarumBlog-Article-Author"},m("div",{className:"FlarumBlog-Article-Author-background "+(this.props.loading?"FlarumBlog-Author-Ghost":""),style:{backgroundColor:this.props.article&&this.props.article.user()?this.props.article&&this.props.article.user().color():null}}),m("div",{className:"FlarumBlog-Article-Author-Avatar"},this.props.article&&this.props.article.user()?z()(this.props.article.user()):m("span",{className:"Avatar FlarumBlog-Author-Ghost"})),this.props.article&&this.props.article.user()&&m("div",{className:"FlarumBlog-Article-Author-Info"},m("span",{className:"FlarumBlog-Article-Author-Name"},this.props.article.user().displayName()),m("p",{className:"FlarumBlog-Article-Author-Bio"},this.props.article.user().bio&&this.props.article.user().bio()),m("ul",{className:"FlarumBlog-Article-Author-Extended"},T()(this.items().toArray()))),this.props.loading&&m("div",null,m("span",{className:"FlarumBlog-Article-Author-Name FlarumBlog-Author-Ghost"}," "),m("p",{className:"FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"}," "),m("p",{className:"FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"}," "),m("p",{className:"FlarumBlog-Article-Author-Bio FlarumBlog-Author-Ghost"}," ")))},a.items=function(){return new M.a},e}(g.a),H=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.init=function(){this.blogCategories=app.forum.attribute("blogTags")},a.view=function(){var t=this;return m("div",{className:"BlogCategories"},m("h3",null,app.translator.trans("v17development-flarum-blog.forum.categories")),this.blogCategories&&this.blogCategories.map((function(e){var a=app.store.getById("tags",e);if(!a)return null;var o=[];return o.push(t.categoryItem(a)),app.store.all("tags").forEach((function(e){e.isChild()&&e.parent().id()===a.id()&&o.push(t.categoryItem(e))})),o})))},a.categoryItem=function(t){return m("a",{href:app.route("blogCategory",{slug:t.slug()}),className:"BlogCategories-item BlogCategories-item-"+t.id()+" "+(t.isChild()&&1==app.forum.attribute("blogCategoryHierarchy")?"BlogCategories-item-child":""),config:m.route},m("span",{className:""===t.icon()?"BlogCategories-item-colored":"",style:{backgroundColor:""===t.icon()?t.color():null}},m("i",{className:t.icon()})),t.name())},e}(g.a),U=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.view=function(){return m("div",{className:"FlarumBlog-Article-Sidebar"},m("ul",null,T()(this.items().toArray())))},a.items=function(){var t=new M.a;return t.add("author",G.component(this.props),0),t.add("categories",H.component(this.props),0),t},e}(g.a),W=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.init=function(){t.prototype.init.call(this),app.setTitle(app.translator.trans("v17development-flarum-blog.forum.blog")),app.history.push("blogArticle"),this.bodyClass="BlogItemPage",this.loading=!0,this.found=!1,this.article=null,this.loadBlogItem()},a.loadBlogItem=function(){var t=app.preloadedApiDocument();t?setTimeout(this.show.bind(this,t),0):app.store.find("discussions",m.route.param("id").split("-")[0]).then(this.show.bind(this)).catch((function(){m.redraw()})),m.lazyRedraw()},a.show=function(t){this.article=t,app.setTitle(t.title()+" - "+app.translator.trans("v17development-flarum-blog.forum.blog")),this.loading=!1;var e=[];if(t.payload&&t.payload.included){var a=t.id();e=t.payload.included.filter((function(t){return"posts"===t.type&&t.relationships&&t.relationships.discussion&&t.relationships.discussion.data.id===a})).map((function(t){return app.store.getById("posts",t.id)})).sort((function(t,e){return t.id()-e.id()})).slice(0,20)}this.stream=new p.a({discussion:t,includedPosts:e}),this.stream.on("positionChanged",this.positionChanged.bind(this)),m.lazyRedraw()},a.view=function(){var t=this.article&&this.article.blogMeta()&&this.article.blogMeta().featuredImage()?"url("+this.article.blogMeta().featuredImage()+")":null,e=null;return!this.loading&&this.article&&(e=this.article.firstPost()?this.article.firstPost():app.store.getById("posts",this.article.firstPostId())),m("div",{className:"FlarumBlogItem"},m("div",{className:"container"},m("div",{className:"FlarumBlog-ToolButtons"},m(n.a,{className:"Button",onclick:function(){app.previous&&"blog"===app.previous.props.routeName?app.history.back():m.route(app.route("blog"))},icon:"fas fa-angle-left"},app.translator.trans("v17development-flarum-blog.forum.return_to_overview"))),m("div",{className:"FlarumBlog-Article"},m("div",{className:"FlarumBlog-Article-Container"},m("div",{className:"FlarumBlog-Article-Content"},m("div",{className:"FlarumBlog-Article-Image FlarumBlog-default-image "+(this.loading?"FlarumBlog-Article-GhostImage":""),style:{backgroundImage:t,opacity:this.article&&this.article.isHidden()?.4:null}}),this.article&&app.session.user&&(app.session.user.canEdit()||this.article.canRename()||this.article.posts()&&this.article.posts()[0].canEdit())&&m(j,{article:this.article}),m("div",{className:"FlarumBlog-Article-Categories"},!this.loading&&this.article&&this.article.tags()&&this.article.tags().map((function(t){return m("a",{href:app.route("blogCategory",{slug:t.slug()}),config:m.route},t.name())})),this.loading&&[0,1].map((function(){return m("span",{className:"FlarumBlog-Article-GhostCategory"},"Category")}))),m("div",{className:"FlarumBlog-Article-Post"},m("h3",{className:this.loading?"FlarumBlog-Article-GhostTitle":null},this.article?this.article.title():"Ghost title",this.article&&this.article.isHidden()&&"("+app.translator.trans("v17development-flarum-blog.forum.hidden")+")"),this.loading&&[0,1,2].map((function(){return m("div",null,m("p",{className:"FlarumBlog-Article-GhostParagraph"}," "),m("p",{className:"FlarumBlog-Article-GhostParagraph"}," "),m("p",{className:"FlarumBlog-Article-GhostParagraph"}," "),m("p",null," "))})),!this.loading&&this.article.blogMeta()&&1==this.article.blogMeta().isPendingReview()&&m("div",{className:"Post"},m("blockquote",{class:"uncited",style:{fontSize:"16px"}},m("div",null,m("span",{className:"far fa-clock",style:{marginRight:"5px"}})," ",app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review")))),!this.loading&&e&&m(u.a,{post:e}))),m("div",{className:"FlarumBlog-Article-Comments"},m("h4",null,app.translator.trans("v17development-flarum-blog.forum.comment_section.comments")," (",this.article?this.article.commentCount()-1:0,")"),!this.loading&&this.article.isLocked&&this.article.isLocked()&&m("div",{className:"Post-body"},m("blockquote",{class:"uncited"},m("div",null,m("span",{className:"far fa-lock",style:{marginRight:"5px"}})," ",app.translator.trans("v17development-flarum-blog.forum.comment_section.locked")))),!this.loading&&this.stream&&this.stream.render())),m(U,{article:this.article,loading:this.loading}))))},a.positionChanged=function(t,e){var a=this.article;app.session.user&&e>(a.lastReadPostNumber()||0)&&(a.save({lastReadPostNumber:e}),m.redraw())},e}(r.a),q=a(6),J=a.n(q),K=a(23),Q=a.n(K),V=a(15),X=a.n(V),Y=a(24),Z=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.onsubmit=function(){this.loading=!0;var t=this.data();app.store.createRecord("discussions").save(t).then((function(t){app.composer.hide(),m.route(app.route("blogArticle",{id:t.id()+"-"+t.slug()}))}),this.loaded.bind(this))},e}(a.n(Y).a);function tt(t){$(t).tooltip()}var et=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.init=function(){this.languages=app.store.all("discussion-languages"),this.options=this.languages.reduce((function(t,e){return t[e.code()]=m("span",null,m("i",{className:"fas fa-globe"})," ",e.name()),t}),this.props.extra||{})},a.view=function(){var t=this.props,e=t.language,a=t.uppercase,o=e.name()||"";return m("span",null,m("i",{className:"fas fa-globe"})," ",a?o.toUpperCase():o)},e}(g.a),at=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.init=function(){this.languages=app.store.all("discussion-languages"),this.options=this.languages.reduce((function(t,e){return t[e.code()]=m(et,{language:e}),t}),this.props.extra||{})},a.view=function(){var t=this,e=this.props.selected;return w.a.component({buttonClassName:"Button",label:this.options[e]||this.options[this.props.default],menuClassName:"Dropdown-menu--right",children:Object.keys(this.options).map((function(a){var o=a===(e||"any");return n.a.component({active:o,children:t.options[a],icon:!o||"fas fa-check",onclick:function(){return t.props.onclick(a)}})}))})},e}(g.a),ot=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var a=e.prototype;return a.init=function(){t.prototype.init.call(this),app.setTitle(app.translator.trans("v17development-flarum-blog.forum.blog")),this.bodyClass="BlogOverviewPage",this.isLoading=!0,this.featuredPosts=[],this.posts=[],this.hasMore=null,this.isLoadingMore=!1,this.languages=app.store.all("discussion-languages"),this.currentSelectedLanguage=m.route.param("lang")?m.route.param("lang"):app.translator.locale,app.history.push("blog"),this.loadBlogOverview()},a.loadBlogOverview=function(){var t=app.preloadedApiDocument();t?setTimeout(this.show.bind(this,t),0):this.reloadData(),m.lazyRedraw()},a.reloadData=function(){var t="is:blog"+(m.route.param("slug")?" tag:"+m.route.param("slug"):"");null!==this.languages&&this.languages.length>=1&&(t+=" language:"+this.currentSelectedLanguage),app.store.find("discussions",{filter:{q:t},sort:"-createdAt"}).then(this.show.bind(this)).catch((function(){m.redraw()}))},a.show=function(t){if(0===t.length)return this.isLoading=!1,void m.lazyRedraw();this.hasMore=t.payload.links&&t.payload.links.next?t.payload.links.next:null,this.featuredPosts=t.slice(0,3),this.posts=t.length>=4?t.slice(3,t.length):[],this.isLoading=!1,m.lazyRedraw()},a.loadMore=function(){var t=this;this.isLoadingMore=!0,app.store.find(this.hasMore.replace(app.forum.attribute("apiUrl"),"")).then((function(e){e.map((function(e){return t.posts.push(e)})),t.hasMore=e.payload.links&&e.payload.links.next?e.payload.links.next:null})).catch((function(){})).then((function(){t.isLoadingMore=!1,m.redraw()}))},a.title=function(){if(!m.route.param("slug"))return m("h2",null,app.translator.trans("v17development-flarum-blog.forum.recent_posts"));var t=app.store.all("tags").filter((function(t){return t.slug()===m.route.param("slug")}));return m("h2",null,t&&t[0]&&t[0].name(),m("small",null," - ",m("a",{href:app.route("blog"),config:m.route},app.translator.trans("v17development-flarum-blog.forum.return_to_overview"))))},a.view=function(){var t=this;return m("div",{className:"FlarumBlogOverview"},m("div",{className:"container"},m("div",{className:"BlogFeatured"},m("div",{className:"BlogOverviewButtons"},app.forum.attribute("canWriteBlogPosts")&&m(n.a,{className:"Button",onclick:function(){return t.newArticle()},icon:"fas fa-pencil"},app.translator.trans("v17development-flarum-blog.forum.compose.write_article")),null!==this.languages&&this.languages.length>=1&&m(at,{selected:this.currentSelectedLanguage,onclick:function(e){t.currentSelectedLanguage=e,m.route(document.location.pathname,{lang:e}),t.reloadData()}})),this.title(),m("div",{style:{clear:"both"}}),m("div",{className:"BlogFeatured-list"},this.isLoading&&[0,1,2].map((function(){return m("div",{className:"BlogFeatured-list-item BlogFeatured-list-item-ghost"},m("div",{className:"BlogFeatured-list-item-details"},m("h4",null," "),m("div",{className:"data"},m("span",null,m("i",{className:"far fa-wave"})))))})),!this.isLoading&&this.featuredPosts.length>=0&&this.featuredPosts.map((function(e){var a=e.blogMeta()&&e.blogMeta().featuredImage()?"url("+e.blogMeta().featuredImage()+")":null,o=e.tags()?e.tags().filter((function(t){return t.isChild()})):[];return m("a",{href:app.route("blogArticle",{id:e.id()+"-"+e.slug()}),className:"BlogFeatured-list-item FlarumBlog-default-image",style:{backgroundImage:a},config:m.route},m("div",{className:"BlogFeatured-list-item-top"},o[0]&&m("span",null,o[0].name()),e.isSticky()&&m("span",null,m("i",{className:"fas fa-thumbtack"})),(e.blogMeta()&&1==e.blogMeta().isPendingReview()||e.isHidden())&&m("span",null,m("i",{className:"fas fa-eye-slash"})),e.blogMeta()&&1==e.blogMeta().isPendingReview()&&m("span",{title:app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review"),config:tt.bind(t),"data-placement":"bottom"},m("i",{className:"far fa-clock"})," ",app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review_title"))),m("div",{className:"BlogFeatured-list-item-details"},m("h4",null,e.title()),m("div",{className:"data"},m("span",null,m("i",{className:"far fa-clock"})," ",X()(e.createdAt())),m("span",null,m("i",{className:"far fa-user"})," ",e.user()?e.user().displayName():"[Deleted]"),m("span",null,m("i",{className:"far fa-comment"})," ",e.commentCount()))))})))),m("div",{className:"BlogScrubber"},m("div",{className:"BlogList"},this.isLoading&&[!1,!1,!0,!1].map((function(t){return m("div",{className:"BlogList-item BlogList-item-"+(!0===t?"sized":"default")+" BlogList-item-ghost"},m("div",{className:"BlogList-item-photo FlarumBlog-default-image"}),m("div",{className:"BlogList-item-content"},m("h4",null," "),m("p",null," "),m("div",{className:"data"},m("span",null,m("i",{className:"far fa-wave"})))))})),!this.isLoading&&this.posts.length>=1&&this.posts.map((function(e){var a=e.blogMeta()&&e.blogMeta().featuredImage()?"url("+e.blogMeta().featuredImage()+")":null,o=e.blogMeta()&&e.blogMeta().isSized(),s=e.blogMeta()&&e.blogMeta().summary()?e.blogMeta().summary():"";return m("a",{href:app.route("blogArticle",{id:e.id()+"-"+e.slug()}),className:"BlogList-item BlogList-item-"+(o?"sized":"default"),config:m.route},m("div",{className:"BlogList-item-photo FlarumBlog-default-image",style:{backgroundImage:a}}),m("div",{className:"BlogList-item-content"},m("h4",null,e.title(),(e.blogMeta()&&1==e.blogMeta().isPendingReview()||e.isHidden())&&m("i",{className:"fas fa-eye-slash"}),e.blogMeta()&&1==e.blogMeta().isPendingReview()&&m("i",{className:"far fa-clock",title:app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review"),config:tt.bind(t)})),m("p",null,s),m("div",{className:"data"},m("span",null,m("i",{className:"far fa-clock"})," ",X()(e.createdAt())),m("span",null,m("i",{className:"far fa-user"})," ",e.user()?e.user().displayName():"[Deleted]"),m("span",null,m("i",{className:"far fa-comment"})," ",e.commentCount()))))})),!this.isLoading&&this.featuredPosts.length>0&&null===this.hasMore&&m("p",{className:"FlarumBlog-reached-end"},app.translator.trans("v17development-flarum-blog.forum.no_more_posts")),!this.isLoading&&0===this.featuredPosts.length&&0===this.posts.length&&m("p",{className:"FlarumBlog-reached-end"},app.translator.trans("v17development-flarum-blog.forum.category_empty")),!this.isLoading&&null!==this.hasMore&&m("div",{className:"FlarumBlog-reached-load-more"},m(n.a,{className:"Button",onclick:function(){return t.loadMore()},icon:"fas fa-chevron-down",loading:this.isLoadingMore},app.translator.trans("core.forum.discussion_list.load_more_button")))),m("div",{className:"Sidebar"},m(H,null)))))},a.newArticle=function(){var t=new Z({user:app.session.user}),e=[];app.forum.attribute("blogTags").forEach((function(t){var a=app.store.getById("tags",t);a&&0===e.length&&!a.isChild()&&e.push(a)})),t.tags=e,app.composer.load(t),app.composer.show()},e}(r.a),st=a(25),rt=a.n(st),it=a(26),nt=a.n(it),lt=a(5),ut=function(){Object(lt.extend)(rt.a.prototype,"config",(function(){var t=this.currentTag(),e="both"===app.forum.attribute("blogRedirectsEnabled")||"tags_only"===app.forum.attribute("blogRedirectsEnabled");if(t&&e){var a=app.forum.attribute("blogTags");(a.indexOf(t.id())>=0||t.parent()&&a.indexOf(t.parent().id())>=0)&&m.route(app.route("blog"))}})),Object(lt.override)(nt.a.prototype,"show",(function(t,e){if(("both"===app.forum.attribute("blogRedirectsEnabled")||"discussions_only"===app.forum.attribute("blogRedirectsEnabled"))&&e&&e&&e.tags().length>0){var a=app.forum.attribute("blogTags");if(e.tags().filter((function(t){return a.indexOf(t.id())>=0||t.parent()&&a.indexOf(t.parent().id())>=0})).length>0){var o=app.route("blogArticle",{id:e.id()+"-"+e.slug()});return m.route(o,null,!0),null}}return t(e)}))},ct=a(27),mt=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(a.n(ct)()(J.a,{discussion:J.a.hasOne("discussion"),featuredImage:J.a.attribute("featuredImage"),summary:J.a.attribute("summary"),isFeatured:J.a.attribute("isFeatured"),isSized:J.a.attribute("isSized"),isPendingReview:J.a.attribute("isPendingReview")})),pt=a(28),dt=a.n(pt);function gt(){Object(lt.extend)(dt.a.prototype,"view",(function(t){var e=this;if(0==app.forum.attribute("blogHideTags"))return t;var a=app.forum.attribute("blogTags")||[],o=t.children[1].children[1].children[0].children;return t.children[1].children[1].children[0].children=o.map((function(t,o){return a.indexOf(e.tags[o].id())>=0?null:t})),t}))}var ft=function(){var t=app.route.discussion;app.route.discussion=function(e,a){var o=!1;if(("both"===app.forum.attribute("blogRedirectsEnabled")||"discussions_only"===app.forum.attribute("blogRedirectsEnabled"))&&e.tags().length>0){var s=app.forum.attribute("blogTags");e.tags().filter((function(t){return s.indexOf(t.id())>=0||t.parent()&&s.indexOf(t.parent().id())>=0})).length>0&&(o=!0)}if(o){var r=e.slug();return app.route("blogArticle",{id:e.id()+(r.trim()?"-"+r:"")})}return t(e,a)}};function ht(){return(ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t}).apply(this,arguments)}var vt=a(29);app.initializers.add("v17development-flarum-blog",(function(t){t.routes.blog={path:"/blog",component:ot.component()},t.routes.blogCategory={path:"/blog/category/:slug",component:ot.component()},t.routes.blogArticle={path:"/blog/:id",component:W.component()},t.store.models.blogMeta=mt,Q.a.prototype.blogMeta=J.a.hasOne("blogMeta"),ut(),gt(),ft()})),ht(vt.compat,{"v17development/blog/components/BlogItemSidebar":U,"v17development/blog/components/BlogAuthor":G})}]);
//# sourceMappingURL=forum.js.map
import Page from 'flarum/components/Page';
import Button from 'flarum/components/Button';
import CommentPost from 'flarum/components/CommentPost';
import ReplyComposer from 'flarum/components/ReplyComposer';
import PostStream from 'flarum/components/PostStream';
import BlogPostController from '../components/BlogPostController';
import BlogItemSidebar from '../components/BlogItemSidebar/BlogItemSidebar';

export default class BlogItem extends Page {
  init() {
    super.init();

    app.setTitle(app.translator.trans('v17development-flarum-blog.forum.blog'));

    // Send history push
    app.history.push('blogArticle');

    this.bodyClass = 'BlogItemPage';

    this.loading = true;
    this.found = false;
    this.article = null;
    // this.posts = [];

    this.loadBlogItem();
  }

  // Load blog overview
  loadBlogItem() {
    const preloadBlogOverview = app.preloadedApiDocument();

    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.show.bind(this, preloadBlogOverview), 0);
    } else {
      app.store.find('discussions', m.route.param('id').split('-')[0])
        .then(this.show.bind(this))
        .catch(() => {
          m.redraw();
        });
    }

    m.lazyRedraw();
  }

  // Show blog post
  show(article) {
    // Set article data
    this.article = article;

    // Update title
    app.setTitle(`${article.title()} - ${app.translator.trans('v17development-flarum-blog.forum.blog')}`);

    this.loading = false;

    let includedPosts = [];
    if (article.payload && article.payload.included) {
      const articleId = article.id();

      includedPosts = article.payload.included
        .filter(
          (record) =>
            record.type === 'posts' &&
            record.relationships &&
            record.relationships.discussion &&
            record.relationships.discussion.data.id === articleId
        )
        .map((record) => app.store.getById('posts', record.id))
        .sort((a, b) => a.id() - b.id())
        .slice(0, 20);
    }

    this.stream = new PostStream({ discussion: article, includedPosts });
    this.stream.on('positionChanged', this.positionChanged.bind(this));

    m.lazyRedraw();
  }

  view() {
    const blogImage = this.article && this.article.blogMeta() && this.article.blogMeta().featuredImage() ? `url(${this.article.blogMeta().featuredImage()})` : null;
    let articlePost = null;

    if(!this.loading && this.article) {
      articlePost = this.article.firstPost() ? this.article.firstPost() : app.store.getById('posts', this.article.firstPostId());
    }

    return (
      <div className={"FlarumBlogItem"}>
        <div className={"container"}>
          <div className={"FlarumBlog-ToolButtons"}>
            <Button 
              className={"Button"}
              onclick={() => {
                if(app.previous && app.previous.props.routeName === "blog") {
                  app.history.back();
                }else{
                  m.route(app.route("blog"));
                }
              }}
              icon={"fas fa-angle-left"}
              >
              {app.translator.trans('v17development-flarum-blog.forum.return_to_overview')}
            </Button>
          </div>
          <div className={"FlarumBlog-Article"}>
            <div className={"FlarumBlog-Article-Container"}>
              <div className={"FlarumBlog-Article-Content"}>
                <div 
                  className={`FlarumBlog-Article-Image FlarumBlog-default-image ${this.loading ? 'FlarumBlog-Article-GhostImage' : ''}`} 
                  style={{ 
                    backgroundImage: blogImage,
                    opacity: this.article && this.article.isHidden() ? 0.4 : null
                  }}
                  />

                {this.article && app.session.user && (app.session.user.canEdit() || this.article.canRename() || (this.article.posts() && this.article.posts()[0].canEdit())) && (
                  <BlogPostController article={this.article} />
                )}

                {/* Article Categories */}
                <div className={"FlarumBlog-Article-Categories"}>
                  {!this.loading && this.article && this.article.tags() && this.article.tags().map(tag => (
                    <a href={app.route("blogCategory", { slug: tag.slug() })} config={m.route}>{tag.name()}</a>
                  ))}

                  {this.loading && (
                    [0, 1].map(() => (<span className={"FlarumBlog-Article-GhostCategory"}>Category</span>))
                  )}
                </div>
                
                <div className={"FlarumBlog-Article-Post"}>
                  {/* Article name */}
                  <h3 className={this.loading ? 'FlarumBlog-Article-GhostTitle' : null}>
                    {this.article ? this.article.title() : 'Ghost title'} 
                    {this.article && this.article.isHidden() && `(${app.translator.trans('v17development-flarum-blog.forum.hidden')})`}
                  </h3>
                  
                  {this.loading && [0, 1, 2].map(() => (
                    <div>
                      <p className={"FlarumBlog-Article-GhostParagraph"}>&nbsp;</p>
                      <p className={"FlarumBlog-Article-GhostParagraph"}>&nbsp;</p>
                      <p className={"FlarumBlog-Article-GhostParagraph"}>&nbsp;</p>
                      <p>&nbsp;</p>
                    </div>
                  ))}

                  {!this.loading && this.article.blogMeta() && this.article.blogMeta().isPendingReview() == true && (
                    <div className={"Post"}>
                      <blockquote class="uncited" style={{ fontSize: '16px' }}><div><span className={"far fa-clock"} style={{ marginRight: '5px' }} /> {app.translator.trans('v17development-flarum-blog.forum.review_article.pending_review')}</div></blockquote>
                    </div>
                  )}

                  {!this.loading && articlePost && <CommentPost post={articlePost} />}
                </div>
              </div>

              <div className={"FlarumBlog-Article-Comments"}>
                <h4>{app.translator.trans('v17development-flarum-blog.forum.comment_section.comments')} ({this.article ? (this.article.commentCount() - 1) : 0})</h4>
                {/* Locked */}
                {!this.loading && this.article.isLocked && this.article.isLocked() && (
                  <div className={"Post-body"}>
                    <blockquote class="uncited"><div><span className={"far fa-lock"} style={{ marginRight: '5px' }} /> {app.translator.trans('v17development-flarum-blog.forum.comment_section.locked')}</div></blockquote>
                  </div>
                )}

                {!this.loading && this.stream && this.stream.render()}
              </div>
            </div>

            <BlogItemSidebar article={this.article} loading={this.loading} />
          </div>
        </div>
      </div>
    )
  }

  positionChanged(startNumber, endNumber) {
    const article = this.article;

    if (app.session.user && endNumber > (article.lastReadPostNumber() || 0)) {
      article.save({ lastReadPostNumber: endNumber });
      m.redraw();
    }

  }
}
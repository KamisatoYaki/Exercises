function formatDate(date) {
    if (!date) {
        return '';
    }

    const parsedDate = new Date(date);

    return Number.isNaN(parsedDate.getTime())
        ? ''
        : parsedDate.toLocaleString();
}

export default function PostCard({ post }) {
    const authorName = post.user?.name || post.author?.name || post.user_name || 'Anonymous';
    const content = post.message || post.content || '';
    const createdAt = post.created_at || post.createdAt;

    return (
        <article className="post-item">
            <div className="post-item-header">
                <strong>{authorName}</strong>
                {createdAt && (
                    <time dateTime={createdAt}>{formatDate(createdAt)}</time>
                )}
            </div>
            <p className="post-item-message">{content}</p>
        </article>
    );
}

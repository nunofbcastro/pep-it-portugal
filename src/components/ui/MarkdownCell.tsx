import React, { useMemo } from 'react';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

interface MarkdownCellProps {
    content: string;
}

// Configure marked for inline rendering
marked.setOptions({
    breaks: true,
    gfm: true,
});

export const MarkdownCell: React.FC<MarkdownCellProps> = ({ content }) => {
    const htmlContent = useMemo(() => {
        if (!content) return '';

        const contentStr = String(content);

        // Parse markdown to HTML using synchronous parse
        const rawHtml = marked.parse(contentStr, { async: false }) as string;

        // Sanitize HTML to prevent XSS
        const sanitized = DOMPurify.sanitize(rawHtml, {
            ALLOWED_TAGS: ['a', 'strong', 'em', 'code', 'br', 'p'],
            ALLOWED_ATTR: ['href', 'target', 'rel'],
        });

        return sanitized;
    }, [content]);

    return (
        <span
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="markdown-cell prose prose-sm dark:prose-invert max-w-none inline-block"
        />
    );
};

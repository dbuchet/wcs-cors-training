export const getMarkdownTitleAndContent = value => {
    if (!value || value === "") return { };

    const sentences = value.split('\n');
    const firstLine = sentences.shift();
    const title = firstLine.startsWith('# ') ? firstLine.replace('# ', '') : null;
    const content = title ? sentences.join('\n') : [firstLine, ...sentences].join('\n');

    return { title, content };
}

export const getMarkdownUrlTitleContent = value => {
    const parts = value.split('\n');
    const url = parts.shift();
    const { title, content } = getMarkdownTitleAndContent(parts.join('\n'));

    return { url, title, content }
}
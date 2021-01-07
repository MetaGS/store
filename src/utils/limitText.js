export const limitText = (text = '', limit = 50) => {

    if (text?.length > limit) {
        text = text.slice(0, limit) + '...';
    }
    return text || 'No description';
}
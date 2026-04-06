export const getPreview = (text, limit = 120) => {
    if (!text) return "";

    const trimmed = text.slice(0, limit);

    return trimmed.slice(0, trimmed.lastIndexOf(" ")) + "...";
};

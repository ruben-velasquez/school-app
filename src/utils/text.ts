function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function truncateString(text: string, maxLength: number) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength).trim() + "...";
    }
    return text;
}

export {
    capitalizeFirstLetter,
    truncateString
}
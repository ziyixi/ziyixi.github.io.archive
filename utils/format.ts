const LOCALE = 'en-GB'

/**
 * Format a date-ish object to a locale-friendly string
 */
export function formatDate(
    date?: Date | string | number,
    defaultValue = '',
    options: Intl.DateTimeFormatOptions = {}
) {
    if (!date) {
        return defaultValue
    }
    // https://css-tricks.com/how-to-convert-a-date-string-into-a-human-readable-format/
    return new Date(date).toLocaleDateString(LOCALE, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options,
    })
}

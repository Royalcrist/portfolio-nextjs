/**
 * Get API Base URL
 *
 * @param {string} route
 * @returns
 */
export function apiBase(route) {
	return `${process.env.NEXT_PUBLIC_API_BASE}${route}`;
}

/**
 * Show the language name with the first letter capitalized
 *
 * @param {string} curretLocale
 * @param {String} displayLocal
 * @returns {string}
 */
export function displayLocaleName(curretLocale, displayLocal) {
	const locale = new Intl.DisplayNames([curretLocale], { type: 'language' }).of(
		displayLocal,
	);

	return capitalizeFirstLetter(locale);
}

/**
 * Capitalize the first letter of a string
 * @param {String} string
 * @returns {string}
 */
export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

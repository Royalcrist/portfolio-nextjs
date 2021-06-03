export function apiBase(route) {
	return `${process.env.NEXT_PUBLIC_API_BASE}${route}`;
}

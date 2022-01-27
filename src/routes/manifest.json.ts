import { base } from '$app/paths';
export const get = (): { body: unknown } => {
	return {
		body: {
			short_name: 'Mermaid',
			name: 'Mermaid 在线编辑器',
			icons: [
				{
					src: `${base}/icon-192.png`,
					type: 'image/png',
					sizes: '192x192'
				},
				{
					src: `${base}/icon-512.png`,
					type: 'image/png',
					sizes: '512x512'
				}
			],
			start_url: `${base}/edit/`,
			background_color: '#6366F1',
			display: 'standalone',
			scope: `${base}/edit/`,
			theme_color: '#6366F1',
			description: '流程图 和 图表 编辑器.',
			orientation: 'landscape'
		}
	};
};

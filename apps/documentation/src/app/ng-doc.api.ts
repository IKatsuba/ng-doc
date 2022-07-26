import {NgDocApi} from '@ng-doc/builder';

export const api: NgDocApi = {
	title: 'API',
	scopes: [
		{
			name: '@ng-doc/app',
			route: 'app',
			include: 'libs/app/**/*.ts',
		},
		{
			name: '@ng-doc/ui-kit',
			route: 'ui-kit',
			include: 'libs/ui-kit/**/*.ts',
		},
		{
			name: '@ng-doc/core',
			route: 'core',
			include: 'libs/core/**/*.ts',
		},
	],
};

export default api;

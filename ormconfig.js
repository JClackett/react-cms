const env = process.env.NODE_ENV || 'development';

const database = {
	development: {
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: '',
		password: '',
		database: 'react_cms',
		synchronize: true,
		logging: false,
		entities: ['src/entity/**/*.ts'],
		migrations: ['src/migration/**/*.ts'],
		subscribers: ['src/subscriber/**/*.ts'],
		cli: {
			entitiesDir: 'src/entity',
			migrationsDir: 'src/migration',
			subscribersDir: 'src/subscriber',
		},
	},
	production: {
		type: 'postgres',
		url: process.env.DATABASE_URL,
		synchronize: true,
		logging: false,
		entities: ['dist/entity/**/*.js'],
		migrations: ['dist/migration/**/*.js'],
		subscribers: ['dist/subscriber/**/*.js'],
		cli: {
			entitiesDir: 'dist/entity',
			migrationsDir: 'dist/migration',
			subscribersDir: 'dist/subscriber',
		},
	},
};

module.exports = database[env];

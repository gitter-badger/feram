import yargs from 'yargs'
import improveRepo from './improveRepo'

export default (argv) => {
	const options = yargs
		.options({
			'user': {
				demand: true,
				describe: 'Feram acts in behalf of this user',
				type: 'string',
			},
			'password': {
				describe: 'Password for the user',
				type: 'string',
			},
			'dry': {
				describe: 'Do not push ' +
					'and do not create merge request for changes',
				type: 'boolean',
			},
			'submit': {
				describe: 'Push already created local fixes ' +
					'and create merge request for them',
				type: 'boolean',
			},
		})
		.usage('feram <repo-url>')
		.example(
			'feram --dry --user octocat --password 12345',

			'Feram gets a random repo, fixes it on behalf of octocat, ' +
			'but doesn\'t push the changes',
		)
		.example(
			'feram --user octocat --password 12345 github:twbs/bootstrap',

			'Feram gets repo "bootstrap" from user "twbs" on github.com, ' +
			'fixes it on behalf of octocat, commits and pushes the changes ' +
			'and creates a merge request',
		)
		.help()
		.parse(argv)

	improveRepo(options)
}

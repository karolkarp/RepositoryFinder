/* eslint-disable indent */
interface Actions {
	type: string;
	repositoryList: object[];
	selectedRepository: object;
}

const initialState = {
	repositoryList: [],
	selectedRepository: {},
	// selectedRepository: {
	// 	archive_url:
	// 		'https://api.github.com/repos/facebook/react/{archive_format}{/ref}',
	// 	archived: false,
	// 	assignees_url:
	// 		'https://api.github.com/repos/facebook/react/assignees{/user}',
	// 	blobs_url: 'https://api.github.com/repos/facebook/react/git/blobs{/sha}',
	// 	branches_url:
	// 		'https://api.github.com/repos/facebook/react/branches{/branch}',
	// 	clone_url: 'https://github.com/facebook/react.git',
	// 	collaborators_url:
	// 		'https://api.github.com/repos/facebook/react/collaborators{/collaborator}',
	// 	comments_url:
	// 		'https://api.github.com/repos/facebook/react/comments{/number}',
	// 	commits_url: 'https://api.github.com/repos/facebook/react/commits{/sha}',
	// 	compare_url:
	// 		'https://api.github.com/repos/facebook/react/compare/{base}...{head}',
	// 	contents_url:
	// 		'https://api.github.com/repos/facebook/react/contents/{+path}',
	// 	contributors_url:
	// 		'https://api.github.com/repos/facebook/react/contributors',
	// 	created_at: '2013-05-24T16:15:54Z',
	// 	default_branch: 'master',
	// 	deployments_url: 'https://api.github.com/repos/facebook/react/deployments',
	// 	description:
	// 		'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
	// 	disabled: false,
	// 	downloads_url: 'https://api.github.com/repos/facebook/react/downloads',
	// 	events_url: 'https://api.github.com/repos/facebook/react/events',
	// 	fork: false,
	// 	forks: 24983,
	// 	forks_count: 24983,
	// 	forks_url: 'https://api.github.com/repos/facebook/react/forks',
	// 	full_name: 'facebook/react',
	// 	git_commits_url:
	// 		'https://api.github.com/repos/facebook/react/git/commits{/sha}',
	// 	git_refs_url: 'https://api.github.com/repos/facebook/react/git/refs{/sha}',
	// 	git_tags_url: 'https://api.github.com/repos/facebook/react/git/tags{/sha}',
	// 	git_url: 'git://github.com/facebook/react.git',
	// 	has_downloads: true,
	// 	has_issues: true,
	// 	has_pages: true,
	// 	has_projects: true,
	// 	has_wiki: true,
	// 	homepage: 'https://reactjs.org',
	// 	hooks_url: 'https://api.github.com/repos/facebook/react/hooks',
	// 	html_url: 'https://github.com/facebook/react',
	// 	id: 10270250,
	// 	issue_comment_url:
	// 		'https://api.github.com/repos/facebook/react/issues/comments{/number}',
	// 	issue_events_url:
	// 		'https://api.github.com/repos/facebook/react/issues/events{/number}',
	// 	issues_url: 'https://api.github.com/repos/facebook/react/issues{/number}',
	// 	keys_url: 'https://api.github.com/repos/facebook/react/keys{/key_id}',
	// 	labels_url: 'https://api.github.com/repos/facebook/react/labels{/name}',
	// 	language: 'JavaScript',
	// 	languages_url: 'https://api.github.com/repos/facebook/react/languages',
	// 	license: {
	// 		key: 'mit',
	// 		name: 'MIT License',
	// 		node_id: 'MDc6TGljZW5zZTEz',
	// 		spdx_id: 'MIT',
	// 		url: 'https://api.github.com/licenses/mit',
	// 	},
	// 	merges_url: 'https://api.github.com/repos/facebook/react/merges',
	// 	milestones_url:
	// 		'https://api.github.com/repos/facebook/react/milestones{/number}',
	// 	mirror_url: null,
	// 	name: 'react',
	// 	node_id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
	// 	notifications_url:
	// 		'https://api.github.com/repos/facebook/react/notifications{?since,all,participating}',
	// 	open_issues: 810,
	// 	open_issues_count: 810,
	// 	owner: {
	// 		avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
	// 		events_url: 'https://api.github.com/users/facebook/events{/privacy}',
	// 		followers_url: 'https://api.github.com/users/facebook/followers',
	// 		following_url:
	// 			'https://api.github.com/users/facebook/following{/other_user}',
	// 		gists_url: 'https://api.github.com/users/facebook/gists{/gist_id}',
	// 		gravatar_id: '',
	// 		html_url: 'https://github.com/facebook',
	// 		id: 69631,
	// 		login: 'facebook',
	// 		node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5NjMx',
	// 		organizations_url: 'https://api.github.com/users/facebook/orgs',
	// 		received_events_url:
	// 			'https://api.github.com/users/facebook/received_events',
	// 		repos_url: 'https://api.github.com/users/facebook/repos',
	// 		site_admin: false,
	// 		starred_url:
	// 			'https://api.github.com/users/facebook/starred{/owner}{/repo}',
	// 		subscriptions_url: 'https://api.github.com/users/facebook/subscriptions',
	// 		type: 'Organization',
	// 		url: 'https://api.github.com/users/facebook',
	// 	},
	// 	private: false,
	// 	pulls_url: 'https://api.github.com/repos/facebook/react/pulls{/number}',
	// 	pushed_at: '2019-08-09T13:45:37Z',
	// 	releases_url: 'https://api.github.com/repos/facebook/react/releases{/id}',
	// 	score: 156.58002,
	// 	size: 143870,
	// 	ssh_url: 'git@github.com:facebook/react.git',
	// 	stargazers_count: 134124,
	// 	stargazers_url: 'https://api.github.com/repos/facebook/react/stargazers',
	// 	statuses_url: 'https://api.github.com/repos/facebook/react/statuses/{sha}',
	// 	subscribers_url: 'https://api.github.com/repos/facebook/react/subscribers',
	// 	subscription_url:
	// 		'https://api.github.com/repos/facebook/react/subscription',
	// 	svn_url: 'https://github.com/facebook/react',
	// 	tags_url: 'https://api.github.com/repos/facebook/react/tags',
	// 	teams_url: 'https://api.github.com/repos/facebook/react/teams',
	// 	trees_url: 'https://api.github.com/repos/facebook/react/git/trees{/sha}',
	// 	updated_at: '2019-08-09T14:19:02Z',
	// 	url: 'https://api.github.com/repos/facebook/react',
	// 	watchers: 134124,
	// 	watchers_count: 134124,
	// },
};

export const search = (state = initialState, action: Actions): object => {
	switch (action.type) {
		case 'SET_REPOSITORY_LIST':
			return {
				...state,
				repositoryList: action.repositoryList,
			};
		case 'SET_REPOSITORY':
			return {
				...state,
				selectedRepository: action.selectedRepository,
			};
		default:
			return state;
	}
};

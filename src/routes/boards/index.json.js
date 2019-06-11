import boards from './_boards.js';

const contents = JSON.stringify(boards.map(board => {
	return {
		title: board.title,
		slug: board.slug,
		lists: board.lists
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
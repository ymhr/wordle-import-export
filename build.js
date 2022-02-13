const { minify } = require('terser');
const fs = require('fs');

const options = {
	toplevel: true
};

(async () => {
	const index = fs.readFileSync('./index.js');
	const { code } = await minify(index.toString(), options);

	if (code) {
		fs.writeFileSync('./dist/index.js', code);

		const readme = fs.readFileSync('./_readme.template.md');
		fs.writeFileSync('./readme.md', readme.toString().replace('!!BOOKMARKLET!!', code));

		console.log('RESULT', code);
	} else {
		console.error('Failed to generate code');
	}
})()

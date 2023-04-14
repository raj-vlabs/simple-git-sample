import { simpleGit } from 'simple-git';

const git = simpleGit();

const repoUrl = 'https://github.com/raj-vlabs/simple-git-sample.git'
try {
	git.add('./*')
		.commit('uploaded files')
		.addRemote('origin', repoUrl);
   await git.push(repoUrl, 'main');
    console.log("push successful")
} catch (e) {
    console.log("Error::", e)
}
// Dummy comment for pushing
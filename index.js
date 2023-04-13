import { simpleGit } from 'simple-git';

const git = simpleGit();

const repoUrl = 'https://github.com/raj-vlabs/simple-git-sample.git'
try {
   await git.init();
   await git.addRemote('origin', repoUrl);
} catch (e) {
    console.log("Error::", e)
}
sfd-smvdu
=========

Official repository for Software Freedom Day - SMVDU, to be held on 20th September, 2014.

This README file contain all the information you need to start contributing to this repo. If you are still facing any difficulty with the code or setup then simply create an **Issue**. We'll be happy to help.

## Run Locally

Use `git clone` to clone this repo to your local machine:
```
git clone https://github.com/smvdu/sfd-smvdu.git
```
<br>
`cd` into cloned repo:
```
cd sfd-smvdu
```
<br>
Install all the dependencies using `npm install`:
```
sudo npm install
```
<br>
Install all the `bower` packages:
```
bower install
```
<br>
Run the Server using `grunt`:
```
grunt serve
```

## Contribution Guidelines

Fork this repository to your account, using the **Fork** button on the top right corner.

Use `git clone` to clone your forked repo to your local machine:
(replace 'your_username' with appropriate value)
```
git clone https://github.com/your_username/sfd-smvdu.git
```
<br>
`cd` into cloned repo:
```
cd sfd-smvdu
```
<br>
Install all the dependencies using `npm install`:
```
sudo npm install
```
<br>
Install all the `bower` packages:
```
bower install
```
<br>
Run the Server using `grunt`:
```
grunt serve
```
<br>
Set the `upstream` to this repo:

The easiest way is to use the https url:
```
git remote add upstream https://github.com/smvdu/sfd-smvdu.git
```

or if you have ssh set up you can use that url instead:
```
git remote add upstream git@github.com:smvdu/sfd-smvdu.git
```

<br>
Working branch for **sfd-smvdu** will always be the `develop` branch. Hence, all the latest code will always be on the *develop* branch.
You should always create a new branch for any new piece of work branching from *develop* branch:
```
git branch new_branch
```
**NOTE:** You must not mess with `master` branch or bad things will happen.
*master* branch contains the latest stable code, so just leave it be.

Before starting any new piece of work, move to *develop* branch:
```
git checkout develop
```
<br>
Now you can fetch latest changes from main repo using:
```
git fetch upstream
```
<br>
`merge` the latest code with *develop* branch:
```
git merge upstream/develop
```
<br>
`checkout` to your newly created branch:
```
git checkout new_branch
```
<br>
Rebase the code of *new_branch* from the code in *develop* branch, run the `rebase` command from your current branch:
```
git rebase develop
```
Now all your changes on your current branch will be based on the top of the changes in *develop* branch.

Push your changes to your forked repo
```
git push origin new_branch
```
<br>
Now, you can simply send the Pull Request to Parent Repo from within the Github.

Always squash up your commits into a single commit before sending the Pull Request. Use `git rebase -i` for this purpose. For example to squash last 3 commits into a single commit, simply run:
```
git rebase -i HEAD~3
```

####Happy Coding :)
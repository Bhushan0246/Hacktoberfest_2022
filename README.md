# Hacktoberfest_2022

  Hacktober fest is a celebration open to everyone in the global community. It is held from October 1st to October 31st worldwide. It is a great opportunity/platform for people from beginner stage to professional developer to learn more about open source and contribute effectively for the same. It is a month-long global celebration of open source software run by DigitalOcean in partnership with Intel, AppWrite, and DeepSource, with a strong focus on encouraging contributions to open source projects. Hacktoberfest is open to everyone beginer as well as experinced.
  
  
  ### 1. Register yourself for Hacktoberfest
##### Link to register: https://hacktoberfest.com/auth
Authorise with the respective account type and sign in with your GitHub account.

![Screenshot-HFST](https://github.blog/wp-content/uploads/2022/10/hacktoberfestbanner.jpeg?fit=1200%2C630)

	
### 2. Star and Fork this Repository
###### You can star and fork this repository on GitHub by navigating at the top of this repository.
GitHub repository URLs will reference both the username associated with the owner of the repository, as well as the repository name. For example, acmbvp is the owner of the Hacktoberfest repository, so the GitHub URL for this project is:

https://github.com/Bhushan0246/Hacktoberfest_2022

When you’re on the main page of a repository, you’ll see a button to "Star" and “Fork” the repository on the upper right-hand side of the page, underneath your user icon.


### 3. Clone the Repository
We’ll use the `git clone`  command along with the URL that points to your fork of the repository on terminal window.

This URL will be similar to the URL above, except now it will end with `.git.` In the cloud_haiku example above, the URL will look like this:

`https://github.com/your-username/Hacktoberfest_2022.git`

You can alternatively copy the URL by using the green “Clone or download” button from your repository page that you just forked from the original repository page.

	
Once we have the URL, we’re ready to clone the repository. To do this, we’ll combine the git clone command with the repository URL from the command line in a terminal window:

`git clone https://github.com/your-username/Hacktoberfest_2022.git`


### 4. Create a New Branch
To create your branch, from your terminal window, change your directory so that you are working in the directory of the repository. Be sure to use the actual name of the repository (i.e. Hacktoberfest_2022) to switch into that directory.
	
#####  `cd Hacktoberfest_2022`
Now, we’ll create our new branch with the git branch command. Make sure you name it descriptively so that others working on the project understand what you are working on.

##### `git branch new-branch-name`
Now that our new branch is created, we can switch to make sure that we are working on that branch by using the git checkout command:

##### ` git checkout new-branch-name `

Once you enter the git `checkout` command, you will receive the following output:
######  ```Output: Switched to branch 'new-branch-name' ```

#### Make Changes Locally
Once you have modified existing files or added new files to the project, you can add them to your local repository, which you can do with the git add command. Let’s add the -A flag to add all changes that we have made:
	
##### ` git add -A ` or ` git add . `

*The commit message is an important aspect of your code contribution; it helps the other contributors fully understand the change you have made, why you made it, and how significant it is. Additionally, commit messages provide a historical record of the changes for the project at large, helping future contributors along the way.*

###### ` Example: git commit -m "Updated Readme.md" `
	
###### At this point you can use the git push command to push the changes to the current branch of your forked repository:
###### ` Example: git push --set-upstream origin new-branch `


### 5. Update Local Repository

*While working on a project alongside other contributors, it is important for you to keep your local repository up-to-date with the project as you don’t want to make a pull request for code that will cause conflicts. To keep your local copy of the code base updated, you’ll need to sync changes.*
We’ll first go over configuring a remote for the fork, then syncing the fork.


### 6. Configure a Remote for the Fork	
Next up, you’ll have to specify a new remote upstream repository for us to sync with the fork. This will be the original repository that you forked from. you’ll have to do this with the git remote add command.

##### ` git remote add upstream https://github.com/Bhushan0246/Hacktoberfest_2022`


### 7. Sync the Fork
Once you have configured a remote that references the upstream and original repository on GitHub, you are ready to sync your fork of the repository to keep it up-to-date.

To sync your fork, from the directory of your local repository in a terminal window, you’ll have to use the // git fetch // command to fetch the branches along with their respective commits from the upstream repository. Since you used the short name “upstream” to refer to the upstream repository, you’ll have to pass that to the command:

##### ` git fetch upstream `

Switch to the local master branch of our repository:
##### ` git checkout master `

Now merge any changes that were made in the original repository’s master branch, that you will access through your local upstream/master branch, with your local master branch:	
##### ` git merge upstream/master `


### 8. Create Pull Request
At this point, you are ready to make a pull request to the original repository.	At this point, you are ready to make a pull request to the original repository.
Navigate to your forked repository, and press the “New pull request” button on your left-hand side of your Repo page.
	
# Hurray! You just got closer to completing your Hacktoberfest challenge :smiley:
![PR Created](https://i0.wp.com/www.eventstodayz.com/wp-content/uploads/2017/08/congratulations-gif-image-2017.gif?resize=494%2C329)

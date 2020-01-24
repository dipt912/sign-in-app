job('Master branch') {
    scm {
        git('https://github.com/dipt912/sign-in-app.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('Diptesh')
            node / gitConfigEmail('dipt912@gmail.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in 
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        shell("npm install")
    }
}


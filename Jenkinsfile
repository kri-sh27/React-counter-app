pipeline {
    agent any {
         environment {
        NODEJS_VERSION = '18' // Specify the Node.js version you want to install
    }
    }
    // agent {
    //     docker {
    //         image 'node:18'
    //     }
    // }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Clear NPM Cache') {
            steps {
                sh 'npm cache clean -f'
            }
        }

        stage('Fix Workspace Permissions') {
            steps {
                sh 'chmod -R 777 /var/lib/jenkins/workspace/counterapp'
            }
        }


         stages {
        stage('Install Node.js') {
            steps {
                script {
                    def toolName = "NodeJS-${NODEJS_VERSION}" // Define a tool name based on the version
                    def installation = tool name: toolName, type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'

                    // Add the Node.js executable to the PATH
                    withEnv(["PATH+NODEJS=${installation}/bin:${env.PATH}"]) {
                        sh "node --version" // Verify Node.js installation
                    }
                }
            }
        }

        stage('Build') {
            steps {
                // script {
                    // def nodejsInstallation = tool name: 'NodeJS', type: 'NodeJSInstallation'
                    // nodejs(nodejsInstallation) {
                        sh 'npm install'
                        sh 'npm start'
                    // }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}

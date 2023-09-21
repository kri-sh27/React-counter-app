pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

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

        stage('Build') {
            steps {
                script {
                    def nodejsInstallation = tool name: 'NodeJS', type: 'NodeJSInstallation'
                    nodejs(nodejsInstallation) {
                        sh 'npm install'
                        sh 'npm start'
                    }
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

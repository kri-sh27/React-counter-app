pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                script {
                    def nodejsInstallation = tool name: 'NodeJS', type: 'NodeJSInstallation'
                    nodejs(nodeJSInstallation) {
                        sh 'npm install'
                        sh 'npm start'  // Use 'npm start' to run the React app
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

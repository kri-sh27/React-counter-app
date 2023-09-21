pipeline {
    agent {
        docker {
            image 'node:14'  // Specify the Docker image you want to use
            args '-v /var/run/docker.sock:/var/run/docker.sock'  // Mount Docker socket if needed
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm start'  // Use 'npm start' to run the React app
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}

pipeline {
    agent {
        docker {
            image 'node:14'  // Specify the Node.js version you need
            args '-v /var/run/docker.sock:/var/run/docker.sock'
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
                sh 'npm install'   // Use 'npm install' without specifying a path
                sh 'npm start'     // Use 'npm start' to run the React app
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker{
                    image "node:18-alpine"
                    reuseNode true
                } 
            }
            steps {
                sh """
                    echo "this is test and build trigger" 
                    
                    ls -la 
                    node --version
                    npm ci 
                    ls -la
                """
            }
        }
        stage("Approval"){
            steps {
                timeout(time: 1, unit: 'MINUTES') { // timeout 설정
                        input "Approve"     // Approval 설정 
                    }
            }
        }
        stage("Deploy"){
            steps {
                sh 'echo "deploy has been succeed"'
            }
        }
    }
}

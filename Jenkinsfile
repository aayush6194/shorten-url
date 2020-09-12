pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/aayush6194/shorten-url'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
       
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}

# NodeJS Sample App

This is a sample app showing use of liveness and readness probe for kubernetes.

Goals:
1. Define http based probes
2. Implement a basic check
3. Keep probes private


# How to build, test and deploy?

1.  Build docker image
    ```
    export IMAGE_NAME=docker.io/yogendra/node-k8s-app:latest
    docker build -t $IMAGE_NAME app
    ```
2.  Test locally 
    
    a.  In Docker
        
        ```
        docker run --rm -it -p 3000:3000 -p 3001:3001 $IMAGE_NAME
        ```

    b.  In KiND
        
        ```
        kind load docker-image $IMAGE_NAME
        ```
3.  Deploy on kubernetes cluster
    
    *NOTE: Replace `image:` in `k8s/deployment.yaml` with the correct image name*

    ```
    kubectl apply -f k8s/deployment.yaml
    ```


# Kubernetes Cluster Testing

1.  Create kind cluster
    ```
    kind create cluster
    ```

2.  (Optional) Install metrics server (Optional)
    ```
    kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
    ```
3.  Deploy mongodb
    1.  Deploy manifest
        ```
        kubectl apply -f k8s/mongo-express.yaml
        ```
    2.  Create database for the application
        ```
        kubectl 
        ```
4.  Access MongoDB UI
    1.  First open a new terminal and then forward local 5000 port to service port 8080
        ```
        kubectl port-forward service/mongo-express 5000:8080
        ```
    1. Open a browser on http://localhost:5000

5.  Open
3.  Deploy application
    ```
    kubectl apply -f k8s/deployment.yaml
    ```
4.  Monitor pods using krew/tail plugin, octant, kubectl events, etc.



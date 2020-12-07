# NodeJS Sample App

This is a sample app showing use of liveness and readness probe for kubernetes.


# How to build, test and deploy?

1.  Build docker image
    ```
    export IMAGE_NAME=docker.io/yogendra/node-k8s-app:latest
    docker build -t $IMAGE_NAME app
    ```
1.  Test locally 
    
    a.  In Docker
        
        ```
        docker run --rm -it -p 3000:3000 -p 3001:3001 $IMAGE_NAME
        ```

    b.  In KiND
        
        ```
        kind load docker-image $IMAGE_NAME
        ```
1.  Deploy on kubernetes cluster
    
    *NOTE: Replace `image:` in `k8s/deployment.yaml` with the correct image name*

    ```
    kubectl apply -f k8s/deployment.yaml
    ```


# Kubernetes Cluster Testing

1.  Create kind cluster
    ```
    kind create cluster
    ```

1.  (Optional) Install metrics server (Optional)
    ```
    kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
    ```
1.  Load app image into kind cluster. This makes it easy to work locally.
    ```

    ```


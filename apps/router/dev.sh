#!/bin/bash

echo "Waiting for services to be ready..."
echo "Starting router..."
docker-compose -f docker-compose.yml up -d
echo "Router is running. Access it at http://localhost:9080"
echo ""
echo "path: /api/* -> services:4000"
echo "path: /* -> web:3000"
echo ""
echo "To stop the router, run: docker-compose -f docker-compose.yml stop at the router directory."
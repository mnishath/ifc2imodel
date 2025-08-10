# IFC to iModel ETL Web Application

This repository contains the source code for the Milestone 1 deliverable.

## Overview

The application consists of a Vue.js frontend and a Node.js backend. It uses Docker to manage required services like Redis and MinIO.

## Prerequisites

- Node.js (v18.x or later)
- Docker and Docker Compose

## 1. Environment Setup

Before running the application, you must set up your environment variables for the backend.

Navigate to the `backend/` directory. Copy the example environment file:

```sh
cp .env.example .env
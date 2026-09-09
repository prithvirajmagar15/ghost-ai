Ghost AI
Overview

Ghost AI is a real-time collaborative system design workspace. Users describe a system in plain English, an AI agent maps that system onto a shared canvas, collaborators refine the architecture, and the app generates a technical specification from the resulting graph.

Goals

Let authenticated users create and manage architecture projects.

Provide a collaborative real-time canvas for system design.

Let users import prebuilt starter system designs into the canvas.

Let AI generate an initial architecture from a natural language prompt.

Let collaborators refine the generated architecture.

Convert the final graph into a persistent Markdown technical specification.

Core User Flow

User signs in.

User creates or selects a project.

User enters the project workspace.

User optionally imports a starter system design template into the canvas.

User prompts the AI to generate or extend the system design.

AI generates nodes and edges in the shared canvas.

Collaborators edit and refine the design.

User triggers specification generation.

App persists the generated Markdown specification.

User reviews or downloads the specification.

Features
Authentication and Projects

User sign-in and route protection.

Project creation and ownership.

Collaborator access by project.

Project list and workspace navigation.

Collaborative Canvas

Shared real-time canvas using Liveblocks and React Flow.

Live cursors and presence indicators.

Node and edge editing.

Canvas snapshots persisted to the filesystem.

Starter System Designs

Curated library of prebuilt system design templates.

Import starter templates into the canvas at any point during editing.

Templates are loaded directly into the active room.

Covers common architectures including:

Monolith

Microservices

Event-driven

Serverless

Additional common patterns

AI Architecture Generation

AI generates a system design from a user-supplied prompt.

Output is structured as canvas nodes and edges.

Generation runs as a durable background task.

Specification Generation

Converts the current canvas graph into a Markdown technical specification.

Persists generated specifications as project-linked files.

Users can view and download generated specifications.

Scope
In Scope

Authentication and route protection.

Project creation and ownership.

Collaborator access by project.

Starter system design template library and import.

Real-time shared canvas with nodes, edges, and presence.

AI-powered architecture generation from prompts.

AI-powered Markdown specification generation from the canvas graph.

Persistent storage for project metadata and generated artifacts.

Specification download.

Out of Scope

Billing and subscription systems.

Enterprise permission tiers beyond owner and collaborator.

Versioned specification history and review workflows.

Production object storage migration.

Mobile-native applications.

Success Criteria

A signed-in user can create and open a project.

Multiple users can collaborate in the same canvas simultaneously.

A user can import a prebuilt starter design into the canvas.

AI can generate an architecture into the shared room from a prompt.

The graph can be converted into a persisted Markdown specification.

Project metadata and generated artifacts are stored in the correct layers.
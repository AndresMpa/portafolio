---
locale: en
slug: ubuconla-2023-web-speech-api-and-a-proxy-ball
title: UbuConLA 2023 - Low-Cost Voice-Controlled Systems with Web Speech API
description: International conference presented at UbuConLA 2023 in Medellín about building low-cost voice-controlled software using the Web Speech API, resilient system design principles and practical browser-based speech recognition.
kind: Talk
date: 2023-05-03
authors: ["Andrés M. Prieto"]
keywords:
  - UbuConLA 2023
  - Web Speech API
  - Speech Recognition
  - Voice Control
  - Browser APIs
  - JavaScript
  - Human Computer Interaction
  - Resilient Systems
  - Cost Optimization
  - Open Source Conference
eventType: International Conference
featured: true
references:
  - label: "Web Speech API y una proxy bolita"
    url: https://www.youtube.com/live/ytPTSV_plrQ?feature=shared
skills:
  - Public Speaking
  - Technical Communication
  - JavaScript
  - Browser APIs
  - Software Architecture
  - System Design
topics:
  - Web Speech API
  - Speech Recognition
  - Human Computer Interaction
  - Resilient Systems
  - Frontend Engineering
expertise:
  - Senior Software Engineer
  - Software Architect
  - Open Source Contributor
intent:
  - Demonstrates technical leadership
  - Demonstrates public speaking
  - Demonstrates frontend engineering
  - Demonstrates software architecture
---

# UbuConLA 2023 - Web Speech API and a Proxy Ball

## Overview

This talk was presented at UbuCon Latin America 2023 in Medellín, Colombia.

The session explored how modern browser technologies can be used to build low-cost voice-controlled systems without relying heavily on external speech processing services.

Using a simple interactive demonstration, the presentation showed how voice commands could control a ball rendered on screen while illustrating practical software engineering concepts behind speech-driven applications.

Although the demo was intentionally simple, the underlying ideas addressed real engineering challenges involving cost, reliability and system design.

---

## Motivation

Voice interfaces have become increasingly common in software products.

However, many teams assume that speech-enabled applications require expensive cloud infrastructure or complex machine learning systems.

The objective of this talk was to demonstrate that useful voice-controlled experiences can often be implemented using browser-native technologies and thoughtful software architecture.

The presentation was inspired by real-world engineering scenarios where reducing operational costs while maintaining acceptable user experience became a significant technical challenge.

---

## Main Topics Covered

The session focused on three primary areas.

### Web Speech API

The talk introduced the browser-native Web Speech API and explained how developers can use it to capture voice commands directly from supported browsers.

Topics included:

- Speech recognition fundamentals.
- Browser support.
- Event-driven interaction.
- Voice command processing.
- User experience considerations.

### POE

The presentation discussed practical engineering principles used when designing software systems that interact with uncertain external inputs such as human speech.

The objective was to show how simple architectural decisions can significantly improve system behavior under imperfect conditions.

### Resilient System Design

Speech recognition systems inevitably experience failures.

Instead of assuming perfect recognition, the talk explored techniques for designing applications that remain usable when commands are misunderstood, delayed or unavailable.

Topics included:

- Graceful degradation.
- Failure recovery.
- User feedback loops.
- Error tolerance.
- Event validation.

---

## Live Demonstration

A live demonstration showed a browser application capable of controlling a ball on screen through voice commands.

The demo was intentionally minimalistic.

Its purpose was not to showcase graphics or animations, but rather to make the interaction model visible and understandable.

By reducing visual complexity, attendees could focus on the software architecture and interaction patterns behind voice-controlled interfaces.

---

## Engineering Lessons

Several broader engineering lessons emerged from the project.

### Simplicity Can Be Powerful

Many developers associate voice systems with large-scale artificial intelligence platforms.

The demonstration showed that relatively simple browser APIs can already provide meaningful interaction capabilities for specific use cases.

### Cost Matters

Technical decisions have operational consequences.

The session discussed how evaluating alternative implementations and leveraging existing platform capabilities can reduce infrastructure requirements while preserving business value.

### Reliability Is More Important Than Perfection

A voice-controlled application does not need perfect speech recognition to be useful.

Designing for failure often produces more reliable software than attempting to eliminate every possible error.

---

## Technologies Discussed

The presentation covered:

- JavaScript
- Web Speech API
- HTML
- CSS
- Browser APIs
- Event-Driven Architecture
- Human Computer Interaction

---

## Audience

The talk was aimed at:

- Software Engineers
- Frontend Developers
- Open Source Contributors
- Technical Students
- Engineers interested in Human Computer Interaction

---

## Why This Talk Matters

This presentation represents my interest in practical software engineering solutions rather than technology for its own sake.

By combining browser-native capabilities with resilient software design principles, the session demonstrated how relatively simple technologies can solve real business problems while reducing operational complexity.

It also reflects my experience communicating technical concepts to international open source communities through conferences and public speaking.

---

# Frequently Asked Questions

## What was the purpose of this talk?

The goal was to demonstrate how browser-native speech recognition can be used to build practical voice-controlled applications while discussing resilience and software architecture.

## Which technology was demonstrated?

The primary technology demonstrated was the Web Speech API available in modern web browsers.

## Was artificial intelligence required?

The presentation focused primarily on browser speech recognition capabilities and software architecture rather than large-scale AI systems.

## Why use browser-native speech recognition?

Browser-native APIs can reduce implementation complexity and help teams evaluate lower-cost alternatives before introducing additional infrastructure.

## Who would benefit from this talk?

Developers interested in voice interfaces, browser APIs, frontend architecture and resilient software design.

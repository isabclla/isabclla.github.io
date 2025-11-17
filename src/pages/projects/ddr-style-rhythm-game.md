---
layout: ../../components/ProjectLayout.astro
title: "DDR-Style Rhythm Game on FPGA (Planned)"
slug: "ddr-style-rhythm-game"
role: "Designer and Developer"
summary: "A simplified DDR-inspired rhythm game implemented in Verilog on the Nexys A7 FPGA board."
status: "Planned"
---

## Description
A simplified rhythm game inspired by Dance Dance Revolution, to be implemented in Verilog on the Nexys A7 Artix-7 board. The game will use VGA output to display four note lanes and a hit line, pushbuttons for input, and simple audio feedback through PWM. Players will earn points by pressing the correct button as the falling note reaches the hit line.

## My Role
I will integrate VGA timing and synchronization modules (based on reference Pong code provided in class) and design Verilog modules for note generation, movement, scoring, and feedback. I’ll also implement clock division and timing logic to sync note speed with the beat, integrate existing audio PWM for sound effects, and test display and input timing.

## Problem Statement
The goal is to create a real-time, interactive rhythm game built entirely in hardware description language, demonstrating use of the Nexys A7’s VGA display and audio features while responding accurately to user input.

## Process / Methodology (Planned)
I will sketch lane layouts and timing diagrams for falling notes, reuse existing VGA modules for display control and develop new ones for note movement and scoring feedback, create a timing system to control the note speed and store note data, implement a forgiving scoring window so players can still earn points with near-perfect timing, adapt the existing music player module to play beats and hit sounds, and test the game by running behavioral simulations in Vivado and verifying that the display is correct.


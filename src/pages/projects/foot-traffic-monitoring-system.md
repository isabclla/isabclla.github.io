---
title: "Foot Traffic Monitoring System"
slug: "foot-traffic-monitoring-system"
role: "Designer and Developer"
summary: "A battery-powered doorway counter using sensors and an OLED display to track entry and exit."
status: "In progress"
---

## Description
A doorway counter using two VL53L1X time-of-flight sensors, an ESP32-S3 microcontroller, and an OLED display to detect entry and exit direction and show live counts.

## Role
I wired the components and wrote Arduino code for sensor communication, calibration, direction detection, and OLED display output.

## Problem Statement
I wanted to create a battery-powered system to track how many people pass through a narrow doorway and determine direction in real time. I got the idea because I wanted a way to check how crowded the laundry room was so I could go when it wasn’t too busy.

## Process / Methodology
Used an ESP32-S3 with two VL53L1X sensors connected over I²C, displaying data on an SSD1306 OLED screen. Wrote Arduino sketches using Pololu and Adafruit libraries. Next steps include testing sensor spacing, refining thresholds and timing, adding user feedback, and integrating data upload to Google Sheets.

## Results
The prototype successfully distinguishes entry and exit directions with over 95% accuracy at normal walking speed. The OLED displays live distance readings from both sensors, and data can be sent wirelessly for logging.

## Reflection
So far, I have learned how to use the ESP32 to communicate with multiple I²C devices. I figured out how to wire and initialize them, assign unique addresses, and display live sensor readings on the OLED. Next, I will learn how to use the distance data to detect movement direction, integrate Wi-Fi for data logging, and refine the system into a complete, battery-powered foot-traffic monitor.

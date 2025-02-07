---
title: How to save your Terminal Command History
date: 2025-02-07
slug: how-to-save-your-terminal-command-history
categories: [Web Dev]
tags: [Terminal, Coding, Utilities, Dev Ops]
---

## The Problem

Maybe like me, you work on lots of remote, terminal-only servers setting up stupid stuff like Plex, Jenkins, Godot Packaging, game servers, etc.

If you do this, you probably spend hours testing terminal commands trying to find the exact commands to configure your device properly. If your server ever went down, all that work would be lost forever.

Luckily, that command history is available on the device itself (up-arrow shows previous commands), but it doesn’t really help you if that VM is deleted and lost forever, or if you want to show somebody else the many steps it took to do something complicated. Copying commands one at a time is a non-starter too.

## The Solution

Enter the bash history command. I like to use this command after I finish a project to keep track of what crazy terminal wizardry I had to do to accomplish the configuration.

History allows you to see your last 1000 commands entered. From there, just copy and paste them to a text file, if you’re sshed:

```bash
$: history;
```

With that command, it will list each command in sequential order. Be wary of sensitive data you may have typed in as args, but your sudo password will be excluded.

If you’re physically using the machine in question, I like to back-up the history to a usb file, then store it properly in my main project folder:

```bash
$: cp ~/.bash_history /media/usb/foobar/all_history
```

You can also use the following command to re-run a sequential batch of commands from your history. The following will use your elevated perms on commands 1, 2, and 3 in order from your history list:

```bash
$: sudo fc 1 3
```

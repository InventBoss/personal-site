---
tags: post
title: UIs, Tilting, and Skyboxes Oh My!
date: git Created
readtime: 3
layout: post.njk
---

It's been QUITE a while. But now, I've been out of school for a couple of weeks, had a chance to relax (play Kerbal Space Program, Forza Horizon 6, etc), and gotten a few things done with the game. 

So, what have I done so far? First, I managed to add a skybox. It took far too long because I was using the wrong shader from Raylib's example, but I've finally gotten it implemented. [Here's the link](https://www.raylib.com/examples/models/loader.html?name=models_skybox_rendering) to the example used, although it's in C and not Odin, and there is a bunch of code relating to making an HDR cubemap which is completely unnecessary.

![Similar to the previous scenes of Maxwell spinning, but with a beautiful sunset for a skybox.](/assets/skybox_demo_2026_7_25.gif)

Another feature I've added is a small, Quake-like, camera tilt effect when moving side-to-side. For what I hope this game will become, it's a strange feature to add, but it gives a lot more life to the camera controller and feels great to use.

![Beautiful Quake-esque tilting of the camera as the player moves side-to-side.](/assets/tilting_demo_2026_7_25.gif)

Finally, I've replaced the simple FPS counter in the corner with a full debug menu and better keybinds for controlling different options e.g. toggling fullscreen, adjusting acceleration and max speed values, and even changing shader values. Right now UI positions are hardcoded and the font size is only really appropriate for my laptop screen's DPI, but it looks great and provides a good proof-of-concept.

![A nice looking debug menu that has fullscreen and shader toggles, player max speed, acceleration, and deceleration values, shader adjustment options, and basic stats like window dimension and fps.](/assets/debug_menu_first_look_2026_7_25.png)

Those are all the cool features I've been working on, but tomorrow another post should come out. For a long time, I've been thinking about what this game could look like. I have the nice shaders, the decent movement, and the ability to load 3D models, but game features alone do not make a full game. Tomorrow, I'll talk about what I hope to achieve for this game and reveal another feature I've been working on that some of the debug menu sliders control.

*Peek at a Feature I'm working on.*

![A dithered, pixelated sunset of the cubemap previously mentioned.](/assets/pixel_shader_sunset_2026_7_25.png)

---
tags: post
title: Senior Year has Been Busy
date: git Created
readtime: 3
layout: post.njk
---

I've been gone a while eh? Unfortunately, there hasn't been much development on my game, or anything really relating to my hobby. Senior year has kept me busy, forcing me to mainly focus on that. But there isn't a lack of development, just not a ton to show. I won't be showing much source code, but what have I been doing?

### The Game

I've done a bit of work on various skills I'll need to learn. First, I added a posterization fragment shader to make everything look a *little* bit worse :)

![Maxwell still spinning, but all the colors have been reduced to the point where it's mostly red.](/assets/evil_maxwell_spin_2025_9_3.gif)

Next, I added a first person camera. Simple in principle, but raylib's custom camera doesn't have parameters for rotation along multiple axes, only a target parameter for the camera to face. So, I had to use this mess of math to get it to work:

```odin
camera_theta -= f32(rl.GetMouseDelta().x) * 0.006
camera_phi -= f32(rl.GetMouseDelta().y) * 0.006

// Make sure the camera doesn't loop around by preventing
// looking up past a certain amount.
camera_phi = la.clamp(camera_phi, -max_phi, max_phi)

camera.target.x = player.pos.x + (la.cos(camera_phi) * la.sin(camera_theta))
camera.target.z = player.pos.z + (la.cos(camera_phi) * la.cos(camera_theta))
camera.target.y = player.pos.y + (la.sin(camera_phi))
```

This worked well, and I got a working camera controller! The movement keys don't line up with the direction the camera is facing, but that's future work.

![First person view of Maxwell spinning.](/assets/fps_maxwell_spin_2025_9_3.gif)

And that's all the work I've done with the game, but this is not my only passion in life. I also have the homelab!

### The Homelab

I haven't talked about my homelab whatsoever on this site, but what better time to talk about it than when my game has made little progress!

My homelab is a small, reused [Framework 13 motherboard](https://frame.work/products/mainboard-12th-gen-intel-core?v=FRANGACP06), but it originally just had a 1TB ssd for storage. Nothing else. This was definitely not going to work in the long term, considering that I run an [Immich](https://immich.app/) instance for all my videos and photos I take, and a [Syncthing](https://syncthing.net/) instance to share all my music files between my devices, amongst other services. Luckily, the solution for this problem is pretty simple: **get more storage**.

Looking at all my solutions, I ended up with a Terramaster dual bay enclosure, as it had hardware RAID and a good price, and 2 Ironwolf Pro 14TB drives, as they were a decent price for the storage.

![Image of the enclosure with the drives sticking out](/assets/enclosure_2025_9_3.jpg)

Running these drives in RAID 1 for parity, I now had all the storage that I'll need to worry about for the foreseeable future!

Other than that, my school now bans phones, but I still want to receive notifications, so I'm planning on using a flipper zero with a wifi developer board and a custom app to fetch whatever notifications or events I'll need to look at. I'll try my best to work on the game, as the point of this site was to motivate myself, but school has been taking up a lot of time and I can't make promises :(

Thanks for reading! Not deep technical dive into any game development or anything, but I hope you enjoyed it.

---
tags: post
title: Importing 3D Models
date: git Created
readtime: 2
layout: post.njk
---

I've been busy with my job, but I haven't been idle with game dev. With a little bit of doc referencing/stealing, I now present *[Spinning Maxwell](https://www.youtube.com/watch?v=YRvOePz2OqQ)*:

![Maxwell spinning like the goober he is](/assets/maxwell_spin_2025_7_23.gif)

Suprisingly difficult considering I tried 2 model formats before `.gltf` finally did the trick (also took embarrasingly long to figure out how to type the path, but I got it eventually).

```odin
maxwell_model := rl.LoadModel("./src/assets/source/maxwell.gltf")
```

Another strange problem is that when you draw the model, you can specify a transform (effectively its location), but you can't specify rotations along multiple axes.

```odin
rl.DrawModel(
    maxwell_model,
    {maxwell_pos.x, maxwell_pos.y, maxwell_pos.z},
    1.0, // Scale
    rl.WHITE // Tint (Just set it white and the texture looks fine)
)
```

To solve this, you have to specify the rotation not in the draw function, but in the model's rotation. This seems weird to me, as reusing that model for multiple entities would give them all the same rotation—unless you change the model rotation right before drawing each entity. But alas, this is the solution I came to:

```odin
t := f32(rl.GetTime())
rot := [3]f32 {
	la.tan(t) * la.sin(t) * 1,
	la.tan(t) * la.sin(t) * 1,
	la.tan(t) * la.sin(t) * 1,
} // Used this rotation because it's very "visual"

translation := rl.MatrixTranslate(
    maxwell_pos.x,
    maxwell_pos.y,
    maxwell_pos.z
)
rotation := rl.MatrixRotateXYZ({rot.x, rot.y, rot.z})
scale := rl.MatrixScale(1, 1, 1)
maxwell_model.transform = translation * rotation * scale

rl.DrawModel(
    maxwell_model,
    {maxwell_pos.x, maxwell_pos.y, maxwell_pos.z},
    1.0, // Scale
    rl.WHITE // Tint (Just set it white and the texture looks fine)
)
```


Despite some weirdness, Odin+Raylib has been treating me well. Its simple but functional nature has been a joy to program in, and I'm mostly just chugging along, learning new skills (like 3D models), and steadily learning game dev.

As for releasing this code on Github, I'm going to wait until I begin to work on the game, as right now I'm mostly exploring different aspects of Raylib, but don't worry! Any game that I'm currently making will be open source, since this project is for fun, not money.

Anyway, thanks for reading. This blog has been a shorter one, but I hope you enjoyed it, and here is the code I used to rebirth Maxwell into Odin+Raylib:

```odin
package game

import la "core:math/linalg"
import rl "vendor:raylib"

main :: proc() {
	rl.SetConfigFlags({.WINDOW_RESIZABLE, .WINDOW_TRANSPARENT})
	rl.InitWindow(1280, 720, "My Odin + Raylib game")
	maxwell_model := rl.LoadModel("./src/assets/source/maxwell.gltf")

	maxwell_pos: [3]f32 = {0.0, 10.0, 0.0}

	for !rl.WindowShouldClose() {
		input: [3]f32

		if rl.IsKeyDown(.UP) {
			input.z += 1
		}
		if rl.IsKeyDown(.DOWN) {
			input.z -= 1
		}
		if rl.IsKeyDown(.LEFT) {
			input.x -= 1
		}
		if rl.IsKeyDown(.RIGHT) {
			input.x += 1
		}
		if rl.IsKeyPressed(.SPACE) {
			rl.ToggleFullscreen()
		}

		maxwell_pos += la.normalize0(input) * 5 * rl.GetFrameTime()

		rl.BeginDrawing()
		rl.ClearBackground({160, 200, 255, 255})
		cam := rl.Camera3D {
			position   = {50.0, 50.0, 50.0},
			target     = {0, 10, 0},
			up         = {0, 1, 0},
			fovy       = 45,
			projection = .PERSPECTIVE,
		}
		rl.BeginMode3D(cam)
		t := f32(rl.GetTime())
		rot := [3]f32 {
			la.tan(t) * la.sin(t) * 1,
			la.tan(t) * la.sin(t) * 1,
			la.tan(t) * la.sin(t) * 1,
		} // Used this rotation because it's very "visual"

		translation := rl.MatrixTranslate(maxwell_pos.x, maxwell_pos.y, maxwell_pos.z)
		rotation := rl.MatrixRotateXYZ({rot.x, rot.y, rot.z})
		scale := rl.MatrixScale(1, 1, 1)
		maxwell_model.transform = translation * rotation * scale

		rl.DrawModel(
			maxwell_model,
			{maxwell_pos.x, maxwell_pos.y, maxwell_pos.z},
			1.0, // Scale
			rl.WHITE, // Tint (Just set it white and the texture looks fine)
		)
		rl.DrawGrid(20, 10.0)
		rl.EndMode3D()
		rl.EndDrawing()
		free_all(context.temp_allocator)
	}

	rl.CloseWindow()
}
```

#### [Model Link](https://sketchfab.com/3d-models/maxwell-the-cat-dingus-2ca7f3c1957847d6a145fc35de9046b0)

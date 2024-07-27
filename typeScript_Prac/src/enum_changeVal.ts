enum Directions {
    up = 1,
    down, // becomes 2 by default
    left, // becomes 3
    right // becomes 4
}

function doSomethingg(keyPressed: Directions) {
	// do something.
}

doSomethingg(Directions.down)
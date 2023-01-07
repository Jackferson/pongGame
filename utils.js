function lerp(A, B, t) {
  return A + (B - A) * t;
}

function getIntersection(A, B, C, D) {
  const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
  const uTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
  const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

  if (bottom != 0) {
    const t = tTop / bottom;
    const u = uTop / bottom;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
      return {
        x: lerp(A.x, B.x, t),
        y: lerp(A.y, B.y, t),
      };
    }
  }
  return null;
}

function doesIntersect(element1, element2) {
  for (let i = 0; i < element1.length; i++) {
    for (let j = 0; j < element2.length - 1; j++) {
      const hit = getIntersection(
        element1[i],
        element1[(i + 1) % element1.length],
        element2[j],
        element2[(j + 1) % element2.length]
      );
      if (hit) {
        return true;
      }
    }
  }
}

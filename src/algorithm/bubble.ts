export function isBigger(arr, i, cb) {
  const isBigger = arr[i] > arr[i + 1];

  if (isBigger) cb(arr, i);

  return isBigger;
}

export function swap(arr, i) {
  const temp = arr[i];
  const next = i + 1;

  arr[i] = arr[next];
  arr[next] = temp;
}

export function move(array, i = 0, changes = 0, speed = 250) {
  const change = isBigger(array, i, swap);

  change && changes++;

  if (array[i + 1])
    setTimeout(_ => move(array, i + 1, changes, speed), change ? speed : 0);

  else if (changes) move(array, 0, 0, speed);
}

export default function sort(array, speed) {
  move(array, 0, 0, speed);
}

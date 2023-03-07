export function humanFileSize(size: number) {
  var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "kB", "MB", "GB", "TB"][i]
  );
}

export function sortStringComparator(a: string, b: string) {
  return a?.localeCompare(b);
}

export function sortNumberComparator(a: number, b: number) {
  return a - b;
}

export function sortDateComparator(a: Date, b: Date) {
  return a.getTime() - b.getTime();
}

function cs(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default cs;
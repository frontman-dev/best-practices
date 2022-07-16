declare module '*.css' {
  interface IClasses {
    [className: string]: string;
  }
  const classes: IClasses;
  export = classes;
}
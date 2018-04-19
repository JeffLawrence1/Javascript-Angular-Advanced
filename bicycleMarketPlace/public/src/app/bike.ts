export class Bike {
    constructor(
      public title: string = "",
      public description: string = "",
      public price: number = 0,
      public location: string = "",
      public image: string = "",
      public user: object = {},
    ){
    }
  }
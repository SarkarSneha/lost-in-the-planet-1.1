class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder","Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.myStory = createElement('h1')


  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.myStory.hide()
  }

  display() {
    this.title.html("Welcome To The Game of -LOST IN THE PLANET");
    this.title.position(50, 0);
    this.title.style('color',"black")

    this.input.position(displayWidth - 200, 100);
    this.input.style('background-color',"pink")
    this.button.position(displayWidth - 150, 150);
this.button.style('background-color',"lightgreen")
    var Txt = "You are an astronaut and you are working for Space Agency. "
    Txt = Txt + "You and your 4 co-astronauts boarded on a space ship to  MARS but on the "
    Txt = Txt + "way due to technical glitch the space ship landed on an unknown planet. "
    Txt = Txt + "They stepped out of the spaceship and went to explore the unknown planet. "
    Txt = Txt + "and they lost their way to the space ship. Now they are trying to be first to reach their "
    Txt = Txt + "way back to the spaceship.And to be the only one to fly back to earth. But Beware...!!! as the planet is full of "
    Txt = Txt + "deep holes scattered throughout the planet." + "<br/> <br/>" + "BEST  OF  LUCK....!!!!!!!"



    this.myStory.html(Txt)
    this.myStory.position(200, 200)
    this.myStory.style('color',"white")



    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      astronaut.name = this.input.value();
      astronautCount += 1;
      astronaut.index = astronautCount;
      astronaut.update();
      astronaut.updateCount(astronautCount);
      this.greeting.html("Hello! " + astronaut.name)
      this.greeting.position(displayWidth / 2 - 600, displayHeight / 6);
    });

  }
}
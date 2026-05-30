// ES6 Class vs Prototype Inheritance
class Developer {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
  }

  introduce() {
    return `Hi, I am ${this.name} specializing in ${this.stack.join(', ')}.`;
  }
}

class FullStackDev extends Developer {
  constructor(name, stack, database) {
    super(name, stack);
    this.database = database;
  }

  getDBInfo() {
    return `${this.name} works with ${this.database}`;
  }
}

const dev = new FullStackDev('Tanya', ['React', 'Node.js', 'Express'], 'MySQL');
console.log(dev.introduce());


<!-- Updated: 2026-05-30T15:30:33+05:30 [Commit #77] -->

// data是对象
function objProperty() {
  const config = {
    data: {
      name: "foo",
    },
  };

  class VM {
    constructor(config) {
      this.data = config.data;
    }
  }

  const vm1 = new VM(config);
  const vm2 = new VM(config);
  vm1.data.name = "bar";

  console.log(vm1.data); // {name : bar}
  console.log(vm2.data);  // {name : bar}
}


// data是函数
function funcProperty() {
  const config = {
    data() {
      return { name: "foo" };
    },
  };
  class VM {
    constructor(config) {
      this.data = config.data();
    }
  }

  const vm1 = new VM(config); 
  const vm2 = new VM(config);
  vm1.data.name = "bar";

  console.log(vm1.data); // {name : bar}
  console.log(vm2.data); // {name : foo}
}

function Stack() {
  this.items = []
  this.push = function (element) {
    this.items.push(element)
  }
  this.pop = function () {
    return this.items.pop()
  }
  this.get = function () {
    console.log(this.items)
  }
}

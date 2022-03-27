const store = new class Store extends Map<string, any> {
  save(key: string, data: any) {
    this.set(key, data)
  }
  get(key: string) {
    if (!this.has(key)) {
      return {data: null}
    } else {
      return {data: this.has(key)}
    }
  }
}

export default store;
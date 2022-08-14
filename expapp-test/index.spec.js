const request = require("supertest");
const app = require("./index");

describe("Test todo methods", () => {
  it("Returns all todos", (done) => {
    request(app)
      .get("/todo")
      .expect(200)
      .then((res) => {
        expect(res.body.length).toBe(3);
        done();
      });
  });

  it(`Returns a todo with id:${2}`, done => {
    request(app)
    .get("/todo/2")
    .expect(200)
    .then((res) => {
      expect(res.body.name).toBe("Get pizza for dinner");
      done();
    });
  });
});

describe("Test responses from querying an external API", () => {
  it("should retrieve a random Chunk Norris Joke", done => {
    request(app).get("/joke").then(res => {
      let joke = JSON.parse(res.text);
      expect(joke.value).toBeTruthy();
      done();
    });
  });

  it("No 2 Chuck Norris jokes will be the same", done => {
    // let joke1 = await request(app).get("/joke");
    // let joke2 = await request(app).get("/joke");
    // let j1 = JSON.parse(joke1.text);
    // let j2 = JSON.parse(joke2.text);
    // expect((j1.value === j2.value)).toBeFalsy();
    // done();
    let promise1 = request(app).get("/joke");
    let promise2 = request(app).get("/joke");
    Promise.all([promise1, promise2]).then(res => {
      expect((JSON.parse(res[0].text).value === JSON.parse(res[1].text).value )).toBeFalsy();
      done();
    })
  })
});

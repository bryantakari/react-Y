import { createServer, Model, Factory, Response } from "miragejs"
import { jwtDecode } from "jwt-decode" // optional if you want to test decode
// import jwt from "jsonwebtoken" // if you install jsonwebtoken in dev

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      transaction: Model,
    },

    factories: {
      transaction: Factory.extend({
        id(i: number) { return i + 1 },
        name(i: number) { return `Transaction #${i + 1}` },
        price() { return Math.floor(Math.random() * 100_00) / 100 },
        createdAt() { return new Date().toISOString() },
      }),
    },

    seeds(server) {
      server.createList("transaction", 10)
    },

    routes() {
      this.namespace = "api"       // -> /api/...

      this.get("/transactions", (schema) => {
        return schema.all("transaction")
      })

      this.get("/transactions/:id", (schema, request) => {
        let id = request.params.id
        let record = schema.find("transaction", id)
        if (!record) return new Response(404, {}, { message: "Not found" })
        return record
      })

      this.post("/transactions", (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        return schema.create("transaction", attrs)
      })

      this.post("/login", (_, request) => {
        const attrs = JSON.parse(request.requestBody)

        // In real life you’d validate the user here
        const user = { id: 1, username: attrs.username }

        // Create a mock token (option 1: static string)
        // const token = "fake-jwt-token.1234567890.abcdefg"

        // Create a mock token (option 2: sign with jsonwebtoken)
        const token = "well123123"

        return {
          token,
          user,
        }
      })

      // Let real network calls through (e.g., analytics, auth)
      this.passthrough("https://analytics.example.com/**")
    },
  })
}
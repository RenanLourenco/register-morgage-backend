const server = Bun.serve({
  port: process.env.PORT,
  hostname: "localhost",
  routes: {
    "/": () => {
      return new Response("Hello World");
    },
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Server is running on ${server.url}`);
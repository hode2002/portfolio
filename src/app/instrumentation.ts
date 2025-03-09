export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("Registering instrumentation hooks for server-side monitoring")

    // In a real app, you would set up monitoring here
    // For example, with a service like New Relic, Datadog, etc.
  }
}

